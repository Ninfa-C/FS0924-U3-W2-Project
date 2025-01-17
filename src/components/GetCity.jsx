import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ResultPreview from "./ResultsPreview";
import { useNavigate, useParams } from "react-router-dom";

const GetCity = (props) => {
  const key = "b23fe8b9076a344ddf31522588a8da78";
  const param = useParams()
  const navigate = useNavigate();
  //const unit = 'metric'

  const [city, setCity] = useState([]);

  const getCityDataAPI = async () => {
    const Geocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${param.city}&limit=10&appid=${key}`;
    // const builtInCity = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=${unit}&appid=${key}`;
    try {
      const response = await fetch(Geocoding);
      if (response.ok) {
        const data = await response.json();
        setCity(data);
        //console.log(data);
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  useEffect(() => {
    getCityDataAPI();
    //console.log(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);


  const clickCity = (item) => {
    props.changeCoord({ lat: item.lat, lon: item.lon });
    navigate(`/Weather/${item.name}`);
  };


  return (
    <>
      {city.length > 1 &&
        city.map((item, i) => (
          <Card key={i} className="bg-custom-light nav-link mb-3 " >
            <Card.Body onClick={() => clickCity(item)}>
              <ResultPreview city={item}/>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default GetCity;
