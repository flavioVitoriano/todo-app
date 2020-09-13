import React, { useState } from 'react';
import { Link ,useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    //validação na api
    alert('Falha no Login, tente novamente.');

  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="To-do-App"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Seu email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

              <input 
            placeholder="Sua password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
           Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="To-do-App" />
    </div>
  );
}
