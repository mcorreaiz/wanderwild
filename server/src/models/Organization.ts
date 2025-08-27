import { Document, Model, model, Schema } from 'mongoose';

export interface IOrganization extends Document {
  org_id: string;
  org_name?: string;
  org_abbrev_name?: string;
  org_description?: string;
  org_url?: string;
  org_type?: string;
  last_updated_date?: string;
}

const OrganizationSchema = new Schema<IOrganization>({
  org_id: { type: String, required: true, unique: true },
  org_name: String,
  org_abbrev_name: String,
  org_description: String,
  org_url: String,
  org_type: String,
  last_updated_date: String,
});

const Organization: Model<IOrganization> = model<IOrganization>('Organization', OrganizationSchema);
export default Organization;
