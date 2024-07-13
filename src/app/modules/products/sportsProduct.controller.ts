import { Request, Response } from 'express';
import { ProductServices } from './sportsProduct.service';

const createProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  console.log(result);

  res.json({
    success: true,
    message: 'Product created successfully',
    data: result,
  });
};

const getAllProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductFromDB(req.query);
  res.json({
    success: true,
    message: 'Successfully retrieve All Products',
    data: result,
  });
};

const getSingleProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductFromDB(id);
  res.json({
    success: true,
    message: 'Successfully Retrieve A Products',
    data: result,
  });
};

const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.updateProductIntoDB(id, req.body);
  res.json({
    success: true,
    message: 'Successfully Update A Products',
    data: result,
  });
};
//delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.deleteProductById(id);

    res.json({
      success: true,
      message: 'Successfully Update A Products',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Product delete failed',
      error: error,
    });
  }
};
export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
