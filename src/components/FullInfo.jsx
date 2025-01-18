import { Button, Col, Row } from "react-bootstrap"
import Hour from "./Hour"
import { BrightnessLowFill, DropletHalf, ThermometerHalf, Wind } from "react-bootstrap-icons"

const FullInfo= ({ data, changeFull })=>{
    return(
        <>
          <Hour data={data.list} isAside={false}/>
        <Row className="bg-custom-light mb-3 py-3 rounded-3">
          <Col>
            <Row className="mb-3">
              <Col className="d-flex align-items-center">
                <p className=" fs-sm m-0"> AIR CONDITIONS</p>
              </Col>
              <Col className="text-end">
                <Button variant="primary" size="sm me-2" onClick={changeFull}>
                  See more
                </Button>
              </Col>
            </Row>
            <Row className=" fw-medium opacity-75 mb-3">
              <Col>
                <Row className=" gap-3">
                  <Col xs={1}>
                    <ThermometerHalf size={35} />
                  </Col>
                  <Col>
                    <h6 className=" fw-medium opacity-75">Real Feel</h6>
                    <p className=" fs-2 fw-bold">
                      {Math.round(data.list[0].main.feels_like)}°
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className=" gap-3">
                  <Col xs={1}>
                    <Wind size={35} />
                  </Col>
                  <Col>
                    <h6 className=" fw-medium opacity-75">Wind</h6>
                    <p className=" fs-2 fw-bold">
                      {Math.round(data.list[0].wind.speed * 3.6)} km/h
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className=" fw-medium opacity-75">
              <Col>
                <Row className=" gap-3">
                  <Col xs={1}>
                    <DropletHalf size={35} />
                  </Col>
                  <Col>
                    <h6 className=" fw-medium opacity-75">Chance of rain</h6>
                    <p className=" fs-2 fw-bold">{data.list[0].pop}%</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className=" gap-3">
                  <Col xs={1}>
                    <BrightnessLowFill size={35} />
                  </Col>
                  <Col>
                    <h6 className=" fw-medium opacity-75">Humidity level</h6>
                    <p className=" fs-2 fw-bold">
                      {Math.round(data.list[0].wind.speed)}%
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        </>
    )
}

export default FullInfo