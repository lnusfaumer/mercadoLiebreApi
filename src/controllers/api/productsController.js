const { validationResult } = require('express-validator');
const createError = require('http-errors');
const { Op } = require('sequelize')

// ******** Sequelize ***********

const { Product, Brand, Category } = require('../../database/models');
const controller = {
	async latest(req, res, next) {
		let category = req.params.category
		if (category == "latest") {
			let product = await Product.finsAll({
				where: { [op.gte]: 50 },
			})
			return res.json(product)
		}
	},
	offers(req, res) {
		Product.findAll({
			where: {
				discount: {
					[Op.gt]: 0
				}
			},
			limit: 6
		})
			.then((resultado) => {
				for (let i = 0; i < resultado.length; i++) {
					resultado[i].setDataValue('endpoint', '/api/products/offers/' + resultado[i].id)
				}
				let envio = {
					meta: {
						status: 200,
						total: resultado.length,
						url: '/api/products/offers'
					},
					data: resultado
				}
				res.json(envio)
			})
	},
}
module.exports = controller
