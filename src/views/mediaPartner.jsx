import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./style/media-partner.css";
import "../style/App.css";

const containerServices = {
  width: "100%",
};
function MediaPartner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://raw.githubusercontent.com/nawan44/tr-fe-json/main/media_pt.json"
    ).then((res) => {
      setData(res.data);
    });
  });

  return (
    <div id="media-partner">
      <h1>MEDIA PARTNER</h1>
      <hr className="line-section" />
      <hr className="line-section" />

      <h5>Our Core in Integrated Marketing Services :</h5>

      <div srtyle={containerServices}>
        {data.map((item) => (
          <img src={item.media} className="logo-media" />
        ))}
      </div>
    </div>
  );
}

export default MediaPartner;
