import dynamicAPI from 'src/api/axios';
const url = '/api/upload';

export const userAvatar = async (payload:FormData) =>
  await dynamicAPI('post', `${url}/avatar`, payload);
