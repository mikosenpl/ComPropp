import styled from 'styled-components';
import Image from 'next/image';
import { IconButton, TextField } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const MainContentWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  text-align: left;
  justify-content: center;

  ul,
  li,
  a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const HalfWidthStyledDiv = styled.div`
  width: 45%;
  height: 100%;
`;

export const ContentImage = styled(Image)`
  width: 80%;
  height: auto;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0.9);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ContentTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-family: ${({ theme }) => theme.family.secondary};
`;

export const ContentDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const SearchTextField = styled(TextField)`
  border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  && {
    input {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

export const RoundedBox = styled.div`
  width: 75%;
  height: auto;
  margin-top: 4rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.body};
  > ul li {
    margin: 1rem;
  }
`;

export const StyledCheckCircleOutlineIcon = styled(CheckBoxIcon)`
  color: ${({ theme }) => theme.colors.body};
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin-right: 1rem;
`;
