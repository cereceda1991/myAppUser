import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import AddUser from './components/AddUser'
import DeleteUser from './components/DeleteUser'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isShow, setIsShow] = useState(false)
  const [deletedUserId, setDeletedUserId] = useState(null);
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

  const deleteUserById = id => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(`User ${id} is deleted sucessfully`)
        console.log(res.data);
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
    setIsShow(true);
  };

  const handleUserDelete = (id) => {
    setDeletedUserId(id);
  }

  return (

    <div className="App">
      <div className='card_tittle'>
        <h1>User Configuration</h1>
        <button className='add__user' onClick={handleShow}>➕ Add New User</button>
      </div>
      {isShow &&
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setShowDeleteUser={setShowDeleteUser}
          setIsShow={setIsShow}
          setAlertSuccesfully={setAlertSuccesfully}
        />
      }
      {showDeleteUser && deletedUserId &&
        <DeleteUser
          id={deletedUserId}
          users={users}
          setShowDeleteUser={setShowDeleteUser}

        />}

      {alertSuccesfully &&
        <AddUser
          setAlertSuccesfully={setAlertSuccesfully} />
      }

      <div className='container__users'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setIsShow={setIsShow}
              onDelete={handleUserDelete}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
