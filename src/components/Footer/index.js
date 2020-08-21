import React from 'react';
import { FooterBase } from './styles';
import GitHub from '../../assets/img/github.jpg';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/beatrizadm/">
        <img src={GitHub} height="40" alt="Logo GitHub" />
      </a>
      <p>
        2020
        {' © '}
        <a href="https://www.linkedin.com/in/beatrizadm/">
          Beatriz Miranda
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
