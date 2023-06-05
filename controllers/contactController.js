const asyncHandler = require("express-async-handler");
//importing Model
const Contact = require("../models/contactModel.js");

//get Contact controller GET Method
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user_id });

  res.status(200).json(contacts); // json formate
  //   res.status(200).json({ message: "Get all contact" }); //json formate with status code
});

//create Contact controller POST Method
const createContact = asyncHandler(async (req, res) => {
  console.log("the request body is :", req.body);
  const { name, email, mobile } = req.body;
  if (!name || !email || !mobile) {
    res.status(400);
    throw new Error("All field is Mandatory..!");
  }
  const contact = await Contact.create({
    name,
    email,
    mobile,
    user_id: req.user.id,
  });
  res.status(200).json(contact); // json formate
});

//individual Contact controller GET Method
const getContactId = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// //update Contact controller PUT Method
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateContact);
});

// //delete Contact controller PUT Method
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

//exporting controller
module.exports = {
  getContact,
  createContact,
  getContactId,
  updateContact,
  deleteContact,
};
