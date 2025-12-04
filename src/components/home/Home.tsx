import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "src/layout/Layout/Layout";
import { EventBanner } from "../ui/EventBanner/EventBanner";
import { Values } from "../ui/Values/Values";
import { Contact } from "./Contact";
import { Guid } from "./Guid";
import { Container } from "./Home.styled";
import { Know } from "./Know";
import { Main } from "./Main";
import { useScrollTo } from "src/hooks/useScrollTo";
import { WhatDo } from "./WhatDo";
import { Collecting } from "./Collecting";
import { FirstStep } from "./FirstStep";

// TODO: Refactor
export const Home = () => {
  const { scrollTo } = useScrollTo();

  const handleNavigateToContact = useCallback(() => {
    scrollTo("contact");
  }, [scrollTo]);

  return (
    <Container>
      <section id="main">
        <Main />
      </section>

      <section>
        <Know />
      </section>

      <section id="involve">
        <FirstStep />
      </section>

      <section>
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
