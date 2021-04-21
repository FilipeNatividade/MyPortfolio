import { Container, ContainerA, Links } from "./style";
import { useHistory } from "react-router-dom";
const Menu = () => {
  const history = useHistory();
  return (
    <Container>
      <ContainerA>
        <Links onClick={() => history.push("/")}>Sobre mim</Links>
        <Links onClick={() => history.push("/portfolio")}>Portfólio</Links>
        <Links onClick={() => history.push("/contato")}>Contato</Links>
      </ContainerA>
    </Container>
  );
};
export default Menu;
