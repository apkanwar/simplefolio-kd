import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }, []);

  return (
    <section id="reviews">
      <Container>
        <div className="project-wrapper">
          <Title title="Reviews" />

          <div className="elfsight-app-ce95dd2c-e35b-45da-85e7-57db36d0982b" />
          <div className="hidden" />
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
