import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {FaGithub, FaInstagram} from 'react-icons/fa';

import Logotopo from '../../assets/logotopo.png';

import '../../../src/global.css';
import './styles.css';

export default function Sobre() {

    return(

        <div className="Container-sobre">
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


            <div style={{marginLeft: '3em'}}  className="Nomes-cima">
                <h1>Olá! Somos a Jobxs</h1>
                <p>Criamos uma solução que visa ajudar na empregabilidade da comunidade trans.</p>
            </div>


            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', textAlign: 'center', marginTop: '2em'}} className="Nomes-meio">

            <div className="textoss1">
                <p style={{marginTop: '4em'}}>Criamos soluções inovadoras</p>
                <p style={{marginTop: '1em'}} >para ajudar a todxs.</p>
            </div>

            <div  className="Column">
                <p>Nós somos a Jobxs, somos atualmente um projeto que busca ajudar pessoas </p>
                <p>trans no desenvolvimento profissional e pessoal fazendo com que tenham</p>
                <p>sua vaga no mercado de trabalho.</p>

                <h2>Parcerias</h2>

                <p>Accenture, One Choice, Zeropay e Joy.</p>

                <h4>Soluções</h4>
                
                <ul className="lis">
                    <li>Criação de currículos</li>
                    <li>Disponibilização de vagas</li>
                    <li>Entrevista Online</li>
                    <li>Teste vocacional</li>
                </ul>
            </div>
            </div>

            <div className="Column-2">
                <h3>Quer ser nosso parceirx?</h3>
                <p>Entre em contato conosco!</p> 
                    
                <Link className="btn" to="/contact">
                    CONTATO
                </Link> 
            </div>

            <hr></hr>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}} className="footer" >

                <div className="nome" style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}} >
                    <h4>JOBXS</h4>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between'}} className="dados">
                    <div style={{color: '#fff'}}>
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