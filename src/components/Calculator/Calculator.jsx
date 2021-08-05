import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Calculator = () => {
  //   useEffect(() => {
  //
  //   }, []);

  return (
    <section id="calculator">
      <Container>
        <div className="project-wrapper">
          <Title title="Calculator" />
        </div>
      </Container>
    </section>
  );
};

export default Calculator;
