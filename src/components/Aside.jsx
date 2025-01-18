import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const AsideFull = ({ data }) => {
  const [days, setDays] = useState([]);

const Dates = (items) =>{
  return items.reduce((acc, element) =>{
    if (!element || !element.dt_txt) {
      return
    }
    const singleDay = element.dt_txt.split(" ")[0];
    if(!acc[singleDay]){
      acc[singleDay] = []
    }
    acc[singleDay].push(element);
    return acc;
  }, {})
}

const newArray = (array) =>{
const max = Math.max (...array.map((item)=> item.main.temp))
const min = Math.min (...array.map((item)=> item.main.temp))
const { mostFrequentWeather, weatherIcon } = array.reduce(
  (acc, item) => {
    const weather = item.weather[0]?.main;
    if (weather) {
      acc.weatherCount[weather] = (acc.weatherCount[weather] || 0) + 1;
      if (
        acc.weatherCount[weather] > (acc.weatherCount[acc.mostFrequentWeather] || 0)
      ) {
        acc.mostFrequentWeather = weather;
        acc.weatherIcon = item.weather[0]?.icon;
      }
    }
    return acc;
  },
  { weatherCount: {}, mostFrequentWeather: "", weatherIcon: "" }
);
return { max, min, mostFrequentWeather, weatherIcon };
};


  useEffect(() => {
    if (data.list) {
      const groupedData = Dates(data.list);
      const detailedData = Object.values(groupedData).map((group) => {
        const { max, min, mostFrequentWeather, weatherIcon } = newArray(group);
          return {
          date: group[0]?.dt_txt.split(" ")[0],
          max,
          min,
          mostFrequentWeather,
          weatherIcon,
        };
      });
  
      setDays(detailedData);
    }
  }, [data]);

  return (
    <>
      <Row className="bg-custom-light mb-3 py-3 rounded-3">
        <Col>
        <p className=" fs-sm mb-3 fw-bold"> 6-DAY FORECAST</p>
          {console.log(days)}
          {days.length > 1 &&
            days.map((item, i) => {
              return (
                <Row key={i} className=" mb-3  d-flex align-items-center text-center">
                  <Col xs={3}>
                    <p className="fs-sm" key={i}>
                      {(() => {
                        const [month, day] = item.date.split("-").slice(1);
                        return `${day}/${month}`; // Formatta la data come "DD/MM"
                      })()}
                    </p>
                  </Col>
                  <Col xs={6}>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weatherIcon}@2x.png`}
                      alt={item.mostFrequentWeather}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <span className="fw-bold opacity-75">
                      {item.mostFrequentWeather}
                    </span>
                  </Col>
                  <Col xs={3}>
                    <p>{Math.round(item.max)}°/{Math.round(item.min)}°</p>
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
    </>
  );
};

export default AsideFull;
