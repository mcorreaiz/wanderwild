const mongoose = require('mongoose');

const CampsiteSchema = new mongoose.Schema({
  CampsiteID: { type: Number, required: true, unique: true },
  CampsiteName: String,
  CampsiteType: String,
  CampsiteAccessible: Boolean,
  CampsiteLongitude: Number,
  CampsiteLatitude: Number,
  CampsiteReservable: Boolean,
  FacilityID: Number,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('Campsite', CampsiteSchema);
