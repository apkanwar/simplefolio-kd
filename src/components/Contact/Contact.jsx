import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta1, cta2, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta1}
              <br />
              {cta2}
            </p>
            <ul className="actions fit">
              <li>
                <section className="align-center">
                  <i className="fa fa-phone fa-4x" />
                  <br /> <br />
                  <p>
                    <strong>Cell: </strong> (647) 782-5354
                  </p>
                </section>
              </li>
              <li>
                <section className="align-center">
                  <i className="fa fa-envelope fa-4x" />
                  <br /> <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={
                      email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'
                    }
                  >
                    Email Me
                  </a>
                </section>
              </li>
              <li>
                <section className="align-center">
                  <i className="fa fa-address-card fa-4x" />
                  <br /> <br />
                  <p>
                    56 Queen St E <br /> Brampton, ON L6V 4M8{' '}
                  </p>
                </section>
              </li>
            </ul>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
