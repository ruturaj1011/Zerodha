const {OrdersModel} = require("../model/OrdersModel.js");

module.exports.NewOrder =  async(req,res) => {

    let newOrder = new OrdersModel({name : req.body.name, qty : req.body.qty, price : req.body.price, mode : req.body.mode});

    newOrder.save();

    res.send(newOrder);
}