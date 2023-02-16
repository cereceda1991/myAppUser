import '../styles/FormUser.css'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from "../utils/defaultValuesForm";

const FormUser = ({ createNewUser, updateInfo, setUpdateInfo, updateUserById, setShowForm, setShowEmptyInfo }) => {

	const [showPassword, setShowPassword] = useState(false);

	const { register, reset, handleSubmit } = useForm()

	const handleClose = (e) => {
		setUpdateInfo()
		setShowForm(false);
	};

	useEffect(() => {
		if (updateInfo) {
			reset(updateInfo)
		}
	}, [updateInfo])

	const submit = (data) => {
		if (!data.first_name || !data.last_name || !data.email || !data.password || !data.birthday) {
			setShowEmptyInfo(true);
			setShowForm(false);
			return;
		}

		if (updateInfo) {
			updateUserById(updateInfo.id, data);
			reset(defaultValues);
		} else {
			createNewUser(data);
			handleClose();
		}

		setShowForm(false);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();

		}
	};

	return (
		<div className='card__container-users'>
			<div className='card_form'>
				<form className='form__users' onSubmit={handleSubmit(submit)} onKeyDown={handleKeyDown}>
					<div className='close__form'><button onClick={handleClose}>✖</button></div>
					<h2 className='form__tittle'>{updateInfo ? 'Edit User' : 'New User'}</h2>

					<div className='info__user'>
						<label htmlFor=" firstName">First Name: </label>
						<input className='name__user' {...register("first_name")} type="text" id='firstName' placeholder='Enter your name' />

						<label htmlFor="lastName">Last Name: </label>
						<input className='lastname__user' {...register('last_name')} type="text" id='lastName' placeholder='Enter your last name' />

						<label htmlFor="email" >Email: </label>
						<input {...register('email')} type="email" id='email' placeholder='example@email.com' autoComplete="email" />

						<label htmlFor="password" >Password: </label>
						<div className='content__password'>
							<input {...register('password')}
								type={showPassword ? 'text' : 'password'}
								id='password'
								placeholder='***********'
								autoComplete="current-password"
							/>
							<button className='show__pasword' type="button" onClick={(event) => {
								event.preventDefault();
								setShowPassword(!showPassword);
							}}> <i className={showPassword ? 'bx bxs-low-vision' : 'bx bx-show'} />
							</button>
						</div>
						<label htmlFor="birthday">Date of Birth: </label>
						<input className='birthday' {...register('birthday')} type="date" id='birthday' />
					</div>
					<button className='buttton__addUser' >{updateInfo ? 'Save' : 'Add New User'}</button>
				</form>
			</div>
		</div>
	)
}

export default FormUser


