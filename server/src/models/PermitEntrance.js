const mongoose = require('mongoose');

const PermitEntranceSchema = new mongoose.Schema({
  permit_entrance_id: { type: Number, required: true, unique: true },
  permit_entrance_name: String,
  permit_entrance_description: String,
  facility_id: Number,
  last_updated_date: Date,
});

module.exports = mongoose.model('PermitEntrance', PermitEntranceSchema);
