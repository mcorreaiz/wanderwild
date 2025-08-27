import { Document, Model, model, Schema } from 'mongoose';

export interface IRecreationArea extends Document {
  recreation_area_id: string;
  recreation_area_name?: string;
  recreation_area_description?: string;
  recreation_area_directions?: string;
  recreation_area_latitude?: number;
  recreation_area_longitude?: number;
  recreation_area_phone?: string;
  recreation_area_email?: string;
  recreation_area_map_url?: string;
  last_updated_date?: string;
}

const RecreationAreaSchema = new Schema<IRecreationArea>({
  recreation_area_id: { type: String, required: true, unique: true },
  recreation_area_name: String,
  recreation_area_description: String,
  recreation_area_directions: String,
  recreation_area_latitude: Number,
  recreation_area_longitude: Number,
  recreation_area_phone: String,
  recreation_area_email: String,
  recreation_area_map_url: String,
  last_updated_date: String,
});

const RecreationArea: Model<IRecreationArea> = model<IRecreationArea>('RecreationArea', RecreationAreaSchema);
export default RecreationArea;
