import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "src/layout/Layout/Layout";
import { EventBanner } from "../ui/EventBanner/EventBanner";
import { Contact } from "./Contact";
import { Guid } from "./Guid";
import { Container } from "./Home.styled";
import { Main } from "./Main";
import { News } from "./News";
import { Values } from "../ui/Values/Values";

// TODO: Refactor
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
      <section>
        <Values id="values" />
      </section>
      <section id="involve">
        <EventBanner id="involve" onClick={handleNavigateCollect} />
      </section>
      <Layout>
        <iframe
          width="100%"
          height="553"
          src="https://www.youtube.com/embed/TtTGVH7MeyI"
          title="Tu știi ce trebuie să faci cu medicamentele expirate?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Layout>
      {/* <section id="stiri">
        <News />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </Container>
  );
};
