import { getAllProduct } from "@api/product"
import { useQuery } from "react-query"

export const  useGetAllProduct = ()=>{
 return useQuery(['product'],getAllProduct,{
  retry:0
 })
}

