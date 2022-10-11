import { createBrand } from "@api/brand"
import { useMutation } from "react-query"


export const useCreateBrand = ()=>{
   return useMutation(createBrand)
}