'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#0A3420] font-MadaniArabic-SemiBold font-normal mb-2">
            {t('privacyPolicy.title')}
          </h1>
          <div className="text-lg text-gray-500 font-SourceSans3 font-normal">
            {t('privacyPolicy.effectiveDate')}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-700 font-SourceSans3 leading-relaxed break-words overflow-wrap-anywhere">
            <p className="text-justify mb-6">
              {t('privacyPolicy.intro')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacyPolicy.dataController')}</h2>
            <p className="mb-6 text-justify">
              {t('privacyPolicy.dataControllerContent')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacy.dataCollected.title')}</h2>
            <p className="mb-6 text-justify">
              {t('privacy.dataCollected.content')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacy.purpose.title')}</h2>
            <p className="mb-6 text-justify">
              {t('privacy.purpose.content')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacy.legalBasis.title')}</h2>
            <p className="mb-6 text-justify">
              {t('privacy.legalBasis.content')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacy.dataSharing.title')}</h2>
            <p className="mb-6 text-justify">
              {t('privacy.dataSharing.content')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacy.dataRetention.title')}</h2>
            <p className="mb-6 text-justify">
              {t('privacy.dataRetention.content')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacy.userRights.title')}</h2>
            <p className="mb-6 text-justify">
              {t('privacy.userRights.content')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacy.childrenPrivacy.title')}</h2>
            <p className="mb-6 text-justify">
              {t('privacy.childrenPrivacy.content')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacy.dataSecurity.title')}</h2>
            <p className="mb-6 text-justify">
              {t('privacy.dataSecurity.content')}
            </p>
            
            <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">{t('privacy.policyChanges.title')}</h2>
            <p className="mb-6 text-justify">
              {t('privacy.policyChanges.content')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
