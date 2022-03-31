import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Profile = (props) => {
  const { username, name, email, phone } = props.user;

  return (
    <>
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Img variant="top" src="https://bootdey.com/img/Content/avatar/avatar7.png" />
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{name}</ListGroupItem>
          <ListGroupItem>{email}</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">{email}</Card.Link>
          <Card.Link href="#">{phone}</Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default Profile;