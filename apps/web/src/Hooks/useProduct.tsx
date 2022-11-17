import { getAllOfProduct, getAllProduct, getProductById, getProductBySlug, } from "@api/product"
import { IProduct } from "@interfaces/Product"
import { useState } from "react"
import { useQuery } from "react-query"


export const  useGetAllProduct = ()=>{
 return useQuery(['product'],getAllProduct,{
  retry:0
 })
}


export const useAllProduct = ()=>{
  const [limit, setLimit] = useState('2')
  return useQuery(['products',{limit}],getAllOfProduct)
}

export const useGetProductById = (id:string)=>{
  return useQuery(['product',{id}],getProductById)
}

export const useGetProduct = (slug:any)=>{
  return useQuery<IProduct>(['product',{slug}],getProductBySlug)
}