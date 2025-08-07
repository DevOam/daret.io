'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.language': 'EN',
    
    // Hero Section
    'hero.title': 'Daret - Où la Tradition Marocaine Rencontre l\'Épargne Intelligente',
    'hero.subtitle': 'Né de générations de confiance, Daret apporte la tontine marocaine à l\'ère numérique. Économisez de l\'argent ensemble, un tour à la fois — pas de banques, pas d\'intérêts, juste des gens qui s\'entraident.',
    
    // Benefits Section
    'benefits.title': 'Économiser ensemble, en toute simplicité.',
    'benefits.subtitle': 'Nous avons créé Daret pour apporter clarté, confiance et simplicité à une tradition qui soutient les communautés marocaines depuis des générations. Gérer une tontine ne devrait pas être stressant, confus ou exclusif. Avec Daret, nous voulions préserver l\'esprit de solidarité tout en offrant un outil moderne et sécurisé qui aide les gens à s\'organiser, suivre et grandir ensemble.',
    
    // Benefit Items
    'benefit1.title': 'Enraciné dans la culture. Réinventé pour aujourd\'hui.',
    'benefit1.description': 'Depuis des décennies, les familles, voisins et amis marocains utilisent "Daret" comme moyen de s\'entraider — mettant de l\'argent en commun à chaque cycle pour aider quelqu\'un à atteindre un objectif : un mariage, une voiture, une petite entreprise, ou juste un filet de sécurité.',
    'benefit1.bullet1.title': 'Alimenté par la communauté, sans dette',
    'benefit1.bullet1.description': 'Oubliez les taux d\'intérêt et les scores de crédit. Daret est alimenté par les gens, pas par les banques.',
    'benefit1.bullet2.title': 'Rappels intelligents et alertes',
    'benefit1.bullet2.description': 'Plus besoin de courir après les gens. Tout le monde reste sur la bonne voie avec des mises à jour automatisées.',
    'benefit1.bullet3.title': 'Flexible pour toutes les tailles de groupe',
    'benefit1.bullet3.description': 'Commencez un Daret avec 3 personnes ou 30. L\'application s\'adapte au rythme, à la fréquence et à l\'ordre de paiement de votre groupe.',
    
    'benefit2.title': 'C\'est simple, transparent et conçu pour vous.',
    'benefit2.description': 'Daret n\'est pas seulement une application — c\'est un mouvement. Une façon plus intelligente de gérer l\'argent collectivement, inspirée par la tradition et alimentée par la technologie.',
    'benefit2.bullet1.title': 'Pas besoin de compte bancaire',
    'benefit2.bullet1.description': 'Daret apporte l\'inclusion financière à tous.',
    'benefit2.bullet2.title': 'Planifiez grand, économisez petit',
    'benefit2.bullet2.description': 'Vous ne pouvez pas économiser seul ? Avec Daret, de petites contributions constantes de chaque membre se transforment en grandes opportunités pour tous.',
    'benefit2.bullet3.title': '100% mobile, toujours connecté',
    'benefit2.bullet3.description': 'Créez et gérez vos cercles de n\'importe où. Tout ce dont vous avez besoin, c\'est votre téléphone.',
    
    'benefit3.title': 'Tous les cercles Daret, une seule application.',
    'benefit3.description': 'Gérez tous vos cercles Daret dans une seule application sécurisée. Suivez, rejoignez et gérez facilement toutes vos tontines depuis un seul endroit — avec une confidentialité totale, des rappels intelligents et une sécurité de premier plan.',
    'benefit3.bullet1.title': 'Cercles privés',
    'benefit3.bullet1.description': 'Vos groupes Daret sont chiffrés de bout en bout. Seuls les membres peuvent voir ou gérer l\'activité.',
    'benefit3.bullet2.title': 'Authentification OTP',
    'benefit3.bullet2.description': 'Connectez-vous en toute sécurité en utilisant l\'empreinte digitale, la reconnaissance faciale ou les codes à usage unique (OTP).',
    'benefit3.bullet3.title': 'Conforme RGPD',
    'benefit3.bullet3.description': 'Nous surveillons votre compte 24h/24 et 7j/7 pour prévenir la fraude et garder vos données en sécurité.',
    
    // CTA Section
    'cta.title': 'Rejoignez Plus de 1000 Utilisateurs Pour Transformer Vos Finances',
    'cta.subtitle': 'Votre voyage vers la liberté financière commence ici. Téléchargez Daret aujourd\'hui et faites le premier pas vers un avenir financier plus brillant !',
    
    // App Store Buttons
    'appstore.download': 'Disponible sur',
    'appstore.appstore': 'App Store',
    'playstore.getiton': 'DISPONIBLE SUR',
    'playstore.googleplay': 'Google Play',
    
    // Testimonials
    'testimonials.title': 'Ce que disent nos premiers utilisateurs',
    'testimonials.subtitle': 'Écoutez ceux qui ont essayé Daret. De vraies histoires de vraies personnes',
    'testimonials.trusted': 'Fait confiance par plus de 1000+ clients dans le monde',
    
    // FAQ
    'faq.title': 'FAQ',
    'faq.subtitle': 'Questions fréquemment posées',
    'faq.askus': 'Demandez-nous tout !',
    'faq.question1': 'Daret est-il sécurisé ?',
    'faq.answer1': 'Oui. Vos données sont chiffrées et protégées. Nous ne stockons aucun actif financier et ne réalisons pas de transactions, garantissant une expérience sûre.',
    'faq.question2': 'Puis-je utiliser Daret sur plusieurs appareils ?',
    'faq.answer2': 'Oui. Vous pouvez accéder à votre compte Daret en toute sécurité depuis n\'importe quel appareil en utilisant vos identifiants.',
    'faq.question3': 'Puis-je connecter mon compte bancaire à Daret ?',
    'faq.answer3': 'Non. Daret ne se connecte pas à votre compte bancaire. Toutes les contributions et les paiements sont gérés directement entre les membres.',
    'faq.question4': 'Ai-je besoin d\'expertise financière pour utiliser l\'application ?',
    'faq.answer4': 'Pas du tout. Daret est conçu pour être simple et intuitif pour tous, sans aucune formation financière requise.',
    'faq.question5': 'Que faire si j\'ai besoin d\'aide pour utiliser l\'application ?',
    'faq.answer5': 'Vous pouvez contacter notre équipe de support directement depuis l\'application. Nous sommes là pour vous guider à chaque étape.',
      // Testimonials content
    'testimonial1.message': 'J\'ai toujours été intéressée à rejoindre une daret, mais je m\'inquiétais de ne pas suivre le rythme ou d\'oublier mon tour. Avec Daret, je reçois des rappels clairs, je peux voir les progrès du groupe, et je n\'ai pas besoin de demander des mises à jour. Cela rend toute l\'expérience plus facile et plus transparente.',
    'testimonial2.message': 'Je fais partie de trois darets différentes — une avec la famille, une avec des amis, et une au travail. Les gérer toutes était chaotique. Daret m\'aide à rester organisé, me rappelle quand c\'est mon tour, et qui je dois payer.',
    'testimonial3.message': 'Avant Daret, suivre qui avait payé et quand était épuisant. J\'avais l\'habitude de tout écrire dans un carnet, et si je le perdais, tout le groupe était confus. Avec Daret, je peux voir toutes les contributions en un seul endroit, envoyer des rappels, et éviter les malentendus. Cela m\'a donné la tranquillité d\'esprit.',

    // About Page
    'aboutPage.title': 'À Propos',
    'aboutPage.company': 'Entreprise',
    'aboutPage.intro1': 'Notre Charte décrit les principes qui guident notre mission de soutenir la collaboration financière éthique, inclusive et sécurisée au Maroc et au-delà.',
    'aboutPage.intro2': 'Ce document reflète notre engagement à long terme à construire une plateforme de confiance qui renforce l\'épargne communautaire, respecte les valeurs islamiques et permet aux gens de gérer leurs finances avec dignité et transparence.',
    'aboutPage.mission.title': 'Notre Mission',
    'aboutPage.mission.text1': 'La mission de Daret est de moderniser et simplifier les tontines marocaines traditionnelles, permettant aux individus, familles et communautés de construire ensemble la stabilité financière. Nous visons à offrir une plateforme sécurisée, accessible et conforme pour gérer les cercles d\'épargne rotatifs, guidée par les valeurs d\'équité, de transparence et de solidarité.',
    'aboutPage.mission.text2': 'Nous croyons que la technologie éthique peut améliorer les systèmes financiers informels sans remplacer leur richesse culturelle et sociale. Notre succès ne se mesure pas seulement par la croissance des utilisateurs ou les transactions, mais par la confiance que nous gagnons et l\'impact positif que nous apportons à la vie quotidienne.',
    'aboutPage.structure.title': 'Notre Structure',
    'aboutPage.structure.text': 'Daret est construit sur des principes de durabilité et d\'intégrité. Bien que nous puissions générer des revenus pour assurer la croissance et la fiabilité de la plateforme, nous ne compromettrons jamais le bien-être des utilisateurs. Nous suivons un modèle à profit plafonné, guidé par l\'éthique, où le succès financier est réinvesti dans notre mission, nos utilisateurs et les communautés plus larges que nous servons.',
    
    // CTA About
    'aboutPage.cta.heading': 'Autonomisez votre parcours financier avec Daret',
    'aboutPage.cta.subheading': 'Découvrez une nouvelle façon d\'épargner, de planifier et de grandir ensemble. Daret vous aide à construire la confiance et à atteindre vos objectifs dans une communauté solidaire. Commencez votre cercle aujourd\'hui et découvrez la finance réinventée pour tous.',    // Legal Notice
    'legalNotice.title': 'Mentions Légales',
    'legalNotice.company': 'Entreprise',
    'legalNotice.lastUpdated': 'Dernière mise à jour : Janvier 2025',
    'legalNotice.content': 'Informations sur l\'entreprise :\nAtlas Global Technologies\nDéveloppeur de l\'application Daret\nEmail : contact@atlasglobaltechnologies.com\nSupport App : contact@daret.io\n\nHébergement :\nCette application est hébergée par des services cloud sécurisés conformes aux standards internationaux de protection des données.\n\nPropriété intellectuelle :\nTous les éléments de cette application (textes, images, logos, design) sont protégés par les droits d\'auteur et appartiennent à Atlas Global Technologies.\n\nResponsabilité :\nNous nous efforçons de maintenir des informations exactes et à jour, mais ne pouvons garantir l\'absence d\'erreurs ou d\'omissions.\n\nContact :\nPour toute question juridique ou technique concernant cette application, veuillez nous contacter aux adresses mentionnées ci-dessus.',    // Privacy Policy
    'privacyPolicy.title': 'Politique de Confidentialité',
    'privacyPolicy.company': 'Entreprise',
    'privacyPolicy.effectiveDate': 'Date d\'entrée en vigueur : 24 juillet 2025',
    'privacyPolicy.intro': 'Le responsable du traitement des données responsable du traitement de vos données personnelles en relation avec l\'application Daret est ATLAS GLOBAL TECHNOLOGIES LTD, numéro de société 16556299, enregistrée en Angleterre et au pays de Galles.',
    'privacyPolicy.dataController': 'Responsable du traitement des données',
    'privacyPolicy.dataControllerContent': 'Le responsable du traitement des données responsable du traitement de vos données personnelles en relation avec l\'application Daret est ATLAS GLOBAL TECHNOLOGIES LTD, numéro de société 16556299, enregistrée en Angleterre et au pays de Galles. La société est légalement représentée par son PDG, M. Nabil CHAKIR. Toutes les questions concernant la protection des données et les pratiques de confidentialité doivent être adressées à contact@atlasglobaltechnologies.com. En tant que responsable du traitement, nous nous assurons que vos données personnelles sont traitées conformément au RGPD britannique, au Data Protection Act 2018 et aux réglementations européennes applicables pour les utilisateurs au sein de l\'UE. Nous nous engageons à maintenir la confidentialité et la sécurité de toutes les données utilisateur collectées via l\'application et stockées sur nos serveurs sécurisés hébergés sur Google Firebase.',// Privacy sections
    'privacy.dataCollected.title': 'Données collectées',
    'privacy.dataCollected.content': 'Nous collectons plusieurs types de données personnelles pour fournir et améliorer nos services. Cela comprend les informations d\'identification telles que votre nom, adresse e-mail, numéro de téléphone et photo de profil optionnelle lors de votre inscription à un compte Daret. Nous collectons également des données liées à vos interactions dans l\'application, notamment la création et la gestion de darets, l\'historique de participation, les notifications envoyées et d\'autres mesures d\'utilisation. De plus, nous collectons des données d\'appareil et techniques telles que l\'adresse IP, le modèle d\'appareil, la version du système d\'exploitation, le fuseau horaire, les préférences linguistiques et les journaux d\'erreur/plantage. Nous utilisons des données d\'analyse anonymisées pour comprendre comment les utilisateurs interagissent avec l\'application et pour améliorer l\'expérience utilisateur. Nous ne collectons ni ne traitons aucune donnée financière, transactionnelle ou bancaire.',
    'privacy.purpose.title': 'Finalité du traitement',
    'privacy.purpose.content': 'Les données personnelles que nous collectons sont utilisées uniquement pour fournir, maintenir et améliorer l\'application Daret. Cela inclut permettre aux utilisateurs de créer et gérer des darets, faciliter la coordination de groupe, envoyer des rappels et assurer l\'authentification des utilisateurs et la sécurité des comptes. Nous utilisons également vos données pour améliorer les performances de l\'application, analyser les tendances d\'utilisation, déboguer les problèmes et améliorer les fonctionnalités. Les données de communication peuvent être utilisées pour répondre aux demandes ou aux commentaires des utilisateurs. Nous pouvons traiter les données pour nous conformer aux obligations légales ou répondre aux demandes légales des autorités. Aucune donnée n\'est utilisée à des fins publicitaires, de profilage ou de marketing tiers. Nos activités de traitement sont toujours alignées sur le principe de minimisation des données.',
    'privacy.legalBasis.title': 'Base légale',
    'privacy.legalBasis.content': 'Nous nous appuyons sur diverses bases légales pour traiter les données personnelles. Pour les données nécessaires au fonctionnement de l\'application et à la fourniture de ses fonctionnalités principales, la base légale est l\'exécution d\'un contrat. Lorsque le traitement est requis pour la sécurité, la prévention de la fraude ou l\'analyse, nous nous appuyons sur les intérêts légitimes qui ne prévalent pas sur vos droits fondamentaux. Pour les fonctionnalités qui nécessitent des données optionnelles (comme télécharger une photo de profil), nous nous appuyons sur votre consentement, qui peut être retiré à tout moment. Dans certains cas, nous pouvons également avoir une obligation légale de conserver ou divulguer des données, par exemple, pour nous conformer à une ordonnance du tribunal ou à une exigence réglementaire. Nous ne traitons pas de données sensibles ou ne prenons pas de décisions automatisées qui produisent des effets juridiques.',
    'privacy.dataSharing.title': 'Partage des données',
    'privacy.dataSharing.content': 'Nous ne vendons, ne louons ni n\'échangeons de données personnelles. Nous pouvons partager vos informations avec des fournisseurs de services tiers qui soutiennent le fonctionnement de l\'application Daret, notamment Google Firebase (pour l\'hébergement, l\'authentification, l\'analyse) et les plateformes de support (pour la billetterie et les communications). Ces fournisseurs de services sont liés par des obligations contractuelles de protéger vos données et d\'agir uniquement selon nos instructions. Les données peuvent également être partagées avec les forces de l\'ordre ou les autorités publiques si la loi l\'exige, comme dans les cas de fraude ou d\'abus. Tous les transferts transfrontaliers de données sont protégés par des garanties appropriées, y compris les clauses contractuelles standard. Nous ne partageons pas de données avec des annonceurs, des courtiers ou d\'autres entités commerciales.',
    'privacy.dataRetention.title': 'Conservation des données',
    'privacy.dataRetention.content': 'Nous conservons les données personnelles uniquement aussi longtemps que nécessaire pour fournir nos services et remplir les objectifs décrits dans cette politique. Les données liées au compte sont conservées tant que votre compte est actif. Lors de la suppression du compte, nous entamons le retrait de vos données de nos systèmes dans les 30 jours. Certaines données résiduelles peuvent être conservées temporairement dans les sauvegardes pour des raisons opérationnelles et légales. Nous conservons également les journaux d\'erreur et les données d\'analyse sous forme anonymisée à des fins d\'amélioration du service et de sécurité. Les périodes de conservation sont examinées régulièrement pour assurer la conformité avec les lois sur la protection des données et le principe de limitation du stockage.',
    'privacy.userRights.title': 'Vos droits',
    'privacy.userRights.content': 'Vous avez des droits spécifiques sous le RGPD et d\'autres lois sur la protection des données, notamment le droit d\'accéder à vos données personnelles, le droit de demander la correction d\'informations inexactes, le droit à l\'effacement ("droit à l\'oubli"), le droit de restreindre le traitement, le droit à la portabilité des données et le droit de vous opposer au traitement basé sur les intérêts légitimes. Lorsque le traitement est basé sur votre consentement, vous avez le droit de retirer ce consentement à tout moment. Vous avez également le droit de déposer une plainte auprès d\'une autorité de surveillance si vous croyez que vos droits en matière de données sont violés. Pour exercer l\'un de ces droits, vous pouvez nous contacter à contact@daret.io.',
    'privacy.childrenPrivacy.title': 'Confidentialité des enfants',
    'privacy.childrenPrivacy.content': 'L\'application Daret n\'est pas conçue pour être utilisée par des enfants de moins de 13 ans. Nous ne collectons pas sciemment de données personnelles auprès de mineurs. Si nous devenons conscients que des données d\'un utilisateur de moins de cet âge ont été collectées sans consentement parental, nous supprimerons rapidement ces données. Les utilisateurs âgés de 13 à 17 ans doivent obtenir la permission d\'un parent ou tuteur légal pour utiliser l\'application. Les parents peuvent nous contacter pour examiner, modifier ou supprimer les données de leur enfant.',
    'privacy.dataSecurity.title': 'Sécurité des données',
    'privacy.dataSecurity.content': 'Nous mettons en œuvre des mesures techniques et organisationnelles robustes pour protéger vos données personnelles contre l\'accès non autorisé, l\'altération, la divulgation ou la destruction. Celles-ci incluent l\'utilisation de communications chiffrées (HTTPS), le stockage sécurisé sur Firebase, les mesures de contrôle d\'accès, les audits de code réguliers et les procédures de réponse aux incidents. Notre personnel est formé sur les meilleures pratiques de protection des données. Bien qu\'aucun système ne soit entièrement immunisé contre les menaces, nous surveillons activement et améliorons notre posture de sécurité conformément aux normes de l\'industrie.',
    'privacy.policyChanges.title': 'Modifications de cette politique',
    'privacy.policyChanges.content': 'Nous pouvons mettre à jour cette politique de confidentialité pour refléter les changements dans les exigences légales, la technologie ou la façon dont nous opérons. Lorsque nous apportons des changements significatifs, nous informerons les utilisateurs via l\'application et mettrons à jour la "Date d\'entrée en vigueur" ci-dessus. Nous encourageons les utilisateurs à examiner cette politique périodiquement. L\'utilisation continue de l\'application après de telles mises à jour constitue l\'acceptation des termes révisés. Si vous n\'êtes pas d\'accord avec les changements, vous devriez cesser d\'utiliser l\'application et supprimer votre compte.',    // Terms of Use
    'termsOfUse.title': 'Conditions d\'Utilisation',
    'termsOfUse.company': 'Entreprise',
    'termsOfUse.effectiveDate': 'Date d\'entrée en vigueur : Janvier 2025',
    'termsOfUse.scopeAcceptance': 'Champ d\'application et acceptation',
    'termsOfUse.scopeAcceptanceContent': 'En utilisant l\'application Daret, vous acceptez ces conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser l\'application.',    // Terms sections
    'terms.serviceDescription.title': 'Description du service',
    'terms.serviceDescription.content': 'Daret est une plateforme numérique conçue pour aider les utilisateurs à organiser et gérer les groupes d\'épargne marocains traditionnels, connus sous le nom de "darets". L\'application fournit des outils pour enregistrer les listes de membres, les cycles de contribution, les rappels et l\'historique des paiements. Cependant, Daret n\'est pas une institution financière, ne facilite ni ne traite les paiements, et ne se connecte pas aux banques ou ne gère aucune transaction monétaire. L\'application fonctionne purement comme un outil organisationnel, et tous les échanges financiers ont lieu à l\'extérieur et sous la responsabilité des utilisateurs.',
    'terms.userEligibility.title': 'Éligibilité des utilisateurs',
    'terms.userEligibility.content': 'Vous devez être âgé d\'au moins 13 ans pour créer un compte et utiliser l\'application. Les utilisateurs de moins de 18 ans doivent avoir le consentement d\'un parent ou tuteur légal. En utilisant l\'application, vous déclarez répondre aux exigences d\'éligibilité. Nous nous réservons le droit de suspendre ou résilier les comptes si nous soupçonnons de fausses informations ou une utilisation non autorisée par des mineurs.',
    'terms.accountResponsibility.title': 'Responsabilité du compte',
    'terms.accountResponsibility.content': 'Les utilisateurs sont responsables de maintenir la confidentialité de leurs identifiants de connexion et de toutes les activités qui se produisent sous leur compte. Vous acceptez de fournir des informations exactes et complètes et de les mettre à jour si nécessaire. Vous ne devez pas usurper l\'identité d\'autrui, partager les identifiants d\'accès ou créer plusieurs comptes à des fins trompeuses. Nous ne sommes pas responsables de toute perte ou dommage résultant d\'une utilisation non autorisée du compte.',
    'terms.acceptableUse.title': 'Utilisation acceptable',
    'terms.acceptableUse.content': 'Les utilisateurs acceptent d\'utiliser l\'application uniquement à des fins légales et prévues. Les activités interdites incluent, sans s\'y limiter : soumettre des données fausses ou trompeuses ; utiliser l\'application à des fins commerciales, frauduleuses ou abusives ; violer les droits d\'autrui ; transmettre des logiciels malveillants ; ou tenter de perturber le fonctionnement de l\'application. Nous nous réservons le droit de suspendre ou bannir les utilisateurs qui s\'engagent dans un comportement interdit.',
    'terms.intellectualProperty.title': 'Propriété intellectuelle',
    'terms.intellectualProperty.content': 'Tout le contenu, les marques, les logos et la propriété intellectuelle associés à l\'application Daret sont la propriété exclusive d\'ATLAS GLOBAL TECHNOLOGIES LTD, sauf indication contraire. Les utilisateurs ne peuvent pas reproduire, modifier, distribuer ou créer des œuvres dérivées du contenu de l\'application sans consentement écrit préalable. L\'octroi d\'accès à l\'application ne transfère aucun droit de propriété intellectuelle.',
    'terms.limitationLiability.title': 'Limitation de responsabilité',
    'terms.limitationLiability.content': 'L\'application est fournie "en l\'état" et "selon disponibilité". Dans toute la mesure permise par la loi, nous déclinons toutes garanties, expresses ou implicites. Nous ne garantissons pas que l\'application sera exempte d\'erreurs ou ininterrompue. Nous ne sommes pas responsables de toute perte, y compris les désaccords financiers entre utilisateurs, la perte de données ou les dommages résultant de l\'utilisation ou de l\'incapacité d\'utiliser l\'application. Les utilisateurs portent l\'entière responsabilité de leurs interactions financières en dehors de la plateforme.',
    'terms.termination.title': 'Résiliation',
    'terms.termination.content': 'Nous pouvons suspendre ou résilier les comptes d\'utilisateurs à tout moment, avec ou sans préavis, pour une conduite qui viole ces conditions ou qui est nuisible à d\'autres utilisateurs, à l\'entreprise ou à des tiers. Les utilisateurs peuvent également supprimer leur compte à tout moment via l\'application. Lors de la résiliation, toutes les données associées seront supprimées conformément à notre politique de confidentialité.',
    'terms.governingLaw.title': 'Droit applicable',
    'terms.governingLaw.content': 'Ces conditions sont régies et interprétées conformément aux lois d\'Angleterre et du pays de Galles. Tout litige découlant de ou lié à ces conditions sera soumis à la juridiction exclusive des tribunaux compétents au Royaume-Uni. Si une disposition est jugée invalide ou inapplicable, les dispositions restantes resteront en pleine vigueur et effet.',    'terms.contact.title': 'Contact',
    'terms.contact.content': 'Pour toute demande ou préoccupation concernant ces conditions, la politique de confidentialité ou l\'application, veuillez nous contacter à :\nSupport App : contact@daret.io\nLégal et Corporate : contact@atlasglobaltechnologies.com',

    // Footer
    'footer.description': 'Daret est plus qu\'une app. C\'est l\'avenir de l\'épargne collective, bâti sur la confiance et la communauté.',
    'footer.quicklinks': 'Liens rapides',
    'footer.company': 'Entreprise',
    'footer.about': 'À propos',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.contact': 'Nous contacter',
    'footer.email': 'Email',
    'footer.phone': 'Téléphone',
    'footer.copyright': 'Copyright 2025 Daret. Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.language': 'FR',
    
    // Hero Section
    'hero.title': 'Daret - Where Moroccan Tradition Meets Smart Saving',
    'hero.subtitle': 'Born from generations of trust, Daret brings the Moroccan tontine to the digital age. Save money together, one round at a time — no banks, no interest, just people helping people.',
    
    // Benefits Section
    'benefits.title': 'Saving together, made simple.',
    'benefits.subtitle': 'We created Daret to bring clarity, trust, and simplicity to a tradition that has supported Moroccan communities for generations. Managing a tontine shouldn\'t be stressful, confusing, or exclusive. With Daret, we wanted to preserve the spirit of solidarity while offering a modern, secure tool that helps people organize, track, and grow together.',
    
    // Benefit Items
    'benefit1.title': 'Rooted in Culture. Reimagined for Today.',
    'benefit1.description': 'For decades, Moroccan families, neighbors, and friends have used "Daret" as a way to support each other — pooling money each cycle to help someone achieve a goal: a wedding, a car, a small business, or just a safety net.',
    'benefit1.bullet1.title': 'Community-Powered, No Debt',
    'benefit1.bullet1.description': 'Forget interest rates and credit scores. Daret is powered by people, not banks.',
    'benefit1.bullet2.title': 'Smart Reminders & Alerts',
    'benefit1.bullet2.description': 'No more chasing people. Everyone stays on track with automated updates.',
    'benefit1.bullet3.title': 'Flexible for All Group Sizes',
    'benefit1.bullet3.description': 'Start a Daret with 3 people or 30. The app adapts to your group\'s rhythm, frequency, and payout order.',
    
    'benefit2.title': 'It\'s Simple, Transparent, and Built for You.',
    'benefit2.description': 'Daret isn\'t just an app — it\'s a movement. A smarter way to manage money collectively, inspired by tradition and powered by technology.',
    'benefit2.bullet1.title': 'No Need for a Bank Account',
    'benefit2.bullet1.description': 'Daret brings financial inclusion to everyone.',
    'benefit2.bullet2.title': 'Plan Big, Save Small',
    'benefit2.bullet2.description': 'Can\'t save alone? With Daret, small consistent contributions from each member turn into big opportunities for everyone.',
    'benefit2.bullet3.title': '100% Mobile, Always Connected',
    'benefit2.bullet3.description': 'Create and manage your circles from anywhere. All you need is your phone.',
    
    'benefit3.title': 'All Daret Circles, One App.',
    'benefit3.description': 'Manage all your Daret circles in one secure app. Easily track, join, and manage all your tontines from one place — with total privacy, smart reminders, and top-tier security.',
    'benefit3.bullet1.title': 'Private Circles',
    'benefit3.bullet1.description': 'Your Daret groups are encrypted end-to-end. Only members can view or manage activity.',
    'benefit3.bullet2.title': 'OTP Authentication',
    'benefit3.bullet2.description': 'Log in safely using fingerprint, facial recognition, or one-time passcodes (OTP).',
    'benefit3.bullet3.title': 'RGPD Compliant',
    'benefit3.bullet3.description': 'We monitor your account 24/7 to prevent fraud and keep your data safe.',
    
    // CTA Section
    'cta.title': 'Join Over 1 Thousand Users To Transform Your Finances',
    'cta.subtitle': 'Your journey to financial freedom starts here. Download Daret today and take the first step towards a brighter financial future !',
    
    // App Store Buttons
    'appstore.download': 'AVAILABLE ON',
    'appstore.appstore': 'APP STORE',
    'playstore.getiton': 'AVAILABLE ON',
    'playstore.googleplay': 'GOOGLE PLAY',
    
    // Testimonials
    'testimonials.title': 'What Our Early Users Say',
    'testimonials.subtitle': 'Hear from those who have tried Daret. Real Stories from Real People',
    'testimonials.trusted': 'Trusted by 1000+ customers worldwide',
    
    // FAQ
    'faq.title': 'FAQ\'S',
    'faq.subtitle': 'Frequently Asked Questions',
    'faq.askus': 'Ask us anything!',
    'faq.question1': 'Is Daret secure?',
    'faq.answer1': 'Yes. Your data is encrypted and protected. We don\'t store any financial assets or conduct transactions, ensuring a safe experience.',
    'faq.question2': 'Can I use Daret on multiple devices?',
    'faq.answer2': 'Yes. You can access your Daret account securely from any device using your credentials.',
    'faq.question3': 'Can I connect my bank account to Daret?',
    'faq.answer3': 'No. Daret does not connect to your bank account. All contributions and payouts are managed directly between members.',
    'faq.question4': 'Do I need any financial expertise to use the app?',
    'faq.answer4': 'Not at all. Daret is designed to be simple and intuitive for everyone, with no financial background required.',
    'faq.question5': 'What if I need help using the app?',
    'faq.answer5': 'You can contact our support team directly from the app. We\'re here to guide you at every step.',
      // Testimonials content
    'testimonial1.message': 'I\'ve always been interested in joining a daret, but I worried about not keeping up or forgetting my turn. With Daret, I get clear reminders, I can see the group\'s progress, and I don\'t need to ask around for updates. It makes the whole experience easier and more transparent.',
    'testimonial2.message': 'I\'m part of three different darets — one with family, one with friends, and one at work. Managing all of them was messy. Daret helps me stay organized, reminds me when it\'s my turn, and who I should pay.',
    'testimonial3.message': 'Before Daret, keeping track of who paid and when was exhausting. I used to write everything in a notebook, and if I lost it, the whole group was confused. With Daret, I can see all the contributions in one place, send reminders, and avoid misunderstandings. It gave me peace of mind.',

    // About Page
    'aboutPage.title': 'About Us',
    'aboutPage.company': 'Company',
    'aboutPage.intro1': 'Our Charter outlines the principles that guide our mission to support ethical, inclusive, and secure financial collaboration in Morocco and beyond.',
    'aboutPage.intro2': 'This document reflects our long-term commitment to building a trustworthy platform that strengthens community-based savings, respects Islamic values, and empowers people to manage their finances with dignity and transparency.',
    'aboutPage.mission.title': 'Our Mission',
    'aboutPage.mission.text1': 'Daret\'s mission is to modernize and simplify traditional Moroccan tontines (daret), enabling individuals, families, and communities to build financial stability together. We aim to offer a secure, accessible, and compliant platform for managing rotating savings circles, guided by values of equity, transparency, and solidarity.',
    'aboutPage.mission.text2': 'We believe that ethical technology can enhance informal financial systems without replacing their cultural and social richness. Our success is not only measured by user growth or transactions, but by the trust we earn and the positive impact we bring to everyday lives.',
    'aboutPage.structure.title': 'Our Structure',
    'aboutPage.structure.text': 'Daret is built on principles of sustainability and integrity. While we may generate revenue to ensure the platform\'s growth and reliability, we will never compromise user well-being. We follow a capped-profit, ethically guided model, where financial success is reinvested into our mission, our users, and the broader communities we serve.',
    
    // CTA About
    'aboutPage.cta.heading': 'Empower Your Financial Journey with Daret',
    'aboutPage.cta.subheading': 'Discover a new way to save, plan, and grow together. Daret helps you build trust and achieve your goals in a supportive community. Start your circle today and experience finance reimagined for everyone.',    // Legal Notice
    'legalNotice.title': 'Legal Notice',
    'legalNotice.company': 'Company',
    'legalNotice.lastUpdated': 'Last updated: January 2025',
    'legalNotice.content': 'Company Information:\nAtlas Global Technologies\nDeveloper of the Daret application\nEmail: contact@atlasglobaltechnologies.com\nApp Support: contact@daret.io\n\nHosting:\nThis application is hosted by secure cloud services compliant with international data protection standards.\n\nIntellectual Property:\nAll elements of this application (texts, images, logos, design) are protected by copyright and belong to Atlas Global Technologies.\n\nLiability:\nWe strive to maintain accurate and up-to-date information, but cannot guarantee the absence of errors or omissions.\n\nContact:\nFor any legal or technical questions concerning this application, please contact us at the addresses mentioned above.',    // Privacy Policy
    'privacyPolicy.title': 'Privacy Policy',
    'privacyPolicy.company': 'Company',
    'privacyPolicy.effectiveDate': 'Effective Date: July 24, 2025',
    'privacyPolicy.intro': 'The data controller responsible for processing your personal data in connection with the Daret application is ATLAS GLOBAL TECHNOLOGIES LTD, company number 16556299, registered in England and Wales.',
    'privacyPolicy.dataController': 'Data Controller',
    'privacyPolicy.dataControllerContent': 'The data controller responsible for processing your personal data in connection with the Daret application is ATLAS GLOBAL TECHNOLOGIES LTD, company number 16556299, registered in England and Wales. The company is legally represented by its CEO, Mr. Nabil CHAKIR. All questions regarding data protection and privacy practices should be addressed to contact@atlasglobaltechnologies.com. As the controller, we ensure your personal data is processed in accordance with UK GDPR, Data Protection Act 2018, and applicable European regulations for users within the EU. We are committed to maintaining the confidentiality and security of all user data collected through the application and stored on our secure servers hosted on Google Firebase.',

    // Privacy sections
    'privacy.dataCollected.title': 'Data Collected',
    'privacy.dataCollected.content': 'We collect several types of personal data to provide and improve our services. This includes identification information such as your name, email address, phone number, and optional profile photo when you register for a Daret account. We also collect data related to your in-app interactions, including the creation and management of darets, participation history, notifications sent, and other usage metrics. Additionally, we collect device and technical data such as IP address, device model, operating system version, time zone, language preferences, and error/crash logs. We use anonymized analytics data to understand how users interact with the application and to improve user experience. We do not collect or process any financial, transactional, or banking data.',
    'privacy.purpose.title': 'Purpose of Processing',
    'privacy.purpose.content': 'The personal data we collect is used solely to provide, maintain, and improve the Daret application. This includes enabling users to create and manage darets, facilitating group coordination, sending reminders, and ensuring user authentication and account security. We also use your data to enhance application performance, analyze usage trends, debug issues, and improve features. Communication data may be used to respond to user inquiries or feedback. We may process data to comply with legal obligations or respond to legal requests from authorities. No data is used for advertising, profiling, or third-party marketing purposes. Our processing activities are always aligned with the principle of data minimization.',
    'privacy.legalBasis.title': 'Legal Basis',
    'privacy.legalBasis.content': 'We rely on various legal bases for processing personal data. For data necessary for the application\'s operation and provision of its core features, the legal basis is contract performance. Where processing is required for security, fraud prevention, or analytics, we rely on legitimate interests that do not override your fundamental rights. For features that require optional data (such as uploading a profile photo), we rely on your consent, which can be withdrawn at any time. In some cases, we may also have a legal obligation to retain or disclose data, for example, to comply with a court order or regulatory requirement. We do not process sensitive data or make automated decisions that produce legal effects.',
    'privacy.dataSharing.title': 'Data Sharing',
    'privacy.dataSharing.content': 'We do not sell, rent, or trade personal data. We may share your information with third-party service providers who support the operation of the Daret application, including Google Firebase (for hosting, authentication, analytics) and support platforms (for ticketing and communications). These service providers are bound by contractual obligations to protect your data and act only according to our instructions. Data may also be shared with law enforcement or public authorities if required by law, such as in cases of fraud or abuse. All cross-border data transfers are protected by appropriate safeguards, including standard contractual clauses. We do not share data with advertisers, brokers, or other commercial entities.',
    'privacy.dataRetention.title': 'Data Retention',
    'privacy.dataRetention.content': 'We retain personal data only as long as necessary to provide our services and fulfill the purposes outlined in this policy. Account-related data is retained while your account is active. Upon account deletion, we begin the removal of your data from our systems within 30 days. Some residual data may be temporarily retained in backups for operational and legal reasons. We also retain error logs and analytics data in anonymized form for service improvement and security purposes. Retention periods are regularly reviewed to ensure compliance with data protection laws and the principle of storage limitation.',
    'privacy.userRights.title': 'Your Rights',
    'privacy.userRights.content': 'You have specific rights under GDPR and other data protection laws, including the right to access your personal data, the right to request correction of inaccurate information, the right to erasure ("right to be forgotten"), the right to restrict processing, the right to data portability, and the right to object to processing based on legitimate interests. Where processing is based on your consent, you have the right to withdraw that consent at any time. You also have the right to file a complaint with a supervisory authority if you believe your data rights are violated. To exercise any of these rights, you can contact us at contact@daret.io.',
    'privacy.childrenPrivacy.title': 'Children\'s Privacy',
    'privacy.childrenPrivacy.content': 'The Daret application is not designed for use by children under 13 years of age. We do not knowingly collect personal data from minors. If we become aware that data from a user under this age has been collected without parental consent, we will promptly delete such data. Users aged 13-17 must obtain permission from a parent or legal guardian to use the application. Parents can contact us to review, modify, or delete their child\'s data.',
    'privacy.dataSecurity.title': 'Data Security',
    'privacy.dataSecurity.content': 'We implement robust technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include the use of encrypted communications (HTTPS), secure storage on Firebase, access control measures, regular code audits, and incident response procedures. Our staff is trained on data protection best practices. While no system is entirely immune to threats, we actively monitor and improve our security posture in accordance with industry standards.',
    'privacy.policyChanges.title': 'Changes to This Policy',
    'privacy.policyChanges.content': 'We may update this privacy policy to reflect changes in legal requirements, technology, or how we operate. When we make significant changes, we will notify users through the application and update the "Effective Date" above. We encourage users to review this policy periodically. Continued use of the application after such updates constitutes acceptance of the revised terms. If you disagree with the changes, you should stop using the application and delete your account.',    // Terms of Use
    'termsOfUse.title': 'Terms of Use',
    'termsOfUse.company': 'Company',
    'termsOfUse.effectiveDate': 'Effective Date: January 2025',
    'termsOfUse.scopeAcceptance': 'Scope and Acceptance',
    'termsOfUse.scopeAcceptanceContent': 'By using the Daret application, you accept these terms of use. If you do not accept these terms, please do not use the application.',

    // Terms sections
    'terms.serviceDescription.title': 'Service Description',
    'terms.serviceDescription.content': 'Daret is a digital platform designed to help users organize and manage traditional Moroccan savings groups, known as "darets". The application provides tools for recording member lists, contribution cycles, reminders, and payment history. However, Daret is not a financial institution, does not facilitate or process payments, and does not connect to banks or manage any monetary transactions. The application operates purely as an organizational tool, and all financial exchanges take place outside and under the responsibility of users.',
    'terms.userEligibility.title': 'User Eligibility',
    'terms.userEligibility.content': 'You must be at least 13 years old to create an account and use the application. Users under 18 must have consent from a parent or legal guardian. By using the application, you represent that you meet the eligibility requirements. We reserve the right to suspend or terminate accounts if we suspect false information or unauthorized use by minors.',
    'terms.accountResponsibility.title': 'Account Responsibility',
    'terms.accountResponsibility.content': 'Users are responsible for maintaining the confidentiality of their login credentials and all activities that occur under their account. You agree to provide accurate and complete information and to update it as necessary. You must not impersonate others, share access credentials, or create multiple accounts for deceptive purposes. We are not responsible for any loss or damage resulting from unauthorized account use.',
    'terms.acceptableUse.title': 'Acceptable Use',
    'terms.acceptableUse.content': 'Users agree to use the application only for legal and intended purposes. Prohibited activities include, but are not limited to: submitting false or misleading data; using the application for commercial, fraudulent, or abusive purposes; violating the rights of others; transmitting malware; or attempting to disrupt the application\'s operation. We reserve the right to suspend or ban users who engage in prohibited behavior.',
    'terms.intellectualProperty.title': 'Intellectual Property',
    'terms.intellectualProperty.content': 'All content, trademarks, logos, and intellectual property associated with the Daret application are the exclusive property of ATLAS GLOBAL TECHNOLOGIES LTD, unless otherwise indicated. Users may not reproduce, modify, distribute, or create derivative works from the application content without prior written consent. The grant of access to the application does not transfer any intellectual property rights.',
    'terms.limitationLiability.title': 'Limitation of Liability',
    'terms.limitationLiability.content': 'The application is provided "as is" and "as available". To the fullest extent permitted by law, we disclaim all warranties, express or implied. We do not guarantee that the application will be error-free or uninterrupted. We are not responsible for any loss, including financial disagreements between users, data loss, or damages resulting from the use or inability to use the application. Users bear full responsibility for their financial interactions outside the platform.',
    'terms.termination.title': 'Termination',
    'terms.termination.content': 'We may suspend or terminate user accounts at any time, with or without notice, for conduct that violates these terms or is harmful to other users, the company, or third parties. Users may also delete their account at any time through the application. Upon termination, all associated data will be deleted in accordance with our privacy policy.',
    'terms.governingLaw.title': 'Governing Law',
    'terms.governingLaw.content': 'These terms are governed by and interpreted in accordance with the laws of England and Wales. Any dispute arising from or related to these terms will be subject to the exclusive jurisdiction of the competent courts in the United Kingdom. If any provision is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.',
    'terms.contact.title': 'Contact',    'terms.contact.content': 'For any inquiries or concerns regarding these terms, the privacy policy, or the application, please contact us at:\nApp Support: contact@daret.io\nLegal & Corporate: contact@atlasglobaltechnologies.com',

    // Footer
    'footer.description': 'Daret is more than an app. It\'s the future of collective saving, built on trust and community.',
    'footer.quicklinks': 'Quick Links',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.contact': 'Contact Us',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.copyright': 'Copyright © 2025 Daret. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('daret-language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('daret-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};