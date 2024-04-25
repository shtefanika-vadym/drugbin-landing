import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ARTICLE_DATA } from "src/mockData/news";
import { More } from "../ui/More/More";
import {
  Container,
  Image,
  LeftSection,
  RightSection,
  Title,
} from "./Article.styled";
import { Metadata } from "../ui/Metadata/Metadata";

export const Article = () => {
  const { article } = useParams();

  const getCurrentArticle = useMemo(
    () => ARTICLE_DATA.find((post) => post.path === article),
    [article]
  );
  const { title, content, image, readMore, path, description } =
    getCurrentArticle || {};

  return (
    <Metadata title={title || ""} description={description || ""}>
      <Container>
        <Image src={image} alt={path} />
        <RightSection>
          <More data={readMore} />
        </RightSection>
        <LeftSection>
          <Title>{title}</Title>
          <article dangerouslySetInnerHTML={{ __html: content || "" }} />
        </LeftSection>
      </Container>
    </Metadata>
  );
};
