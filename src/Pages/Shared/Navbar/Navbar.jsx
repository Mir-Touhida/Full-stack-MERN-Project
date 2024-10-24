import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import userPic from "../../../assets/user.png";

const Navbar = () => {
  const {user, logOut}= useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navlink =
   <>
   <li>
    <NavLink to='/'>Home</NavLink>
    </li>
    <li>
    <NavLink to = '/CourseDetails'>All Courses</NavLink>
    </li>
  </>
    return (
        <div className="container mx-auto font-bold bg-base-200"> 
          <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navlink}
      </ul>
    </div>
    <img src="logo.png" alt="logo" srcSet="" className="w-10" />
   <span> <a className="btn btn-ghost text-2xl font-bold">ZsAcademy</a></span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlink}
    </ul>
    
  </div>
  
    {user ? (
      
        <div className="navbar-end">
          {user && <span className="text-white mr-3">{user.displayName}</span>} 
        <div className="w-10 rounded-full mr-2">
            <img alt="User" src={userPic} />
          </div>
      <button 
      onClick={handleSignOut}
       className="btn btn-outline btn-accent">Logout</button>
      </div>
      ) : (
        <div className="navbar-end flex justify-end items-center text-sm">
        <NavLink to="/login"><button className="btn btn-outline btn-accent">Login</button></NavLink>
        </div>
      )
    }
</div>
        </div>
    );
};

export default Navbar;