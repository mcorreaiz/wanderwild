const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  entity_id: Number,
  entity_type: String,
  link_type: String,
  url: String,
  description: String,
  last_updated_date: Date,
});

module.exports = mongoose.model('Link', LinkSchema);
