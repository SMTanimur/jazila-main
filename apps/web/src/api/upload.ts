import dynamicAPI from 'src/api/axios';
const url = '/api/upload';

export const userAvatar = async (payload:any) =>
  await dynamicAPI('post', `${url}/avatar`, payload);
