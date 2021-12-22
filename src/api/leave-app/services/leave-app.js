'use strict';

/**
 * leave-app service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leave-app.leave-app');
