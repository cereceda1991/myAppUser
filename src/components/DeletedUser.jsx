import React from 'react'

const DeletedUser = ({ userId, username }) => {
    return (
        <div>
            <h1>Delete User</h1>
            <p>{`The user ${userId} ${username} has been removed`}</p>
        </div>
    )
}

export default DeletedUser
