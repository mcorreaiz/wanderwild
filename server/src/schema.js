const { gql } = require('apollo-server-express');
const Facility = require('./models/Facility');
const Campsite = require('./models/Campsite');
const Organization = require('./models/Organization');
const Event = require('./models/Event');

const typeDefs = gql`
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

  type Query {
    campsites(CampsiteID: ID): [Campsite!]!
    facilities(FacilityID: ID): [Facility!]!
    organizations(OrgID: ID): [Organization!]!
    events(EventID: ID): [Event!]!
    recreationAreas(RecreationAreaID: ID): [RecreationArea!]!
    permits(PermitID: ID): [Permit!]!
    permitEntrances(PermitEntranceID: ID): [PermitEntrance!]!
    links(EntityID: Int): [Link!]!
    media(EntityID: Int): [Media!]!
    activities(ActivityID: ID): [Activity!]!
    favorites(userId: ID!): [Favorite!]!
  }

  type Favorite {
    location_id: String!
    location_type: String!
    added_at: String!
  }

  type Mutation {
    addFavorite(userId: ID!, locationId: String!, locationType: String!): [Favorite!]!
    removeFavorite(userId: ID!, locationId: String!): [Favorite!]!
  }

  type Query {
    campsites(CampsiteID: ID): [Campsite!]!
    favorites(userId: ID!): [Favorite!]!
  }
`;

const User = require('./models/User');

const resolvers = {
  Query: {
    campsites: async (_, { CampsiteID }) => {
      if (CampsiteID) {
        const campsite = await Campsite.findOne({ CampsiteID });
        return campsite ? [campsite] : [];
      }
      return await Campsite.find();
    },
    facilities: async (_, { FacilityID }) => {
      if (FacilityID) {
        const facility = await Facility.findOne({ FacilityID });
        return facility ? [facility] : [];
      }
      return await Facility.find();
    },
    organizations: async (_, { OrgID }) => {
      if (OrgID) {
        const org = await Organization.findOne({ OrgID });
        return org ? [org] : [];
      }
      return await Organization.find();
    },
    events: async (_, { EventID }) => {
      if (EventID) {
        const event = await Event.findOne({ EventID });
        return event ? [event] : [];
      }
      return await Event.find();
    },
    recreationAreas: async (_, { RecreationAreaID }) => {
      if (RecreationAreaID) {
        const area = await require('./models/RecreationArea').findOne({ RecreationAreaID });
        return area ? [area] : [];
      }
      return await require('./models/RecreationArea').find();
    },
    permits: async (_, { PermitID }) => {
      if (PermitID) {
        const permit = await require('./models/Permit').findOne({ PermitID });
        return permit ? [permit] : [];
      }
      return await require('./models/Permit').find();
    },
    permitEntrances: async (_, { PermitEntranceID }) => {
      if (PermitEntranceID) {
        const entrance = await require('./models/PermitEntrance').findOne({ PermitEntranceID });
        return entrance ? [entrance] : [];
      }
      return await require('./models/PermitEntrance').find();
    },
    links: async (_, { EntityID }) => {
      if (EntityID) {
        return await require('./models/Link').find({ EntityID });
      }
      return await require('./models/Link').find();
    },
    media: async (_, { EntityID }) => {
      if (EntityID) {
        return await require('./models/Media').find({ EntityID });
      }
      return await require('./models/Media').find();
    },
    activities: async (_, { ActivityID }) => {
      if (ActivityID) {
        const activity = await require('./models/Activity').findOne({ ActivityID });
        return activity ? [activity] : [];
      }
      return await require('./models/Activity').find();
    },
    favorites: async (_, { userId }) => {
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
      return user.favorites;
    },
  },
  Mutation: {
    addFavorite: async (_, { userId, locationId, locationType }) => {
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
      user.favorites.push({ locationId, locationType });
      await user.save();
      return user.favorites;
    },
    removeFavorite: async (_, { userId, locationId }) => {
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
      user.favorites = user.favorites.filter(fav => fav.locationId !== locationId);
      await user.save();
      return user.favorites;
    },
  },
};

module.exports = { typeDefs, resolvers };
