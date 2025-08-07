import { motion } from "framer-motion"
import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center mt-8 gap-3 lg:gap-5 lg:flex-row lg:items-start"
            variants={childVariants}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 mt-3 w-fit">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-[18px] leading-[28px] text-[#171717] font-[MadaniArabic-SemiBold]">
                    {title}
                </h4>
                <p className="font-[MadaniArabic-Regular] text-[16px] leading-[24px] text-[#454545]">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet