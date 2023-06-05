const mongoose = require("mongoose");

// const connectDb = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.MONGO_DB);
//     console.log(
//       "Database connected:",
//       connect.connection.host,
//       connect.connection.name
//     );
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

const connectDb = async () => {
  const MONGO_DB = process.env.MONGO_DB;
  try {
    mongoose.connect(MONGO_DB, { useNewUrlParser: true });
    console.log(
      "database connected successfully"
      // connect.connection.host,
      // connect.connection.name
    );
  } catch (error) {
    console.log(`Error while connecting with the database`, error.message);
  }
};
// export default connectDb;
module.exports = connectDb;
