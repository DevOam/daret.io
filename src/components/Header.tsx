'use client';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Fermer le menu lors du redimensionnement de la fenêtre
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        // Gestion du scroll
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image 
                            src="/images/logo_daret.png" 
                            alt="Daret Logo" 
                            width={32} 
                            height={32} 
                            className="w-8 h-8 md:w-10 md:h-10"
                        />
                        <span className="font-[MadaniArabic-SemiBold] font-bold text-lg md:text-xl text-[#0B3B25] cursor-pointer">
                            Daret
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        <Link
                            href="/"
                            className="font-[MadaniArabic-Regular] text-base md:text-lg text-[#0B3B25] hover:text-[#0a3420] transition-colors"
                        >
                            {t('nav.home')}
                        </Link>                        <Link
                            href="/about"
                            className="font-[MadaniArabic-Regular] text-base md:text-lg text-[#0B3B25] hover:text-[#0a3420] transition-colors"
                        >
                            {typeof window !== 'undefined' ? t('nav.about') : 'À propos'}
                        </Link>
                        <button
                            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                            className="bg-[#0B3B25] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-[MadaniArabic-SemiBold] text-sm md:text-base hover:bg-[#0a3420] transition-colors whitespace-nowrap"
                        >
                            {language === 'fr' ? 'EN' : 'FR'}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-white text-[#0B3B25] focus:outline-none rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-[#0B3B25] hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('nav.home')}
                        </Link>                        <Link
                            href="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-[#0B3B25] hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {typeof window !== 'undefined' ? t('nav.about') : 'À propos'}
                        </Link>
                        <button
                            onClick={() => {
                                setLanguage(language === 'fr' ? 'en' : 'fr');
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-[#0B3B25] hover:bg-[#0a3420] transition-colors"
                        >
                            {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                        </button>
                    </div>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
