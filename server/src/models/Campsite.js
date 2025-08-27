const mongoose = require('mongoose');

const CampsiteSchema = new mongoose.Schema({
  campsite_id: { type: Number, required: true, unique: true },
  campsite_name: String,
  campsite_type: String,
  campsite_accessible: Boolean,
  campsite_longitude: Number,
  campsite_latitude: Number,
  campsite_reservable: Boolean,
  facility_id: Number,
  last_updated_date: Date,
});

module.exports = mongoose.model('Campsite', CampsiteSchema);
