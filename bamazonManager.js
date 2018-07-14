// Create a new Node application called bamazonManager.js.Running this application will:

// List a set of menu options:

// View Products for Sale

// View Low Inventory

// Add to Inventory

// Add New Product

// If a manager selects View Products
// for Sale, the app should list every available item: the item IDs, names, prices, and quantities.

// If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.

// If a manager selects Add to Inventory, your app should display a prompt that will
// let the manager "add more" of any item currently in the store.

// If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();

});

function start () {

  inquirer
    .prompt([{
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
      },
    ]).then(function(selection){
      console.log(selection.choice, "this was the managers choice");

      //
      switch (selection.choice) {
        case "View Products for Sale":
          
          console.log("products for sale was chosen");
          viewProductsForSale()
          start()

        break;

        case "View Low Inventory":

          console.log("View Low Inventory was chosen");

        break;

        case "Add to Inventory":

          console.log("Add to Inventory was chosen");

        break;

        case "Add New Product":

          console.log("Add New Product was chosen");

        break;  
      
        default:
        console.log("what?????")
          break;
      }


    })

}


//**************************** 

function viewProductsForSale(params) {
  connection.query("SELECT * FROM products", function (err, data) {
    for (var i = 0; i < data.length; i++) {
      console.log(`id: ${data[i].item_id} | name: ${data[i].product_name} | department: ${data[i].department_name} | price: ${data[i].price} quantity: ${data[i].quantity}`);
      //'id: ' + data[i].item_id + ''
    }
  })
}