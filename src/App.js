import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const fetchData = async (name) => {
    let response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${name}`, {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '52b5a7cf93mshb933e49df9c3effp1967fbjsn31fecac23a3f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    });
    const json = await response.json();
    setData([json])
    setName(name);
  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <>
      <Navbar />

      <h2 className='fw-bold text-center my-5'>Search Weather Globally
        <hr style={{
          margin: "15px auto",
          width: "50%",
          height: "8px",
          background: "blue"
        }} />
      </h2>

      <SearchBar onSubmit={fetchData} />

      <div className="container mx-auto my-5">
        {data.map((w, i) => {
          return (
            <div className="row d-flex justify-content-center" key={i}>
              <div className="col-md-4 set-col">
                <h3 className='my-3 text-uppercase' style={{ lineHeight: "40px" }}>Current Weather <br />{name}</h3>
                <div className="row mt-5">
                  <div className="col-sm-6">
                    <i className="fa-solid fa-sun" style={{ fontSize: "9rem" }}></i>
                  </div>
                  <div className="col-sm-6">
                    <span className='fs-1'>{w.temp}&#8451;</span>
                    <p>Real Feel Sun {w.temp + 2}&#8451;</p>
                  </div>
                  <p className='fs-5 mt-4'>Cloudy</p>
                </div>
              </div>
              <div className="col-md-4  p-3">
                <h4 className='d-flex justify-content-between'><span>Feels Like</span> <span>{w.feels_like}</span></h4>
                <hr />
                <h4 className='d-flex justify-content-between'><span>Wind Speed</span> <span>{w.wind_speed}</span></h4>
                <hr />
                <h4 className='d-flex justify-content-between'><span>Humidity</span> <span>{w.humidity}</span></h4>
                <hr />
                <h4 className='d-flex justify-content-between'><span>Max Temperature</span> <span>{w.max_temp - 2}&#8451;</span></h4>
                <hr />
                <h4 className='d-flex justify-content-between'><span>Min Temperature</span> <span>{w.min_temp + 2}&#8451;</span></h4>
                <hr />
              </div>
            </div>
          )
        })}

      </div>

    </>
  );
}

export default App;
