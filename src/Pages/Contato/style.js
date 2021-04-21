import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 25px;

  // Tablet (Portrait)
  @media only screen and (min-width: 581px) and (max-width: 768px) {
    padding: 30px;
  }

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 50px;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    padding: 50px;
  }

  ul {
    margin: 0 auto 3vw;
    list-style: none;
  }
`;

export const Links = styled.a`
  color: #dedede;
  text-decoration: none;
  font-size: 20px;

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 22px;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    font-size: 30px;
  }

  &:hover {
    color: rgba(222, 222, 222, 0.5);
    cursor: pointer;
  }
`;
