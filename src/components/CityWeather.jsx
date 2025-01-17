/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const CityWeather = (props) => {
  const key = "b23fe8b9076a344ddf31522588a8da78";
  //const query = "torino";
  const unit = "metric";
  const { lat, lon } = props.coord||{};

  // eslint-disable-next-line no-unused-vars
  const [city, setCity] = useState(null);

  const getCityDataAPI = async () => {
    if (!lat || !lon) return; 
    //const Geocoding= `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10&appid=${key}`
    const builtInCity = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`;
    try {
      const response = await fetch(builtInCity);
      if (response.ok) {
        const data = await response.json();
        setCity(data);
        console.log(data);
      } else {
        throw new Error("Errore");
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  useEffect(() => {
    getCityDataAPI();
    {console.log(city)}
  }, [props.coord]);

  if (!city) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Row>
        <Col>
          <h1>{city.city.name}{console.log(city)}</h1> {/* Correctly accessing the city name */}
        </Col>
        <Col>
          {/* Additional weather details can be added here */}
        </Col>
      </Row>
    </>
  );
};

export default CityWeather;
