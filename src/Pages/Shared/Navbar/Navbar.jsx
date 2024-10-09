import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const navlink =
   <>
   <li>
    <NavLink to='/'>Home</NavLink>
    </li>
    <li>
    <NavLink to = '/courseDetail'>Products</NavLink>
    </li>
  </>
    return (
        <div className="w-full bg-base-200"> 
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
    <img src="https://live.staticflickr.com/65535/52412638962_12e932256a_o.png" alt="logo" srcset="" className="w-10" />
   <span> <a className="btn btn-ghost text-2xl font-bold">JSAcademy</a></span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlink}
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink to="/login"><button className="btn btn-outline btn-accent">Login</button></NavLink>
  </div>
</div>
        </div>
    );
};

export default Navbar;