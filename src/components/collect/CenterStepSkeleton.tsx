import { times } from "lodash-es";
import Skeleton from "react-loading-skeleton";
import { Container } from "./CenterStepSkeleton.styled";

const NUMBER_OF_SKELETONS = 3;

export const CenterStepSkeleton = () => {
  return (
    <Container>
      {times(NUMBER_OF_SKELETONS, (i) => (
        <Skeleton key={i} height={170} />
      ))}
    </Container>
  );
};
