import styled from "styled-components";

export const Container = styled.header`
  color: #fff;
  display: flex;
  padding: 25px 15px 15px;

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

export const TitleContainer = styled.div`
  width: 100%;
`;

export const H1Name = styled.h1`
  font-size: 22px;
  margin-bottom: 0;

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

export const H3Dev = styled.h3`
  font-size: 12px;
  margin-top: 0;
  width: 35%;

  // Tablet (Portrait)
  @media only screen and (min-width: 581px) and (max-width: 768px) {
    font-size: 15px;
  }

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const ImgPerfil = styled.img`
  margin-left: -50px;
  width: 150px;

  // Tablet (Landscape)
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 180px;
  }

  // Desktop Layout Size!
  @media only screen and (min-width: 1025px) {
    width: 200px;
  }
`;

// Typical Phone (Portrait)
// @media only screen and (max-width:320px) {}
// Phone (Landscape)
// @media only screen and (min-width:321px) and (max-width:580px) {}
// Tablet (Portrait)
// @media only screen and (min-width: 581px) and (max-width: 768px) {}
// Tablet (Landscape)
// @media only screen and (min-width: 769px) and (max-width: 1024px) {}
// Desktop Layout Size!
// @media only screen and (min-width: 1025px) {}
