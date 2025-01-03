import React from 'react'
import logoutIcon from '../../assets/images/logout-icon.svg'
import './Header.scss'
import { auth } from '../../database/firebase'

const Header = () => {

    const handleLogout = async () => {
        try {
            await auth.signOut();
            alert('You logged out successfully')
        } catch (error) {
            alert(error)
        }
    };

  return (
    <div className='header-container'>
        <div className="header-content">
            <div className="header__logo">
                <p>LOGO</p>
            </div>
            <div className="header__logout">
                <button onClick={handleLogout}>
                    <img src={logoutIcon} alt="logout button" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header