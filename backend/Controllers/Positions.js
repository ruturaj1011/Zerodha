const {PositionsModel} = require("../model/PositionsModel");

module.exports.AllPositions =  async(req,res) => {

    let allPositions = await PositionsModel.find({});
    res.send(allPositions);
}