import { categoryDetails, getAllCategory } from "@api/category"
import { useQuery } from "react-query"


export const useGetAllCategory =  ()=>{
  return  useQuery(['category'], getAllCategory,{
    retry:0
  })
}

export const useGetCategory =  (slug:any)=>{
  return useQuery(['category',{slug}],categoryDetails,{
    retry:0
  })

}
