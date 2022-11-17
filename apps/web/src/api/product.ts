import dynamicAPI from 'src/api/axios';
const url = '/api/products';

export const getAllProduct = async () => {
  return await dynamicAPI('get', `${url}`, {});
};

export const deleteProduct = async (slug: string) => {
  return await dynamicAPI('delete', `${url}/${slug}`, {});
};
export const getProductById = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  return await dynamicAPI('get', `${url}/${id}`, {});
};
export const getProductBySlug = async ({ queryKey }) => {
  const [_key, { slug }] = queryKey;
  return await dynamicAPI('get', `${url}/${slug}`, {});
};
export const createProduct = async (payload: any) => {
  return await dynamicAPI('post', `${url}/create`, payload);
};

export const getAllOfProduct = async ({ queryKey }) => {
  const [_key, limit] = queryKey;
  return await dynamicAPI('get', `${url}/all-product`, { limit });
};
