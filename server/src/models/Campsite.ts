import { Document, Model, model, Schema } from 'mongoose';

export interface ICampsite extends Document {
  campsite_id: string;
  campsite_name?: string;
  campsite_type?: string;
  campsite_accessible?: boolean;
  campsite_longitude?: number;
  campsite_latitude?: number;
  campsite_reservable?: boolean;
  facility_id?: number;
  last_updated_date?: string;
}

const CampsiteSchema = new Schema<ICampsite>({
  campsite_id: { type: String, required: true, unique: true },
  campsite_name: String,
  campsite_type: String,
  campsite_accessible: Boolean,
  campsite_longitude: Number,
  campsite_latitude: Number,
  campsite_reservable: Boolean,
  facility_id: Number,
  last_updated_date: String,
});

const Campsite: Model<ICampsite> = model<ICampsite>('Campsite', CampsiteSchema);
export default Campsite;
