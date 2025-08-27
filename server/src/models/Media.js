const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  entity_id: Number,
  entity_type: String,
  media_type: String,
  url: String,
  description: String,
  last_updated_date: Date,
});

module.exports = mongoose.model('Media', MediaSchema);
