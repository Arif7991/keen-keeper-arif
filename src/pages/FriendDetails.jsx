import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
// import toast from "react-hot-toast";
import { FaPhoneAlt, FaSms, FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";
import { RiArchiveFill, RiDeleteBin6Fill, RiNotificationSnoozeFill } from "react-icons/ri";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  const { addTimelineEntry } = useContext(TimelineContext);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const singleFriend = data.find((f) => f.id === parseInt(id));
        setFriend(singleFriend);
      });
  }, [id]);

  if (!friend) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const statusColor =
    friend.status === "overdue"
      ? "bg-red-500"
      : friend.status === "almost due"
      ? "bg-yellow-400"
      : "bg-green-600";

  const handleCheckIn = (type) => {
    addTimelineEntry(type, friend.name);
    toast.success(`${type} added for ${friend.name}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT CARD */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <img
            src={friend.picture}
            className="w-20 h-20 rounded-full mx-auto"
            alt={friend.name}
          />
          <h2 className="font-bold mt-3">{friend.name}</h2>

          <div className="flex justify-center mt-2">
            <span className={`text-white text-xs px-3 py-1 rounded-full ${statusColor}`}>
              {friend.status}
            </span>
          </div>

          <div className="flex justify-center flex-wrap gap-2 mt-3">
            {friend.tags.map((tag, index) => (
              <span key={index} className="badge badge-outline text-xs">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-4 italic">"{friend.bio}"</p>

          <p className="text-xs text-gray-500 mt-2">
            Preferred: {friend.email}
          </p>

          <div className="mt-6 space-y-3">
            <button className="btn btn-outline w-full"><RiNotificationSnoozeFill /> Snooze 2 Weeks</button>
            <button className="btn btn-outline w-full"><RiArchiveFill /> Archive</button>
            <button className="btn btn-outline w-full text-red-500">
               <RiDeleteBin6Fill />Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-6">
          {/* STATS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 shadow rounded-lg text-center">
              <h2 className="text-2xl font-bold">
                {friend.days_since_contact}
              </h2>
              <p className="text-xs text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-5 shadow rounded-lg text-center">
              <h2 className="text-2xl font-bold">{friend.goal}</h2>
              <p className="text-xs text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-5 shadow rounded-lg text-center">
              <h2 className="text-lg font-bold">{friend.next_due_date}</h2>
              <p className="text-xs text-gray-500">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
            <div>
              <h2 className="font-semibold">Relationship Goal</h2>
              <p className="text-sm text-gray-500 mt-1">
                Connect every <span className="font-bold">{friend.goal}</span>{" "}
                days
              </p>
            </div>
            <button className="btn btn-sm btn-outline">Edit</button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="font-semibold mb-4">Quick Check-In</h2>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleCheckIn("Call")}
                className="btn btn-outline flex flex-col "
              >
                <FaPhoneAlt /> Call
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className="btn btn-outline flex flex-col"
              >
                <FaSms /> Text
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className="btn btn-outline flex flex-col"
              >
                <FaVideo /> Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}