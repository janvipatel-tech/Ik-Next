"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

// Core CRUD + a custom `publish` action. Core REST writes only touch the draft
// version (draftAndPublish is on), so publishing is exposed via the Document
// Service, which manages the draft -> published transition.
module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async publish(ctx) {
    const { documentId } = ctx.params;
    if (!documentId) return ctx.badRequest("documentId is required");

    const result = await strapi
      .documents("api::page.page")
      .publish({ documentId });

    if (!result || result.entries?.length === 0) {
      return ctx.notFound("No draft found to publish for that documentId");
    }
    ctx.body = { data: result };
  },

  async unpublish(ctx) {
    const { documentId } = ctx.params;
    if (!documentId) return ctx.badRequest("documentId is required");

    const result = await strapi
      .documents("api::page.page")
      .unpublish({ documentId });
    ctx.body = { data: result };
  },
}));
