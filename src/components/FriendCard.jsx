import { useNavigate } from "react-router";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusColor =
    friend.status === "overdue"
      ? "bg-red-500"
      : friend.status === "almost due"
      ? "bg-yellow-400"
      : "bg-green-600";

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white shadow rounded-lg p-5 cursor-pointer hover:shadow-lg transition"
    >
      <div className="flex justify-center">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={friend.picture}
          alt={friend.name}
        />
      </div>

      <h2 className="text-center font-semibold mt-3">{friend.name}</h2>
      <p className="text-center text-xs text-gray-500">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex justify-center gap-2 mt-3 flex-wrap">
        {friend.tags.map((tag, index) => (
          <span key={index} className="badge font-semibold uppercase text-xs bg-green-100">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-center mt-3">
        <span className={`text-white text-xs px-3 py-1 rounded-full ${statusColor}`}>
          {friend.status}
        </span>
      </div>
    </div>
  );
}