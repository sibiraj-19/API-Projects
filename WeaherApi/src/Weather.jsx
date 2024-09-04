import React, { useState } from "react";
import axios from "axios";
const Key = "d3e95836c71a5a9478fda5cb7cf9f928";
function Weather() {
  const [data, setData] = useState();
  const [city, setCity] = useState("");
  const getdata = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}`
    );
    console.log(res.data);
    setData(res.data);
    
  };
  const clear = () => {
    setData("");
    setCity("");
  };
  return (
    <>
      <div id="container">
        <center>
          <p> City Details </p>
          <div id="weather">
            <input
              type="text"
              placeholder="Enter you city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />{" "}
            <br /> <br />
            <div id="button">
              <div>
                <button onClick={getdata}>get </button>
              </div>
              <div>
                <button onClick={clear}>clear </button>
              </div>
            </div>
            {
            <div id="result">
              <div className="detail"> Detatils: </div>
              {data && (
                <div id="grid">
                  <div className="name">{data.name}</div>
                  <div>Temp : {Math.round(data.main.temp)} C</div>
                  <div>Country : {data.sys.country}</div>
                  <div>Lat : {data.coord.lat}</div>
                  <div>Lon : {data.coord.lon}</div>
                </div>
              )}
            </div>}
          </div>
        </center>
      </div>
    </>
  );
}
export default Weather;
