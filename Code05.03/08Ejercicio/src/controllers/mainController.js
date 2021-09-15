const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	index: (req, res) => {
		const productsDataBase = require('../data/productsDataBase.json')   // Linkeo con la base de datos
		res.render('index', {productsDataBase:productsDataBase})			// tengo la informacion de la BD en index
		
	},
	search: (req, res) => {
		res.render('search')
	},
};

module.exports = controller;
