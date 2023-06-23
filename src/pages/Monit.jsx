import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import "react-leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { request } from "../utils/request";
import { sensorUrl } from "../utils/urls";
import { Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import MarkerSpot from "../component/MarkerSpot";
import SensorHistory from "../component/SensorHistory";

const { Text } = Typography;

const Home = () => {
  const [sensor, setSensor] = useState([]);

  const hamadanLocation = [34.80302185623945, 48.50722400106659];

  const getSensor = async () => {
    const res = await request({
      url: sensorUrl,
    });
    if (!res) return;
    setSensor(res);
  };

  useEffect(() => {
    getSensor();
  }, []);

  return (
    <div className="App">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>
            سیستم اطلاعات آب و هوا دانشگاه بوعلی سینا
          </Text>
          <div className="logo" style={{ height: "50px" }}>
            <img
              style={{ height: "50px" }}
              src="https://basu.ac.ir/image/journal/article?img_id=1625679&t=1570434669333"
              alt="logo"
            />
          </div>
        </div>
      </Header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ margin: "40px auto" }}>
          <MapContainer
            center={hamadanLocation}
            zoom={13}
            style={{ width: "1800px", height: "600px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {sensor.map((x) => (
              <MarkerSpot key={x.Lat + x.Long} {...x} />
            ))}
          </MapContainer>
        </div>
      </div>
      <SensorHistory />
    </div>
  );
};

export default Home;
