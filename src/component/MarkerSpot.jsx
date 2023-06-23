import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import "react-leaflet";
import { Popup, Marker } from "react-leaflet";
import { Slider } from "antd";

const MarkerSpot = (props) => {
  const { Data: data = {}, Lat: lat, Long: long } = props;
  const [selectedDataAccordingToTime, setSelectedDataAccordingToTime] =
    useState([]);

  const dataArr =
    Object.keys(data).reduce((res, key) => {
      res.push({ features: data[key], time: key });
      return res;
    }, []) ?? [];

  const timesLen = dataArr.length;

  const handleTimeChange = (value = 0) => {
    setSelectedDataAccordingToTime(dataArr[value]?.features ?? []);
  };

  useEffect(() => {
    handleTimeChange(timesLen - 1);
    // eslint-disable-next-line
  }, []);

  return (
    <Marker position={[long, lat]}>
      <Popup>
        <div>
          <div>
            {selectedDataAccordingToTime?.map((time) => (
              <div
                key={time.feature}
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "12px",
                }}
              >
                {time.feature}: {time.amount}{" "}
                {time.dangerous ? (
                  <img
                    alt="dangerous"
                    src="danger.png"
                    style={{ width: "16px" }}
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div style={{ minWidth: "200px" }}>
            <Slider
              min={0}
              max={timesLen - 1}
              tooltip={{
                formatter: (value) => dataArr[value].time?.substring(0, 19),
              }}
              defaultValue={timesLen - 1}
              onChange={handleTimeChange}
            />
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default MarkerSpot;
