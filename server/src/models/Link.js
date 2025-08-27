const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  EntityID: Number,
  EntityType: String,
  LinkType: String,
  URL: String,
  Description: String,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('Link', LinkSchema);
