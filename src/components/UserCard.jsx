import '../styles/UserCard.css'
import React from 'react'

const UserCard = ({ user, deleteUserById, setUpdateInfo, onDelete, setShowForm }) => {

    const handleDelete = () => {
        deleteUserById(user.id);
        onDelete(user.id);
    }

    const handleUpdate = () => setUpdateInfo(user)

    const handleShow = () => {
        setShowForm(true);
    };

    return (
        <article className='card__user'>
            <h2 className='user__info'>{user.first_name} {user.last_name}</h2>
            <ul>
                <li><p>Email: </p><span><i className='bx bx-envelope' /> {user.email} </span> </li>
                <li><p> Date of Birth:</p><span><i className='bx bx-gift' />{user.birthday} </span></li>
            </ul>
            <div className='container__butttons'>
                <button className='buttton__trash'
                    onClick={(id) => {
                        handleDelete(id)
                    }}>

                    <i className='bx bx-trash' /></button>
                <button className='button__pencil'

                    onClick={() => {
                        handleUpdate()
                        handleShow()
                    }}>

                    <i className='bx bx-pencil ' /></button>
            </div>
        </article>
    )
}

export default UserCard
