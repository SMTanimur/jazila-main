
export type MyKnownError = string;
export const handleErrorMessage = (err: any): MyKnownError =>
  err.response && (err.response.data?.message || err.response.data?.error)
    ? err.response.data?.message || err.response.data?.error
    : err.message || err.error;
