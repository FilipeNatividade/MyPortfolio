import { Container, TitleContainer, H1Name, H3Dev, ImgPerfil } from "./style";
const Header = () => {
  return (
    <Container>
      <TitleContainer>
        <H1Name>Filipe Natividade</H1Name>
        <H3Dev>Desenvolvedor Front-end</H3Dev>
      </TitleContainer>
      <ImgPerfil src="./assets/images/Foto_perfil.png" alt="Foto de perfil" />
    </Container>
  );
};
export default Header;
