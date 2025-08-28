import { Document, Model, model, Schema } from 'mongoose';

export interface IRecreationArea extends Document {
  rec_area_id: string;
  rec_area_name?: string;
  rec_area_description?: string;
  rec_area_directions?: string;
  rec_area_latitude?: number;
  rec_area_longitude?: number;
  rec_area_phone?: string;
  rec_area_email?: string;
  rec_area_map_url?: string;
  last_updated_date?: string;
}

const RecreationAreaSchema = new Schema<IRecreationArea>({
  rec_area_id: { type: String, required: true, unique: true },
  rec_area_name: String,
  rec_area_description: String,
  rec_area_directions: String,
  rec_area_latitude: Number,
  rec_area_longitude: Number,
  rec_area_phone: String,
  rec_area_email: String,
  rec_area_map_url: String,
  last_updated_date: String,
});

const RecreationArea: Model<IRecreationArea> = model<IRecreationArea>('RecreationArea', RecreationAreaSchema);
export default RecreationArea;
