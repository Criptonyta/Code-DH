const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsDataBase = require('../data/productsDataBase.json');    // llamo a la base de datos


const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('index.ejs');
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail.ejs');
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form.ejs')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
	
			let idProduct = req.params.id                        // extraigo el id del producto a editar de la BD
			let productToEdit = productsDataBase[id];			// extraigo el producto de la BD
			res.render('product-edit-form.ejs', {productToEdit: productToEdit});  // renderizo
	
	},

	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;