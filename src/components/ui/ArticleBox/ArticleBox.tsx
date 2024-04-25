import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Container, Description, Image, Title } from "./ArticleBox.styled";

interface ArticleBoxProps {
  image: string;
  altImage: string;
  title: string;
  description: string;
  path: string;
}

export const ArticleBox: React.FC<ArticleBoxProps> = ({
  image,
  altImage,
  title,
  description,
  path,
}) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/article/${path}`);
    window.scrollTo(0, 0);
  }, [navigate, path]);

  return (
    <Container>
      <Image src={image} alt={altImage} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button variant="secondary" onClick={handleClick}>
        Află mai multe
      </Button>
    </Container>
  );
};
