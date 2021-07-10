import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Benefits" />
          <p className="benefits-text">
            As a service-focused, home financing specialist, I have the experience and expertise to
            provide you with sound advice. I am ready to advise you from start to finish on:
          </p>
          <div className="benefits-list">
            <ul>
              <li>Applying for a pre-approved mortgage</li>
              <li>Financing your first or next home and any renovations</li>
              <li>Transferring your mortgage to BMO Bank of Montreal</li>
              <li>Refinancing a mortgage loan or tapping into the equity in your current home </li>
              <li>Or any other home financing matter</li>
            </ul>
          </div>
          {projects.map((project) => {
            const { id, img1, img2, title1, title2 } = project;

            return (
              <Row key={id}>
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title1} filename={img1} />
                        </div>
                      </Tilt>
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title2} filename={img2 || ''} />
                        </div>
                      </Tilt>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
