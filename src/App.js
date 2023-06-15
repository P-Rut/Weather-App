import React, { useState } from "react"
import axios from "axios"
import map from "../src/assets/bg.mp4"
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7154ffaf57292beb5c7ae8a446eeb9cd`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }

  return (
    <div className="app">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={map} />
      </video>
      <div className="header">
        <p className="light">Check weather in every part of the world</p>
      </div>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p> {data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
              <p className="light">Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}

              <p className="light">Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed.toFixed()} km/h</p> : null}
              <p className="light">Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
