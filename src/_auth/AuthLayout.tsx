import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img src="/public/assets/images/slide-image.png" alt="logo"  className="hidden xl:block h-screen w-2/5 object-cover bg-no-repeat"/>
        </>
      )}
    </>
  );
};

export default AuthLayout;
