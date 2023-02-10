import '../CSS/FormUser.css'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from "../utils/defaultValuesForm";


const FormUser = ({ createNewUser, updateInfo, updateUserById, setIsShow }) => {

    const { register, reset, handleSubmit } = useForm()

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
        } else {
            createNewUser(data)
        }
        reset(defaultValues)
    }

    const handleClose = () => {
        setIsShow(false);
    };

    return (
        <div className='card__container-users'>
            <div className='card_form'>
                <form className='form__users' onSubmit={handleSubmit(submit)}>
                    <div className='close__form'><button onClick={handleClose} >✖</button></div>
                    <h2 className='form__tittle'>{updateInfo ? 'Edit User' : 'New User'}</h2>

                    <div className='info__user'>
                        <label htmlFor=" firstName">First Name: </label>
                        <input {...register('first_name')} type="text" id='firstName' placeholder='Enter your name' />

                        <label htmlFor="lastName">Last Name: </label>
                        <input {...register('last_name')} type="text" id='lastName' placeholder='Enter your last name' />

                        <label htmlFor="email" >Email: </label>
                        <input {...register('email')} type="email" id='email' placeholder='example@email.com' />

                        <label htmlFor="password">Password: </label>
                        <input {...register('password')} type="password" id='password' placeholder='**********' />

                        <label htmlFor="birthday">Date of Birth: </label>
                        <input className='birthday' {...register('birthday')} type="date" id='birthday' />
                    </div>
                    <button className='buttton__addUser' >{updateInfo ? 'Save Changes' : 'Add New User'}</button>
                </form>
            </div>
        </div>
    )
}

export default FormUser
