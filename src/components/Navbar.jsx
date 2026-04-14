import { NavLink } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineTimeline } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">KeenKeeper</h2>

        <div className="flex gap-3 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 px-3 py-1 rounded-md ${
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
              `flex items-center gap-1 px-3 py-1 rounded-md ${
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
              `flex items-center gap-1 px-3 py-1 rounded-md ${
                isActive ? "bg-green-900 text-white" : "text-gray-700"
              }`
            }
          >
            <IoStatsChartOutline />
            Stats
          </NavLink>
        </div>
      </div>
    </div>
  );
}