const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  activity_id: { type: Number, required: true, unique: true },
  activity_name: String,
  activity_description: String,
  last_updated_date: Date,
});

module.exports = mongoose.model('Activity', ActivitySchema);
