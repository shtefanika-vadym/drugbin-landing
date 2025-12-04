import { Collecting } from "./Collecting";
import { Contact } from "./Contact";
import { FirstStep } from "./FirstStep";
import { Guid } from "./Guid";
import { Container } from "./Home.styled";
import { Know } from "./Know";
import { Main } from "./Main";
import { WhatDo } from "./WhatDo";

// TODO: Refactor
export const Home = () => {
  return (
    <Container>
      <section id="main">
        <Main />
      </section>

      <section id="about">
        <Know />
      </section>

      <section id="involve">
        <FirstStep />
      </section>

      <section id="benefits">
        <WhatDo />
      </section>

      <section>
        <Guid id="proces" />
      </section>

      <section>
        <Collecting />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </Container>
  );
};
