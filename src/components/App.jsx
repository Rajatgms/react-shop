import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Row className="justify-content-center">
        <Button onClick={() => setCount(count + 1)}>Increment - {count}</Button>
      </Row>
    </Container>
  );
};

export default App;
