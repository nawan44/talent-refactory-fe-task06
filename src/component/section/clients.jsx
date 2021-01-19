import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./style/client.css";

import "../../style/App.css";

const containerClient = {
  width: "100%",
};

function Clients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://raw.githubusercontent.com/nawan44/tr-fe-json/main/media_pt.json"
    ).then((res) => {
      setData(res.data);
    });
  });
  return (
    <div id="client">
      <h1>OUR CLIENTS</h1>
      <hr className="line-section" />
      <hr className="line-section" />

      <h5>Here are some our clients that we've worked on :</h5>

      <div srtyle={containerClient}>
        {data.map((item) => (
          <img src={item.media} className="logo-media" />
        ))}
      </div>
    </div>
  );
}

export default Clients;
