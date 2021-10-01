const express = require("express");
const app = express();
const moongose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");

dotenv.config();
moongose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/users", userRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server running");
});
