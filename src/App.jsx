import axios from 'axios'
import { useEffect, useState } from 'react'
import './styles/App.css'
import AddUser from './components/AddUser'
import DeleteUser from './components/DeleteUser'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [showForm, setShowForm] = useState(false)

  const [deletedUserId, setDeletedUserId] = useState();
  const [alertSuccesfully, setAlertSuccesfully] = useState(false)
  const [showDeleteUser, setShowDeleteUser] = useState(false)


  const getAllUsers = () => {
    const url = "https://users-crud.academlo.tech/users/"
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  const createNewUser = (data) => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setAlertSuccesfully(true)
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = (id) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(`User ${id} is deleted sucessfully`)
        getAllUsers()
        setShowDeleteUser(true)
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUpdateInfo()
        setAlertSuccesfully(true)
      })
      .catch(err => console.log(err))
  }

  const handleShow = () => {
    setShowForm(true);
  };

  const handleUserDelete = (id) => {
    setDeletedUserId(id);
  }


  return (

    <div className="App">
      <div className='card_tittle'>
        <h1>Users</h1>
        <button className='add__user' onClick={handleShow}> <i className='bx bx-user-plus bx-flip-horizontal add__icon' />Add New User</button>
      </div>
      {showForm &&
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setShowForm={setShowForm}
          setUpdateInfo={setUpdateInfo}
        />
      }

      {showDeleteUser &&
        <DeleteUser
          showDeleteUser={showDeleteUser}
          setShowDeleteUser={setShowDeleteUser}
          deletedUserId={deletedUserId}
        />
      }

      {alertSuccesfully &&
        <AddUser
          setAlertSuccesfully={setAlertSuccesfully} />
      }

      <div className='container__users'>
        {users
          ?.sort((a, b) => b.id - a.id)
          .map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setShowForm={setShowForm}
              onDelete={handleUserDelete}
            />
          ))
        }

      </div>
      <div className='footer__info'>
        <p>
          <a className='linkedin' href='https://www.linkedin.com/in/maxcereceda/' target={'_blank'}><i className='bx bxl-linkedin-square' /></a>
          <a className='github' href='https://github.com/cereceda1991/myAppUser' target={'_blank'}> <i className='bx bxl-github' /></a>
          <a className='academlo' href='https://www.academlo.com/' target={'_blank'}><img src='https://www.academlo.com/academlo-icon-shadow.png' alt='academlo'></img></a>
        </p>
        <span>Copyright © 2023 Max Cereceda. All rights reserved.</span>
      </div>
    </div>
  )
}

export default App
