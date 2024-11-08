
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const holdingsRoute = require("./Routes/Holdings");
const positionsRoute = require("./Routes/Positions");
const ordersRoute = require("./Routes/Order");

// const {holdings, positions} = require("../dashboard/src/data/data.js");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
);
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());

// const initHoldings = async() => {

//     await HoldingsModel.deleteMany({});

//     await HoldingsModel.insertMany(holdings);

//     console.log("Holdings data inserted successfully");
// }
// initHoldings();

// const initPositions = async() => {

//     await PositionsModel.deleteMany({});

//     await PositionsModel.insertMany(positions);

//     console.log("Positions data inserted successfully");
// }
// initPositions();

  
app.use("/", authRoute);
app.use("/allPositions", positionsRoute);
app.use("/allHoldings", holdingsRoute );
app.use("/newOrder", ordersRoute);

app.listen(PORT, ()=>{
    console.log("App started!");
    mongoose.connect(url);
    console.log("DB connected!");
});