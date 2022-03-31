import React from 'react';
import { NavLink } from 'react-router-dom';
const UserRecord = (props) => {
  const { id, username, email } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td><NavLink className='btn btn-success text-white' to={`/profile/${props.id}`}>Profile</NavLink></td>
    </tr>
  )
}

export default UserRecord;