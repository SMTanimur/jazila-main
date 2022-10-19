 console.log('fdjgfdkgj')
    try {
      toast.promise(mutateAsync(data,{onSuccess: async ()=> await queryClient.invalidateQueries(['me'])}),{
        pending: <b>loading...</b>
      })
    } catch (err) {
      console.log('fdjgfdkgj')
      toast.error(getError(err))
    }
    {connectionFactory: (connection) => {
   connection.plugin(require('mongoose-autopopulate'));
    return connection;
  }}

  NX_MONGODB_URI=mongodb://localhost:27017/jazila