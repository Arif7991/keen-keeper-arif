import { FaUserPlus } from "react-icons/fa";

export default function Banner({ friends }) {
  const totalFriends = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const almostDue = friends.filter((f) => f.status === "almost due").length;
  const overdue = friends.filter((f) => f.status === "overdue").length;

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="btn bg-green-900 text-white mt-5 hover:bg-green-950">
        <FaUserPlus /> Add a Friend
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div className="bg-white p-5 rounded-md shadow text-center">
          <h2 className="text-2xl font-bold">{totalFriends}</h2>
          <p className="text-xs text-gray-500">Total Friends</p>
        </div>

        <div className="bg-white p-5 rounded-md shadow text-center">
          <h2 className="text-2xl font-bold">{onTrack}</h2>
          <p className="text-xs text-gray-500">On Track</p>
        </div>

        <div className="bg-white p-5 rounded-md shadow text-center">
          <h2 className="text-2xl font-bold">{almostDue + overdue}</h2>
          <p className="text-xs text-gray-500">Need Attention</p>
        </div>

        <div className="bg-white p-5 rounded-md shadow text-center">
          <h2 className="text-2xl font-bold">12</h2>
          <p className="text-xs text-gray-500">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
}