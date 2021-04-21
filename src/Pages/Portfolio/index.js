import { Aplications } from "../../Data/Aplications";

import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import {
  Container,
  ContainerAccordion,
  StyledAccordion,
  StyledExpandMoreIcon,
  CardImg,
  ContainerLink,
  Link,
} from "./style";
const Portfolio = () => {
  return (
    <Container id="Portfolio">
      <h1>Portfólio.</h1>
      <ContainerAccordion>
        {Aplications.map((item, index) => (
          <StyledAccordion style={{ borderRadius: "8px" }}>
            <AccordionSummary
              key={index}
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <CardImg src={item.url_img} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <ContainerLink>
                  {item.url_git !== "null" && (
                    <Link href={item.url_git} target="blank">
                      Repositório
                    </Link>
                  )}
                  <Link href={item.url} target="blank">
                    Visitar
                  </Link>
                </ContainerLink>
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </ContainerAccordion>
    </Container>
  );
};
export default Portfolio;
