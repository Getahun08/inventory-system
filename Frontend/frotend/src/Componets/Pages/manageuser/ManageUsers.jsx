import React from 'react'
import './ManageUsers.css'
import UsersForm from '../../forms/UsersForm'
import UserList from '../../list/userlist/UserList'
export default function ManageUsers() {
  return (
    <div className="users-container text-light">
    <div className="left-column">
      <UsersForm/>
    </div>
    <div className="right-column">
      <UserList/>
    </div>
  </div>
  )
}
