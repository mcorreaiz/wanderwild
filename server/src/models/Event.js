const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  EventID: { type: Number, required: true, unique: true },
  EventName: String,
  EventType: String,
  EventDescription: String,
  EventStartDate: Date,
  EventEndDate: Date,
  FacilityID: Number,
  OrgID: Number,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('Event', EventSchema);
