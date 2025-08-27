const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  googleId: { type: String },
  favorites: [{
    location_id: { type: String, required: true }, // Can be FacilityID or CampsiteID
    location_type: { type: String, enum: ['Facility', 'Campsite'], required: true },
    added_at: { type: Date, default: Date.now }
  }],
});

module.exports = mongoose.model('User', UserSchema);
