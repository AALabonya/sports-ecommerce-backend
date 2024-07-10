import { model, Schema } from 'mongoose';
import { TProduct } from './sportsProduct.interface';

const productSchema = new Schema<TProduct>({
  name: { type: String },
  description: { type: String },
  category: { type: String },
  brand: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  image: { type: String },
});

export const Product = model<TProduct>('Product', productSchema);
