import React from "react";
import "../App.css";
import "react-leaflet";
import { historyUrl } from "../utils/urls";

const SensorHistory = (props) => {
  const today = new Date();
  const past30Days = [];

  // Loop through the past 30 days and add them to the array
  for (let i = 0; i < 30; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    past30Days.push({
      displayDate: day.toISOString().slice(0, 10),
      csvUrl: historyUrl(Math.round(day.getTime() / 1000)),
    });
  }

  return (
    <div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bolder",
          textAlign: "start",
          marginTop: "40px",
          marginBottom: "12px",
        }}
      >
        دریافت اطلاعات آب و هوا بر اساس تاریخ:
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 140px)",
          border: "3px solid",
          columnGap: "12px",
        }}
      >
        {past30Days.map((time) => (
          <a
            key={time.displayDate}
            style={{ border: "1px dashed ", cursor: "crosshair" }}
            target="_blank"
            rel="noreferrer"
            href={time.csvUrl}
          >
            {time.displayDate}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SensorHistory;
