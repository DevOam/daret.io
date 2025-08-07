import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return React.cloneElement(children, {
        className:
            (children.props.className ? children.props.className + ' ' : '') +
            'font-[MadaniArabic-SemiBold] text-[48px] leading-[60px] text-[#0A3420] font-bold'
    });
};

export default SectionTitle;