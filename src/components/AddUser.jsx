import React from 'react'
import '../styles/AddUser.css'

const AddUser = ({ setAlertSuccesfully }) => {

    const handleClose = () => (
        setAlertSuccesfully(false))
    return (
        <div className='container__Add'>
            <div className='card__add-msg'>
                <div onClick={handleClose} className='close__add-msg'>✖</div>
                <div className='check__add-msg'><i className='bx bxs-check-circle' /></div>
                <p>All parameters added successfully</p>
                <button className='buttom__agree' onClick={handleClose}>Agree</button>
            </div>
        </div>
    )
}

export default AddUser
