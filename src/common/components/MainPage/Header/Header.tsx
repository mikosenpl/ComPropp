import {
  LogoImage,
  LogoWrapper,
  MainHeaderWrapper,
  MenuNavigationItemWrapper,
  MenuWrapper,
  StyledMuiButtonLink,
  StyledUnderlinedLink,
} from './Header.styles';
import Logo from '../../../assets/icons/logo.png';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const MainHeader = () => {
  const { t } = useTranslation('common');

  const MenuNavigationItem = () => {
    return (
      <MenuNavigationItemWrapper>
        <li>
          <Link href="/search">{t('menu.search')}</Link>
        </li>
        <li>
          <Link href="/news">{t('menu.news')}</Link>
        </li>
        <li>
          <Link href="/faq">{t('menu.faq')}</Link>
        </li>
        <li>
          <Link href="/about-us">{t('menu.aboutUs')}</Link>
        </li>
      </MenuNavigationItemWrapper>
    );
  };

  const AuthNavigationItem = () => {
    return (
      <MenuNavigationItemWrapper>
        <li>
          <StyledMuiButtonLink>
            <Link href="/register">{t('menu.register')}</Link>
          </StyledMuiButtonLink>
        </li>
        <li>
          <StyledUnderlinedLink>
            <Link href="/login">{t('menu.login')}</Link>
          </StyledUnderlinedLink>
        </li>
      </MenuNavigationItemWrapper>
    );
  };

  return (
    <MainHeaderWrapper>
      <LogoWrapper>
        <LogoImage src={Logo} alt="Logo" />
      </LogoWrapper>
      <MenuWrapper>
        <MenuNavigationItem />
        <AuthNavigationItem />
      </MenuWrapper>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
