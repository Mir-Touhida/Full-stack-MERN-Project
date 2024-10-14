import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
  const { signIn, googleSignIn,
    githubSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (event) => {

    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log(form);

    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Login Successful", {
          position: "top-right",
        });
        navigate(location?.state?location.state:'/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("User Google Login Successful", {
          position: "top-right",
        });
        navigate(location?.state?location.state:'/');
      })
      .catch((error) => {
        console.log(error);
      })
  };
  return (
    <div>

      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <form onSubmit={handleLogin}
              className="card-body">
              <h1 className="font-bold">Login Your Account</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" id="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" id="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button onClick={handleGoogleSignin}
                  className="btn btn-outline btn-secondary mt-6">Sign in with Google</button>
                <button className="btn btn-outline btn-accent mt-4">Sign in with GitHub</button>
                <div>

                </div>
                <div>
                  Not Register yet??
                  <Link to="/register"><button className="btn btn-outline btn-error m-2 w-32">Register here</button></Link>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;