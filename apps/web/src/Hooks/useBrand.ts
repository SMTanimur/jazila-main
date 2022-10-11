import { getAllBrand } from "@api/brand"
import { useQuery } from "react-query"


export const useGetAllBrand =()=>{
  return useQuery(['brand'],getAllBrand,{
    retry:0
  })
}