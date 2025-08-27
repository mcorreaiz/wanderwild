import { Document, Model, model, Schema } from 'mongoose';

export interface IFavorite {
  location_id: string;
  location_type: string;
  added_at: string;
}

export interface IUser extends Document {
  favorites: IFavorite[];
}

const FavoriteSchema = new Schema<IFavorite>({
  location_id: { type: String, required: true },
  location_type: { type: String, required: true },
  added_at: { type: String, required: true },
});

const UserSchema = new Schema<IUser>({
  favorites: [FavoriteSchema],
});

const User: Model<IUser> = model<IUser>('User', UserSchema);
export default User;
