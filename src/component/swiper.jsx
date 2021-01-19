import React, { useState, useEffect } from "react";
import "./style/swiper.css";
import "../style/App.css";
import Axios from "axios";
// import part1 from "./img/portofolio/port1.jpg";
// import part2 from "./img/portofolio/port2.jpg";
// import part3 from "./img/portofolio/port3.jpg";
// import part4 from "./img/portofolio/port4.jpg";
// import part5 from "./img/portofolio/port5.jpg";
// import part6 from "./img/portofolio/port6.jpg";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);

const swip = {
  width: "100%",
  height: "1000px",
  color: "#ffffff",
};

const SwiperPorto = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://raw.githubusercontent.com/nawan44/tr-fe-json/main/portofolio_pt.json"
    ).then((res) => {
      console.log("++++++++", res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className="swiper-porto">
      <Swiper
        style={swip}
        spaceBetween={50}
        loop={true}
        autoplay={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.length > 0 &&
          data.map((row) => (
            <SwiperSlide>
              {" "}
              <img src={row.logo_job} className="img-swiper" />
              <div className="description-job">
                <h2>Job : </h2>
                <h3 className="job">{row.nama_job}</h3>
                <hr className="line-section" />
                <h2>Brand :</h2>
                <h4 className="desc">{row.detail_job}</h4>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperPorto;
