import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const cardStyle = {
  marginTop: '40px',
  height: '100%',
  // Maxwidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',    // Center content horizontally
  justifyContent: 'center' // Center content vertically
};

function TextControlsExample() {
  return (
    <Form className='container'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Card style={ cardStyle }>
      <Card.Body className='text-center'>
        <h3>Contact Our Customer Service</h3><hr></hr>
        <Card.Title>Call</Card.Title> 
        <Card.Text>0123456789</Card.Text>
        <Card.Text>0123456789</Card.Text>
        <Card.Title>Email</Card.Title>
        <Card.Link>name@example.com</Card.Link>
        <Card.Title>Location</Card.Title>
        <Card.Link>https://www.google.com/maps/place/anywhere</Card.Link>
      </Card.Body>
    </Card>
    </Form>
  );
}

export default TextControlsExample;