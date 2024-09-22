import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function App() {

  const navigate = useNavigate()

  return (
    <div>
      <div className='App'>
        <h1 className='titleApp'>APPLICATION DE GESTION DE GROUPE</h1>
        <img src={'/Images/app_gestion_de_groupe.png'} alt="" width={90} />
        <Link className='linkApp' to={'/login'}>Cliquez ici  ...</Link>
        </div>
    </div>
  )
}
