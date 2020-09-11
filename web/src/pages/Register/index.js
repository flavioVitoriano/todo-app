import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      await api.post('/users', { email, password });
      alert('Cadastrado com sucesso.');
      history.push('/')
    } catch (err) {
      alert('Falha no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="To-do-App" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e adicione sua própria lista de To-do.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
           Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

          </div>

          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  );
}