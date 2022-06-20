import { Product } from 'interfaces/product';
import { Supplier } from 'interfaces/supplier';
import { axiosApi } from './axios';

export const getProductList = async (): Promise<Product[]> => {
  const { data } = await axiosApi.get<Product[]>('/products');
  return data;
};

export const getSupplierList = async (): Promise<Supplier[]> => {
  const { data } = await axiosApi.get<Supplier[]>('/suppliers');
  return data;
};
