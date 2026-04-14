import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter((t) => t.type === "Call").length;
  const textCount = timeline.filter((t) => t.type === "Text").length;
  const videoCount = timeline.filter((t) => t.type === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FF8042" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Friendship Analytics</h2>

      <div className="bg-white shadow rounded-lg p-6 flex justify-center">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            innerRadius="60%"
            outerRadius="90%"
            paddingAngle={5}
            cornerRadius={10}
            dataKey="value"
          />

          <Tooltip />
          <Legend />
          <RechartsDevtools />
        </PieChart>
      </div>
    </div>
  );
}