const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
  org_id: { type: Number, required: true, unique: true },
  org_name: String,
  org_abbrev_name: String,
  org_description: String,
  org_url: String,
  org_type: String,
  last_updated_date: Date,
});

module.exports = mongoose.model('Organization', OrganizationSchema);
