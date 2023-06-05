const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/db.js");
connectDb();
// const router = require("./routes/contactRoutes.js");
const app = express();

const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(errorHandler);
// set route
// app.use("/api/v1", router);
app.use("/api/contact", require("./routes/contactRoutes")); /// another way to defining
app.use("/api/users", require("./routes/userRoutes"));

//port listening
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
