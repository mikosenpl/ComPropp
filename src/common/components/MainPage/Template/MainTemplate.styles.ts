import styled from 'styled-components';

export const MainTemplateWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1.5rem;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
`;
