const mongoose = require('mongoose');

const FacilitySchema = new mongoose.Schema({
  FacilityID: { type: String, required: true, unique: true },
  FacilityName: String,
  FacilityType: String,
  FacilityDescription: String,
  FacilityDirections: String,
  FacilityEmail: String,
  FacilityPhone: String,
  FacilityMapURL: String,
  FacilityLatitude: Number,
  FacilityLongitude: Number,
  FacilityURL: String,
  OrgID: Number,
  GEOJSON: Object,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('Facility', FacilitySchema);
