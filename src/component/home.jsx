import React from "react";
import Clients from "../views/clients.jsx";
import About from "../views/about.jsx";
import Services from "../views/services.jsx";
import MediaPartner from "../views/mediaPartner.jsx";
import Contact from "../views/contact.jsx";
import Portofolio from "../views/portofolio.jsx";

class Home extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Services />
        <MediaPartner />
        <Portofolio />
        <Clients />
        <Contact />
      </div>
    );
  }
}

export default Home;
