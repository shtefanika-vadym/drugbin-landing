import { Contact } from "./Contact";
import { Guid } from "./Guid";
import { Container } from "./Home.styled";
import { Main } from "./Main";

export const Home = () => {
  return (
    <Container>
      <section id="main">
        <Main />
      </section>
      <section>
        <Guid id="proces" />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Container>
  );
};
