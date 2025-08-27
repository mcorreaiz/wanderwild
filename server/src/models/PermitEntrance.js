const mongoose = require('mongoose');

const PermitEntranceSchema = new mongoose.Schema({
  PermitEntranceID: { type: Number, required: true, unique: true },
  PermitEntranceName: String,
  PermitEntranceDescription: String,
  FacilityID: Number,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('PermitEntrance', PermitEntranceSchema);
