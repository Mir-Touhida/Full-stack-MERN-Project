import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    
      <form className="card-body">
      <h1 className="font-bold">Login Your Account</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-outline btn-secondary mt-6">Sign in with Google</button>
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