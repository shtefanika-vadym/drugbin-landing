import { Spinner } from '../Spinner';
import { Content, Description, Title } from './FinishCollect.styled';

export const FinishCollectLoader = () => {
  return (
    <Content>
      <Title>Apreciem că rămâi cu noi până procesăm cererea ta.</Title>
      <Description>
        Promitem că nu va dura mai mult de un minut! Îți mulțumim.
      </Description>
      <br/>
      <Spinner size={60} />
    </Content>
  );
};
