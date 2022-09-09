import { Button } from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    const goToAnalytics = () => {
        navigate('/analytics')
    }

    const goToUsers = () => {
        navigate('/')
    }

    const goToBooks = () => {
        navigate('/books')
    }

  return (
    <div className='nav-bar'>
        <div className='nav-name'>
            ABC BOOK CLUB
        </div>
        <div>
        <Button onClick={() => goToAnalytics()} style={{color: 'white', fontSize: '15px', marginRight: '20px'}}>
            Analytics
        </Button>
        <Button onClick={() => goToUsers()} style={{color: 'white', fontSize: '15px', marginRight: '20px'}}>
            Users
        </Button>
        <Button onClick={() => goToBooks()} style={{color: 'white', fontSize: '15px', marginRight: '20px'}}>
            Books
        </Button>
        </div>
    </div>
  )
}

export default Navbar;
