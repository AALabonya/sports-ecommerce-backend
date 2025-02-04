import { Types } from 'mongoose';
import { TProduct } from './sportsProduct.interface';
import { Product } from './sportsProduct.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { SearchableFields } from './sportsProduct.constant';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const { category, ...otherFilters } = query;

  const productQuery = new QueryBuilder(
    Product.find().sort({ createdAt: -1 }),
    otherFilters,
  )
    .filter()
    .sort()
    .fields()
    .search(SearchableFields);

  // Add category filter if provided
  if (category) {
    productQuery.modelQuery = productQuery.modelQuery.where({ category });
  }

  const result = await productQuery.modelQuery;
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
