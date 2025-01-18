/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import FullInfo from "./FullInfo";
import SeeMore from "./SeeMore";
import Aside from "./Aside";
import Hour from "./Hour";

const CityWeather = (props) => {
  const key = "b23fe8b9076a344ddf31522588a8da78";
  //const query = "torino";
  const unit = "metric";
  const { lat, lon } = props.coord || {};

  // eslint-disable-next-line no-unused-vars
  const [city, setCity] = useState(null);
  const [show, setShow] = useState(true);

  const getCityDataAPI = async () => {
    if (!lat || !lon) return;
    //const Geocoding= `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10&appid=${key}`
    const builtInCity = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`;
    try {
      const response = await fetch(builtInCity);
      if (response.ok) {
        const data = await response.json();
        setCity(data);
        //console.log(data);
      } else {
        throw new Error("Errore");
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  const changeFull = () => {
    setShow(!show);
  };

  useEffect(() => {
    getCityDataAPI();

    //{console.log(city)}
  }, [props.coord]);

  if (!city) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Row className="d-flex d-flex gap-4">
        <Col xs={12} md={8}>
          <Row className=" align-items-start mb-3">
            <Col>
              <Row className="mb-2">
                <Col>
                  <h1>
                    {city.city.name},{" "}
                    <span className="fs-sm">{city.city.country}</span>
                  </h1>
                  <p>Chance of raining : {city.list[0].pop}%</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>
                    <p className=" fs-1">
                      {Math.round(city.list[0].main.temp)}°
                    </p>
                  </h1>
                </Col>
              </Row>
            </Col>
            <Col className="text-end">
              <Image
                src={`http://openweathermap.org/img/wn/${city.list[0].weather[0].icon}@2x.png`}
                alt={city.list[0].weather[0].description}
                style={{ width: "150px", height: "150px" }}
              />
            </Col>
          </Row>
          <Row className="m-0 ">
            {show && <FullInfo data={city} changeFull={changeFull} />}
            {!show && <SeeMore data={city} changeFull={changeFull} />}
          </Row>
        </Col>
        <Col xs={12} md={3}>
          {!show && <Hour data={city.list} isAside={true} />}
          <Aside data={city} changeFull={changeFull} />
        </Col>
      </Row>
    </>
  );
};

export default CityWeather;
