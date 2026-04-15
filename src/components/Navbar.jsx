import { NavLink } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineTimeline } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";

export default function Navbar() {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive ? "bg-green-900 text-white" : "text-gray-700"
          }`
        }
      >
        <AiOutlineHome />
        Home
      </NavLink>

      <NavLink
        to="/timeline"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive ? "bg-green-900 text-white" : "text-gray-700"
          }`
        }
      >
        <MdOutlineTimeline />
        Timeline
      </NavLink>

      <NavLink
        to="/stats"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive ? "bg-green-900 text-white" : "text-gray-700"
          }`
        }
      >
        <IoStatsChartOutline />
        Stats
      </NavLink>
    </>
  );

  return (
    <div className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h2 className="text-2xl md:text-3xl">
          <span className="font-bold">Keen</span>
          <span className="text-green-900 font-semibold">Keeper</span>
        </h2>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-3 text-lg font-semibold">
          {navLinks}
        </div>

        {/* MOBILE MENU */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
}