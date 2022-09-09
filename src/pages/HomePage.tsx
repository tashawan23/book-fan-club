import React from 'react'
import { Button } from '@material-ui/core'
import './HomePage.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateRole } from '../constants/loginSlice';

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const onSelectAdmin = () => {
        navigate('/Users')
        dispatch(updateRole('admin'))
    }

    const onSelectEditor = () => {
        navigate('/Books')
        dispatch(updateRole('editor'))
    }

    const onSelectMember = () => {
        navigate('/Users')
        dispatch(updateRole('member'))
    }

  return (
    <div className='home-container'>
        <div className='title'>Welcome! Select User :</div>
        <Button onClick={() => onSelectAdmin()}>
            Admin
        </Button>
        <Button onClick={() => onSelectEditor()}>
            Editor
        </Button>
        <Button onClick={() => onSelectMember()}>
            Member
        </Button>
    </div>
  )
}

export default HomePage