import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './styles.css';
import Logotopo from './logotopo.png'
import {Link} from 'react-router-dom';

import './global.css';
import './App.css';

import {FaGithub, FaInstagram} from 'react-icons/fa';

class Curriculum extends Component {
  state = {
    name: '',
    cargo: '',
    telefone: 0,
    email: '',
    resi: '',
    dispo: '',
    na: '',
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      
      <div className="Container-curriculum">

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
          <h1>Faça seu Currículo</h1>
          <p>Se você não tem currículo não se preocupe, preencha os campos abaixo e você tera um.</p>
        </div>

        <div style={{color: '#FFF', marginLeft: '5em', marginTop: '6em'}} className="texto">
          <p>Preencha os campos:</p>
        </div>

        <div className="form">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}} className="App">
            <input className="nome" type="text" placeholder="Nome Completo" name="name" onChange={this.handleChange}/>
            <input className="cargo" type="text" placeholder="Cargo" name="cargo" onChange={this.handleChange}/>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}} className="App">
            <input className="telefone" type="number" placeholder="Telefone" name="telefone" onChange={this.handleChange} />
            <input className="email" type="text" placeholder="E-mail" name="email" onChange={this.handleChange}/>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}} className="App">
            <input className="resi" type="text" placeholder="Residência" name="resi" onChange={this.handleChange}/>
            <input className="dispo" type="text" placeholder="Disponibilidade" name="dispo" onChange={this.handleChange}/>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr', color: '#fff', marginTop: '2em'}} className="App">
            <h1>Habilidades</h1>
            <input className="habi" type="text" placeholder="Habilidade" name="habi" onChange={this.handleChange} />
            <input className="habi" type="text" placeholder="Habilidade" name="habi" onChange={this.handleChange} />
            <input className="habi" type="text" placeholder="Habilidade" name="habi" onChange={this.handleChange} />
            <input className="habi" type="text" placeholder="Habilidade" name="habi" onChange={this.handleChange} />
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr', color:  '#fff', marginTop: '2em'}} className="App">
            <h1>Idioma</h1>
            <input className="id1" type="text" placeholder="Idioma" name="id1" onChange={this.handleChange} />
            <input className="grau1" type="text" placeholder="Grau de proficiência" name="grau1" onChange={this.handleChange} />
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr', color: '#fff', marginTop: '2em'}} className="App">
            <h1>Experiência</h1>
            <input className="cargo1" type="text" placeholder="Cargo" name="cargo1" onChange={this.handleChange} />
            <input className="em1" type="text" placeholder="Empresa" name="em1" onChange={this.handleChange} />
            <input className="de1" type="number" placeholder="De" name="de1" onChange={this.handleChange} />
            <input className="ate1" type="number" placeholder="Até" name="ate1" onChange={this.handleChange} />
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr', color: '#fff', marginTop: '2em'}} className="App">
            <h1>Escolaridade</h1>
            <input className="grauu" type="text" placeholder="Grau" name="grau" onChange={this.handleChange} />
            <input className="data" type="number" placeholder="Data de Obtenção" name="data" onChange={this.handleChange} />
            <input className="inst" type="text" placeholder="Instituição de Ensino" name="inst" onChange={this.handleChange} />
          </div>

          <div className="App">
            <button className="button" onClick={this.createAndDownloadPdf}>Download PDF</button>
          </div>
          <div style={{color: '#000'}} className="invi">
            <h1>q</h1>
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}} className="footer" >
                <div className="nome-empresa" style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}} >
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
    );
  }
}

export default Curriculum;
