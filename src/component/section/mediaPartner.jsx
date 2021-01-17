import React from 'react';
import './style/media-partner.css';
import '../../style/App.css'
import antv from '../img/media/antv.png';
import detik from '../img/media/detik.png';
import globatv from '../img/media/globaltv.png';
import jawa from '../img/media/jawa.png';
import kumparan from '../img/media/kumparan.png';
import metrotv from '../img/media/metrotv.png';
import net from '../img/media/net.png';
import rcti from '../img/media/rcti.png';
import sctv from '../img/media/sctv.png';
import tirto from '../img/media/tirto.png';
import transtv from '../img/media/transtv.png';
import tribun from '../img/media/tribun.png';
import tvri from '../img/media/tvri.png';


const containerServices = {
    width: '100%'
}
class MediaPartner extends React.Component {
    render() {
        return (
            <div id="media-partner">
                <h1>MEDIA PARTNER</h1>
                <hr className="line-section" />
                <hr className="line-section" />

                <h5>Our Core in Integrated Marketing Services :</h5>

                <div srtyle={containerServices}>
                    <img src={antv} className="logo-media" />
                    <img src={detik} className="logo-media" />
                    <img src={globatv} className="logo-media" />
                    <img src={jawa} className="logo-media" />
                    <img src={kumparan} className="logo-media" />
                    <img src={metrotv} className="logo-media" />
                    <img src={net} className="logo-media" />
                    <img src={rcti} className="logo-media" />
                    <img src={sctv} className="logo-media" />
                    <img src={tirto} className="logo-media" />
                    <img src={transtv} className="logo-media" />
                    <img src={tribun} className="logo-media" />
                    <img src={tvri} className="logo-media" />

                </div>
            </div >
        );
    }
}

export default MediaPartner;