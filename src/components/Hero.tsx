'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import { useLanguage } from '@/contexts/LanguageContext';


const Hero: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-20 md:pt-32 lg:pt-40 px-4 md:px-5"
        >
            {/* Suppression du quadrillage en background, fond clean comme Figma */}

            <div className="absolute left-0 right-0 bottom-0 h-[160px] z-0 backdrop-blur-[2px]"
                style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(11, 59, 37, 0.3) 100%)",
                    opacity: 0.8
                }}
            />

            <div className="text-center" style={{ fontFamily: 'MadaniArabic-SemiBold, sans-serif' }}>
                <h1 className="font-[MadaniArabic-SemiBold] text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[60px] lg:leading-[75px] text-[#0B3B25] text-center max-w-5xl mx-auto font-bold" style={{ color: '#0B3B25', fontWeight: 700, fontFamily: 'MadaniArabic-SemiBold, sans-serif' }}>
                    {t('hero.title')}
                </h1>
                <p className="font-[MadaniArabic-Regular] text-[14px] md:text-[16px] leading-[22px] md:leading-[27px] text-[#454545] text-center max-w-[1234px] mx-auto mt-4 font-normal px-4 md:px-0">
                    {t('hero.subtitle')}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div>
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "easeOut",
                        duration: 1.2,
                        delay: 0.6
                    }}
                    className='relative mt-8 md:mt-12 lg:mt-16 mx-auto z-5 flex justify-center items-center'
                >
                    <Image
                        src="/images/img1.png"
                        width={384}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="app mockup"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
