import { Button, Col, Row } from "react-bootstrap";
import {
  BrightnessLowFill,
  DropletHalf,
  Eye,
  Speedometer2,
  SunriseFill,
  Sunset,
  ThermometerHalf,
  Wind,
} from "react-bootstrap-icons";

const SeeMore = ({ data, changeFull }) => {

    const formatTime = (timestamp, offset) =>
        new Date((timestamp + offset) * 1000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });

  return (
    <>
      <Row className=" mb-3 py-3 rounded-3">
        <Col className="d-flex align-items-center">
          <p className=" fs-sm m-0"> AIR CONDITIONS</p>
        </Col>
        <Col className="text-end">
          <Button variant="primary" size="sm me-2" onClick={changeFull}>
            See less
          </Button>
        </Col>
      </Row>
      <Row className=" fw-medium opacity-75 mb-3 gap-4">
        <Col>
          <Row className=" gap-3 rounded-3 bg-custom-light py-3">
            <Col xs={1}>
              <ThermometerHalf size={35} />
            </Col>
            <Col>
              <h6 className=" fw-medium opacity-75">Real Feel</h6>
              <p className=" fs-1 fw-bold">
                {Math.round(data.list[0].main.feels_like)}°
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className=" gap-3 rounded-3 bg-custom-light py-3">
            <Col xs={1}>
              <Wind size={35} />
            </Col>
            <Col>
              <h6 className=" fw-medium opacity-75">Wind</h6>
              <p className=" fs-1 fw-bold">
                {Math.round(data.list[0].wind.speed * 3.6)} km/h
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className=" fw-medium opacity-75 mb-3 gap-4">
        <Col>
          <Row className=" gap-3 rounded-3 bg-custom-light py-3">
            <Col xs={1}>
              <DropletHalf size={35} />
            </Col>
            <Col>
              <h6 className=" fw-medium opacity-75">Chance of rain</h6>
              <p className=" fs-1 fw-bold">{data.list[0].pop}%</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className=" gap-3 rounded-3 bg-custom-light py-3">
            <Col xs={1}>
              <BrightnessLowFill size={35} />
            </Col>
            <Col>
              <h6 className=" fw-medium opacity-75">Humidity level</h6>
              <p className=" fs-1 fw-bold">
                {Math.round(data.list[0].wind.speed)}%
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className=" fw-medium opacity-75 mb-3 gap-4">
        <Col>
          <Row className=" gap-3 rounded-3 bg-custom-light py-3">
            <Col xs={1}>
              <Eye size={35} />
            </Col>
            <Col>
              <h6 className=" fw-medium opacity-75">VISIBILITY</h6>
              <p className=" fs-1 fw-bold">
                {(data.list[0].visibility / 1000).toFixed(0)} km
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className=" gap-3 rounded-3 bg-custom-light py-3">
            <Col xs={1}>
              <Speedometer2 size={35} />
            </Col>
            <Col>
              <h6 className=" fw-medium opacity-75">PRESSURE</h6>
              <p className=" fs-1 fw-bold">{data.list[0].main.pressure} hPa</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className=" fw-medium opacity-75 mb-3 gap-4">
        <Col>
          <Row className=" gap-3 rounded-3 bg-custom-light py-3">
            <Col xs={1}>
              <SunriseFill size={35} />
            </Col>
            <Col>
              <h6 className=" fw-medium opacity-75">SUNRISE</h6>
              <p className=" fs-1 fw-bold">{formatTime(data.city.sunrise, data.city.timezone)}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className=" gap-3 rounded-3 bg-custom-light py-3">
            <Col xs={1}>
              <Sunset size={35} />
            </Col>
            <Col>
              <h6 className=" fw-medium opacity-75">SUNSET</h6>
              <p className=" fs-1 fw-bold">
              {formatTime(data.city.sunset, data.city.timezone)}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SeeMore;
