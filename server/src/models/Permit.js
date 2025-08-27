const mongoose = require('mongoose');

const PermitSchema = new mongoose.Schema({
  PermitID: { type: Number, required: true, unique: true },
  PermitName: String,
  PermitType: String,
  PermitDescription: String,
  PermitEntranceIDs: [Number],
  FacilityID: Number,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('Permit', PermitSchema);
