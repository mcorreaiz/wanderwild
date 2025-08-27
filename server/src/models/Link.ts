import { Document, Model, model, Schema } from 'mongoose';

export interface ILink extends Document {
  entity_id?: number;
  entity_type?: string;
  link_type?: string;
  url?: string;
  description?: string;
  last_updated_date?: string;
}

const LinkSchema = new Schema<ILink>({
  entity_id: Number,
  entity_type: String,
  link_type: String,
  url: String,
  description: String,
  last_updated_date: String,
});

const Link: Model<ILink> = model<ILink>('Link', LinkSchema);
export default Link;
