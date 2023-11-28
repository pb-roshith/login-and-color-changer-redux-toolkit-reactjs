import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

    const user = useSelector(state => state.user.value)
    const theme = useSelector(state => state.theme.value)

    if(!user.name){
        return
    }

  return (
    <div style={{'color': theme }}>
        <h1>profile info</h1>
        <h2>name : {user.name}</h2>
        <h2>age : {user.age}</h2>
        <h2>email : {user.email}  </h2>
    </div>
  )
}

export default Profile