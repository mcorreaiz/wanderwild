import { Document, Model, model, Schema } from 'mongoose';

export interface IFacility extends Document {
  facility_id: string;
  facility_name?: string;
  facility_type?: string;
  facility_description?: string;
  facility_directions?: string;
  facility_email?: string;
  facility_phone?: string;
  facility_map_url?: string;
  facility_latitude?: number;
  facility_longitude?: number;
  facility_url?: string;
  org_id?: number;
  geojson?: {
    coordinates: [number, number];
    type: string;
  };
  last_updated_date?: string;
}

const FacilitySchema = new Schema<IFacility>({
  facility_id: { type: String, required: true, unique: true },
  facility_name: String,
  facility_type: String,
  facility_description: String,
  facility_directions: String,
  facility_email: String,
  facility_phone: String,
  facility_map_url: String,
  facility_latitude: Number,
  facility_longitude: Number,
  facility_url: String,
  org_id: Number,
  geojson: {
    type: {
      type: String,
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
    },
  },
  last_updated_date: String,
});

const Facility: Model<IFacility> = model<IFacility>('Facility', FacilitySchema);
export default Facility;
