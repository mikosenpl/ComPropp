// eslint-disable-next-line import/named
import { DefaultTheme } from 'styled-components';
import { StringLiteral } from 'typescript';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#285095',
    secondary: '#093A4B',
    tertiary: '#82CCB9',
    background: '#EFF1E9',
    text: '#101A28',
    body: '#FFFFFF',
  },
  fontSize: {
    xxl: '5rem',
    xl: '4.2rem',
    l: '3rem',
    m: '2rem',
    s: '1rem',
  },
  mq: {
    smartphone: '@media only screen and (max-width: 767px)',
    tablet: '@media only screen and (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media only screen and (min-width: 1024px)',
  },
  family: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Roboto Mono", monospace',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#285095',
    secondary: '#093A4B',
    tertiary: '#06D59F',
    background: '#EFF1E9',
    text: '#101A28',
    body: '#293B4C',
  },
  fontSize: {
    xxl: '40px',
    xl: '24px',
    l: '17px',
    m: '12px',
    s: '11px',
  },
  mq: {
    smartphone: '@media only screen and (max-width: 767px)',
    tablet: '@media only screen and (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media only screen and (min-width: 1024px)',
  },
  family: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Roboto Mono", monospace',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      text: string;
      body: string;
    };
    fontSize: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
    };
    mq: {
      smartphone: string;
      tablet: string;
      desktop: string;
    };
    family: {
      primary: string;
      secondary: string;
    };
  }
}
