const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var contactSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add the contact name"],
      // unique:true,
      // index:true,
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
      unique: true,
    },
    mobile: {
      type: String,
      required: [true, "Please add the contact phone number"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Contact", contactSchema);
