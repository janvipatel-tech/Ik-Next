"use client";

import { useEffect } from "react";
import $ from "jquery";

/**
 * Centralised jQuery-powered interactions for the whole page:
 *  - sticky header shadow on scroll
 *  - mobile nav toggle
 *  - smooth anchor scrolling
 *  - scroll-reveal (.reveal -> .is-visible)
 *  - FAQ / learning-path accordions ([data-accordion])
 *  - animated stat counters ([data-count])
 */
export default function Interactions() {
  useEffect(() => {
    // --- sticky header shadow ---
    const $header = $("#site-header");
    const onScroll = () => {
      if (window.scrollY > 8) $header.addClass("is-stuck");
      else $header.removeClass("is-stuck");
    };
    $(window).on("scroll", onScroll);
    onScroll();

    // --- mobile nav toggle ---
    $(document).on("click", "[data-nav-toggle]", function () {
      $("#mobile-nav").slideToggle(200);
      $(this).toggleClass("is-open");
    });
    $(document).on("click", "#mobile-nav a", function () {
      $("#mobile-nav").slideUp(200);
      $("[data-nav-toggle]").removeClass("is-open");
    });

    // --- smooth anchor scrolling ---
    $(document).on("click", 'a[href^="#"]', function (e) {
      const target = $(this).attr("href");
      if (target.length > 1 && $(target).length) {
        e.preventDefault();
        $("html, body").animate(
          { scrollTop: $(target).offset().top - 80 },
          500
        );
      }
    });

    // --- accordions ---
    $(document).on("click", "[data-accordion] > button", function () {
      const $item = $(this).parent();
      const $panel = $item.find("[data-panel]");
      $item.toggleClass("is-open");
      $panel.slideToggle(220);
    });

    // --- scroll reveal ---
    const reveal = () => {
      $(".reveal").each(function () {
        const top = $(this).offset().top;
        if (top < window.scrollY + window.innerHeight - 80) {
          $(this).addClass("is-visible");
        }
      });
    };
    $(window).on("scroll", reveal);
    reveal();

    // --- animated counters ---
    let counted = false;
    const runCounters = () => {
      if (counted) return;
      const $stats = $("#stats");
      if (!$stats.length) return;
      if ($stats.offset().top < window.scrollY + window.innerHeight - 40) {
        counted = true;
        $("[data-count]").each(function () {
          const $el = $(this);
          const target = parseFloat($el.attr("data-count"));
          const suffix = $el.attr("data-suffix") || "";
          const prefix = $el.attr("data-prefix") || "";
          const decimals = (target % 1 !== 0) ? 1 : 0;
          $({ val: 0 }).animate(
            { val: target },
            {
              duration: 1400,
              easing: "swing",
              step: function () {
                $el.text(prefix + this.val.toFixed(decimals) + suffix);
              },
              complete: function () {
                $el.text(prefix + target.toFixed(decimals) + suffix);
              },
            }
          );
        });
      }
    };
    $(window).on("scroll", runCounters);
    runCounters();

    return () => {
      $(window).off("scroll", onScroll);
      $(window).off("scroll", reveal);
      $(window).off("scroll", runCounters);
      $(document).off("click");
    };
  }, []);

  return null;
}
