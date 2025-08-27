const mongoose = require('mongoose');

const PermitSchema = new mongoose.Schema({
  permit_id: { type: Number, required: true, unique: true },
  permit_name: String,
  permit_type: String,
  permit_description: String,
  permit_entrance_ids: [Number],
  facility_id: Number,
  last_updated_date: Date,
});

module.exports = mongoose.model('Permit', PermitSchema);
