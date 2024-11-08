const {HoldingsModel} = require("../model/HoldingsModel.js");

module.exports.AllHoldings =  async(req,res) => {

    let allHoldings = await HoldingsModel.find({});
    res.send(allHoldings);
}