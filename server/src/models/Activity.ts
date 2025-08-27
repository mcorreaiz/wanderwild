import { Document, Model, model, Schema } from 'mongoose';

export interface IActivity extends Document {
  activity_id: string;
  activity_name?: string;
  activity_description?: string;
  last_updated_date?: string;
}

const ActivitySchema = new Schema<IActivity>({
  activity_id: { type: String, required: true, unique: true },
  activity_name: String,
  activity_description: String,
  last_updated_date: String,
});

const Activity: Model<IActivity> = model<IActivity>('Activity', ActivitySchema);
export default Activity;
