import { Document, Model, model, Schema } from 'mongoose';

export interface IMedia extends Document {
  entity_id?: number;
  entity_type?: string;
  media_type?: string;
  url?: string;
  description?: string;
  last_updated_date?: string;
}

const MediaSchema = new Schema<IMedia>({
  entity_id: Number,
  entity_type: String,
  media_type: String,
  url: String,
  description: String,
  last_updated_date: String,
});

const Media: Model<IMedia> = model<IMedia>('Media', MediaSchema);
export default Media;
