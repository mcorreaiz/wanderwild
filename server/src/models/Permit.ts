import { Document, Model, model, Schema } from 'mongoose';

export interface IPermit extends Document {
  permit_id: string;
  permit_name?: string;
  permit_type?: string;
  permit_description?: string;
  permit_entrance_ids?: number[];
  facility_id?: number;
  last_updated_date?: string;
}

const PermitSchema = new Schema<IPermit>({
  permit_id: { type: String, required: true, unique: true },
  permit_name: String,
  permit_type: String,
  permit_description: String,
  permit_entrance_ids: [Number],
  facility_id: Number,
  last_updated_date: String,
});

const Permit: Model<IPermit> = model<IPermit>('Permit', PermitSchema);
export default Permit;
