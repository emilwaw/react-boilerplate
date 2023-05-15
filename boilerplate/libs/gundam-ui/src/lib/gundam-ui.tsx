import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GundamUiProps {}

const StyledGundamUi = styled.div`
  color: pink;
`;

export function GundamUi(props: GundamUiProps) {
  return (
    <StyledGundamUi>
      <h1>Welcome to GundamUi!</h1>
    </StyledGundamUi>
  );
}

export default GundamUi;
