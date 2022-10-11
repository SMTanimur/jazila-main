import dynamicAPI from "./axios"



export const getAllBrand = async ()=>{
  return await dynamicAPI('get','/api/brand', {})
}

export const createBrand = async (payload:object)=>{
  return await dynamicAPI('post','/api/brand/create',payload)
}

export const deleteBrand = async (slug:string)=>{
  return await dynamicAPI('delete',`/api/brand/${slug}`,{})
}