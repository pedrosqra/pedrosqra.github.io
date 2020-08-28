import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container, Photo, TitleContainer } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <TitleContainer>
        <Photo
          src="https://avatars0.githubusercontent.com/u/47536693?s=460&u=953118f6e8a8782f10a9bd70ee4ac8b89e2d31e1&v=4"
          alt="Foto de Pedro Siqueira"
        />
        <Link to="/">
          <Title as="h1">Pedro Siqueira</Title>
        </Link>
      </TitleContainer>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
