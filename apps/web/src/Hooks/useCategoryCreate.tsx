import { createCategory } from "@api/category"
import { useMutation } from "react-query"

export const useCategoryCreate =()=>{
  return  useMutation(createCategory)
}