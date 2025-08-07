'use client';

import BenefitSection from "./BenefitSection"
import { useLanguage } from '@/contexts/LanguageContext';

import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div id="features" className="relative">
            <h2 className="sr-only">Features</h2>
            {/* Container blanc pour masquer le téléphone */}
            <div className="absolute inset-0 bg-white z-30 top-0"></div>
            <section className="relative w-full flex flex-col items-center justify-center pt-8 md:pt-16 pb-0 bg-white z-40">
                <h2 className="text-[#0B3B25] text-center font-[MadaniArabic-Regular] text-[32px] md:text-[40px] lg:text-[48px] leading-[40px] md:leading-[50px] lg:leading-[60px] font-normal mb-4 mt-8 md:mt-16 px-4 md:px-0">{t('benefits.title')}</h2>
                <p className="text-[#454545] text-center font-[MadaniArabic-Regular] text-[14px] md:text-[16px] leading-[22px] md:leading-[27px] font-normal max-w-5xl mx-auto mb-8 md:mb-16 px-4 md:px-0">
                    {t('benefits.subtitle')}
                </p>
            </section>
            <div className="relative z-40">
                {benefits.map((item, index) => {
                    return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} benefitIndex={index} />
                })}
            </div>
        </div>
    )
}

export default Benefits