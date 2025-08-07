'use client';

import Container from "@/components/Container";
import { useLanguage } from '@/contexts/LanguageContext';

const LegalNoticePage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <div className="py-10 lg:py-20">
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <h2
            style={{
              color: "#0B3B25",
              fontFamily: "MadaniArabic-SemiBold, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 8vw, 60px)",
              lineHeight: "1.2",
              letterSpacing: 0,
              marginBottom: 0,
              maxWidth: "100%",
              width: "100%",
              minHeight: "auto",
              margin: "0 auto",
              padding: "0 1rem",
              display: "block",
              textAlign: "center",
            }}
          >
            {t('legalNotice.title')}
          </h2>
          <div
            style={{
              fontFamily: "Source Sans 3, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 4vw, 20px)",
              color: "#454545",
              marginBottom: 0,
              maxWidth: "100%",
              width: "100%",
              minHeight: "auto",
              margin: "0 auto",
              padding: "0 1rem",
              display: "block",
              textAlign: "center",
            }}
          >
            {t('legalNotice.company')}
          </div>
        </div>
        <div
          style={{
            fontFamily: "Source Sans 3, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 3vw, 18px)",
            color: "#454545",
            marginBottom: 32,
            lineHeight: "27px",
            maxWidth: "100%",
            minHeight: "auto",
            margin: "0 auto",
            padding: "0 1rem",
            textAlign: "left",
          }}
        >
          <strong>{t('legalNotice.lastUpdated')}</strong><br /><br />
          {t('legalNotice.content')}
        </div>
        
        {/* Privacy Policy Section */}
        <div style={{ textAlign: "center", marginBottom: 48, marginTop: 80, position: "relative", clear: "both", zIndex: 1 }}>
          <h2
            style={{
              color: "#0B3B25",
              fontFamily: "MadaniArabic-SemiBold, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 8vw, 60px)",
              lineHeight: "1.2",
              letterSpacing: 0,
              marginBottom: 0,
              maxWidth: "100%",
              width: "100%",
              minHeight: "auto",
              margin: "0 auto",
              padding: "0 1rem",
              display: "block",
              textAlign: "center",
            }}
          >
            {t('privacyPolicy.title')}
          </h2>
          <div
            style={{
              fontFamily: "Source Sans 3, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 4vw, 20px)",
              color: "#454545",
              marginBottom: 0,
              maxWidth: "100%",
              width: "100%",
              minHeight: "auto",
              margin: "0 auto",
              padding: "0 1rem",
              display: "block",
              textAlign: "center",
            }}
          >
            {t('privacyPolicy.company')}
          </div>
        </div>
        <div
          style={{
            fontFamily: "Source Sans 3, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 3vw, 18px)",
            color: "#454545",
            marginBottom: 32,
            lineHeight: "27px",
            maxWidth: "100%",
            margin: "0 auto",
            padding: "0 1rem",
            textAlign: "left",
            wordWrap: "break-word",
            overflowWrap: "anywhere",
          }}
        >
          <strong>{t('privacyPolicy.effectiveDate')}</strong><br /><br />
          <strong>{t('privacyPolicy.dataController')}</strong><br />
          {t('privacyPolicy.dataControllerContent')}<br /><br />
          <strong>{t('privacy.dataCollected.title')}</strong><br />
          {t('privacy.dataCollected.content')}<br /><br />
          <strong>{t('privacy.purpose.title')}</strong><br />
          {t('privacy.purpose.content')}<br /><br />
          <strong>{t('privacy.legalBasis.title')}</strong><br />
          {t('privacy.legalBasis.content')}<br /><br />
          <strong>{t('privacy.dataSharing.title')}</strong><br />
          {t('privacy.dataSharing.content')}<br /><br />
          <strong>{t('privacy.dataRetention.title')}</strong><br />
          {t('privacy.dataRetention.content')}<br /><br />
          <strong>{t('privacy.userRights.title')}</strong><br />
          {t('privacy.userRights.content')}<br /><br />
          <strong>{t('privacy.childrenPrivacy.title')}</strong><br />
          {t('privacy.childrenPrivacy.content')}<br /><br />
          <strong>{t('privacy.dataSecurity.title')}</strong><br />
          {t('privacy.dataSecurity.content')}<br /><br />
          <strong>{t('privacy.policyChanges.title')}</strong><br />
          {t('privacy.policyChanges.content')}
        </div>
        
        {/* Terms of Service Section */}
        <div style={{ textAlign: "center", marginBottom: 48, marginTop: 80, position: "relative", clear: "both", zIndex: 1 }}>
          <h2
            style={{
              color: "#0B3B25",
              fontFamily: "MadaniArabic-SemiBold, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 8vw, 60px)",
              lineHeight: "1.2",
              letterSpacing: 0,
              marginBottom: 0,
              maxWidth: "100%",
              width: "100%",
              minHeight: "auto",
              margin: "0 auto",
              padding: "0 1rem",
              display: "block",
              textAlign: "center",
            }}
          >
            {t('termsOfUse.title')}
          </h2>
          <div
            style={{
              fontFamily: "Source Sans 3, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 4vw, 20px)",
              color: "#454545",
              marginBottom: 0,
              maxWidth: "100%",
              width: "100%",
              minHeight: "auto",
              margin: "0 auto",
              padding: "0 1rem",
              display: "block",
              textAlign: "center",
            }}
          >
            {t('termsOfUse.company')}
          </div>
        </div>
        <div
          style={{
            fontFamily: "Source Sans 3, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 3vw, 18px)",
            color: "#454545",
            marginBottom: 32,
            lineHeight: "27px",
            maxWidth: "100%",
            margin: "0 auto",
            padding: "0 1rem",
            textAlign: "left",
            wordWrap: "break-word",
            overflowWrap: "anywhere",
          }}
        >
          <strong>{t('termsOfUse.effectiveDate')}</strong><br /><br />
          <strong>{t('termsOfUse.scopeAcceptance')}</strong><br />
          {t('termsOfUse.scopeAcceptanceContent')}<br /><br />
          <strong>{t('terms.serviceDescription.title')}</strong><br />
          {t('terms.serviceDescription.content')}<br /><br />
          <strong>{t('terms.userEligibility.title')}</strong><br />
          {t('terms.userEligibility.content')}<br /><br />
          <strong>{t('terms.accountResponsibility.title')}</strong><br />
          {t('terms.accountResponsibility.content')}<br /><br />
          <strong>{t('terms.acceptableUse.title')}</strong><br />
          {t('terms.acceptableUse.content')}<br /><br />
          <strong>{t('terms.intellectualProperty.title')}</strong><br />
          {t('terms.intellectualProperty.content')}<br /><br />
          <strong>{t('terms.limitationLiability.title')}</strong><br />
          {t('terms.limitationLiability.content')}<br /><br />
          <strong>{t('terms.termination.title')}</strong><br />
          {t('terms.termination.content')}<br /><br />
          <strong>{t('terms.governingLaw.title')}</strong><br />
          {t('terms.governingLaw.content')}<br /><br />
          <strong>{t('terms.contact.title')}</strong><br />
          {t('terms.contact.content')}<br />
          &bull; App Support: contact@daret.io<br />
          &bull; Legal & Corporate: contact@atlasglobaltechnologies.com
        </div>
      </div>
      
      {/* Spacer before footer */}
      <div style={{ height: 80 }}></div>
    </Container>
  );
};

export default LegalNoticePage;
