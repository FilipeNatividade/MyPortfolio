import { Container, Links } from "./style";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Contato = () => {
  return (
    <Container id="Contato">
      <h1>Contato.</h1>
      <ul>
        <li>
          <Links href="https://wa.me/5541999494507" target="blank">
            <WhatsAppIcon /> 41 999 494 507
          </Links>
        </li>
        <li>
          <Links href="https://www.linkedin.com/in/nfilipen/" target="blank">
            <LinkedInIcon /> Linkedin
          </Links>
        </li>
        <li>
          <Links href="https://github.com/FilipeNatividade" target="blank">
            <GitHubIcon /> GitHub
          </Links>
        </li>
      </ul>
    </Container>
  );
};
export default Contato;
