import '../styles/DeletedUser.css'

function DeletedUser({ showDeleteUser, setShowDeleteUser, deletedUserId, deletedUser }) {

    const handleCloser = () => {
        setShowDeleteUser(false)
    }

    return (
        <div className='card__delete-user'>
            {showDeleteUser && (
                <div onClick={handleCloser} className='card__info-Delete'>
                    <div className='close__del-msg'>X</div>
                    <h2>Deleted User Information</h2>
                    <h1 className='check__del-msg'><i className='bx bx-error-alt' /></h1>
                    <p>ID: <b>{deletedUserId}</b></p>
                    <p>User <b className='user__removed'>{deletedUser.first_name} {deletedUser.last_name}</b> has been removed </p>
                    <button className='button__DeleteUser' onClick={handleCloser}>Agree</button>
                </div>
            )}
        </div>
    )
}

export default DeletedUser






{/* <div className='card__info-Delete'>
                <div className='close__del-msg'><button onClick={handleAgree}>✖</button></div>
                <h1>Delete User</h1>
                <h1 className='check__del-msg'><i class='bx bx-error-alt' /></h1>
                <p>{`The user ${id}${deletedUser?.first_name} ${deletedUser?.last_name} has been removed`}</p>
                <button className='button__DeleteUser' onClick={handleAgree}>Agree</button>
            </div> */}