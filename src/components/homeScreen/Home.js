import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fetchAllusers } from '../../API/usersAPI';
import UsersTable from '../table/UsersTable';
const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllusers().then(res => {
            setUsers(res.data);
        }).catch(err => {
            setUsers(null);
        });

    }, [setUsers]);

    return (
        <>
            {users ? <Container> <UsersTable users={users} /> </Container> : <p className='p-3 bg-alert'>Error while fetching data</p>};
        </>
    )
}

export default Home;