import { useUser } from "@Hooks/useUser";
import { useEffect } from "react";
import Router from 'next/router'

export const withAuthRoute = <T extends void>(
  Component: React.ComponentType<T>
) => {
  const RequireAuthentication = (props: any) => {
    const { data:user } = useUser();
    useEffect(() => {
      if (!user) {
        Router.push("/login");
      }
    }, [user]);
    
    return user ? <Component {...props} /> : null;
  };
  return RequireAuthentication;
};
