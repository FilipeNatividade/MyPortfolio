import {
  Container,
  Title,
  Label,
  Paragraph,
  List,
  ContainerLogos,
  ImgLogo,
} from "./style";
const SobreMim = () => {
  return (
    <Container id="sobreMim">
      <Title>Sobre mim.</Title>

      <div>
        <Paragraph>
          <Label />
          Nilson Filipe Natividade, 10/03/1990. Iniciei os estudos de
          programação no final de 2019, por conta. Depois tranquei o curso
          tecnólogo em análise e desenvolvimento de sistemas para ingressar na
          kenzie academy.
        </Paragraph>

        <Paragraph>
          <Label />
          Praticamente tudo que aprendi de fato foi na kenzie, desenvolvi meu
          html, css, conheci aprofundei de fato o javascript, desenvolvendo
          alguns trabalhos.
        </Paragraph>
        <Paragraph>
          <Label />
          No segundo módulo de front aprendi react.js, que me cativou muito, daí
          pra frente veio a vontade de trabalhar de front. Pretendo me
          aprofundar cada vez mais no front-end.
        </Paragraph>
        <Paragraph>
          <Label />
          Dentro da kenzie também pude ter a experiência de trabalhar em grupo,
          desenvolvendo habilidades com git, trabalhando com git flow e
          metodologias ágeis.
        </Paragraph>
        <Paragraph>
          <Label />
          Saio da kenzie como full stack, em outubro de 2021.
        </Paragraph>
      </div>
      <Title>Skills.</Title>
      <List>
        <li>Boa comunicação</li>
        <li>Cooperativo</li>
        <li>Flexível</li>
        <li>Espírito de equipe</li>
        <li>Fácil adaptação</li>
      </List>
      <ContainerLogos>
        <ImgLogo src="./assets/images/html.png" />
        <ImgLogo src="./assets/images/css3.png" />
        <ImgLogo src="./assets/images/javascript.svg" />
        <ImgLogo src="./assets/images/react.png" />
        <ImgLogo src="./assets/images/git.png" />
      </ContainerLogos>
    </Container>
  );
};
export default SobreMim;
