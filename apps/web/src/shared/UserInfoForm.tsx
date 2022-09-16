import { useAvatarUpload } from '@Hooks/useAvatarUpload';
import { useUser } from '@Hooks/useUser';
import { useUserUpdate } from '@Hooks/useUserUpadate';
import React from 'react';

const UserInfoForm = () => {
  const { data: user } = useUser();
  const { uploadImage, uploadingImage, fileLink } = useAvatarUpload();
  const { errors, onSubmit, register, isLoading } = useUserUpdate(fileLink);

  return (
    <React.Fragment>
      <form
        className="flex flex-col justify-center px-6 py-3 mt-6 space-y-3 bg-white"
        onSubmit={onSubmit}
      >
        <h5 className="text-xl font-semibold text-gray-600 ">basic Info</h5>
        <div className="flex items-center text-base text-gray-700">
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
            <span className="flex text-red-500 ">{'Name is required'}</span>
          )}
        </div>

        <div className="flex items-center text-base text-gray-700">
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
        <div className="flex items-center text-base text-gray-700">
          <label htmlFor="" className="w-[20%]">
            Your Avatar
          </label>
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e.target.files[0]);
            }}
            className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300 `}
          />
        </div>

        <div className="flex items-center text-base text-gray-700">
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

        <button
          disabled={isLoading || uploadingImage}
          type="submit"
          className={`self-end px-10 py-5 bg-orange-600 ${
            isLoading || uploadingImage ? 'cursor-not-allowed' : ''
          }`}
        >
          {isLoading || uploadingImage ? 'Loading...' : 'Update Profile'}
        </button>
      </form>
    </React.Fragment>
  );
};

export default UserInfoForm;
