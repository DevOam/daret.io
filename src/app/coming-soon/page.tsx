'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ComingSoonPage: React.FC = () => {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0B3B25] via-[#1C753F] to-[#0B3B25] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Main Planet/Sphere */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#1C753F]/30 via-[#0B3B25]/40 to-[#1C753F]/30 backdrop-blur-sm border border-white/20 shadow-2xl animate-pulse">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1C753F]/20 via-[#0B3B25]/30 to-[#1C753F]/20 backdrop-blur-md"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#1C753F]/10 via-[#0B3B25]/20 to-[#1C753F]/10 backdrop-blur-lg"></div>
            </div>
            
            {/* Orbital Ring */}
            <div className="absolute inset-0 w-80 h-80 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute -top-2 left-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 pb-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto px-6">
            {/* Site Under Reconstruction */}
            <div className="mb-8">
              <p className="text-white text-sm tracking-[0.3em] uppercase font-[MadaniArabic-Regular] opacity-90">
                {t('comingSoon.siteUnder')}
              </p>
            </div>

            {/* Coming Soon Title */}
            <h1 className="text-5xl md:text-7xl font-[MadaniArabic-SemiBold] text-white tracking-[0.2em] mb-12 drop-shadow-lg animate-pulse">
              {t('comingSoon.title')}
            </h1>

            {/* Progress Bar */}
            <div className="w-full max-w-md mx-auto mb-12">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-white via-white/80 to-white rounded-full transition-all duration-300 shadow-lg"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-white text-base mt-3 font-[MadaniArabic-Regular]">
                {Math.round(progress)}%
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-white text-lg font-[MadaniArabic-Regular] leading-relaxed drop-shadow-sm">
                {t('comingSoon.description')}
              </p>
              <p className="text-white/90 text-base font-[MadaniArabic-Regular] drop-shadow-sm">
                {t('comingSoon.stayTuned')}
              </p>
            </div>

            {/* Launch Date */}
            <div className="mt-16 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-md mx-auto">
              <p className="text-white/90 text-sm uppercase tracking-wider font-[MadaniArabic-Regular] mb-2">
                {t('comingSoon.expectedLaunch')}
              </p>
              <p className="text-white text-2xl font-[MadaniArabic-SemiBold]">
                {t('comingSoon.launchDate')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .stars {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: 
            1541px 1714px #FFF, 1917px 1676px #FFF, 1539px 1718px #FFF,
            1932px 1718px #FFF, 1557px 1710px #FFF, 1575px 1706px #FFF,
            1590px 1707px #FFF, 1630px 1707px #FFF, 1660px 1707px #FFF,
            1690px 1707px #FFF, 1720px 1707px #FFF, 1750px 1707px #FFF;
          animation: animStar 50s linear infinite;
        }

        .twinkling {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: 
            1100px 1200px #FFF, 1300px 1400px #FFF, 1500px 1600px #FFF,
            1700px 1800px #FFF, 1900px 1000px #FFF, 2100px 1200px #FFF;
          animation: animStar 100s linear infinite;
        }

        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </>
  );
};

export default ComingSoonPage;
