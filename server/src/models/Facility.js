const mongoose = require('mongoose');

const FacilitySchema = new mongoose.Schema({
  facility_id: { type: Number, required: true, unique: true },
  facility_name: String,
  facility_type: String,
  facility_description: String,
  facility_directions: String,
  facility_email: String,
  facility_phone: String,
  facility_map_url: String,
  facility_latitude: Number,
  facility_longitude: Number,
  facility_url: String,
  org_id: Number,
  geojson: Object,
  last_updated_date: Date,
});

module.exports = mongoose.model('Facility', FacilitySchema);
