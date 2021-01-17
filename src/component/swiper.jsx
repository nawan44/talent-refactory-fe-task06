import React from "react";
import './style/swiper.css';
import '../style/App.css';

import part1 from './img/portofolio/port1.jpg';
import part2 from './img/portofolio/port2.jpg';
import part3 from './img/portofolio/port3.jpg';
import part4 from './img/portofolio/port4.jpg';
import part5 from './img/portofolio/port5.jpg';
import part6 from './img/portofolio/port6.jpg';


// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);

const swip = {
    width: '100%',
    height: '1000px',
    color: '#ffffff'
}


const SwiperPorto = () => {
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
                onSlideChange={() => console.log('slide change')}

            >
                <SwiperSlide> <img src={part1} className="img-swiper" />
                    <div className="description-job">
                        <h2>Job : </h2>
                        <h3 className="job">
                            Sponsorship,
                            Media Partner,
                            Events,
                            Digital Campaign,
                            Brand Activities,
                            Sales Leverage
                        </h3>
                        <hr className="line-section" />
                        <h2>Brand :
                        </h2>
                        <h4 className="desc">
                            Berniaga.com,
                            Kacang Garuda,
                            Hotels for Roadshow,
                            30 Media partners,
                            in 5 cities,
                            Gala Premiere,
                            Press Screening,
                            Nobar,
                            Meet and Greet,
                            Talkshow,
                            Interview,
                            Road Show
                            
                            </h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <img src={part2} className="img-swiper" />
                    <div className="description-job">
                        <h2>Job : </h2>
                        <h3 className="job">
                            Sponsorship, Media Partner, Events, Media Placement, Digital Campaign,  Brand Activities, Sales Leverage
                        </h3>
                        <hr className="line-section" />
                        <h2>Brand :
                        </h2>
                        <h4 className="desc">
                            Yamaha, Pejaten Village, Labels, Restaurants, Clothes, Insurance, 30 Media partners, in 5 cities, Gala Premiere, Press Screening, Nobar,Meet and Greet, Talkshow, Interview, 4 Days Event
                        </h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <img src={part3} className="img-swiper" />
                    <div className="description-job">
                        <h2>Job : </h2>
                        <h3 className="job">
                            Sponsorship, Media Placement, Digital Campaign, Brand Activities, Sales Leverage
                        </h3>
                        <hr className="line-section" />
                        <h2>Brand :
                        </h2>
                        <h4 className="desc">
                            Huawei, Mercy, Jaguar, Metrox, Gala Premiere, Press Screening, Nobar,Meet and Greet, Talkshow, Interview, Roadshow
                        </h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <img src={part4} className="img-swiper" />
                    <div className="description-job">
                        <h2>Job : </h2>
                        <h3 className="job">
                            Sponsorship
                        </h3>
                        <hr className="line-section" />
                        <h2>Brand :
                        </h2>
                        <h4 className="desc">
                            Berniaga.com, Kacang Garuda,  Hotels for Roadshow
                        </h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <img src={part5} className="img-swiper" />
                    <div className="description-job">
                        <h2>Job : </h2>
                        <h3 className="job">
                            Sponsorship, Media Partner, Events, Media Placement, Digital Campaign, Brand Activities, Sales Leverage
                        </h3>
                        <hr className="line-section" />
                        <h2>Brand :
                        </h2>
                        <h4 className="desc">
                            Ayana Hotel and Resort Bali, Rock Bar, Max One, Citilink, Audi
                        </h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <img src={part6} className="img-swiper" />
                    <div className="description-job">
                        <h2>Job : </h2>
                        <h3 className="job">
                            Sponsorship, Media Partner, Events, Media Placement, Digital Campaign,  Brand Activities, Sales Leverage
                        </h3>
                        <hr className="line-section" />
                        <h2>Brand :
                        </h2>
                        <h4 className="desc">



                        </h4>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}


export default SwiperPorto;
