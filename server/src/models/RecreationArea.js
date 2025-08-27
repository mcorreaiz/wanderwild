const mongoose = require('mongoose');

const RecreationAreaSchema = new mongoose.Schema({
  RecreationAreaID: { type: Number, required: true, unique: true },
  RecreationAreaName: String,
  RecreationAreaDescription: String,
  RecreationAreaDirections: String,
  RecreationAreaLatitude: Number,
  RecreationAreaLongitude: Number,
  RecreationAreaPhone: String,
  RecreationAreaEmail: String,
  RecreationAreaMapURL: String,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('RecreationArea', RecreationAreaSchema);
