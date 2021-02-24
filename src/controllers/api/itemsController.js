const { validationResult } = require('express-validator');
const createError = require('http-errors');
const { Op } = require('sequelize')

// ******** Sequelize ***********

const { Product, Brand, Category } = require('../database/models');

const controller = {

	// Lastest - Lastest from products visited
	items:function(){

	
	}
}
module.exports = controller