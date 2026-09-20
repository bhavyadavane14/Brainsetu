import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.programs': 'Programs',
    'nav.contact': 'Contact',
    'nav.signIn': 'Sign In',
    'nav.register': 'Register',
    'nav.enquireNow': 'Enquire Now',
    'nav.menu': 'Menu',
    'nav.logout': 'Logout',
    'nav.studentPortal': 'Student Portal',
    'nav.learningLab': 'Neural Memory Lab',
    'nav.streak': 'Streak',
    'nav.sparks': 'Sparks',
    'nav.days': 'Days',

    // Hero
    'hero.badge': 'Premier Cognitive & Mathematics Academy',
    'hero.titleLine1': 'Building Smarter Minds.',
    'hero.titleLine2': 'Creating Confident Learners.',
    'hero.subtitle': 'Learn faster, remember better, think smarter, and perform with confidence. BrainSetu represents the bridge between Knowledge → Understanding → Application → Confidence.',
    'hero.exploreBtn': 'Explore Programs',
    'hero.enquireBtn': 'Enquire Now',
    'hero.statStudents': '10,000+ Students Guided',
    'hero.statRetention': '10X Memory Retention',
    'hero.statConfidence': '98% Math Confidence',

    // Programs Section
    'programs.sectionBadge': 'Cognitive & Math Pathways',
    'programs.sectionTitle': 'Programs Designed for Smarter Learning',
    'programs.sectionSubtitle': 'Choose from our specialized memory masterclass and our premier conceptual mathematics curriculum.',
    'programs.enquireBtn': 'Enquire & Book Diagnostic',
    'programs.original': 'Original:',
    'programs.webinarTitle': '10X Memory Power Webinar',
    'programs.webinarShortDesc': 'Complete step-by-step course to boost your memory power by 10X. Learn advanced techniques used by memory champions worldwide.',
    'programs.webinarBadge': 'Special Offer',
    'programs.webinarPerPass': '/ pass',
    'programs.webinarLink': 'View Webinar Syllabus & Details',
    'programs.mathTitle': 'Intellia 360° Mathematics Program',
    'programs.mathBadge': 'Flagship',
    'programs.mathShortDesc': 'Comprehensive conceptual mathematics curriculum focusing on first-principles understanding, logical rigor, and cognitive scaffolding.',
    'programs.mathPerTerm': '/ term',
    'programs.mathLink': 'Explore Full Mathematics Curriculum',
    'programs.flagshipTag': 'Flagship Academic Program',

    // Modal / Welcome
    'welcome.newTitle': 'Welcome to BrainSetu Academy, {name}! 🎉',
    'welcome.newSubtitle': 'Your cognitive learning journey begins today. Unlock 10X Memory Power, master conceptual mathematics, and build lifelong thinking skills.',
    'welcome.returningTitle': 'Welcome back, {name}! 👋',
    'welcome.returningSubtitle': 'Your Neural Learning Bridge is active. Ready to conquer today’s missions and keep your learning streak going strong?',
    'welcome.newBadge': 'New Student Explorer',
    'welcome.returningBadge': 'Active Neural Learner',
    'welcome.startBtn': 'Start My Learning Missions 🚀',
    'welcome.resumeBtn': 'Resume Learning 🚀',
    'welcome.tip1': 'Interactive Simulators: Explore orbit mechanics, fractions, and spatial grids.',
    'welcome.tip2': 'Cognitive Retention: Reinforce memory pathways through spaced recall.',
    'welcome.streakLabel': 'Daily Streak Active',
    'welcome.xpLabel': 'Cognitive Sparks Earned',

    // Footer
    'footer.tagline': 'The Learning Bridge between Knowledge, Understanding, Application & Confidence.',
    'footer.quickLinks': 'Quick Navigation',
    'footer.programs': 'Our Programs',
    'footer.contact': 'Contact & Support',
    'footer.forParents': 'For Parents',
    'footer.studentDev': 'Student Development',
    'footer.contactEnquire': 'Contact / Enquire',
    'footer.portal': 'Student & Parent Portal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved. BrainSetu Academy.'
  },
  hi: {
    // Nav
    'nav.home': 'होम',
    'nav.programs': 'कार्यक्रम',
    'nav.contact': 'संपर्क',
    'nav.signIn': 'साइन इन',
    'nav.register': 'रजिस्टर',
    'nav.enquireNow': 'पूछताछ करें',
    'nav.menu': 'मेनू',
    'nav.logout': 'लॉग आउट',
    'nav.studentPortal': 'छात्र पोर्टल',
    'nav.learningLab': 'न्यूरल मेमोरी लैब',
    'nav.streak': 'स्ट्रीक',
    'nav.sparks': 'स्पार्क्स',
    'nav.days': 'दिन',

    // Hero
    'hero.badge': 'अग्रणी संज्ञानात्मक और गणित अकादमी',
    'hero.titleLine1': 'स्मार्ट दिमाग का निर्माण।',
    'hero.titleLine2': 'आत्मविश्वासी शिक्षार्थी बनाना।',
    'hero.subtitle': 'तेजी से सीखें, बेहतर याद रखें, समझदारी से सोचें और आत्मविश्वास के साथ प्रदर्शन करें। ब्रेनसेतु ज्ञान → समझ → अनुप्रयोग → आत्मविश्वास के बीच का सेतु है।',
    'hero.exploreBtn': 'कार्यक्रम देखें',
    'hero.enquireBtn': 'पूछताछ करें',
    'hero.statStudents': '10,000+ छात्र प्रशिक्षित',
    'hero.statRetention': '10X स्मरण शक्ति',
    'hero.statConfidence': '98% गणित में आत्मविश्वास',

    // Programs Section
    'programs.sectionBadge': 'संज्ञानात्मक और गणित मार्ग',
    'programs.sectionTitle': 'स्मार्ट सीखने के लिए डिज़ाइन किए गए कार्यक्रम',
    'programs.sectionSubtitle': 'हमारी विशेष मेमोरी मास्टरक्लास और प्रमुख वैचारिक गणित पाठ्यक्रम में से चुनें।',
    'programs.enquireBtn': 'पूछताछ करें और डायग्नोस्टिक बुक करें',
    'programs.original': 'मूल्य:',
    'programs.webinarTitle': '10X मेमोरी पावर वेबिनार',
    'programs.webinarShortDesc': 'अपनी स्मरण शक्ति को 10 गुना बढ़ाने के लिए चरण-दर-चरण पाठ्यक्रम। विश्वभर के मेमोरी चैंपियनों द्वारा उपयोग की जाने वाली तकनीकों को सीखें।',
    'programs.webinarBadge': 'विशेष ऑफर',
    'programs.webinarPerPass': '/ पास',
    'programs.webinarLink': 'वेबिनार विवरण और पाठ्यक्रम देखें',
    'programs.mathTitle': 'इंटेलेलिया 360° गणित कार्यक्रम',
    'programs.mathBadge': 'फ्लैगशिप',
    'programs.mathShortDesc': 'मूल सिद्धांतों की समझ, तार्किक विश्लेषण और संज्ञानात्मक विकास पर केंद्रित व्यापक वैचारिक गणित पाठ्यक्रम।',
    'programs.mathPerTerm': '/ सत्र',
    'programs.mathLink': 'संपूर्ण गणित पाठ्यक्रम देखें',
    'programs.flagshipTag': 'प्रमुख शैक्षणिक कार्यक्रम',

    // Modal / Welcome
    'welcome.newTitle': 'ब्रेनसेतु अकादमी में आपका स्वागत है, {name}! 🎉',
    'welcome.newSubtitle': 'आपकी संज्ञानात्मक सीखने की यात्रा आज से शुरू हो रही है। 10X मेमोरी पावर अनलॉक करें और वैचारिक गणित में महारत हासिल करें।',
    'welcome.returningTitle': 'वापसी पर स्वागत है, {name}! 👋',
    'welcome.returningSubtitle': 'आपका न्यूरल लर्निंग ब्रिज सक्रिय है। आज के मिशन पूरे करने और अपनी सीखने की स्ट्रीक जारी रखने के लिए तैयार हैं?',
    'welcome.newBadge': 'नया छात्र अन्वेषक',
    'welcome.returningBadge': 'सक्रिय न्यूरल शिक्षार्थी',
    'welcome.startBtn': 'सीखने का मिशन शुरू करें 🚀',
    'welcome.resumeBtn': 'सीखना जारी रखें 🚀',
    'welcome.tip1': 'इंटरैक्टिव सिमुलेटर: कक्षा यांत्रिकी, भिन्न और स्थानिक ग्रिड का अन्वेषण करें।',
    'welcome.tip2': 'संज्ञानात्मक प्रतिधारण: स्मरण शक्ति को मजबूत करें।',
    'welcome.streakLabel': 'दैनिक स्ट्रीक सक्रिय',
    'welcome.xpLabel': 'संज्ञानात्मक स्पार्क्स अर्जित',

    // Footer
    'footer.tagline': 'ज्ञान, समझ, अनुप्रयोग और आत्मविश्वास के बीच का सीखने का सेतु।',
    'footer.quickLinks': 'त्वरित नेविगेशन',
    'footer.programs': 'हमारे कार्यक्रम',
    'footer.contact': 'संपर्क और सहायता',
    'footer.forParents': 'अभिभावकों के लिए',
    'footer.studentDev': 'छात्र विकास',
    'footer.contactEnquire': 'संपर्क / पूछताछ',
    'footer.portal': 'छात्र और अभिभावक पोर्टल',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'नियम और शर्तें',
    'footer.rights': 'सर्वाधिकार सुरक्षित। ब्रेनसेतु अकादमी।'
  },
  mr: {
    // Nav
    'nav.home': 'मुख्यपृष्ठ',
    'nav.programs': 'अभ्यासक्रम',
    'nav.contact': 'संपर्क',
    'nav.signIn': 'साइन इन',
    'nav.register': 'नोंदणी करा',
    'nav.enquireNow': 'चौकशी करा',
    'nav.menu': 'मेनू',
    'nav.logout': 'लॉग आउट',
    'nav.studentPortal': 'विद्यार्थी पोर्टल',
    'nav.learningLab': 'न्यूरल मेमरी लॅब',
    'nav.streak': 'सातत्य (Streak)',
    'nav.sparks': 'स्पार्क्स',
    'nav.days': 'दिवस',

    // Hero
    'hero.badge': 'अग्रगण्य कॉग्निटिव्ह आणि गणित अकादमी',
    'hero.titleLine1': 'हुशार मनांची घडण.',
    'hero.titleLine2': 'आत्मविश्वासू विद्यार्थ्यांची निर्मिती.',
    'hero.subtitle': 'वेगाने शिका, अधिक चांगले लक्षात ठेवा, हुशारीने विचार करा आणि आत्मविश्वासाने कामगिरी करा. ब्रेनसेतु हे ज्ञान → समज → उपयोजन → आत्मविश्वास यामधील सेतू आहे.',
    'hero.exploreBtn': 'अभ्यासक्रम पहा',
    'hero.enquireBtn': 'चौकशी करा',
    'hero.statStudents': '१०,०००+ विद्यार्थ्यांना मार्गदर्शन',
    'hero.statRetention': '१० पट स्मरणशक्ती',
    'hero.statConfidence': '९८% गणितातील आत्मविश्वास',

    // Programs Section
    'programs.sectionBadge': 'संज्ञानात्मक आणि गणित मार्ग',
    'programs.sectionTitle': 'प्रभावी शिक्षणासाठी डिझाइन केलेले अभ्यासक्रम',
    'programs.sectionSubtitle': 'आमचा विशेष स्मरणशक्ती मास्टरक्लास आणि संकल्पनात्मक गणित अभ्यासक्रमातून निवडा.',
    'programs.enquireBtn': 'चौकशी करा आणि डायग्नोस्टिक बुक करा',
    'programs.original': 'मूळ किंमत:',
    'programs.webinarTitle': '10X मेमरी पॉवर वेबिनार',
    'programs.webinarShortDesc': 'तुमची स्मरणशक्ती १० पटीने वाढवण्यासाठी टप्प्याटप्प्याने मार्गदर्शन करणारा कोर्स. जागतिक मेमरी चॅम्पियन्स वापरत असलेल्या तंत्रांचा अभ्यास करा.',
    'programs.webinarBadge': 'खास ऑफर',
    'programs.webinarPerPass': '/ प्रवेश',
    'programs.webinarLink': 'वेबिनार अभ्यासक्रम व तपशील पहा',
    'programs.mathTitle': 'इंटेलेलिया 360° गणित अभ्यासक्रम',
    'programs.mathBadge': 'फ्लॅगशिप',
    'programs.mathShortDesc': 'मूळ संकल्पनांची स्पष्टता, तार्किक विचार आणि बौद्धिक क्षमतेचा विकास यावर लक्ष केंद्रित करणारा सर्वसमावेशक गणित अभ्यासक्रम.',
    'programs.mathPerTerm': '/ सत्र',
    'programs.mathLink': 'संपूर्ण गणित अभ्यासक्रम पहा',
    'programs.flagshipTag': 'प्रमुख शैक्षणिक अभ्यासक्रम',

    // Modal / Welcome
    'welcome.newTitle': 'ब्रेनसेतु अकादमीमध्ये आपले स्वागत आहे, {name}! 🎉',
    'welcome.newSubtitle': 'तुमचा संज्ञानात्मक शिक्षणाचा प्रवास आजपासून सुरू होत आहे. १० पट स्मरणशक्ती अनलॉक करा आणि संकल्पनात्मक गणितात प्राविण्य मिळवा.',
    'welcome.returningTitle': 'पुन्हा स्वागत आहे, {name}! 👋',
    'welcome.returningSubtitle': 'तुमचा न्यूरल लर्निंग ब्रिज सक्रिय आहे. आजचे मिशन पूर्ण करण्यासाठी आणि शिकण्याचे सातत्य राखण्यासाठी सज्ज आहात का?',
    'welcome.newBadge': 'नवीन विद्यार्थी',
    'welcome.returningBadge': 'सक्रिय न्यूरल विद्यार्थी',
    'welcome.startBtn': 'मिशन सुरू करा 🚀',
    'welcome.resumeBtn': 'शिकणे सुरू ठेवा 🚀',
    'welcome.tip1': 'संवाद साधणारे सिम्युलेटर: अवकाश यांत्रिकी, अपूर्णांक आणि ग्रिड अभ्यासा.',
    'welcome.tip2': 'संज्ञानात्मक सराव: स्मृती दृढ करा.',
    'welcome.streakLabel': 'दैनंदिन सातत्य सक्रिय',
    'welcome.xpLabel': 'मिळालेले स्पार्क्स (XP)',

    // Footer
    'footer.tagline': 'ज्ञान, समज, उपयोजन आणि आत्मविश्वास यामधील शिकण्याचा मजबूत सेतू.',
    'footer.quickLinks': 'जलद नेव्हिगेशन',
    'footer.programs': 'आमचे अभ्यासक्रम',
    'footer.contact': 'संपर्क आणि मदत',
    'footer.forParents': 'पालकांसाठी',
    'footer.studentDev': 'विद्यार्थी विकास',
    'footer.contactEnquire': 'संपर्क / चौकशी',
    'footer.portal': 'विद्यार्थी व पालक पोर्टल',
    'footer.privacy': 'गोपनीयता धोरण',
    'footer.terms': 'नियम आणि अटी',
    'footer.rights': 'सर्व हक्क राखीव. ब्रेनसेतु अकादमी.'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('brainsetu_language') as Language;
    return saved === 'en' || saved === 'hi' || saved === 'mr' ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('brainsetu_language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const langDict = translations[language] || translations.en;
    if (langDict[key]) {
      return langDict[key];
    }
    if (translations.en[key]) {
      return translations.en[key];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
