import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Reviews = () => {
  return (
    <section id="reviews">
      <Container>
        <div className="project-wrapper">
          <Title title="Reviews" />
          {/* Google Reviews */}
          <div data-romw-token="A6MgNg612OoQXL7t5FXCR1lHFltMyM2RQrrIrcXvFleEsnbNjQ"></div>
          <script src="https://reviewsonmywebsite.com/js/v2/embed.js?id=c338ae55b38e487f19ae" type="text/javascript"></script>
          {/* Twitter Feed */}
          <a
            className="twitter-timeline"
            data-lang="en"
            data-dnt="true"
            href="https://twitter.com/KDKanwar?ref_src=twsrc%5Etfw"
          >
            Tweets by KDKanwar
          </a>{' '}
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
