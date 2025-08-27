import { Document, Model, model, Schema } from 'mongoose';

export interface IEvent extends Document {
  event_id: string;
  event_name?: string;
  event_type?: string;
  event_description?: string;
  event_start_date?: string;
  event_end_date?: string;
  facility_id?: number;
  org_id?: number;
  last_updated_date?: string;
}

const EventSchema = new Schema<IEvent>({
  event_id: { type: String, required: true, unique: true },
  event_name: String,
  event_type: String,
  event_description: String,
  event_start_date: String,
  event_end_date: String,
  facility_id: Number,
  org_id: Number,
  last_updated_date: String,
});

const Event: Model<IEvent> = model<IEvent>('Event', EventSchema);
export default Event;
