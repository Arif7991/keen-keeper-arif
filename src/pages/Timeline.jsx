import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import TimelineItem from "../components/TimelineItem";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-5">Timeline</h2>

      <select
        className="select select-bordered w-full max-w-xs mb-6"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">Filter timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <p className="text-gray-500">No timeline entries yet.</p>
        ) : (
          filteredTimeline.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
}