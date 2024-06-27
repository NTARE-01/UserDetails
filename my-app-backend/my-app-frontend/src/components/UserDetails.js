// src/components/UserDetails.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const UserDetails = () => {
  const [form, setForm] = useState({
    title: '',
    firstName: '',
    lastName: '',
    position: '',
    company: '',
    businessArena: '',
    employees: '',
    street: '',
    additionalInfo: '',
    zipCode: '',
    place: '',
    country: '',
    code: '',
    phoneNumber: '',
    email: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/tasks', form);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  console.log('UserDetails component is rendering'); // Add this log

  return (
    <Container className="mt-5 p-4" style={{ background: 'linear-gradient(to bottom, #ADD8E6, #FFFFFF)', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="p-4" style={{ backgroundColor: '#f7f7f7', borderRadius: '10px 0 0 10px' }}>
            <h2 className="mb-4" style={{ color: '#007bff' }}>General Information</h2>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control as="select" name="title" value={form.title} onChange={handleChange}>
                <option>Select Title</option>
                <option value="mr">Mr.</option>
                <option value="mrs">Mrs.</option>
                <option value="ms">Ms.</option>
                <option value="dr">Dr.</option>
              </Form.Control>
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formFirstName" className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
              </Form.Group>
              <Form.Group as={Col} controlId="formLastName" className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
              </Form.Group>
            </Row>
            <Form.Group controlId="formPosition" className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control as="select" name="position" value={form.position} onChange={handleChange}>
                <option>Select Position</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
                <option value="consultant">Consultant</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formCompany" className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" name="company" value={form.company} onChange={handleChange} required />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formBusinessArena" className="mb-3">
                <Form.Label>Business Arena</Form.Label>
                <Form.Control as="select" name="businessArena" value={form.businessArena} onChange={handleChange}>
                  <option>Select Business Arena</option>
                  <option value="it">IT</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formEmployees" className="mb-3">
                <Form.Label>Employees</Form.Label>
                <Form.Control as="select" name="employees" value={form.employees} onChange={handleChange}>
                  <option>Select Employees</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </Form.Control>
              </Form.Group>
            </Row>
          </Col>
          <Col className="p-4" style={{ backgroundColor: '#41199e8b', borderRadius: '0 10px 10px 0' }}>
            <h2 className="mb-4" style={{ color: 'white' }}>Contact Details</h2>
            <Form.Group controlId="formStreet" className="mb-3">
              <Form.Label>Street + Nr</Form.Label>
              <Form.Control type="text" name="street" value={form.street} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formAdditionalInfo" className="mb-3">
              <Form.Label>Additional Information</Form.Label>
              <Form.Control type="text" name="additionalInfo" value={form.additionalInfo} onChange={handleChange} />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formZipCode" className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" name="zipCode" value={form.zipCode} onChange={handleChange} required />
              </Form.Group>
              <Form.Group as={Col} controlId="formPlace" className="mb-3">
                <Form.Label>Place</Form.Label>
                <Form.Control as="select" name="place" value={form.place} onChange={handleChange} required>
                  <option>Select Place</option>
                  <option value="musanze">Musanze</option>
                  <option value="kigali">Kigali</option>
                  <option value="rubavu">Rubavu</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Form.Group controlId="formCountry" className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control as="select" name="country" value={form.country} onChange={handleChange} required>
                <option>Select Country</option>
                <option value="rwanda">Rwanda</option>
                <option value="uganda">Uganda</option>
                <option value="kenya">Kenya</option>
              </Form.Control>
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formCode" className="mb-3">
                <Form.Label>Code +</Form.Label>
                <Form.Control type="text" name="code" value={form.code} onChange={handleChange} required />
              </Form.Group>
              <Form.Group as={Col} controlId="formPhoneNumber" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required />
              </Form.Group>
            </Row>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formTerms" className="mb-3">
              <Form.Check type="checkbox" name="terms" checked={form.terms} onChange={handleChange} label={<span>I do accept the <Button variant="link" onClick={() => alert('Terms and Conditions')}>Terms and Conditions</Button> of your site.</span>} required />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">Register Badge</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default UserDetails;
