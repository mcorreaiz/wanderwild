const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  event_id: { type: Number, required: true, unique: true },
  event_name: String,
  event_type: String,
  event_description: String,
  event_start_date: Date,
  event_end_date: Date,
  facility_id: Number,
  org_id: Number,
  last_updated_date: Date,
});

module.exports = mongoose.model('Event', EventSchema);
