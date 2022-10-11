/* eslint-disable react-hooks/rules-of-hooks */
import { SizeList } from '@data/categoriseItem';
import { useGetAllBrand } from '@Hooks/useBrand';
import { useProductCreate } from '@Hooks/useCreateProduct';
import { useGetAllCategory } from '@Hooks/useGetAllCategory';
import { useProductImageUploader } from '@Hooks/useProductImages';
import Image from 'next/image';
import React, { useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';

const NewProductForm = () => {
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const {
    handleImage,
    handleImageUpload,
    image,
    isLoading: imageLoader,
    selectedImage,
  } = useProductImageUploader();
  console.log(image);
 
  const { data: categories } = useGetAllCategory();
  const { data: brands } = useGetAllBrand();
  const { onSubmit, register, isLoading, errors } = useProductCreate(
    image,
    brand,
    category
  );
  return (
    <React.Fragment>
      <form action="" className="" onSubmit={onSubmit}>
        <div className=" grid sm:grid-cols-2 gap-6 mb-5">
          <div>
            <label className=" text-gray-200 text-sm font-bold ">Name</label>
            <input
              className={`border-2 
                    focus:text-sky-500 placeholder:italic placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800 focus:outline-none  ${
                      errors.name
                        ? 'border-red-800 focus:border-red-800'
                        : 'border-sky-800 focus:border-sky-400 '
                    }`}
              type="text"
              placeholder="Product name"
              {...register('name', {
                required: true,
                maxLength: 20,
              })}
            />
            . {errors.name && <span className=" flex text-red-500 ">ty</span>}
          </div>

          <div>
            <label className=" text-gray-200 text-sm font-bold ">Price</label>
            <input
              className={`appearance-none border-2 
                    focus:text-sky-500 placeholder:italic placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800  focus:bg-gray-800 focus:outline-none  ${
                      errors.price
                        ? 'border-red-800 focus:border-red-800'
                        : 'border-sky-800 focus:border-sky-400 '
                    }`}
              type="number"
              placeholder="Product name"
              {...register('price', {
                required: true,
              })}
            />
            {errors.price && <span className=" flex text-red-500 ">price</span>}
          </div>
        </div>

        <div className=" grid sm:grid-cols-2 gap-6 mb-5">
          <div>
            <label className=" text-gray-200 text-sm font-bold ">Stock</label>
            <input
              className={` appearance-none border-2 
                    focus:text-sky-500 placeholder:italic placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800  focus:bg-gray-800 focus:outline-none  ${
                      errors.stocks
                        ? 'border-red-800 focus:border-red-800'
                        : 'border-sky-800 focus:border-sky-400 '
                    }`}
              type="number"
              placeholder="Product Stock"
              {...register('stocks', {
                required: true,
              })}
            />
            {errors.price && <span className=" flex text-red-500 ">Stock</span>}
          </div>
          <div>
            <label className=" text-gray-200 text-sm font-bold ">
              Categories
            </label>
            <select
              className={`  py-2 border-2 
                    focus:text-sky-500 placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800  focus:bg-gray-800 focus:outline-none`}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose Category</option>
              {categories &&
                categories.map((category) => (
                  <option
                    key={category._id}
                    className=" text-slate-400"
                    value={category._id}
                  >
                    {category.categoryName}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className=" grid sm:grid-cols-2 gap-6 mb-5">
          <div>
            <label className=" text-gray-200 text-sm font-bold ">Brand</label>
            <select
              className={`  py-2 border-2 
                    focus:text-sky-500 placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800  focus:bg-gray-800 focus:outline-none `}
              onChange={(e) => setBrand(e.target.value)}
            >
              {brands &&
                brands.map((brand) => (
                  <option
                    key={brand._id}
                    className=" text-slate-400"
                    value={brand._id}
                  >
                    {brand.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className=" text-gray-200 text-sm font-bold ">Size</label>
            <select
              className={`  py-2 border-2 
                    focus:text-sky-500 placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800  focus:bg-gray-800 focus:outline-none ${
                      errors.size
                        ? 'border-red-800 focus:border-red-800'
                        : 'border-sky-800 focus:border-sky-400 '
                    }`}
              {...register('size')}
            >
          
              {SizeList.map((List) => (
                <option key={List} className=" text-slate-400" value={List}>
                  {List}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-5 flex flex-col space-y-4 md:flex-row  justify-between items-center">
          <div className="w-full flex gap-6 justify-center md:justify-start items-center">
            {image.map((singleImage, index) => (
              <Image
                className=" mx-6 rounded hover:opacity-80"
                alt="Product Preview"
                key={index}
                src={singleImage}
                layout="fixed"
                width={40}
                height={40}
              />
            ))}
          </div>
          <div className="w-[60%] flex md:flex-row flex-col gap-4 justify-between items-center ">
            <label className="block">
              <span className="sr-only">photo</span>
              <input
                type="file"
                accept="image/*"
                disabled={imageLoader}
                onChange={handleImage}
                className="block  file:transition file:duration-300 text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-l file:border-sky-400 file:text-sm file:font-semibold file:bg-sky-700 file:bg-opacity-25 file:text-sky-500 hover:file:text-white hover:file:bg-sky-900 focus:file:outline-none"
              />
            </label>
            <button
              type="button"
              onClick={handleImageUpload}
              hidden={!selectedImage}
              className=" mb-3 py-2 px-4 bg-pink-600 rounded-lg text-white z-30 hover:bg-opacity-80 transition duration-300"
            >
              {imageLoader ? (
                <ProgressBar
                  height="30"
                  width="30"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#F4442E"
                  barColor="#51E5FF"
                />
              ) : (
                'upload'
              )}
            </button>
          </div>
        </div>
        <div className="mb-5">
          <label className=" text-gray-200 text-sm font-bold ">Descriptions</label>
          <textarea
            className={`border-2 border-sky-800 placeholder-gray-500 placeholder:italic focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200   w-full resize-none  h-28 p-4 shadow rounded bg-gray-800 focus:outline-none ${
              errors.descriptions
                ? 'border-red-800 focus:border-red-800'
                : 'border-sky-800 focus:border-sky-400 '
            }`}
            placeholder="Product Description"
            {...register('descriptions', {
              required: true,
            })}
          ></textarea>
          {errors.price && (
            <span className=" flex text-red-500 ">description</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-12 border hover:border-sky-400 hover:bg-sky-800  border-sky-500  bg-gray-900  px-7 rounded text-sm text-sky-400 hover:text-white font-medium duration-200"
        >
          Create Product
        </button>
      </form>
    </React.Fragment>
  );
};

export default NewProductForm;
