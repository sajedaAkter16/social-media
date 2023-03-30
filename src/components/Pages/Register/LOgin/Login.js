import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  const { handleGoogleSign, setUser, signin } = useContext(AuthContext);
  const handleLogin = (data) => {
    signin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});

        toast.success("Successfully login");
      })
      .catch((err) => console.log(err));
  };
  const googleSignIn=()=>{
    handleGoogleSign()
    .then(result=>{
      const user=result.user;
      setUser(user)
      console.log(user)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text lg:text-xl">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className="input input-bordered"
              />
              {/* {errors.email && (
                <p role="alert" className="text-red-600">
                  {errors.email?.message}
                </p>
              )} */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text lg:text-xl">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                placeholder="new password"
                className="input input-bordered"
              />
              {/* {errors.password && (
                <p role="alert" className="text-red-600">
                  {errors.password?.message}
                </p> */}
              {/* )} */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <div className="divider">OR</div>
              <div className="grid grid-cols-2 gap-0">
                <div className="border border-2 border-orange-900 p-2 rounded bg-slate-400 text-red-900 text-center text-xl mb-5 mr-4">
                  <button
                  onClick={googleSignIn}
                  >
                    GOOGLE
                  </button>
                </div>
                <div className="border border-2 border-orange-900 p-2 rounded bg-slate-400 text-red-900 text-center text-xl mb-5 mr-4">
                  <button>GITHUB</button>
                </div>
              </div>

              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
