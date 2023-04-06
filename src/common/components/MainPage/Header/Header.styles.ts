import styled from 'styled-components';
import Image from 'next/image';
import { Button } from '@mui/material';

export const MainHeaderWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  text-align: center;
  ul,
  li,
  a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const LogoWrapper = styled.div`
  width: 25%;
  background: ${({ theme }) => theme.colors.body};
  border-bottom-right-radius: 2rem;
`;

export const LogoImage = styled(Image)`
  height: auto;
  width: 90%;
`;

export const MenuWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuNavigationItemWrapper = styled.ul`
  display: flex;
  align-items: center;

  > li {
    margin: 2rem;

    > a {
      text-decoration: underline transparent;
      transition: text-decoration 0.5s ease-out;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const StyledMuiButtonLink = styled(Button)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 0.8rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
`;

export const StyledUnderlinedLink = styled.p`
  > a {
    text-decoration: underline;
    transition: text-decoration 0.5s ease-out;

    &:hover {
      text-decoration: underline transparent;
    }
  }
`;
