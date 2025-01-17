import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Make sure to import the required CSS

const Hour = ({ data, isAside }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data.slice(0, 15));
    console.log(items);
  }, [data, isAside]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: isAside ? 3 : 10,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: isAside ? 3 : 10,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: isAside ? 3 : 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: isAside ? 3 : 10,
    },
  };

  return (
    <Carousel responsive={responsive} infinite={false} autoPlay={false}>
      {items.map((item, index) => (
        <div key={index} className="carousel-item ">
          <div className="weather-info">
            <p className=" fs-sm">
              {(() => {
                const [month, day] = item.dt_txt
                  .split(" ")[0]
                  .split("-")
                  .slice(1);
                return `${day}/${month}`;
              })()}
            </p>

            <p className=" fs-sm">
              {(() => {
                const time = parseInt(
                  item.dt_txt.split(" ")[1].split(":").slice(0, 1)
                );
                const period = time >= 0 && time < 12 ? "AM" : "PM";
                return `${time}:00 ${period}`;
              })()}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              style={{ width: "60px", height: "60px" }}
            />
            <p>{Math.round(item.main.temp)}°C</p>
            <p>{item.weather.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hour;
