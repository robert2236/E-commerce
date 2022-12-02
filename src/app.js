const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const {usersRoutes, authRoutes,productRoutes, cartRoutes, purchaseRoutes} = require ('./routes')
const transporter = require('./utils/mailer.js');

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("Successful Authentication"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Synchronized Database"))
  .catch((error) => console.log(error));

transporter.verify()
  .then(()=> console.log("Send Emails Verification"))

app.get("/", (req, res) => {
  console.log("Welcome to server");
  res.sendStatus(200)
});

app.use('/api/v1/', usersRoutes);
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", productRoutes);
app.use("/api/v1/", cartRoutes);
app.use("/api/v1/", purchaseRoutes);



app.use(handleError);

module.exports = app;
