const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planeSchema = new Schema({
  //mongo model
  //match headers
  // tail: type
});

const Plane = mongoose.model("Plane", planeSchema);

module.exports = Plane;
