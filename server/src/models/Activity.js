const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  ActivityID: { type: Number, required: true, unique: true },
  ActivityName: String,
  ActivityDescription: String,
  LastUpdatedDate: Date,
});

module.exports = mongoose.model('Activity', ActivitySchema);
