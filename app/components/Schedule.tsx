"use client";
import React, { useState } from "react";

// Define the schedule type
type Day =
  | "Saturday"
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

type ScheduleItem = {
  time: string;
  activity: string;
  trainer: string;
};

type ScheduleData = Record<Day, ScheduleItem[]>;

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<Day | "">("");

  const scheduleData: ScheduleData = {
    Saturday: [
      { time: "8am-10am", activity: "Kick Boxing", trainer: "John Doe" },
      { time: "10am-12pm", activity: "Yoga", trainer: "Jane Smith" },
      { time: "12pm-2pm", activity: "Zumba", trainer: "Chris Evans" },
      { time: "2pm-4pm", activity: "HIIT", trainer: "Lara Croft" },
      { time: "4pm-6pm", activity: "Meditation", trainer: "Alice Brown" },
    ],
    Sunday: [
      { time: "8am-10am", activity: "Swimming", trainer: "Alice Brown" },
      { time: "10am-12pm", activity: "Pilates", trainer: "Chris Evans" },
      { time: "12pm-2pm", activity: "Strength Training", trainer: "John Doe" },
      { time: "2pm-4pm", activity: "Dance Fitness", trainer: "Jane Smith" },
      { time: "4pm-6pm", activity: "Cardio Blast", trainer: "Lara Croft" },
    ],
    Monday: [
      { time: "8am-10am", activity: "Kick Boxing", trainer: "John Doe" },
      { time: "10am-12pm", activity: "Yoga", trainer: "Jane Smith" },
      { time: "12pm-2pm", activity: "Zumba", trainer: "Chris Evans" },
      { time: "2pm-4pm", activity: "Body Pump", trainer: "Alice Brown" },
      { time: "4pm-6pm", activity: "Pilates", trainer: "Lara Croft" },
    ],
    Tuesday: [
      { time: "8am-10am", activity: "Aerobics", trainer: "Chris Evans" },
      { time: "10am-12pm", activity: "Power Yoga", trainer: "Jane Smith" },
      { time: "12pm-2pm", activity: "HIIT", trainer: "Lara Croft" },
      { time: "2pm-4pm", activity: "Dance Fitness", trainer: "John Doe" },
      { time: "4pm-6pm", activity: "Kick Boxing", trainer: "Alice Brown" },
    ],
    Wednesday: [
      { time: "8am-10am", activity: "Cardio Blast", trainer: "Lara Croft" },
      { time: "10am-12pm", activity: "Yoga", trainer: "Jane Smith" },
      { time: "12pm-2pm", activity: "Strength Training", trainer: "John Doe" },
      { time: "2pm-4pm", activity: "Zumba", trainer: "Chris Evans" },
      { time: "4pm-6pm", activity: "Meditation", trainer: "Alice Brown" },
    ],
    Thursday: [
      { time: "8am-10am", activity: "Dance Fitness", trainer: "Chris Evans" },
      { time: "10am-12pm", activity: "Pilates", trainer: "Jane Smith" },
      { time: "12pm-2pm", activity: "Aerobics", trainer: "John Doe" },
      { time: "2pm-4pm", activity: "HIIT", trainer: "Lara Croft" },
      { time: "4pm-6pm", activity: "Kick Boxing", trainer: "Alice Brown" },
    ],
    Friday: [
      { time: "8am-10am", activity: "Cardio Blast", trainer: "Jane Smith" },
      { time: "10am-12pm", activity: "Power Yoga", trainer: "Chris Evans" },
      { time: "12pm-2pm", activity: "Zumba", trainer: "John Doe" },
      { time: "2pm-4pm", activity: "Body Pump", trainer: "Alice Brown" },
      { time: "4pm-6pm", activity: "Kick Boxing", trainer: "Lara Croft" },
    ],
  };

  return (
    <div className="w-full px-4 sm:px-8 py-12 bg-gray-900">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-lg sm:text-2xl font-bold text-white">
          ---OUR TIME SCHEDULE
        </h1>
        <p className="text-orange-500 font-bold text-xl sm:text-3xl mt-4">
          SELECT THE PERFECT TIME YOU KNOW
        </p>
      </div>

      {/* Day Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.keys(scheduleData).map((day) => (
          <button
            key={day}
            className={`px-4 py-2 text-sm sm:text-lg font-semibold rounded-md ${
              activeDay === day
                ? "bg-orange-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-orange-400 hover:text-white"
            }`}
            onClick={() =>
              setActiveDay((day as Day) === activeDay ? "" : (day as Day))
            }
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Cards */}
      {activeDay && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleData[activeDay]?.map((item, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg p-6 text-center bg-white border-l-4 border-orange-500 hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl hover:bg-orange-600 hover:text-white"
            >
              <h2 className="text-lg font-bold text-gray-800 sm:text-xl hover:text-white">
                {item.time}
              </h2>
              <h3 className="text-md text-orange-600 mt-2 sm:text-lg hover:text-white">
                {item.activity}
              </h3>
              <p className="text-sm text-gray-500 mt-1 sm:text-md">
                by {item.trainer}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* No Active Day */}
      {!activeDay && (
        <div className="text-center mt-8 text-gray-500">
          <p>Please select a day to view the schedule.</p>
        </div>
      )}
    </div>
  );
};

export default Schedule;
