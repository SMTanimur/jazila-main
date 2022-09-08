import { withAuthRedirect } from '@HOC/withAuthRedirect';
import { GetServerSideProps } from 'next';
import React from 'react';
import LoginForm from 'src/shared/LoginForm';
const Login = () => {
  return (
    <section>
      <div
        className=" min-h-screen
          bg-gradient-to-tr
          to-pink-600
          from-sky-400
          sm:p-10
          px-4
          py-24
          flex
          items-center
          justify-center
        "
      >
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
export const getServerSideProps: GetServerSideProps = withAuthRedirect(
  async () => {
    return {
      props: {},
    };
  }
);
