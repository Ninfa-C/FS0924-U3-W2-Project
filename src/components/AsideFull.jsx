import { Col, Row } from "react-bootstrap"
import Hour from "./Hour"

const AsideFull= ({ data })=>{
    return(
        <>
        <Row className="bg-custom-light mb-3 py-3 rounded-3">
          <p className=" fs-sm mb-2"> TODAY&apos;S FORECAST</p>
          <Hour data={data.list} isAside={true}/>
        </Row>
        <Row className="bg-custom-light mb-3 py-3 rounded-3">
          <Col>
            
          </Col>
        </Row>
        </>
    )
}

export default AsideFull