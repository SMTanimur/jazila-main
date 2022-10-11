import { productImage } from "@api/upload"
import { useState } from "react"
import { useMutation } from "react-query"


export const useProductImageUploader = ()=>{
  const [selectedImage, setSelectedImage] = useState();
  const [image, setImage] = useState([]);

   const {mutateAsync,isLoading,data}= useMutation(productImage)
   console.log(data)

   const handleImage = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log(e.target.files[0])
  };
   const handleImageUpload =async () => {
    if (!selectedImage) {
      return;
    }
    try {
      const formData = new FormData();
      formData.append("productImage", selectedImage);
      await mutateAsync(formData,
        {
          onSuccess: async (data)=>{
            console.log(data)
            setImage([...image,data])
          }
        })
    } catch (error) {
      console.error(error)
    }

  }
  return{
    isLoading,
    handleImage,
    handleImageUpload,
    image,
    selectedImage
  }
}