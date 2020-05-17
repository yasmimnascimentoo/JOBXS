import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../../../src/global.css';
import './styles.css';

import Logotopo from '../../assets/logotopo.png';

import Democarousel from '../../components/DemoCarousel/index';

import {FaGithub, FaInstagram} from 'react-icons/fa';


export default function  Home() {

    return(
        <div className="container-home">

            <img style={{width: '100px', height: '100px', margin: 100, marginTop: '1em'}}src={Logotopo} alt="LogoJobxs" />

            <Link style={{margin: 38, textAlign: "right", fontSize: 14, marginRight: 5, marginTop: '3em', marginLeft: 1}} className="contato" to="/contact">
                CONTATO
            </Link> 

            <Link style={{margin: 38, textAlign: "right", fontSize: 14, marginRight: 5, marginTop: '3em', marginLeft: 1}} className="sobre" to="/sobre">
                SOBRE
            </Link> 

            <Link style={{margin: 38, textAlign: "right", fontSize: 14, marginTop: '3em'}} className="curriculo" to="/curriculum">
                CURRÍCULO
            </Link>

            <Link style={{margin: 38, textAlign: "right", fontSize: 14,  marginTop: '3em'}} className="home" to="/">
                HOME
            </Link> 

            <Democarousel/>

            <div className="Textos">

                <h1>Sobre</h1>
                <p>Nós somos a Jobxs, somos atualmente um projeto que busca ajudar pessoas </p>
                <p>trans no desenvolvimento profissional e pessoal fazendo com que tenham</p>
                <p>sua vaga no mercado de trabalho.</p>
            </div>
            
            <div className="invisivel">

                <h1>Que</h1>

            </div>

            <hr/>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}} className='footer' >

                <div className="nome-empresa" style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}} >
                    <h4>Jobxs</h4>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between'}} className="dados">
                    <div style={{color: '#000'}}>
                        <h4>Copyrigth</h4>
                        <p>2020 © Jobxs. All Right Reserved.</p>
                    </div>

                    <div className="contatos">
                        <h4>Contact</h4>
                        <p>
                            <a href="mailto:@info@yn.com" class="email">jobxs.hack@gmail.com</a>
                        </p>
                    </div>
                </div>

                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>

                    <a style={{marginLeft: 5, marginRight: 10}} className="github"  href="https://github.com/Yasmimnascimentoo/JOBXS">
                        <FaGithub className="github" size={25} color= "#FFF"/>
                    </a>

                    <a style={{marginLeft: 5, marginRight: 10}} className="instagram"  href="http://instagram.com/job.xs">
                        <FaInstagram className="inst" size={25} color= "#FFF"/>
                    </a>
                </div>
            </div>
        </div>
    );
}