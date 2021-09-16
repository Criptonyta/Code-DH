const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    // Do the magic
    res.render("products", { products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    // Do the magic
    let IdProduct = req.params.id;
    let result = products.find((item) => item.id == IdProduct);
    if(result){
      res.render("detail", { producto: result });
    }else{
      res.status(404).send('Sin datos')
    }
  },

  // Create - Form to create
  create: (req, res) => {
    // Do the magic
  },

  // Create -  Method to store
  store: (req, res) => {
    let Id = products[products.length - 1].id;    // de productos, traeme la posicion 9 
    let lastId = id + 1;

    products.push({
      id: lastId,
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      category: req.body.category,
      description: req.body.description,
    })

    let jsonCopado = JSON.stringify(products);

    fs.writeFile(productsFilePath, jsonCopado, function(err) {        // Para meterlo en la BD
      if (err) {
          console.log(err);
      }
  });
  

    res.redirect('products');
  },

  // Update - Form to edit
  edit: (req, res) => {
    // Do the magic
  },
  // Update - Method to update
  update: (req, res) => {
    // Do the magic
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Do the magic
  },
};

module.exports = controller;
