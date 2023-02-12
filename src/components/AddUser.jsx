import React from 'react'
import '../styles/AddUser.css'

const AddUser = ({ setAlertSuccesfully, userCreMod, setUserCreMod, infoNewUser }) => {

    const handleClose = () => {
        setAlertSuccesfully(false)
        setUserCreMod(null)
    }


    console.log(infoNewUser);


    return (
        <div className='container__Add'>
            <div className='card__add-msg'>
                <div onClick={handleClose} className='close__add-msg'>✖</div>
                <div className='check__add-msg'><i className='bx bxs-check-circle' /></div>
                {
                    userCreMod ? (
                        <>
                            <h4>{userCreMod.first_name} {userCreMod.last_name}</h4>
                            <p> User information has been updated successfully</p>
                        </>
                    ) : (
                        <div className='info__userCreate'>
                            <h4>{infoNewUser?.first_name} {infoNewUser?.last_name}</h4>
                            <p>New user has been created successfully</p>
                        </div>
                    )
                }
                <button className='buttom__agree' onClick={handleClose}>Agree</button>
            </div>
        </div>
    )
}

export default AddUser

