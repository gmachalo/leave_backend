'use strict';

/**
 * leave-record service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leave-record.leave-record');
