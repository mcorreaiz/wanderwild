import { Document, Model, model, Schema } from 'mongoose';

export interface IPermitEntrance extends Document {
  permit_entrance_id: string;
  permit_entrance_name?: string;
  permit_entrance_description?: string;
  facility_id?: number;
  last_updated_date?: string;
}

const PermitEntranceSchema = new Schema<IPermitEntrance>({
  permit_entrance_id: { type: String, required: true, unique: true },
  permit_entrance_name: String,
  permit_entrance_description: String,
  facility_id: Number,
  last_updated_date: String,
});

const PermitEntrance: Model<IPermitEntrance> = model<IPermitEntrance>('PermitEntrance', PermitEntranceSchema);
export default PermitEntrance;
