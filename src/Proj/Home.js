import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  // Hook for getting API data
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(-1);

  // Hook for running API request
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log("There is something wrong");
      });
  }, []);

  // Toggle the description visibility
  const handleToggleDescription = (id) => {
    setSelectedItemId(selectedItemId === id ? -1 : id);
  };

  // Inline styles for card sizing
  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const cardBodyStyle = {
    flex: '1 0 auto',
  };

  const cardFooterStyle = {
    padding: '0.75rem 1.25rem',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  return (
    // this is for X and Y axis in container
    <Container className="mx-6 my-5"> 
      <Row>
        {data.map((ecom) => (
          <Col xs={6} md={4} lg={3} key={ecom.id} className="mb-5">
            <Card style={cardStyle}>
              <Card.Img className="top" src={ecom.image} alt=''/>
              <Card.Body style={cardBodyStyle}>
                <Card.Title>{ecom.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Category: {ecom.category}</Card.Subtitle>
                <Card.Text>
                  {selectedItemId === ecom.id && ecom.description}
                </Card.Text>
                <Button
                  className={`mb-3 ${selectedItemId === ecom.id ? 'btn-danger' : 'btn-primary'}`}
                  onClick={() => handleToggleDescription(ecom.id)}
                >
                  {selectedItemId === ecom.id ? 'Hide Description' : 'Show Description'}
                </Button>
              </Card.Body>
              <Card.Footer style={cardFooterStyle}>
                <Button
                  className="btn-outline-primary"
                  style={{ borderColor: 'blue', color: 'blue', borderWidth: '2px', backgroundColor: 'white', padding: '0.5rem 1rem', fontWeight: 'bold' }}
                >
                  RM{ecom.price}
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
