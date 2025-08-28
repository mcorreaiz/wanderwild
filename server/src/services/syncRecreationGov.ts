import mongoose from 'mongoose';
import ActivityModel from '../models/Activity';
import CampsiteModel from '../models/Campsite';
import EventModel from '../models/Event';
import FacilityModel from '../models/Facility';
import MediaModel from '../models/Media';
import OrganizationModel from '../models/Organization';
import PermitModel from '../models/Permit';
import PermitEntranceModel from '../models/PermitEntrance';
import RecreationAreaModel from '../models/RecreationArea';
import {
    Campsite, Event, Facility, Organization,
    getActivities,
    getCampsites, getEvents, getFacilities,
    getMedia,
    getOrganizations,
    getPermitEntrances,
    getPermits,
    getRecreationAreas,
    keysToSnake
} from './recreationGov';

async function syncAllEntities(): Promise<void> {
  const MONGO_URI = 'mongodb://localhost:27017/wanderwild'; // Change as needed
  await mongoose.connect(MONGO_URI);

  try {
    // Sync Facilities
    const facilities: Facility[] = await getFacilities();
    if (facilities.length) {
      await FacilityModel.deleteMany({});
      await FacilityModel.insertMany(keysToSnake(facilities));
      console.log(`Synced ${facilities.length} facilities.`);
    }

    // Sync Campsites
    const campsites: Campsite[] = await getCampsites();
    if (campsites.length) {
      await CampsiteModel.deleteMany({});
      await CampsiteModel.insertMany(keysToSnake(campsites));
      console.log(`Synced ${campsites.length} campsites.`);
    }

    // Sync Organizations
    const organizations: Organization[] = await getOrganizations();
    if (organizations.length) {
      await OrganizationModel.deleteMany({});
      await OrganizationModel.insertMany(keysToSnake(organizations));
      console.log(`Synced ${organizations.length} organizations.`);
    }

    // Sync Events
    const events: Event[] = await getEvents();
    if (events.length) {
      await EventModel.deleteMany({});
      await EventModel.insertMany(keysToSnake(events));
      console.log(`Synced ${events.length} events.`);
    }

    // Sync Activities
    const activities = await getActivities();
    if (activities.length) {
      await ActivityModel.deleteMany({});
      await ActivityModel.insertMany(keysToSnake(activities));
      console.log(`Synced ${activities.length} activities.`);
    }

    // Sync Recreation Areas
    const recreationAreas = await getRecreationAreas();
    if (recreationAreas.length) {
      await RecreationAreaModel.deleteMany({});
      await RecreationAreaModel.insertMany(keysToSnake(recreationAreas));
      console.log(`Synced ${recreationAreas.length} recreation areas.`);
    }

    // Sync Permits
    const permits = await getPermits();
    if (permits.length) {
      await PermitModel.deleteMany({});
      await PermitModel.insertMany(keysToSnake(permits));
      console.log(`Synced ${permits.length} permits.`);
    }

    // Sync Permit Entrances
    const permitEntrances = await getPermitEntrances();
    if (permitEntrances.length) {
      await PermitEntranceModel.deleteMany({});
      await PermitEntranceModel.insertMany(keysToSnake(permitEntrances));
      console.log(`Synced ${permitEntrances.length} permit entrances.`);
    }

    // Sync Media
    const media = await getMedia();
    if (media.length) {
      await MediaModel.deleteMany({});
      await MediaModel.insertMany(keysToSnake(media));
      console.log(`Synced ${media.length} media items.`);
    }

    console.log('All entities synced from Recreation.gov');
  } catch (error) {
    console.error('Error syncing entities:', error);
  } finally {
    await mongoose.disconnect();
  }
}

syncAllEntities();
