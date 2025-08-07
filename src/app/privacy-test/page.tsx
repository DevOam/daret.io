import React from 'react';

export default function PrivacyTestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#0A3420] font-MadaniArabic-SemiBold font-normal mb-2">
              Privacy Policy - Development Preview
            </h1>
            <div className="text-lg text-gray-500 font-SourceSans3 font-normal">
              Development Version - Simplified Layout
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-base md:prose-lg text-gray-700 font-SourceSans3 leading-relaxed">
          <p className="text-justify mb-6">
            This is a simplified layout test for the privacy policy. 
            This version uses only native HTML elements and Tailwind classes.
          </p>
          
          <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">
            1. Test Section
          </h2>
          <p className="mb-6 text-justify">
            If this page displays correctly, it means the issue comes from custom components or global styles affecting the main page.
          </p>
          
          <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">
            2. Data Collection
          </h2>
          <p className="mb-6 text-justify">
            We only collect the information necessary to provide our services. 
            This includes your name, email address, and phone number.
          </p>
          
          <h2 className="text-xl md:text-2xl font-MadaniArabic-SemiBold text-[#0A3420] mt-10 mb-4 pb-2 border-b border-gray-200">
            3. Data Usage
          </h2>
          <p className="mb-6 text-justify">
            Your data is used solely to provide our services and improve your user experience.
          </p>
        </div>
      </div>
      
      {/* Pied de page */}
      <div className="bg-gray-50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Daret. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="/privacy" className="text-[#0A3420] hover:underline">
              Back to main Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
