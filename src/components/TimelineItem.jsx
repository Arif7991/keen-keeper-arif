import { FaPhoneAlt, FaSms, FaVideo } from "react-icons/fa";

export default function TimelineItem({ item }) {
  const icon =
    item.type === "Call" ? (
      <FaPhoneAlt />
    ) : item.type === "Text" ? (
      <FaSms />
    ) : (
      <FaVideo />
    );

  return (
    <div className="bg-white shadow rounded-lg p-4 flex gap-4 items-center">
      <div className="text-gray-600 text-xl">{icon}</div>

      <div>
        <h2 className="font-semibold">{item.title}</h2>
        <p className="text-xs text-gray-500">{item.date}</p>
      </div>
    </div>
  );
}