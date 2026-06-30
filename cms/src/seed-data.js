"use strict";

// Sample "talent-500" page. Mirrors the reference event landing page so the
// frontend renders fully on first boot. Duplicate this in the admin (or via
// the API) to create more pages with the same template.
module.exports = {
  title: "Talent500 × IK — AI/ML & Interview Webinar",
  slug: "15apr-talent500",
  template: "talent-500",
  seo: {
    metaTitle: "Become a Top 1% Tech Professional in 2026 | IK × Talent500",
    metaDescription:
      "Free live webinar: master real AI/ML skills and MAANG+ interview strategy with Interview Kickstart and Talent500. Reserve your free spot.",
    keywords: "AI skills, MAANG interview prep, tech webinar, Talent500, Interview Kickstart",
    canonicalURL: "https://example.com/15apr-talent500",
  },
  hero: {
    badge: "Free Live Webinar · IK × Talent500",
    heading:
      "Become a Top 1% Tech Professional in 2026 with AI/ML Skills & Interview Readiness",
    subheading:
      "Join Interview Kickstart and Talent500 for a high-impact session on building real AI fluency and cracking MAANG+ interviews.",
    primaryCtaLabel: "Reserve Your Free Spot",
    primaryCtaUrl: "#register",
    secondaryCtaLabel: "View Agenda",
    secondaryCtaUrl: "#register",
    events: [
      { label: "April 19th", time: "11 AM IST" },
      { label: "April 15th", time: "7:00–8:00 PM IST" },
    ],
    design: { theme: "brand", accentColor: "#5b34ea", align: "center", paddingY: "lg" },
  },
  whyAttend: {
    eyebrow: "Why Attend",
    heading: "What you'll walk away with",
    items: [
      { icon: "🤖", title: "Reimagining Hiring with AI", description: "See how AI is genuinely being integrated into modern hiring — not just hype." },
      { icon: "🎯", title: "Interview Strategy Mastery", description: "Fix the inconsistent approaches that hold strong engineers back." },
      { icon: "🗺️", title: "Actionable Career Roadmapping", description: "Leave with concrete, practical next steps for your goals." },
      { icon: "📈", title: "2026 Industry Insights", description: "Understand what top companies are prioritising right now." },
    ],
    design: { theme: "light", align: "center", paddingY: "lg", accentColor: "#5b34ea" },
  },
  instructor: {
    eyebrow: "Your Host",
    name: "Swati Pandey",
    title: "Senior Leader, Technical Programs (AI Career & MAANG+ Interview Strategy Expert)",
    bio: "Swati builds role-specific AI upskilling roadmaps for tech professionals, aligned to 2026 hiring — all compatible with full-time employment.",
    highlights: [
      { text: "Builds AI-aligned roadmaps for 2026 hiring" },
      { text: "Expert in MAANG+ interview strategy: coding, system design & AI-first thinking" },
      { text: "Creates role-specific upskilling plans that fit around a full-time job" },
    ],
    design: { theme: "muted", align: "left", paddingY: "lg", accentColor: "#5b34ea" },
  },
  credibility: {
    heading:
      "From the team behind USA's #1 tech interview prep — now powering India's AI upskilling",
    logos: [
      { name: "Google" }, { name: "Meta" }, { name: "Amazon" },
      { name: "Microsoft" }, { name: "Apple" }, { name: "Netflix" },
    ],
    stats: [
      { value: "25K+", label: "IK student community" },
      { value: "₹2 Cr", label: "Highest offer received" },
      { value: "₹23 LPA", label: "Average salary hike" },
      { value: "4.6+", label: "Rating across platforms" },
    ],
    design: { theme: "dark", align: "center", paddingY: "lg", accentColor: "#19c3a6" },
  },
  ikEdge: {
    eyebrow: "The IK Edge",
    heading: "Why learners choose Interview Kickstart",
    items: [
      { icon: "👩‍🏫", title: "Expert-Led Curriculum", description: "Built by FAANG+ leaders with real AI deployment experience." },
      { icon: "🎥", title: "Live, Mentor-Guided Sessions", description: "Interactive workshops with real-time support." },
      { icon: "🛠️", title: "Real-World Projects", description: "Build AI-powered support bots and MVPs you can showcase." },
      { icon: "🧰", title: "Industry-Trusted Tools", description: "Hands-on with Firebase, LLMs and MCP platforms." },
    ],
    design: { theme: "light", align: "center", paddingY: "lg", accentColor: "#5b34ea" },
  },
  testimonials: {
    eyebrow: "Alumni Stories",
    heading: "Loved by engineers at top companies",
    items: [
      { quote: "The content structure and hands-on practice were exactly what I needed.", name: "Sahadev Bite", role: "Sr. Java Engineer", company: "UBS" },
      { quote: "The DSA curriculum and problem-solving patterns changed how I interview.", name: "Niteen Chougule", role: "Software Engineer", company: "Microsoft" },
      { quote: "The system design curriculum is the best I've come across.", name: "Ashish Agarwal", role: "Software Engineer III", company: "Google" },
      { quote: "Career coaching and mock interviews made my transition possible.", name: "Akshay Lodha", role: "Data Engineer", company: "Meta" },
    ],
    design: { theme: "muted", align: "center", paddingY: "lg", accentColor: "#5b34ea" },
  },
  audience: {
    eyebrow: "Who's this for?",
    heading: "Who should sign up for this webinar?",
    body:
      "Mid and senior engineers who want to stay relevant as AI reshapes the industry.\nProfessionals targeting MAANG+ roles who need a clear interview-readiness framework across coding, system design and behavioural rounds.\nAnyone who wants a role-based AI roadmap that fits around a full-time job.",
    design: { theme: "light", align: "center", paddingY: "lg", accentColor: "#5b34ea" },
  },
  marketShift: {
    eyebrow: "Market Shift",
    heading: "The hiring market has shifted — find out how",
    items: [
      { icon: "⚡", title: "AI Skills That Actually Matter", description: "Cut through the noise and focus on what teams really use." },
      { icon: "🧭", title: "Role-Based AI Roadmaps", description: "A path tailored to your role and seniority." },
      { icon: "📘", title: "MAANG+ Interview Playbook", description: "The exact framework our alumni use to land offers." },
    ],
    design: { theme: "light", align: "center", paddingY: "lg", accentColor: "#5b34ea" },
  },
  finalCta: {
    heading: "Ready to become a top 1% tech professional?",
    subheading: "Seats are limited. Reserve your free spot for the live webinar today.",
    ctaLabel: "Reserve My Spot",
    ctaUrl: "#",
    design: { theme: "brand", align: "center", paddingY: "lg", accentColor: "#5b34ea" },
  },
};
