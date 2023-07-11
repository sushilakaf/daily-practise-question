/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Nepal");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6b07d7aa964ac5bbd6c7413e833114fd`;
      const response = await fetch(url);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const resjson = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setCity(resjson.main)
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchApi();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search]);
  return (
    <>
      <div>
        <h1 className="main-text">Weather Application</h1>
        <div className="container">
          <input
            type="text"
            placeholder="Enter your Location"
            className="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div className="place-container">
              <h2 className="location">
                <i className="logo"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>

              <h3 className="temp-main">
                Min:{city.temp_min}°Cel | Max:{city.temp_min}°Cel
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
