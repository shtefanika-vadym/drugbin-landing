import { Contact } from "./Contact";
import { Guid } from "./Guid";
import { Container } from "./Home.styled";
import { Main } from "./Main";
import { News } from "./News";

export const Home = () => {
  return (
    <Container>
      <section id="main">
        <Main />
      </section>
      <section>
        <Guid id="proces" />
      </section>
      <section id="stiri">
        <News />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Container>
  );
};
