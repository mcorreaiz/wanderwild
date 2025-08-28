import axios from 'axios';

const BASE_URL = 'https://ridb.recreation.gov/api/v1';
const API_KEY = process.env.RECREATION_GOV_API_KEY || "b9a178d6-847c-4327-8a4b-2d3c693db647";
const defaultHeaders = {
  apikey: API_KEY,
};

export interface Facility {
  // Add fields as needed
  [key: string]: any;
}
export interface Campsite {
  [key: string]: any;
}
export interface Organization {
  [key: string]: any;
}
export interface Event {
  [key: string]: any;
}

export async function getFacilities(params: Record<string, any> = {}): Promise<Facility[]> {
  const response = await axios.get(`${BASE_URL}/facilities`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

export async function getFacility(id: string): Promise<Facility> {
  const response = await axios.get(`${BASE_URL}/facilities/${id}`, {
    headers: defaultHeaders,
  });
  return response.data;
}

export async function getCampsites(params: Record<string, any> = {}): Promise<Campsite[]> {
  const response = await axios.get(`${BASE_URL}/campsites`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

export async function getCampsite(id: string): Promise<Campsite> {
  const response = await axios.get(`${BASE_URL}/campsites/${id}`, {
    headers: defaultHeaders,
  });
  return response.data;
}

export async function getOrganizations(params: Record<string, any> = {}): Promise<Organization[]> {
  const response = await axios.get(`${BASE_URL}/organizations`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

export async function getOrganization(id: string): Promise<Organization> {
  const response = await axios.get(`${BASE_URL}/organizations/${id}`, {
    headers: defaultHeaders,
  });
  return response.data;
}

export async function getEvents(params: Record<string, any> = {}): Promise<Event[]> {
  const response = await axios.get(`${BASE_URL}/events`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}
export async function getActivities(params: Record<string, any> = {}): Promise<any[]> {
  const response = await axios.get(`${BASE_URL}/activities`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

export async function getRecreationAreas(params: Record<string, any> = {}): Promise<any[]> {
  const response = await axios.get(`${BASE_URL}/recareas`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

export async function getPermits(params: Record<string, any> = {}): Promise<any[]> {
  const response = await axios.get(`${BASE_URL}/permits`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

export async function getPermitEntrances(params: Record<string, any> = {}): Promise<any[]> {
  const response = await axios.get(`${BASE_URL}/permitentrances`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}

export async function getMedia(params: Record<string, any> = {}): Promise<any[]> {
  const response = await axios.get(`${BASE_URL}/media`, {
    params,
    headers: defaultHeaders,
  });
  return response.data.RECDATA || [];
}


// Utility to convert PascalCase to snake_case and handle 'ID' suffix
function pascalToSnake(str: string): string {
  // Insert underscores before capital letters, except the first
  let snake = str.replace(/([a-z0-9])([A-Z])/g, '$1_$2');
  // Special handling for consecutive capitals (e.g., 'ID')
  snake = snake.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2');
  snake = snake.toLowerCase();
  // Replace 'id' at the end with '_id'
  snake = snake.replace(/_?id$/i, '_id');
  return snake;
}

export function keysToSnake(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(keysToSnake);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [pascalToSnake(k), keysToSnake(v)])
    );
  }
  return obj;
}
