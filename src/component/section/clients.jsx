import React from 'react';
import './style/client.css';

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


const containerClient = {
    width: '100%'
}



class Clients extends React.Component {
    render() {
        return (
            <div id="client">
                <h1>OUR CLIENTS</h1>
                <hr className="line-section" />
                <hr className="line-section" />

                <h5>Here are some our clients that we've worked on :</h5>

                <div srtyle={containerClient}>
                    <img src={antv} className="logo-client" />
                    <img src={detik} className="logo-client" />
                    <img src={globatv} className="logo-client" />
                    <img src={jawa} className="logo-client" />
                    <img src={kumparan} className="logo-client" />
                    <img src={metrotv} className="logo-client" />
                    <img src={net} className="logo-client" />
                    <img src={rcti} className="logo-client" />
                    <img src={sctv} className="logo-client" />
                    <img src={tirto} className="logo-client" />
                    <img src={transtv} className="logo-client" />
                    <img src={tribun} className="logo-client" />
                    <img src={tvri} className="logo-client" />

                </div>
            </div>
        );
    }
}

export default Clients;