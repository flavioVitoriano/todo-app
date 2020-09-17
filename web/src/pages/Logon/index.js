import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { useForm } from "react-hook-form";
import { useStore } from "Store";
import { toast } from "react-toastify";


export default function Logon() {
  const { register, handleSubmit, errors } = useForm({});
  const store = useStore().loginStore;
  const routerHistory = useHistory();


  async function handleLogin(values) {
    store.signin(values).then(() => {
      if (store.state === "done") {
        routerHistory.push('/profile');
      } else {
        toast("Verifique suas credenciais e tente novamente");
      }
    });
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="To-do-App" />

        <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Faça seu login</h1>

          <input
            placeholder="Seu email"
            type="email"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && <span>Necessario informar email</span>}

          <input
            placeholder="Sua password"
            type="password"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && <span>Necessario informar Senha</span>}

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
