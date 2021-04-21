import styled from "styled-components";
import Accordion from "@material-ui/core/Accordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
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

export const ContainerAccordion = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vw;

  h3 {
    font-size: 30px;

    // Tablet (Portrait)
    @media only screen and (min-width: 581px) and (max-width: 768px) {
      font-size: 35px;
    }
    // Tablet (Landscape)
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
      font-size: 35px;
    }
    // Desktop Layout Size!
    @media only screen and (min-width: 1025px) {
      font-size: 35px;
    }
  }
  p {
    font-size: 25px;

    // Tablet (Portrait)
    @media only screen and (min-width: 581px) and (max-width: 768px) {
      font-size: 22px;
    }
    // Tablet (Landscape)
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
      font-size: 22px;
    }
    // Desktop Layout Size!
    @media only screen and (min-width: 1025px) {
      font-size: 25px;
    }
  }
`;

export const StyledAccordion = styled(Accordion)`
  align-items: center;
  background-color: #dedede;
  margin: 25px auto;
  padding: 15px 0 15px 15px;

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    width: 70%;
  }
`;

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  color: #000;
  margin: 0 -10px;
`;

export const CardImg = styled.img`
  border: 2px solid #000;
  border-radius: 8px;
  width: 100%;
`;

export const ContainerLink = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  // Tablet (Portrait)
  @media only screen and (min-width: 581px) {
    flex-direction: row;
  }
`;

export const Link = styled.a`
  border-radius: 8px;
  background-color: #000;
  color: #fff;
  margin: 8px auto;
  padding: 10px 20px;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    font-weight: bolder;
  }
`;
