import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./style/about.css";
import "../../style/App.css";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://raw.githubusercontent.com/nawan44/tr-fe-json/main/portofolio_pt.json"
    ).then((res) => {
      setData(res.data);
    });
  });
  return (
    <div id="about">
      <h1>ABOUT</h1>
      {data.map((item) => (
        <h5>
          {item.judul_about}
          <hr className="line-section" />
          <hr className="line-section" />
          <p>{item.desk_about}</p>
        </h5>
      ))}
    </div>
  );
}

export default About;
