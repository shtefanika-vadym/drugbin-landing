import { ReactNode } from "react";
import { TopBlockCollect } from "../TopBlockCollect/TopBlockCollect";

interface HeaderCollectProps {
  children: ReactNode;
}

export const HeaderCollect: React.FC<HeaderCollectProps> = ({ children }) => {
  return (
    <>
      <TopBlockCollect />
      {children}
    </>
  );
};
