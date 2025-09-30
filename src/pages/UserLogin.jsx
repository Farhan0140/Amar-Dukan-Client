import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../Hooks/useAuthContext";
import { useEffect } from "react";


const UserLogin = () => {

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  const {user, loginUser, loginError, isLoading} = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      navigate("/dashboard")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onSubmit = (data) => {
    try {
      loginUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-normal font-biscotti">Sign in</h2>
          {
            loginError.length > 0 ? 
            (<span className="text-red-500 block py-1">{loginError} <br /> Please Try again </span>) :
            (<p className="text-base-content/70">Enter your email and password to access your account </p>)
          }

          <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text pb-2">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="input input-bordered w-full focus:border-none"
                {...register("email", {required: "* This Field is Required"})}
              />
              {
                errors.email && (
                  <span className="text-red-500 my-2 block">{errors.email.message}</span>
                )
              }
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text pb-2">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:border-none"
                {...register("password", {required: "This field is Required"})}
              />
              {
                errors.password && (
                  <span className="text-red-500 my-2 block">{errors.password.message}</span>
                )
              }
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-full"
              disabled={isLoading}
            >
              {
                isLoading ? <span className="loading loading-spinner loading-lg"></span> : "Login"
              }
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-base-content/70">
              Don&apos;t have an account?{" "}
              <Link to="/sign-up" className="link link-primary">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;