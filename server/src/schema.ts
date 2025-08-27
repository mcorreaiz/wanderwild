import { gql } from 'apollo-server-express';
import Activity from './models/Activity';
import Campsite from './models/Campsite';
import Event from './models/Event';
import Facility from './models/Facility';
import Link from './models/Link';
import Media from './models/Media';
import Organization from './models/Organization';
import Permit from './models/Permit';
import PermitEntrance from './models/PermitEntrance';
import RecreationArea from './models/RecreationArea';
import User from './models/User';

export const typeDefs = gql`
  type Facility {
    facility_id: ID!
    facility_name: String
    facility_type: String
    facility_description: String
    facility_directions: String
    facility_email: String
    facility_phone: String
    facility_map_url: String
    facility_latitude: Float
    facility_longitude: Float
    facility_url: String
    org_id: Int
    geojson: String
    last_updated_date: String
  }
  type Campsite {
    campsite_id: ID!
    campsite_name: String
    campsite_type: String
    campsite_accessible: Boolean
    campsite_longitude: Float
    campsite_latitude: Float
    campsite_reservable: Boolean
    facility_id: Int
    last_updated_date: String
  }
  type Organization {
    org_id: ID!
    org_name: String
    org_abbrev_name: String
    org_description: String
    org_url: String
    org_type: String
    last_updated_date: String
  }
  type Event {
    event_id: ID!
    event_name: String
    event_type: String
    event_description: String
    event_start_date: String
    event_end_date: String
    facility_id: Int
    org_id: Int
    last_updated_date: String
  }
  type RecreationArea {
    recreation_area_id: ID!
    recreation_area_name: String
    recreation_area_description: String
    recreation_area_directions: String
    recreation_area_latitude: Float
    recreation_area_longitude: Float
    recreation_area_phone: String
    recreation_area_email: String
    recreation_area_map_url: String
    last_updated_date: String
  }
  type Permit {
    permit_id: ID!
    permit_name: String
    permit_type: String
    permit_description: String
    permit_entrance_ids: [Int]
    facility_id: Int
    last_updated_date: String
  }
  type PermitEntrance {
    permit_entrance_id: ID!
    permit_entrance_name: String
    permit_entrance_description: String
    facility_id: Int
    last_updated_date: String
  }
  type Link {
    entity_id: Int
    entity_type: String
    link_type: String
    url: String
    description: String
    last_updated_date: String
  }
  type Media {
    entity_id: Int
    entity_type: String
    media_type: String
    url: String
    description: String
    last_updated_date: String
  }
  type Activity {
    activity_id: ID!
    activity_name: String
    activity_description: String
    last_updated_date: String
  }
  type Favorite {
    location_id: String!
    location_type: String!
    added_at: String!
  }
  type Query {
    campsites(campsite_id: ID): [Campsite!]!
    facilities(facility_id: ID): [Facility!]!
    organizations(org_id: ID): [Organization!]!
    events(event_id: ID): [Event!]!
    recreationAreas(recreation_area_id: ID): [RecreationArea!]!
    permits(permit_id: ID): [Permit!]!
    permitEntrances(permit_entrance_id: ID): [PermitEntrance!]!
    links(entity_id: Int): [Link!]!
    media(entity_id: Int): [Media!]!
    activities(activity_id: ID): [Activity!]!
    favorites(user_id: ID!): [Favorite!]!
  }
  type Mutation {
    addFavorite(user_id: ID!, location_id: String!, location_type: String!): [Favorite!]!
    removeFavorite(user_id: ID!, location_id: String!): [Favorite!]!
  }
`;

export const resolvers = {
  Query: {
    campsites: async (_: any, { campsite_id }: { campsite_id?: string }) => {
      if (campsite_id) {
        const campsite = await Campsite.findOne({ campsite_id });
        return campsite ? [campsite] : [];
      }
      return await Campsite.find();
    },
    facilities: async (_: any, { facility_id }: { facility_id?: string }) => {
      if (facility_id) {
        const facility = await Facility.findOne({ facility_id });
        return facility ? [facility] : [];
      }
      return await Facility.find();
    },
    organizations: async (_: any, { org_id }: { org_id?: string }) => {
      if (org_id) {
        const org = await Organization.findOne({ org_id });
        return org ? [org] : [];
      }
      return await Organization.find();
    },
    events: async (_: any, { event_id }: { event_id?: string }) => {
      if (event_id) {
        const event = await Event.findOne({ event_id });
        return event ? [event] : [];
      }
      return await Event.find();
    },
    recreationAreas: async (_: any, { recreation_area_id }: { recreation_area_id?: string }) => {
      if (recreation_area_id) {
        const area = await RecreationArea.findOne({ recreation_area_id });
        return area ? [area] : [];
      }
      return await RecreationArea.find();
    },
    permits: async (_: any, { permit_id }: { permit_id?: string }) => {
      if (permit_id) {
        const permit = await Permit.findOne({ permit_id });
        return permit ? [permit] : [];
      }
      return await Permit.find();
    },
    permitEntrances: async (_: any, { permit_entrance_id }: { permit_entrance_id?: string }) => {
      if (permit_entrance_id) {
        const entrance = await PermitEntrance.findOne({ permit_entrance_id });
        return entrance ? [entrance] : [];
      }
      return await PermitEntrance.find();
    },
    links: async (_: any, { entity_id }: { entity_id?: number }) => {
      if (entity_id) {
        return await Link.find({ entity_id });
      }
      return await Link.find();
    },
    media: async (_: any, { entity_id }: { entity_id?: number }) => {
      if (entity_id) {
        return await Media.find({ entity_id });
      }
      return await Media.find();
    },
    activities: async (_: any, { activity_id }: { activity_id?: string }) => {
      if (activity_id) {
        const activity = await Activity.findOne({ activity_id });
        return activity ? [activity] : [];
      }
      return await Activity.find();
    },
    favorites: async (_: any, { user_id }: { user_id: string }) => {
      const user = await User.findById(user_id);
      if (!user) throw new Error('User not found');
      return user.favorites;
    },
  },
  Mutation: {
    addFavorite: async (_: any, { user_id, location_id, location_type }: { user_id: string, location_id: string, location_type: string }) => {
      const user = await User.findById(user_id);
      if (!user) throw new Error('User not found');
  user.favorites.push({ location_id, location_type, added_at: new Date().toISOString() });
  await user.save();
  return user.favorites;
    },
    removeFavorite: async (_: any, { user_id, location_id }: { user_id: string, location_id: string }) => {
      const user = await User.findById(user_id);
      if (!user) throw new Error('User not found');
  user.favorites = user.favorites.filter((fav: { location_id: string }) => fav.location_id !== location_id);
      await user.save();
      return user.favorites;
    },
  },
};
