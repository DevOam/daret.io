import Container from "@/components/Container";

const LegalNoticePage: React.FC = () => {
  return (
    <Container>
      {/* Escape all special characters in the text content */}
      {/* Legal Notice Section */}
      <section id="legal" className="py-8 md:py-12">
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[60px] lg:leading-[75px] px-4 md:px-0 text-[#0B3B25] font-[MadaniArabic-SemiBold] mb-6">
            Legal Notice
          </h2>
          <div className="text-[16px] md:text-[20px] px-4 md:px-0 text-[#454545] font-[Source Sans 3] mb-6">
            Company
          </div>
        </div>
        <div className="px-4 md:px-0 max-w-5xl mx-auto text-left text-[#454545] font-[Source Sans 3] text-[16px] md:text-[20px] leading-[24px] md:leading-[27px] mb-16">
          <strong>Last updated: 24 July 2025</strong><br /><br />
          The mobile application Daret is owned and operated by ATLAS GLOBAL TECHNOLOGIES LTD, a private limited company incorporated in England and Wales under company number 16556299. The company&apos;s headquarters are located in England and Wales, and its CEO is Mr. Nabil CHAKIR. For all legal correspondence, users can contact the app team at contact@daret.io or the company at contact@atlasglobaltechnologies.com. The app is hosted on Firebase (Google Cloud Platform) and developed using Flutter, a framework supported by Google. Daret is strictly an organizational tool and does not provide financial, transactional, or banking services. It is not a payment processor and does not access or interact with any user&apos;s bank accounts or financial instruments. Its purpose is limited to helping individuals and communities manage traditional Moroccan savings groups known as &quot;darets&quot; in a secure, structured, and transparent digital environment. Daret complies with applicable UK and EU data protection laws and does not engage in regulated financial activities.
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-8 md:py-12">
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[60px] lg:leading-[75px] px-4 md:px-0 text-[#0B3B25] font-[MadaniArabic-SemiBold] mb-6">
            Privacy Policy
          </h2>
          <div className="text-[16px] md:text-[20px] px-4 md:px-0 text-[#454545] font-[Source Sans 3] mb-6">
            Company
          </div>
        </div>
        <div className="px-4 md:px-0 max-w-5xl mx-auto text-left text-[#454545] font-[Source Sans 3] text-[16px] md:text-[20px] leading-[24px] md:leading-[27px] mb-16">
          <strong>Effective Date: 24 July 2025</strong><br /><br />
          <strong>1. Data Controller</strong><br />
          The data controller responsible for the processing of your personal data in connection with the Daret app is ATLAS GLOBAL TECHNOLOGIES LTD, company number 16556299, registered in England and Wales. The company is legally represented by its CEO, Mr. Nabil CHAKIR. All queries regarding data protection and privacy practices should be addressed to contact@atlasglobaltechnologies.com. As data controller, we ensure that your personal data is processed in accordance with the UK GDPR, the Data Protection Act 2018, and applicable European regulations for users within the EU. We are committed to maintaining the confidentiality and security of all user data collected through the app and stored on our secure servers hosted on Google Firebase.<br /><br />
          <strong>2. Data Collected</strong><br />
          We collect several types of personal data to provide and improve our services. This includes identifying information such as your name, email address, phone number, and optional profile photo when you register for a Daret account. We also collect data related to your interactions within the app, including the creation and management of darets, participation history, notifications sent, and other usage metrics. Additionally, we collect device and technical data such as IP address, device model, operating system version, time zone, language preferences, and crash/error logs. We use anonymized analytics data to understand how users engage with the app and to improve user experience. We do not collect or process any financial, transactional, or banking data.<br /><br />
          <strong>3. Purpose of Processing</strong><br />
          We process your personal data for several legitimate purposes. This includes providing the core functionality of the Daret app, such as account creation, daret management, member communication, and notification delivery. We also use your data to improve our services through analytics, troubleshoot technical issues, ensure security and fraud prevention, and comply with legal obligations. All processing activities are conducted in accordance with applicable data protection laws and are limited to what is necessary for the specified purposes.<br /><br />
          <strong>4. Legal Basis</strong><br />
          Our processing of your personal data is based on several legal grounds under the GDPR. For core app functionality, we rely on the performance of a contract (providing the services you requested). For service improvement and analytics, we rely on our legitimate interests in enhancing user experience and maintaining service quality. Where required by law, we obtain your explicit consent, particularly for marketing communications or optional features. For compliance with legal obligations, we process data as required by applicable laws and regulations.<br /><br />
          <strong>5. Data Sharing</strong><br />
          We do not sell, rent, or trade your personal data to third parties for commercial purposes. We may share your data in limited circumstances: with service providers who assist us in operating the app (such as Google Firebase for hosting and analytics), with legal authorities when required by law or to protect our rights and safety, and with your explicit consent for specific purposes. All third-party service providers are bound by contractual obligations to protect your data and use it only for the specified purposes.<br /><br />
          <strong>6. Data Retention</strong><br />
          We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law. Account data is retained while your account is active and for a reasonable period thereafter to allow for account recovery. Analytics data is typically retained for up to 2 years in anonymized form. When data is no longer needed, it is securely deleted or anonymized in accordance with our data retention policy.<br /><br />
          <strong>7. Your Rights</strong><br />
          You have specific rights under the GDPR and other data protection laws, including the right to access your personal data, the right to request correction of inaccurate information, the right to erasure (&quot;right to be forgotten&quot;), the right to restrict processing, the right to data portability, and the right to object to processing based on legitimate interests. Where processing is based on your consent, you have the right to withdraw that consent at any time. You also have the right to lodge a complaint with a supervisory authority if you believe your data rights are being violated. To exercise any of these rights, you can contact us at contact@daret.io.<br /><br />
          <strong>8. Children&apos;s Privacy</strong><br />
          The Daret app is not designed for use by children under the age of 13. We do not knowingly collect personal data from minors. If we become aware that data from a user under this age has been collected without parental consent, we will delete such data promptly. Users aged 13–17 must obtain permission from a parent or legal guardian to use the app. Parents can contact us to review, modify, or delete their child&apos;s data.<br /><br />
          <strong>9. Data Security</strong><br />
          We implement robust technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. These include the use of encrypted communications (HTTPS), secure storage on Firebase, access control measures, regular code audits, and incident response procedures. Our staff is trained on data protection best practices. While no system is entirely immune from threats, we actively monitor and improve our security posture in line with industry standards.<br /><br />
          <strong>10. Updates to This Policy</strong><br />
          We may update this Privacy Policy to reflect changes in legal requirements, technology, or the way we operate. When we make significant changes, we will notify users through the app and update the &quot;Effective Date&quot; above. We encourage users to review this policy periodically. Continued use of the app after such updates constitutes acceptance of the revised terms. If you do not agree with any changes, you should discontinue use of the app and delete your account.
        </div>
      </section>

      {/* Terms of Use Section */}
      <section id="terms" className="py-8 md:py-12">
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[60px] lg:leading-[75px] px-4 md:px-0 text-[#0B3B25] font-[MadaniArabic-SemiBold] mb-6">
            Terms of Use
          </h2>
          <div className="text-[16px] md:text-[20px] px-4 md:px-0 text-[#454545] font-[Source Sans 3] mb-6">
            Company
          </div>
        </div>
        <div className="px-4 md:px-0 max-w-5xl mx-auto text-left text-[#454545] font-[Source Sans 3] text-[16px] md:text-[20px] leading-[24px] md:leading-[27px] mb-16">
          <strong>Effective Date: 24 July 2025</strong><br /><br />
          <strong>1. Scope and Acceptance</strong><br />
          These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Daret mobile application (&quot;App&quot;), operated by ATLAS GLOBAL TECHNOLOGIES LTD. By downloading, accessing, or using the App, you agree to comply with these Terms. If you do not agree with any part of the Terms, you must not use the App. We may update these Terms from time to time, and continued use constitutes acceptance of the modified terms. Users are encouraged to review the Terms regularly.<br /><br />
          <strong>2. Description of Service</strong><br />
          Daret is a digital platform designed to help individuals and communities organize and manage traditional Moroccan savings groups known as &quot;darets&quot; or &quot;tontines.&quot; The App provides tools for creating groups, managing member participation, tracking contributions, scheduling payouts, and facilitating communication among group members. The App is strictly an organizational tool and does not handle, process, or facilitate any financial transactions, payments, or banking services.<br /><br />
          <strong>3. User Responsibilities</strong><br />
          By using the App, you agree to provide accurate and complete information during registration and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to use the App only for lawful purposes and in accordance with these Terms. You must not use the App to engage in any fraudulent, harmful, or illegal activities.<br /><br />
          <strong>4. Prohibited Uses</strong><br />
          You may not use the App for any unlawful purpose or to solicit others to perform unlawful acts. You may not violate any local, state, national, or international law or regulation. You may not transmit any material that is defamatory, offensive, or otherwise objectionable. You may not use the App to transmit any advertising or promotional material without our prior written consent.<br /><br />
          <strong>5. Intellectual Property</strong><br />
          The App and its original content, features, and functionality are owned by ATLAS GLOBAL TECHNOLOGIES LTD and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our App without our prior written consent.<br /><br />
          <strong>6. Termination</strong><br />
          We may terminate or suspend your account and bar access to the App immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms. If you wish to terminate your account, you may simply discontinue using the App and delete your account through the App settings.<br /><br />
          <strong>7. Disclaimer</strong><br />
          The information on this App is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, we exclude all representations, warranties, conditions, and other terms which might otherwise have effect in relation to the App. We do not guarantee that the App will be secure or free from bugs or viruses.<br /><br />
          <strong>8. Limitation of Liability</strong><br />
          In no event shall ATLAS GLOBAL TECHNOLOGIES LTD, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the App.<br /><br />
          <strong>9. Governing Law</strong><br />
          These Terms shall be interpreted and governed by the laws of England and Wales, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.<br /><br />
          <strong>10. Contact Information</strong><br />
          If you have any questions about these Terms, please contact us at contact@daret.io or contact@atlasglobaltechnologies.com.
        </div>
      </section>
      
      {/* Spacer before footer */}
      <div className="h-20"></div>
    </Container>
  );
};

export default LegalNoticePage;
