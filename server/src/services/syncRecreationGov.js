const mongoose = require('mongoose');
const { getFacilities, getCampsites, getOrganizations, getEvents } = require('./recreationGov');
const Facility = require('../models/Facility');
const Campsite = require('../models/Campsite');
const Organization = require('../models/Organization');
const Event = require('../models/Event');

async function syncAllEntities() {
  const MONGO_URI = 'mongodb://localhost:27017/wanderwild'; // Change as needed
  await mongoose.connect(MONGO_URI);

  try {
    // Sync Facilities
    const facilities = await getFacilities();
    if (facilities.length) {
      await Facility.deleteMany({});
      await Facility.insertMany(facilities);
      console.log(`Synced ${facilities.length} facilities.`);
    }

    // Sync Campsites
    const campsites = await getCampsites();
    if (campsites.length) {
      await Campsite.deleteMany({});
      await Campsite.insertMany(campsites);
      console.log(`Synced ${campsites.length} campsites.`);
    }

    // Sync Organizations
    const organizations = await getOrganizations();
    if (organizations.length) {
      await Organization.deleteMany({});
      await Organization.insertMany(organizations);
      console.log(`Synced ${organizations.length} organizations.`);
    }

    // Sync Events
    const events = await getEvents();
    if (events.length) {
      await Event.deleteMany({});
      await Event.insertMany(events);
      console.log(`Synced ${events.length} events.`);
    }

    console.log('All entities synced from Recreation.gov');
  } catch (error) {
    console.error('Error syncing entities:', error);
  } finally {
    await mongoose.disconnect();
  }
}

syncAllEntities();
