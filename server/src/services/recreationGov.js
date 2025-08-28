const axios = require('axios');

const BASE_URL = 'https://ridb.recreation.gov/api/v1';
const API_KEY = process.env.RECREATION_GOV_API_KEY || "b9a178d6-847c-4327-8a4b-2d3c693db647"
const defaultHeaders = {
  apikey: API_KEY,
};

// Get all facilities
async function getFacilities(params = {}) {
  const response = await axios.get(`${BASE_URL}/facilities`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

// Get a specific facility
async function getFacility(id) {
  const response = await axios.get(`${BASE_URL}/facilities/${id}`, {
    headers: defaultHeaders,
  });
  return response.data;
}

// Get all campsites
async function getCampsites(params = {}) {
  const response = await axios.get(`${BASE_URL}/campsites`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

// Get a specific campsite
async function getCampsite(id) {
  const response = await axios.get(`${BASE_URL}/campsites/${id}`, {
    headers: defaultHeaders,
  });
  return response.data;
}

// Get all organizations
async function getOrganizations(params = {}) {
  const response = await axios.get(`${BASE_URL}/organizations`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

// Get a specific organization
async function getOrganization(id) {
  const response = await axios.get(`${BASE_URL}/organizations/${id}`, {
    headers: defaultHeaders,
  });
  return response.data;
}

// Get all events
async function getEvents(params = {}) {
  const response = await axios.get(`${BASE_URL}/events`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

// Get a specific event
async function getEvent(id) {
  const response = await axios.get(`${BASE_URL}/events/${id}`, {
    headers: defaultHeaders,
  });
  return response.data;
}

module.exports = {
  getFacilities,
  getFacility,
  getCampsites,
  getCampsite,
  getOrganizations,
  getOrganization,
  getEvents,
  getEvent,
};
