import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/beatrizadm/">
        <img src="https://icon-icons.com/icons2/1907/PNG/48/iconfinder-github-4555889_121361.png" alt="Logo GitHub" />
      </a>
      <p>
        Copyright
        {' © '}
        <a href="https://www.linkedin.com/in/beatrizadm/">
          Beatriz Miranda
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
