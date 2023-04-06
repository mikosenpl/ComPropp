import {
  ContentDescription,
  ContentImage,
  ContentTitle,
  HalfWidthStyledDiv,
  MainContentWrapper,
  RoundedBox,
  SearchTextField,
  StyledCheckCircleOutlineIcon,
} from './Content.styles';
import MainContentImage from '../../../assets/icons/main-content.png';
import useTranslation from 'next-translate/useTranslation';

const MainContent = () => {
  const { t } = useTranslation('common');
  return (
    <MainContentWrapper>
      <HalfWidthStyledDiv>
        <ContentImage src={MainContentImage} alt="Main Content image" />
      </HalfWidthStyledDiv>
      <HalfWidthStyledDiv>
        <ContentTitle>{t('mainContent.title')}</ContentTitle>
        <ContentDescription>{t('mainContent.description')}</ContentDescription>
        <SearchTextField
          variant="outlined"
          size="medium"
          fullWidth
          placeholder="Znajdź wymarzone mieszkanie dla siebie..."
        />
        <RoundedBox>
          <ul>
            <li>
              <StyledCheckCircleOutlineIcon />
              {t('mainContent.checkList.one')}
            </li>
            <li>
              <StyledCheckCircleOutlineIcon />
              {t('mainContent.checkList.two')}
            </li>
            <li>
              <StyledCheckCircleOutlineIcon />
              {t('mainContent.checkList.three')}
            </li>
            <li>
              <StyledCheckCircleOutlineIcon />
              {t('mainContent.checkList.four')}
            </li>
          </ul>
        </RoundedBox>
      </HalfWidthStyledDiv>
    </MainContentWrapper>
  );
};

export default MainContent;
