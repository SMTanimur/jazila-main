/* eslint-disable @typescript-eslint/no-unused-vars */

import dynamicAPI from 'src/api/axios';
const url = '/api/categories';


export const getAllCategory = async ()=>{
  return await dynamicAPI('get',url,{})
}

export const deleteCategory = async (slug:string)=>{
  return await dynamicAPI('delete',`/api/categories/${slug}`,{})
}

 export const categoryDetails = async ({queryKey})=>{
  const [_key,{slug}]=queryKey
  return await dynamicAPI('get',`/api/categories/${slug}`,{})
 }
export const  createCategory = async (payload)=>{
  return await dynamicAPI('post','/api/categories/create',payload)
}

