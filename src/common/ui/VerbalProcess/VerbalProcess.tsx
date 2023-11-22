import {
  Text,
  TextBold,
  VerbalWrapper
} from './VerbalProcess.styled';

export const VerbalProcess = () => {
  return (
    <VerbalWrapper>
      <Text>
        Confidențialitatea ta este importantă pentru noi. Politica DrugBin este
        de a respecta confidențialitatea informațiilor pe care le colectăm de la
        tine pe site-ul nostru și pe alte site-uri pe care le deținem și le
        operăm.
      </Text>
      <Text>
        Cerem informații personale doar atunci când avem cu adevărat nevoie de
        ele pentru a-ți furniza un serviciu. Le colectăm în mod corect și legal,
        cu cunoștința și consimțământul tău. Îți comunicăm și de ce le colectăm
        și cum vor fi utilizate.
      </Text>
      <Text>
        Păstrăm informațiile colectate doar pe perioada necesară pentru a-ți
        furniza serviciul solicitat. Datele pe care le stocăm sunt protejate în
        mod corespunzător pentru a preveni pierderea și furtul, precum și
        accesul, divulgarea, copierea, utilizarea sau modificarea neautorizată.
        Nu partajăm public sau cu terțe părți nicio informație de identificare
        personală, cu excepția cazurilor în care suntem obligați de lege.
      </Text>
      <TextBold>
        Pentru a finaliza acest proces, trebuie să fii de acord cu aceste
        prevederi.
      </TextBold>
    </VerbalWrapper>
  );
};
