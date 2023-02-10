import React from 'react'
import '../CSS/AddUser.css'

const AddUser = ({ setAlertSuccesfully }) => {

    const handleClose = () => (
        setAlertSuccesfully(false))
    return (
        <div className='container__Add'>
            <div className='card__add-msg'>
                <div className='close__add-msg'><button onClick={handleClose}>✖</button></div>
                <div className='check__add-msg'><i className='bx bxs-check-circle' /></div>
                <p>All parameters were successfully added</p>
                <button className='buttom__agree' onClick={handleClose}>Agree</button>
            </div>
        </div>
    )
}

export default AddUser
