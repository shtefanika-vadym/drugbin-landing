import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 18px;
  width: 150px;
`;

export const CornerBorder = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border: 5px solid #000; 
`;

export const TopLeftCorner = styled(CornerBorder)`
  top: -2px;
  left: -2px;
  border-top: none;
  border-left: none;
  border-top-left-radius: 10px;
  transform: rotate(-180deg); /* Rotate the corner */
`;

export const BottomLeftCorner = styled(CornerBorder)`
bottom: -2px;
left: -2px;
border-bottom: none;
border-left: none;
border-bottom-left-radius: 10px;
transform: rotate(180deg); /* Rotate the corner */
`;

export const TopRightCorner = styled(CornerBorder)`
  top: -2px;
  right: -2px;
  border-top: none;
  border-right: none;
  border-top-right-radius: 10px;
  transform: rotate(180deg); /* Rotate the corner */
`;

export const BottomRightCorner = styled(CornerBorder)`
  bottom: -2px;
  right: -2px;
  border-bottom: none;
  border-right: none;
  border-bottom-right-radius: 10px;
  transform: rotate(180deg); /* Rotate the corner */
`;
