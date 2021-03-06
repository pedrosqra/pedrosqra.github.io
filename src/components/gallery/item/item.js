import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image, url }) => (
  <figure>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </a>
    <figcaption>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Title>{title}</Title>
      </a>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  url: PropTypes.string,
};

export default Item;
