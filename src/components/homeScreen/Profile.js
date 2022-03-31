import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserByID } from '../../api/usersAPI';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUserByID(id).then(res => {
            setUser(res.data);
        }).catch(err => {
            setUser(null);
        });

    }, [id]);

    return <>
        {user ? <Container> <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Img variant="top" src="https://bootdey.com/img/Content/avatar/avatar7.png" />
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{user.name}</ListGroupItem>
                <ListGroupItem>{user.email}</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">{user.email}</Card.Link>
                <Card.Link href="#">{user.phone}</Card.Link>
            </Card.Body>
        </Card> </Container> : <p className='p-3 bg-alert'>Error while fetching data</p>};
    </>
}

export default Profile;