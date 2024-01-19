import { Metadata } from 'common/Metadata/Metadata';
import { HeaderWrapper } from 'common/layout/Header/HeaderWrapper';
import { Home } from 'components/home/Home';

export const HomePage = () => {
  // eslint-disable-next-line no-console
  return (
    <Metadata
      title="DrugBin"
      description="Ajutăm la eliminarea în siguranță a medicamentelor expirate sau neutilizate. Împreună, susținem un mediu mai sănătos."
    >
      <HeaderWrapper>
        <Home />
      </HeaderWrapper>
    </Metadata>
  );
};
