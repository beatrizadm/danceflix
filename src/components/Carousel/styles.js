import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 15px;
  background: red;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), #111);
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 5%;
  }
`;

export const CategoryDescription = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 1.2;
  color: gray;
  margin-top:0;
  margin-bottom:20px;
  padding-right: 90px;

  @media (max-width: 800px) {
    font-size: 15px;
    padding-right: 70px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  padding-bottom: 5%;
`;
