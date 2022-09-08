import  dynamicAPI  from 'src/api/axios';
const url = '/api/user'
export const userSingUp =async (payload:object) => await dynamicAPI('post', `${url}/register`, payload)