import useBreakpoints from 'common/hooks/useBreakpoints';
import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper';
import { Button } from 'common/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RecycleWrapper, Title } from './Recycle.styled';

export const Recycle = () => {
  const navigate = useNavigate();
  const { isBelowDesktop } = useBreakpoints();
  return (
    <ContentWrapper color="white">
      <RecycleWrapper>
        <Title>Pentru un viitor mai curat acționează acum!</Title>
        {isBelowDesktop && (
          <Button variant="primary" onClick={() => navigate('/collect')}>
            Colecteaza
          </Button>
        )}
      </RecycleWrapper>
    </ContentWrapper>
  );
};
