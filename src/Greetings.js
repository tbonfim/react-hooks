import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Greetings.scss';

export default function Greetings (props){

  const [name, setName] = useState('Thiago');
  const [lastName, setLastName] = useState('Bonfim');

  
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
        <input value={name} onChange={ handleNameChange} />
        <input value={lastName} onChange={ handleLastNameChange} />
      </Row>
    </Container>
    );
}
