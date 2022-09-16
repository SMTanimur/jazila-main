import { useUser } from '@Hooks/useUser';
import { useUserUpdate } from '@Hooks/useUserUpadate';
import React from 'react';

const UserInfoForm = () => {
  const { data: user } = useUser();
  const { errors, onSubmit, register,setImage,isLoading} =
    useUserUpdate();
  return (
    <React.Fragment>
      <form
        className="flex flex-col space-y-3 px-6 bg-white mt-6 py-3 justify-center"
        onSubmit={onSubmit}
      >
        <h5 className="text-xl text-gray-600 font-semibold ">basic Info</h5>
        <div className="flex items-center text-gray-700 text-base">
          <label className="w-[20%]">Your Name</label>
          <input
            type="text"
            defaultValue={user?.name || ''}
            className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
              errors.name
                ? 'border-red-800 focus:border-red-800'
                : 'border-gray-300 focus:border-sky-400 '
            }`}
            {...register('name')}
          />
          {errors.name && (
            <span className=" flex text-red-500 ">{'Name is required'}</span>
          )}
        </div>

        <div className="flex text-gray-700 text-base items-center">
          <label htmlFor="" className="w-[20%]">
            Your Email
          </label>
          <input
            type="text"
            defaultValue={user?.email || ''}
            disabled
            className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300 `}
          />
        </div>
        <div className="flex text-gray-700 text-base items-center">
          <label htmlFor="" className="w-[20%]">
            Your Avatar
          </label>
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setImage(e.target.files[0]);
            }}
            className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300 `}
          />
        </div>

        <div className="flex text-gray-700 text-base items-center">
          <label htmlFor="" className="w-[20%]">
            Your Password
          </label>
          <input
            type="password"
            defaultValue={user?.password || ''}
            className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
              errors.password
                ? 'border-red-800 focus:border-red-800'
                : 'border-gray-300 focus:border-sky-400 '
            }`}
            {...register('password')}
          />
        </div>

        <button type="submit" className="bg-orange-600 py-5 px-10 self-end">
          {isLoading ? 'Loading...' : 'Update Profile'}
        </button>
      </form>
    </React.Fragment>
  );
};

export default UserInfoForm;
