import { createProduct } from "@api/product";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";


export const useProductCreate = (images:any[],brand:any,category:any)=>{
  const queryClient = useQueryClient();
  console.log(category)
  console.log(brand)
  console.log(images)
  const {mutateAsync,isLoading}= useMutation(createProduct)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async(payload)=>{
     try {
      if (!isEmpty(images)) {
        payload.productImgs = images;
      }
      if(!isEmpty(brand)){
        payload.brand = brand
      }
      if(category){
        payload.category=category
      }
      await mutateAsync(payload,{
        onSuccess:async()=>{
          toast.success('product create successfully')
          await queryClient.invalidateQueries(['product'])
        }
      })
     } catch (error) {
      console.log(error)
      toast.error('something went wrong')
     }
  })
  return{
    register,
    onSubmit,
    isLoading,
    errors
  }
}