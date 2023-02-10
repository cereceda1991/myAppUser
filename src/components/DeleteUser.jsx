import '../CSS/DeletedUser.css'

const DeletedUser = ({ id, users, setShowDeleteUser }) => {
    const deletedUser = users.find(user => user.id === id);

    const handleAccept = () => {
        setShowDeleteUser(false);
    };

    return (
        <div className='card__delete-user'>
            {deletedUser && (
                <div className='card__info-Delete'>
                    <h1>Delete User</h1>
                    <p>{`The user ${id}${deletedUser.first_name} ${deletedUser.last_name} has been removed`}</p>
                    <button onClick={handleAccept}>Accept</button>
                </div>
            )
            }
        </div >
    )
}

export default DeletedUser

