'use client';

import React from 'react';
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/contexts/LanguageContext";
const getBackgroundColor = (index: number): string => {
    const colors = [
        '#0B3B25', // Dark green
        '#0B3B25', // Dark green  
        '#0B3B25', // Dark green
    ];
    return colors[index % colors.length];
};

const getUserIcon = (): JSX.Element => {
    // Simple user icon SVG
    return (
        <svg 
            className="w-6 h-6" 
            fill="white" 
            viewBox="0 0 24 24"
        >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
    );
};

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className=""
                >
                    <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                        <div className="w-[50px] h-[50px] rounded-full shadow-md flex items-center justify-center overflow-hidden" 
                                 style={{ 
                                    backgroundColor: getBackgroundColor(index),
                                    border: '2px solid #0a3420'
                                 }}>
                            {getUserIcon()}
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-[18px] leading-[28px] font-[MadaniArabic-SemiBold]" style={{ color: '#0B3B25' }}>
                                {testimonial.name}
                            </h3>
                            <p className="text-sm text-foreground-accent font-[MadaniArabic-Regular]">{testimonial.role}</p>
                        </div>
                    </div>
                    <p style={{ fontFamily: "MadaniArabic-Regular, sans-serif" }} className="text-gray-600 mb-4">
                        {testimonial.messageKey ? t(testimonial.messageKey) : testimonial.message}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
