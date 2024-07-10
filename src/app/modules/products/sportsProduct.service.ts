import { Types } from 'mongoose';
import { TProduct } from './sportsProduct.interface';
import { Product } from './sportsProduct.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
//delete product

const deleteProductById = async (id: string) => {
  const result = await Product.findOneAndDelete({
    _id: new Types.ObjectId(id),
  });

  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductById,
};
