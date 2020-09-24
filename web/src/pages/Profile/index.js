import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, } from 'react-icons/fi'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {

  const [todo, setTodo] = useState([])
  const history = useHistory()
  const id = localStorage.getItem('id')

  //pegar da api
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: id,
      }
    }).then(response => {
      setTodo(response.data)
    })
  }, [id])

//deletar pode usar como filtro
  async function handleDeleteTodo(id) {
    try {
      await api.delete(`todo/${id}`, {
        headers: {
          Authorization: id,
        }
      })

      setTodo(todo.filter(todo => todo.id !== id))
    } catch (err) {
      alert('Erro ao deletar To-do, tente novamente.')
    }
  }
//Voltar para Login
  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="To-do" />
        <span> Bem-vindo, Carlos </span>

        <Link className="button" to="/todo/new"> Cadastrar novo To-do </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="e02041" />
        </button>
      </header>

      <h1> To-dos Cadastrados </h1>

      <ul>
        <li>
          <strong>Title:</strong>
          <p>To-do Teste</p>

          <strong>Description:</strong>
          <p>To-do Teste</p>

          <button onClick={()=> {}} type="button">
          <AiOutlineCheckCircle size={18} color="0f0" />
        </button>
        </li>

        <li>
          <strong>Title:</strong>
          <p>To-do Teste</p>

          <strong>Description:</strong>
          <p>To-do Teste</p>

          <button onClick={()=> {}} type="button">
          <AiOutlineCheckCircle size={18} color="0f0" />
        </button>
        </li>

        <li>
          <strong>Title:</strong>
          <p>To-do Teste</p>

          <strong>To-do:</strong>
          <p>To-do Teste</p>

          <button onClick={()=> {}} type="button">
          <AiOutlineCheckCircle size={18} color="0f0" />
        </button>
  
        </li>

      </ul>
    </div>
  )
}
