const { gql } = require('apollo-server-express');
const Facility = require('./models/Facility');
const Campsite = require('./models/Campsite');
const Organization = require('./models/Organization');
const Event = require('./models/Event');

const typeDefs = gql`
  type Facility {
    FacilityID: ID!
    FacilityName: String
    FacilityType: String
    FacilityDescription: String
    FacilityDirections: String
    FacilityEmail: String
    FacilityPhone: String
    FacilityMapURL: String
    FacilityLatitude: Float
    FacilityLongitude: Float
    FacilityURL: String
    OrgID: Int
    GEOJSON: String
    LastUpdatedDate: String
  }

  type Campsite {
    CampsiteID: ID!
    CampsiteName: String
    CampsiteType: String
    CampsiteAccessible: Boolean
    CampsiteLongitude: Float
    CampsiteLatitude: Float
    CampsiteReservable: Boolean
    FacilityID: Int
    LastUpdatedDate: String
  }

  type Organization {
    OrgID: ID!
    OrgName: String
    OrgAbbrevName: String
    OrgDescription: String
    OrgURL: String
    OrgType: String
    LastUpdatedDate: String
  }

  type Event {
    EventID: ID!
    EventName: String
    EventType: String
    EventDescription: String
    EventStartDate: String
    EventEndDate: String
    FacilityID: Int
    OrgID: Int
    LastUpdatedDate: String
  }

  type RecreationArea {
    RecreationAreaID: ID!
    RecreationAreaName: String
    RecreationAreaDescription: String
    RecreationAreaDirections: String
    RecreationAreaLatitude: Float
    RecreationAreaLongitude: Float
    RecreationAreaPhone: String
    RecreationAreaEmail: String
    RecreationAreaMapURL: String
    LastUpdatedDate: String
  }

  type Permit {
    PermitID: ID!
    PermitName: String
    PermitType: String
    PermitDescription: String
    PermitEntranceIDs: [Int]
    FacilityID: Int
    LastUpdatedDate: String
  }

  type PermitEntrance {
    PermitEntranceID: ID!
    PermitEntranceName: String
    PermitEntranceDescription: String
    FacilityID: Int
    LastUpdatedDate: String
  }

  type Link {
    EntityID: Int
    EntityType: String
    LinkType: String
    URL: String
    Description: String
    LastUpdatedDate: String
  }

  type Media {
    EntityID: Int
    EntityType: String
    MediaType: String
    URL: String
    Description: String
    LastUpdatedDate: String
  }

  type Activity {
    ActivityID: ID!
    ActivityName: String
    ActivityDescription: String
    LastUpdatedDate: String
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
    locationId: String!
    locationType: String!
    addedAt: String!
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
