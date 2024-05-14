import { useNavigate } from "react-router-dom";
import { EventBanner } from "../ui/EventBanner/EventBanner";
import { Contact } from "./Contact";
import { Guid } from "./Guid";
import { Container } from "./Home.styled";
import { Main } from "./Main";
import { News } from "./News";
import { useCallback } from "react";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigateCollect = useCallback(() => {
    navigate("/collect");
  }, [navigate]);

  return (
    <Container>
      <section id="main">
        <Main />
      </section>
      <section>
        <Guid id="proces" />
      </section>
      <EventBanner onClick={handleNavigateCollect} />
      <section id="stiri">
        <News />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Container>
  );
};
