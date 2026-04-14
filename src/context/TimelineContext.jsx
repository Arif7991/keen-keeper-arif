import { createContext, useState } from "react";

export const TimelineContext = createContext(null);

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addTimelineEntry = (type, friendName) => {
    const newEntry = {
      id: crypto.randomUUID(),
      type: type,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    setTimeline((prev) => [newEntry, ...prev]);
  };

  const value = {
    timeline,
    addTimelineEntry,
  };

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;