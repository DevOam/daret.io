"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";

import { useCtaDetailsAbout } from "@/data/ctaAbout";
import AppStoreButton from "@/components/AppStoreButton";
import PlayStoreButton from "@/components/PlayStoreButton";
import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const ctaDetailsAbout = useCtaDetailsAbout();
  return (
    <>
      <Container>
        <Section id="about" title="" description="">
          <div
            style={{
              textAlign: "center",
              paddingTop: 48,
              paddingBottom: 32,
              marginBottom: 32,
            }}
          >
            <h1
              style={{
                color: "#0B3B25",
                fontFamily: "MadaniArabic-SemiBold, sans-serif",
                fontWeight: 400,
                fontSize: 60,
                lineHeight: "75px",
                marginBottom: 8,
              }}
            >
              {t('aboutPage.title')}
            </h1>
            <div
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                color: "#454545",
                marginBottom: 24,
              }}
            >
              {t('aboutPage.company')}
            </div>
            <div
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                color: "#454545",
                marginBottom: 8,
                lineHeight: "27px",
              }}
            >
              {t('aboutPage.intro1')}
            </div>
            <div
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                color: "#454545",
                marginBottom: 0,
                lineHeight: "27px",
              }}
            >
              {t('aboutPage.intro2')}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/about.png"
              alt="About Us"
              width={1280}
              height={720}
              className="rounded-3xl w-[80%] max-w-[1280px] h-auto"
              priority
              unoptimized
            />
          </div>
          {/* Ajout du nouveau contenu sous l'image, même structure et styles */}
          <div
            style={{
              textAlign: "center",
              paddingTop: 48,
              paddingBottom: 32,
              marginBottom: 32,
            }}
          >
            <h2
              style={{
                color: "#0B3B25",
                fontFamily: "MadaniArabic-SemiBold, sans-serif",
                fontWeight: 400,
                fontSize: 48,
                lineHeight: "60px",
                marginBottom: 24,
              }}
            >
              {t('aboutPage.mission.title')}
            </h2>
            <div
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                color: "#454545",
                marginBottom: 24,
                lineHeight: "27px",
              }}
            >
              {t('aboutPage.mission.text1')}
            </div>
            <div
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                color: "#454545",
                marginBottom: 24,
                lineHeight: "27px",
              }}
            >
              {t('aboutPage.mission.text2')}
            </div>
          </div>
          
          {/* Deuxième image */}
          <div className="flex justify-center my-12">
            <Image
              src="/images/about2.png"
              alt="About Us - Mission"
              width={1280}
              height={720}
              className="rounded-3xl w-[80%] max-w-[1280px] h-auto"
              priority
              unoptimized
            />
          </div>
          
          {/* Section Our Structure sous la 2ème image */}
          <div
            style={{
              textAlign: "center",
              paddingTop: 32,
              paddingBottom: 32,
              marginBottom: 32,
            }}
          >
            <h2
              style={{
                color: "#0B3B25",
                fontFamily: "MadaniArabic-SemiBold, sans-serif",
                fontWeight: 400,
                fontSize: 48,
                lineHeight: "60px",
                marginBottom: 24,
              }}
            >
              {t('aboutPage.structure.title')}
            </h2>
            <div
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                color: "#454545",
                marginBottom: 24,
                lineHeight: "27px",
                maxWidth: 800,
                margin: "0 auto 24px auto",
                textAlign: "center",
              }}
            >
              {t('aboutPage.structure.text')}
            </div>
          </div>
        </Section>
      </Container>
      
      <Container>
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
              <div className="h-full w-full">
                <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                </div>
                <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{ctaDetailsAbout.heading}</h2>
                  <p className="mx-auto max-w-xl md:px-5">{ctaDetailsAbout.subheading}</p>
                  <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
                    <AppStoreButton />
                    <PlayStoreButton />
                  </div>
                </div>
              </div>
            </div>
        </section>
      </Container>
    </>
  );
};

export default AboutPage;