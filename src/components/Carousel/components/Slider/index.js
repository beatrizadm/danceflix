/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import PropType from 'prop-types';

export default function Slider({ children, categoryColor }) {
  const BoardColor = categoryColor;

  return (
    <Container categoryColor={BoardColor}>
      <SlickSlider {...{
        dots: false,
        infinite: true,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 6000,
      }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
}

Slider.propTypes = {
  children: PropType.node.isRequired,
  categoryColor: PropType.string.isRequired,
};

const Container = styled.ul`
  padding: 0;
  margin: 0;
  padding-right:100px;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
      color: ${({ categoryColor }) => categoryColor};
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 350px;
    height: 225px;
    object-fit: cover;
  }
`;