import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg"

const Navbar = () => {

    const navOptions = (
        <>
          <li className=" text-lg">
            <Link to='/'>Home</Link>
          </li>
          <li className="text-lg">
            <Link to='/users'>Users</Link>
          </li>
         
        </>
      );

    return (
        <div className='navbar z-10 bg-opacity-30  bg-black lg:text-white max-w-screen-xl'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
                {navOptions}
            </ul>
          </div>
          <Link to='/'>
            <img className='h-16 rounded-lg' src={logo} alt='' />
          </Link>
          <a className='btn btn-ghost normal-case text-2xl'>Wesoftin</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
        </div>
      </div>
    );
};

export default Navbar;