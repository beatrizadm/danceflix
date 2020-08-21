import styled from 'styled-components';

export const VideoCardContainer = styled.a`
border: 2px solid gray;
border-radius: 4px;
text-decoration: none;
overflow: hidden;
cursor: pointer;
color: white;
width: 380px;
height: 210px;
background-image: ${({ url }) => `url(${url})`};
background-size: cover;
background-position: center;
border-radius: 10px;
position: relative;
display: flex;
align-items: flex-end;
padding: 16px;
transition: opacity .3s;
&:after {
  content: "";
  display: block;
  background: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
  opacity: 0;
}
&:hover,
&:focus {
  &:after {
    opacity: 1;
  }
  h2 {
    opacity: 1;
  }
}

&:not(:first-child) {
  margin-left: 20px;
}
h2 {
  position: relative;
  z-index: 2;
  opacity: 0;
  transition: opacity .3s;
}

@media(max-width: 800px){
  width: 280px;
  height: 150px;
  font-size:12px;
}
`;
