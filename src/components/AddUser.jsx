import React from 'react'
import '../styles/AddUser.css'

const AddUser = ({ setAlertSuccesfully, infoNewUser, setInfoNewUser, infoEditUser, setInfoEditUser }) => {

    const handleClose = () => {
        setInfoNewUser()
        setInfoEditUser()
        setAlertSuccesfully(false)
    }

    return (
        <div className='container__Add'>
            <div className='card__add-msg'>
                <div onClick={handleClose} className='close__add-msg'>✖</div>
                <div className='check__add-msg'><i className='bx bxs-check-circle' /></div>
                {
                    infoNewUser && infoNewUser.first_name && infoNewUser.last_name ? (
                        <>
                            <h4>{infoNewUser.first_name} {infoNewUser.last_name}</h4>
                            <p>New user has been created successfully</p>
                        </>
                    ) : infoEditUser && infoEditUser.first_name && infoEditUser.last_name ? (
                        <>
                            <h4>{infoEditUser.first_name} {infoEditUser.last_name}</h4>
                            <p>User information has been updated successfully</p>
                        </>
                    ) : null
                }
                <button className='buttom__agree' onClick={handleClose}>Agree</button>
            </div>
        </div>
    )
}

export default AddUser
