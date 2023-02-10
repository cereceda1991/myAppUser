import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import DeletedUser from './components/DeletedUser'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isShow, setIsShow] = useState(false)


  const getAllUsers = () => {
    const url = "http://users-crud.academlo.tech/users/"
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  const createNewUser = (data) => {
    const url = 'http://users-crud.academlo.tech/users/'
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const url = `http://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(`User ${id} is deleted sucessfully`)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const url = `http://users-crud.academlo.tech/users/${id}/`
    axios.put(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUpdateInfo()
      })
      .catch(err => console.log(err))
  }

  const handleShow = () => {
    setIsShow(true);
  };


  return (

    <div className="App">
      <div className='card_tittle'>
        <h1>Users</h1>
        <button className='add__user' onClick={handleShow}>+Add New User</button>
      </div>
      {isShow &&
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setIsShow={setIsShow}
        />
      }


      {/* {
        <DeletedUser
          key={deletedUser.id}
          userId={deletedUser.id}
          username={deletedUser.username}
        />
      } */}
      <div className='container__users'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setIsShow={setIsShow}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
