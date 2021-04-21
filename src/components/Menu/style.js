import styled from "styled-components";

export const Container = styled.nav`
  background-color: #dedede;
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-top: -30px;
  width: 100%;

  // Tablet (Portrait)
  @media only screen and (min-width: 581px) and (max-width: 768px) {
    font-size: 22px;
    height: 60px;
    margin-top: -50px;
  }

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 25px;
    height: 60px;
    justify-content: flex-end;
    margin-top: -70px;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    font-size: 25px;
    height: 100px;
    justify-content: flex-end;
    margin-top: -75px;
  }
`;

export const ContainerA = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 25px 15px 15px;
  width: 100%;

  // Tablet (Portrait)
  @media only screen and (min-width: 581px) and (max-width: 768px) {
    font-size: 22px;
    height: 60px;
    padding: 30px 30px 0;
  }

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 25px;
    height: 60px;
    justify-content: space-between;
    padding: 30px 50px 0;
    width: 70%;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    font-size: 25px;
    height: 100px;
    padding: 50px 50px;
    width: 50%;
  }
`;

export const Links = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
