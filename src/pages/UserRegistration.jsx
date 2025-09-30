import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../Hooks/useAuthContext";
import { useState } from "react";


const UserRegistration = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [registerErrors, setRegisterErrors] = useState({});
  const [message, setMessage] = useState("");


  const {registerUser, isLoading} = useAuthContext()


  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const response = await registerUser(data);

    if(response.success) {

      setMessage(response.message);
      setTimeout(() => navigate("/sign-in"), 3000);

    } else {
      setRegisterErrors(response.error)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Sign Up</h2>
          <p className="text-base-content/70">
            Create an account to get started
          </p>

          <form className="space-y-4 mt-4" onSubmit={handleSubmit( onSubmit )}>
            <div className="form-control">
              <label className="label" htmlFor="first_name">
                <span className="label-text">First Name</span>
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="John"
                className="input input-bordered w-full my-3 focus:border-none"
                {...register("first_name", {required:  "* This Field is Required"})}
              />
              {
                errors.first_name && (
                  <span className="text-red-500">{errors.first_name.message}</span>
                )
              }
            </div>

            <div className="form-control">
              <label className="label" htmlFor="last_name">
                <span className="label-text">Last Name</span>
              </label>
              <input
                id="last_name"
                type="text"
                placeholder="Doe"
                className="input input-bordered w-full my-3 focus:border-none"
                {...register("last_name", {required:  "* This Field is Required"})}
              />
              {
                errors.last_name && (
                  <span className="text-red-500">{errors.last_name.message}</span>
                )
              }
            </div>

            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={`input input-bordered w-full my-3 focus:border-none ${errors.email || registerErrors?.email ? "border-red-600": ""}`}
                {...register("email", {required:  "* This Field is Required"})}
              />
              {
                errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )
              }
              {
                registerErrors?.email && (
                  registerErrors.email.map((error, index) => (
                    <span key={index} className="text-red-500">* {error}</span>
                  ))
                ) 
              }
            </div>

            <div className="form-control">
              <label className="label" htmlFor="phone_number">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                id="phone_number"
                type="text"
                placeholder="0123456789"
                className="input input-bordered w-full my-3 focus:border-none"
                {...register("phone_number")}
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="address">
                <span className="label-text">Address</span>
              </label>
              <input
                id="address"
                type="text"
                placeholder="7/A Dhanmondi, Dhaka"
                className="input input-bordered w-full my-3 focus:border-none"
                {...register("address")}
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full my-3 focus:border-none"
                {...register("password", {
                  required:  "* This Field is Required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  }
                })}
                onChange={(e) => {
                  setPassword(e.target.value);
                  errors.password = null;
                  registerErrors.password = [];
                }}
              />
              {
                errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )
              }
              {
                registerErrors?.password && (
                  registerErrors.password.map((error, index) => (
                    <span key={index} className="text-red-500">* {error} <br /> </span>
                  ))
                ) 
              }
            </div>

            <div className="form-control">
              <label className="label" htmlFor="confirmPassword">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full my-3 focus:border-none"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {
                (password != confirmPassword && confirmPassword.length >= 1) && (
                  <span className="text-red-500">* Password Doesn't Match</span>
                ) 
              }
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-full"
              disabled={isLoading || password !== confirmPassword}
            >
              {
                isLoading ? <span className="loading loading-spinner loading-lg my-2"></span> : "Sign Up"
              }
            </button>

            {
              message.length > 0 && (
                <div role="alert" className="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{message}</span>
                </div>
              )
            }
          </form>

          <div className="text-center mt-4">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <Link to="/sign-in" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;