const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  EntityID: Number,
  EntityType: String,
  MediaType: String,
  URL: String,
  Description: String,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('Media', MediaSchema);
