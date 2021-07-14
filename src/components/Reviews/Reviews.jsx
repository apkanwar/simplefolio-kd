import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Reviews = () => {
  return (
    <section id="reviews">
      <Container>
        <div className="project-wrapper">
          <Title title="Reviews" />
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
