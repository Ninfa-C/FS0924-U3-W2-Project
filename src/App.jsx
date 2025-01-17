import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import WeatherNav from "./components/WeatherNav";
//import { BrowserRouter, Routes } from "react-router-dom";
import GetCity from "./components/GetCity";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import HomePage from "./components/HomePage";
import CityWeather from "./components/CityWeather";
import { useState } from "react";
import SearchCity from "./components/SearchCity";

function App() {
  const [coord, setCoord] = useState({ lat: 45.1333, lon: 7.3667 });

  const changeCoord = (query) => {
    setCoord(query);
  };
  return (
    <Container fluid className="d-flex">
      <BrowserRouter>
        <WeatherNav />
        <Container fluid className="d-flex flex-column">
          <SearchCity />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/Weather/:id"
              element={<CityWeather coord={coord} />}
            />
            <Route
              path="/Cities/:city"
              element={<GetCity changeCoord={changeCoord} />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </Container>
  );
}

export default App;
