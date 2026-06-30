"use strict";

// Custom routes layered on top of the default core router (routes/page.js).
// Publishing / unpublishing a page document via the content API.
module.exports = {
  routes: [
    {
      method: "POST",
      path: "/pages/:documentId/publish",
      handler: "page.publish",
    },
    {
      method: "POST",
      path: "/pages/:documentId/unpublish",
      handler: "page.unpublish",
    },
  ],
};
