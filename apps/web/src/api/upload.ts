import dynamicAPI from 'src/api/axios';
const url = '/api/upload';

export const userAvatar = async (payload: FormData) => {
  return await dynamicAPI('post', `${url}/avatar`, payload);
};
export const productImage = async (payload: FormData) => {
  return await dynamicAPI('post', `${url}/product-images`, payload);
};
