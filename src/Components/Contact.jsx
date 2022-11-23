import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-address">
            <h1 className="head-text"> Contact Me</h1>
            <p className="p-text">53 Ollerton Grn, London E3 2LB, UK</p>
            <p className="p-text">zazagencyadmission@gmail.com</p>
            <p className="p-text">+4407894891394</p>
        </div>
        <div className="contact-form">

        <Form action='mailto:iqt.taki@gmail.com' method='POST' enctype = "multipart/form-data" name="EmailForm">
      <Row className="mb-3">
      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Name" />
      </Form.Group>


      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Row>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control  placeholder="Phone Number" />
      </Form.Group>

      <Form.Group  as={Col} className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Address" />
      </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="Subject" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Message" />
      </Form.Group>
      
      <Button className="submit-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </div>
      </div>
      <div className="contact-map">
       </div>
    </div>
  )
}

export default Contact