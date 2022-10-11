import dynamicAPI from 'src/api/axios';
const url = '/api/products';

export const getAllProduct = async()=>{
  return await dynamicAPI('get',`${url}`,{})
}

export const deleteProduct = async (slug:string)=>{
  return await dynamicAPI('delete',`${url}/${slug}`,{})
}

export const createProduct = async (payload:any)=>{
  return await dynamicAPI('post',`${url}/create`,payload)
}

