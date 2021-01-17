import React from 'react';
import './style/service.css';
import '../../style/App.css'
import services1 from '../img/services/1.png';
import services2 from '../img/services/2.png';
import services3 from '../img/services/3.png';




class Services extends React.Component {
    render() {
        return (
            <div id="services" >
                <h1>WHAT WE DO</h1>
                <hr className="line-section" />
                <hr className="line-section" />

                <h5>Our Core in Integrated Marketing Services :</h5>

                <div className="container-services">
                    <div className="services-left">
                        <img src={services1} className="icon-service" />
                    </div>
                    <div className="services-right">
                        <h2 className="title-services">1. Services 1</h2>
                        <ul>
                            <li className="list-services">Marketing Communication</li>
                            <li className="list-services">Event Services</li>
                            <li className="list-services">Digital Solution</li>

                        </ul>
                    </div>
                    <div className="services-left">
                        <img src={services2} className="icon-service" />
                    </div>
                    <div className="services-right">
                        <h2 className="title-services">2. Services 2</h2>
                        <ul>
                            <li className="list-services">Media Placement</li>
                            <li className="list-services">Public Relations</li>
                            <li className="list-services">Sales Leverage</li>

                        </ul>
                    </div>
                    <div className="services-left">
                        <img src={services3} className="icon-service" />
                    </div>
                    <div className="services-right">
                        <h2 className="title-services">3. Services 3</h2>
                        <ul>
                            <li className="list-services">Media Activities</li>
                            <li className="list-services">Brand Activation</li>
                            <li className="list-services">Integrated Film Solution</li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;