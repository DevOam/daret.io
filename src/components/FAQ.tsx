"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useLanguage } from '@/contexts/LanguageContext';

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="">
                    <p className="hidden lg:block text-foreground-accent font-[MadaniArabic-Regular]">{t('faq.title')}</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left font-[MadaniArabic-SemiBold]">{t('faq.subtitle')}</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-foreground-accent text-center lg:text-left font-[MadaniArabic-Regular]">
                        {t('faq.askus')}
                    </p>
                    <p className="text-[#1C753F] text-[32px] leading-[40px] font-bold font-[700]" style={{fontFamily: 'MadaniArabic-SemiBold', fontWeight: 700}}>contact@daret.io</p>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto border-b">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-7">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex w-full justify-between rounded-lg text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span style={{ fontFamily: "MadaniArabic-SemiBold, sans-serif" }} className="text-lg">
                                                {faq.questionKey ? t(faq.questionKey) : faq.question}
                                            </span>
                                            {open ? <BiMinus className="w-5 h-5 text-[#1C753F]" /> : <BiPlus className="w-5 h-5 text-[#1C753F]" />}
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            <p style={{ fontFamily: "MadaniArabic-Regular, sans-serif" }}>
                                                {faq.answerKey ? t(faq.answerKey) : faq.answer}
                                            </p>
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;