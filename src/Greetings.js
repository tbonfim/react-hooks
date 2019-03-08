import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Greetings.scss';

export default function Greetings (props){

  const [name, setName] = useState('Thiago');
  const [lastName, setLastName] = useState('Bonfim');

  useEffect(() => {
    document.title =  name + " " + lastName;
  });
  function handleNameChange(e ) {
    setName(e.target.value);
  }
  function handleLastNameChange(e ) {
    setLastName(e.target.value);
  }
  return (
    <Container className="App">
      <Row> <h1>React Hooks</h1></Row>
      <Row>
        <Col xs="6"><input value={name} onChange={ handleNameChange} /></Col>
        <Col xs="6"><input value={lastName} onChange={ handleLastNameChange} /></Col>
      </Row>
    </Container>
    );
}
