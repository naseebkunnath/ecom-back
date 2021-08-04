/**
 * Module dependencies
 */

// ...


/**
 * ecommerce/order/create.js
 *
 * Create order.
 */
module.exports = async function create(req, res) {

  await Product.create({
    title : "Chelsea Shoes",
    price : 200,
    description : "Best Drip in the Market",
    image : "images/chelsea-shoes.png"
  });
  await Product.create({
    title : "Kimono",
    price : 50,
    description : "Classy, Stylish, Dope",
    image : "images/kimono.png"
  });
  await Product.create({
    title : "Watch",
    price : 2500,
    description : "Elegance built in",
    image : "images/rolex.png"
  });
  await Product.create({
    title : "Wallet",
    price : 80,
    description : "Sleek, Trendy, Clean",
    image : "images/wallet.png"
  });


  /*await OrderItem.create({
    quantity: 3,
    price: 100,  
    // Set the User's Primary Key to associate the Pet with the User.
    order: createdOrder
  });

  await OrderItem.create({
    quantity: 3,
    price: 100,  
    // Set the User's Primary Key to associate the Pet with the User.
    order: createdOrder
  });
  

  console.log(createdRecord);*/

  sails.log.debug('TODO: implement');
  return res.ok();

};
