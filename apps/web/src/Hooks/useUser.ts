
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUser } from "@interfaces/user"
import { useQuery } from "react-query"
import { getUserDetails } from "src/api"



export const useUser= ()=>{
   return useQuery(['me'], getUserDetails,{
      retry:0
   })
}



