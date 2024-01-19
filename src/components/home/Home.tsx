import first from 'common/assets/first.jpg';
import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper';
import { About } from 'common/ui/About';
import { Button } from 'common/ui/Button';
import { Contact } from 'common/ui/Contact/Contact';
import { Recycle } from 'common/ui/Recycle/Recycle';
import { Services } from 'common/ui/Services';
import { Values } from 'common/ui/Values';
import { HashLink as Link } from 'react-router-hash-link';
import { Image, Join, Section, SubTitle, Title, Wrapper } from './Home.styled';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

export const Home = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Section>
          <Title>Natura luptă pentru tine! Fă-o și tu!</Title>
          <SubTitle>
            1500 de tone de medicamente ajung anual în apele din România!
          </SubTitle>
          <Join>
            Nu arunca medicamentele expirate sau neutilizate!
            <br />
            Predă-le în centrele de colectare special amenajate! Noi te învățăm
            cum.
          </Join>
          <Button>
            <Link style={linkStyle} smooth to="/#proces">
              Află cum
            </Link>
          </Button>
          <Image src={first} alt='protejare'/>
        </Section>
      </ContentWrapper>
      <Services id="proces" />
      <Recycle />
      <About id="about-us" />
      <Values id="values" />
      <Contact id="contact" />
    </Wrapper>
  );
};
