import '../CSS/DeletedUser.css'

const DeletedUser = ({ id, users, setShowDeleteUser }) => {
    const deletedUser = users?.find(user => user.id === id);

    const handleAgree = () => {
        setShowDeleteUser(false);
    };

    return (
        <div className='card__delete-user'>
            <div className='card__info-Delete'>
                <div className='close__del-msg'><button onClick={handleAgree}>✖</button></div>
                <h1>Delete User</h1>
                <h1 className='check__del-msg'><i class='bx bx-error-alt' /></h1>
                <p>{`The user ${id}${deletedUser?.first_name} ${deletedUser?.last_name} has been removed`}</p>
                <button className='button__DeleteUser' onClick={handleAgree}>Agree</button>
            </div>
        </div >
    )
}

export default DeletedUser

{/* <div className='card__delete-user'>
{deletedUser && (
    <div className='card__info-Delete'>
        <h1>Delete User</h1>
        <p>{`The user ${id}${deletedUser.first_name} ${deletedUser.last_name} has been removed`}</p>
        <button onClick={handleAgree}>Agree</button>
    </div>
)
}
</div > */}