const mongoose = require('mongoose');

const RecreationAreaSchema = new mongoose.Schema({
  recreation_area_id: { type: Number, required: true, unique: true },
  recreation_area_name: String,
  recreation_area_description: String,
  recreation_area_directions: String,
  recreation_area_latitude: Number,
  recreation_area_longitude: Number,
  recreation_area_phone: String,
  recreation_area_email: String,
  recreation_area_map_url: String,
  last_updated_date: Date,
});

module.exports = mongoose.model('RecreationArea', RecreationAreaSchema);
