import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserByID } from '../../API/usersAPI';
import { Container } from 'react-bootstrap';
import UserProfile from './UserProfile';

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [reqState, setReqState] = useState(false);

    useEffect(() => {
        fetchUserByID(id).then(res => {
            setUser(res.data);
            setReqState(true);
        }).catch(err => {
            setUser(null);
            setReqState(false);
        });

    }, [id]);

    return <>
        {user && reqState ? <Container> <UserProfile user={user} /> </Container> : <p className='p-3 bg-alert'>Error while fetching data</p>};
    </>
}

export default Profile;