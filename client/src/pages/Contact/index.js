import React, {useState, useEffect, Component} from 'react';

import {Link} from 'react-router-dom';


import {EmailShareButton} from 'react-share';
import '../../../src/global.css';
import './styles.css';

import Logotopo from '../../assets/logotopo.png';
import {FaGithub, FaInstagram} from 'react-icons/fa';

export default function Contact() {
    const Title = "Parceria"
    
    return(
        <div className="Container-about">
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
            <div style={{marginLeft: '5em'}}  className="Nomes-cima">
                <h1>Vamos conversar?</h1>
                <p>Entre em contato conosco para conhecer mais dos nossos produtos ou para tirar alguma dúvida</p>
            </div>

            <div style={{color: '#FFF', marginLeft: '5em', marginTop: '6em'}} className="texto">
                <p>Contato</p>
            </div>

            <div className="Contato">
                <form style={{display: 'flex', flex: '0 0 auto', flexFlow: 'row wrap'}} >
                        <div  className="col">
                            <div className="form">
                                <input type="text" placeholder="Nome" required />
                            </div>
                        </div>

                        <div className="col">
                            <div className="form">
                                <input  type="email" placeholder="E-mail" required />
                            </div>
                        </div>

                        <div style={{marginTop: '3em', marginRight: '50em'}}  className="form">
                            <textarea placeholder="Mensagem"></textarea>
                        </div>

                        <EmailShareButton
                            subject={Title}
                            url={"jobxs.hack@gmail.com"}
                        >
                            <div className="form">
                                <button className="botaoo">SEND MESSAGE</button>
                            </div>
                        </EmailShareButton>

                        <div style={{marginTop: '-16em'}} className="dados">
                            <h2 >Telefone</h2>
                            <p>(81) 9 0000-000</p>


                            <h4>Email</h4>
                            <p>jobxs.hack@gmail.com</p>
                        </div>
                </form>

                <div className="invi">
                    <h1>oi</h1>
                </div>

                <hr/>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}} className="footer" >

                <div className="nome" style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}} >
                    <h4>Jobxs</h4>
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
        </div>
    );
}