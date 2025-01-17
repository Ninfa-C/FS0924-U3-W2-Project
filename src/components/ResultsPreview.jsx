/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
const ResultPreview = (props) => {
  const key = "b23fe8b9076a344ddf31522588a8da78";
  const unit = "metric";

  // eslint-disable-next-line no-unused-vars
  const [city, setCity] = useState(null);

  const getCityDataAPI = async () => {
    //const Geocoding= `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10&appid=${key}`
    const builtInCity = `https://api.openweathermap.org/data/2.5/weather?lat=${props.city.lat}&lon=${props.city.lon}&units=${unit}&appid=${key}`;
    try {
      const response = await fetch(builtInCity);
      if (response.ok) {
        const data = await response.json();
        setCity(data);
      } else {
        throw new Error("Errore");
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  useEffect(() => {
    getCityDataAPI();
  }, [props.city]);

  if (!city || !city.weather || city.weather.length === 0) {
    return <p>Loading...</p>;
  }


  return (
    <Row className="d-flex align-items-center">
      <Col md={1}>
      <Image src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt={city.weather[0].description} />
      </Col>
      <Col md={10}>
        <h4>
          {props.city.name}
        </h4>
        <p>{props.city.state}</p>
        <p>ora locale</p>
      </Col>
      <Col>
        <p className=" fs-1">{Math.round(city.main.temp)}°</p>
      </Col>
    </Row>
  );
};

export default ResultPreview;
