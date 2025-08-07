import { useLanguage } from '@/contexts/LanguageContext';

export const useCtaDetailsAbout = () => {
  const { t } = useLanguage();
  
  return {
    heading: t('aboutPage.cta.heading'),
    subheading: t('aboutPage.cta.subheading'),
    appStoreUrl: '#',
    googlePlayUrl: '#'
  };
};
