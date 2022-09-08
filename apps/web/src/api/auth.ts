import { IUser } from '@interfaces/user';
import dynamicAPI from './axios';

const url = '/api/auth';
export const postLogin = async (payload: Partial<IUser>) =>
  await dynamicAPI('post', `${url}/login`, payload);

export const getUserDetails = async () => {
  return await dynamicAPI('get', `${url}/me`, {});
};

export const logOutUser = async () => {
  return await dynamicAPI('delete', `${url}/logout`, {});
};
