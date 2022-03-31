import React from 'react';
import UserRecord from './UserRecord';
import { Table } from 'react-bootstrap';

const UsersTable = (props) => {
  const { users } = props;
  return (
    <Table striped bordered >
      <thead style={{ backgroundColor: '#ddd' }}>
        <tr>
          <th>id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <UserRecord key={user.id} id={user.id} username={user.username} email={user.email} />)}

      </tbody>
    </Table>)
}

export default UsersTable;