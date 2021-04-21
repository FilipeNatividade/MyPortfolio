import styled from "styled-components";
import LabelIcon from "@material-ui/icons/Label";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
`;

export const Title = styled.h2`
  font-size: 25px;

  // Tablet (Portrait)
  @media only screen and (min-width: 581px) and (max-width: 768px) {
    font-size: 30px;
  }

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 40px;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    font-size: 60px;
  }
`;

export const Label = styled(LabelIcon)`
  margin-right: 15px;

  // Tablet (Portrait)
  @media only screen and (min-width: 581px) and (max-width: 768px) {
    margin-right: 20px;
  }

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-right: 25px;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    margin-right: 30px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;

  // Desktop Layout Size!
  @media only screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const List = styled.ul`
  font-size: 20px;
  margin: 0 auto 3vw;

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 22px;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    font-size: 30px;
  }
`;

export const ContainerLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5vw;
`;
export const ImgLogo = styled.img`
  margin: 8vw 0 20px 20px;
  width: 70px;

  &:first-child {
    margin-left: 0;
  }

  // Tablet (Portrait)
  @media only screen and (min-width: 581px) and (max-width: 768px) {
    margin: 8vw 0 20px 30px;
    width: 100px;
  }

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 8vw 0 20px 30px;
    width: 100px;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    margin: 8vw 0 20px 50px;
    width: 125px;
  }
`;
