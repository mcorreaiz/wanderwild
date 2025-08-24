const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
  OrgID: { type: Number, required: true, unique: true },
  OrgName: String,
  OrgAbbrevName: String,
  OrgDescription: String,
  OrgURL: String,
  OrgType: String,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('Organization', OrganizationSchema);
