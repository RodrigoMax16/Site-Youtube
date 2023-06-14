import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: ${({openMenu}) => openMenu? '100px 50px 0 530px' : '100px 10px 0 430px'};
  box-sizing: border-box; 
`;