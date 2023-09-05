'use strict';

/**
 * save-job service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::save-job.save-job');
