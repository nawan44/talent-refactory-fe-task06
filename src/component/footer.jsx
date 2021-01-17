import React from 'react';
import './style/footer.css';

import { Container, Col, Row } from 'reactstrap';


const medsos = {
    color: '#ffffff',
    fontSize: '40px',
    float: 'left',
    padding: '24px',
    textAlign: 'center',
    margin: '0 auto'
}

class Footer extends React.Component {
    render() {
        return (
            <div className="app-footer" >
                <div className="address-detail">
                    <div className="contact-details">
                        <div className="title-contact">
                            <i class='fas fa-phone-alt'></i>
                            <h4>
                                Call</h4>
                        </div>
                        <p><a href="https://wa.me/+6281xxxxxxxx" className="footer-text">081xxxxxxxx</a></p>
                    </div>
                    <div className="contact-details">
                        <div className="title-contact">
                            <i class='fas fa-map-marker-alt'></i>
                            <h4>
                                Visit</h4>
                        </div>
                        <p> <a href="https://goo.gl/maps/GpjMTqSTKenzxpkw8" className="footer-text">Jl. KH AHmad Junaedi 2 No 15  <br />Bekasi</a></p>
                    </div>
                    <div className="contact-details">
                        <div className="title-contact">
                            <i class='fas fa-envelope'></i>
                            <h4>
                                Email</h4>
                        </div>
                        <p><a href="mailto:info@rsmartcomm.com" className="footer-text">info@rachwn.com</a>
                        </p>
                    </div>
                </div>
                <Row className="social">
                    {/* <div className="social-medsos-left" >

                    </div> */}
                    <div className="social-medsos-center" >
                       <div className="container-medsos">
                       <a href="https://facebook.com">
                            <i class='fab fa-facebook-square' style={medsos} ></i>
                        </a>
                        <a href="https://instagram.com">
                            <i class='fab fa-instagram' style={medsos}>

                            </i>
                        </a>

                        <a href="https://linkedin.com">
                            <i class='fab fa-linkedin' style={medsos}></i>
                        </a>
                       </div>
                    </div>
{/* 
                    <div className="social-medsos-right">

                    </div> */}
                </Row>
                <div className="col-copy">
                    <p className="copyright">&copy; Rachwan all right reserved.</p>
                </div>
            </div>
        );
    }
}

export default Footer;