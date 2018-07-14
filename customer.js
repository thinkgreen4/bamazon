var mysql = require("mysql");
var inquirer = require("inquirer");

// set up prompt with inquirer prompting user 
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

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
    //prompts asking what products to buy and how much

    connection.query("SELECT * FROM products", function(err, data){
        for(var i = 0; i < data.length; i++){
            console.log(`id: ${data[i].item_id} | name: ${data[i].product_name}`);
            //'id: ' + data[i].item_id + ''
        }
        inquirer
           .prompt([{
               name:"item",
               type: "input",
               message: "What is ID of the product you wish to buy?",
               filter: Number
   
           },
           {
               name: "quantity",
               type:"input",
               message: "Please enter the number of items you wish to purchase?",
               filter: Number
           }])
       //checking to see if the products exists and if it is in stock if so then placing order and once done displaying inventory
           .then(function(answer) {
               console.log(typeof answer.item);
               var item = answer.item;
               var quantity = answer.quantity
            connection.query("SELECT * FROM products WHERE item_id = ?", [item],
            function (err, response) {
                   var stock = response[0];
                       if (err) throw("There was an error" + err);
                    //    console.log(query);
                       console.log(response);
                       // if the length of response from function is empty they didn't select a correct product
                       if(response.length === 0){
                           console.log("invalid ID please enter a different id number")
                           start();
                       }
                       // if quantity they want to purchase is less than stock place order and update inventory
                       else if(quantity <= stock.quantity) {
                           var newQuantity = stock.quantity - quantity;

                               console.log("product is in stock your order is being place")
                               
                               connection.query("UPDATE products SET quantity = ? WHERE item_id = ?",[newQuantity, item], function(err, updateRes){
                                   if(err)  throw ("ERROR "+err)
                                   console.log("database updated")
                                   start();
                                   connection.end();
                               })
                           }
                       
   
                       else {
                           console.log("We do not have enouigh inventory to meet your order please check back soon or try ordering less");
                           start();
                       }
           });
       });
    })
    
    



}
