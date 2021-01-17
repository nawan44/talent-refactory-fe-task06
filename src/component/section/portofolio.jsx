import React from 'react';
import './style/portofolio.css';
import SwiperPorto from '../swiper.jsx';
import { Row } from 'reactstrap';

class Portofolio extends React.Component {
    render() {
        return (
            <div id="portofolio">
                <h1>OUR WORK</h1>
                <hr className="line-section" />
                <hr className="line-section" />
                <h5>Examples of our work which represent our marketing capabilities.</h5>
                <div className="row-swiper">
                    <SwiperPorto />

                </div>
            </div>
        );
    }
}

export default Portofolio;