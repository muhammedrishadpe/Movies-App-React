import React, { Fragment } from 'react'
import { Logout } from '../Logout/Logout'
import '../Header/Header.css'
import { useAuth } from '../../context/AuthContext';

export const Header = () => {
    const { user } = useAuth();
  return (
  <div className='header-container'>
       <h1>Moovis</h1>
  <div><button >Dark</button>
  {user && <Logout />} </div>
  </div> )
}
