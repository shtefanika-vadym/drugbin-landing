import React, { ReactNode } from 'react';
import {
  BottomLeftCorner,
  BottomRightCorner,
  Container,
  TopLeftCorner,
  TopRightCorner,
} from './QRCodeWithBorder.styled';

interface QRCodeWithBorderProps {
  children: ReactNode;
}

const QRCodeWithBorder: React.FC<QRCodeWithBorderProps> = ({ children }) => {
  return (
    <Container>
      {children}
      <TopLeftCorner />
      <TopRightCorner />
      <BottomRightCorner />
      <BottomLeftCorner />
    </Container>
  );
};

export default QRCodeWithBorder;
