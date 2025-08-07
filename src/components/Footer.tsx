'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-[#0B3B25] text-white py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <div className="flex items-center gap-2">
                        <Image src="/images/logo_daret_blanc.png" alt="Daret Logo" width={28} height={28} className="min-w-fit" />
                        <h3 className="text-[24px] leading-7 font-[MadaniArabic-SemiBold] font-bold">Daret</h3>
                    </div>
                    <p className="mt-3.5 text-white text-[16px] leading-6 font-[MadaniArabic-Regular]" style={{fontWeight: 400}}>
                        {t('footer.description')}
                    </p>
                </div>
                <div>
                    <h4 className="text-[18px] leading-6 font-[MadaniArabic-SemiBold] mb-4" style={{fontWeight: 700}}>{t('footer.quicklinks')}</h4>
                    <ul className="text-white text-[16px] leading-6 font-[MadaniArabic-Regular]" style={{fontWeight: 400}}>
                        <li className="mb-2">
                            <Link href="/about" className="hover:underline">{t('footer.about')}</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/legal-notice" className="hover:underline">{t('footer.legal')}</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/privacy-policy" className="hover:underline">{t('footer.privacy')}</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[18px] leading-6 font-[MadaniArabic-SemiBold] mb-4" style={{fontWeight: 700}}>{t('footer.contact')}</h4>
                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-white text-[16px] leading-6 font-[MadaniArabic-Regular]" style={{fontWeight: 400}}>{t('footer.email')}: {footerDetails.email}</a>}
                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-white text-[16px] leading-6 font-[MadaniArabic-Regular]" style={{fontWeight: 400}}>{t('footer.phone')}: {footerDetails.telephone}</a>}
                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                const url = footerDetails.socials[platformName] || "#";
                                return (
                                    <Link href={url} key={platformName} aria-label={platformName}>
                                        {getPlatformIconByName(platformName)}
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 text-center text-white px-6 text-[16px] leading-6 font-[MadaniArabic-Regular]" style={{fontWeight: 400}}>
                <p>{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
