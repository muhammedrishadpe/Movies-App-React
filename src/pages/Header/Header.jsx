import React, { Fragment, useContext } from 'react'
import { Logout } from '../Logout/Logout'
import '../Header/Header.css'

import { useAuth } from '../../context/AuthContext';
import { useDarkMode } from '../../context/DarkModeContext';

export const Header = () => {
    const { user } = useAuth();
    const {darkMode, toggleDarkMode} = useDarkMode()
    const handleClick = () => {
      toggleDarkMode();
    }
  return (
  <div className='header-container'>
       <h1>Moovis</h1>
  <div><button style={{width:"50px",    background: 'transparent', color:darkMode ? "black" : "white", border:darkMode ? "solid 2px black" : "solid 2px white", }} onClick={handleClick}>{darkMode?"Light":"Dark"}</button>
  {user && <Logout />} </div>
  </div> )
}
