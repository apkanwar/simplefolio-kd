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
          <div className="tage_container tagembed-container">
            <div
              className="tagembed-socialwall"
              data-wall-id="7704"
              view-url="https://widget.tagembed.com/7704?view"
            />
            <script src="//widget.tagembed.com/embed.min.js" type="text/javascript" />
          </div>
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
