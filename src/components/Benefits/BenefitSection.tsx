"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";
import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
    benefitIndex: number;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight, benefitIndex }: Props) => {
    const { t } = useLanguage();
    const { imageSrc, bullets } = benefit;
    
    // Get translated content based on benefit index
    const benefitKey = `benefit${benefitIndex + 1}`;
    const title = t(`${benefitKey}.title`);
    const description = t(`${benefitKey}.description`);

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-12"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-lg", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight })}
                    
                >
                    <div className="w-full  text-center lg:text-left ">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="font-[MadaniArabic-SemiBold] text-[28px] md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[48px] lg:leading-[60px] text-[#0A3420] font-bold px-4 lg:px-0">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mt-6 font-[MadaniArabic-Regular] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#454545] px-4 lg:px-0">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mx-auto lg:ml-0 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet 
                                    key={index} 
                                    title={t(`${benefitKey}.bullet${index + 1}.title`)} 
                                    icon={item.icon} 
                                    description={t(`${benefitKey}.bullet${index + 1}.description`)} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
                    <div className={clsx("w-fit flex", { "justify-start": imageAtRight, "justify-end": !imageAtRight })}>
                        <Image src={imageSrc} alt="title" width="384" height="762" quality={100} className="lg:ml-0" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection