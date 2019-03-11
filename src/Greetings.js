import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Greetings.scss';

export default function Greetings (props){
  // change name and title
  const name = useFormInput('Thiago')
  const lastName = useFormInput('Bonfim');

  useDocumentTitle(name.value + ' ' + lastName.value);

  //resize
  const width = useWindowWidth();

  return (
    <Container className="App">
      <Row> <h1>React Hooks</h1></Row>
      <Row>
        <Col xs="6"><input {...name} /></Col>
        <Col xs="6"><input {...lastName} /></Col>
      </Row>
      <Row>
        <Col>
          Width:  {width}
        </Col>
      </Row>
    </Container>
    );
}

/*
  Custom hooks
*/
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize );
    return () => { //cleanup 
      window.removeEventListener('resize', handleResize );
    }
  });
  return width;
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title =  title;
  });
}

function useFormInput (initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange : handleChange
  }
}