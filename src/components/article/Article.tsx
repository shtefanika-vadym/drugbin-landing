import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ARTICLE_DATA } from "src/mockData/news";
import { Metadata } from "../ui/Metadata/Metadata";
import { ReadMore } from "../ui/ReadMore/ReadMore";
import {
  Container,
  Image,
  LeftSection,
  RightSection,
  Title,
} from "./Article.styled";

export const Article = () => {
  const { article } = useParams();

  const currentArticle = useMemo(
    () => ARTICLE_DATA.find((a) => a.path === article),
    [article]
  );

  const relatedArticles = useMemo(
    () => ARTICLE_DATA.filter((a) => a.path !== article),
    [article]
  );

  const { title, content, image, path, description, date } = currentArticle || {};

  return (
    <Metadata title={title || ""} description={description || ""} image={image} type="article" publishedAt={date}>
      <Container>
        <Image src={image} alt={title || path} />
        <RightSection>
          <ReadMore data={relatedArticles} />
        </RightSection>
        <LeftSection>
          <Title>{title}</Title>
          <article dangerouslySetInnerHTML={{ __html: content || "" }} />
        </LeftSection>
      </Container>
    </Metadata>
  );
};
