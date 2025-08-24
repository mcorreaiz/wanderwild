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

  type Query {
    campsites(CampsiteID: ID): [Campsite!]!
  }
`;

const resolvers = {
  Query: {
    campsites: async (_, { CampsiteID }) => {
      if (CampsiteID) {
        const campsite = await Campsite.findOne({ CampsiteID: CampsiteID });
        return campsite ? [campsite] : [];
      }
      return await Campsite.find();
    },
  },
};

module.exports = { typeDefs, resolvers };
