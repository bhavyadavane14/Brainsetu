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

    // Impact Section
    'impact.badge': 'Our Measurable Impact',
    'impact.title': 'Proven Track Record of Excellence',
    'impact.subtitle': 'Empowering learners, educators, and schools across the nation with research-backed cognitive and conceptual learning methodologies.',
    'impact.stat1Label': 'Successful Registrations',
    'impact.stat2Label': 'Active Members',
    'impact.stat3Label': 'Years of Experience',
    'impact.stat4Label': 'Live Webinars',
    'impact.stat5Label': 'Seminars & Workshops',
    'impact.stat6Label': 'Schools We Work With',

    // Why BrainSetu Section
    'why.title': 'More Than Just Learning',
    'why.subtitle': 'BrainSetu combines mathematics, cognitive development, memory techniques, mentoring, and technology to create a more meaningful learning experience.',
    'why.benefit1Title': 'Conceptual Learning',
    'why.benefit1Desc': 'Understand the "why" behind mathematical relationships rather than passively memorizing rules.',
    'why.benefit2Title': 'Logical Thinking',
    'why.benefit2Desc': 'Develop structured deduction, pattern recognition, and analytical clarity that transfer to any domain.',
    'why.benefit3Title': 'Memory Techniques',
    'why.benefit3Desc': 'Scientific concept chunking and active recall methods that make retention effortless and stress-free.',
    'why.benefit4Title': 'Problem-Solving & Technology',
    'why.benefit4Desc': 'Independent problem-solving heuristics supported by modern digital mathematics learning tools.',

    // Video Showcase Section
    'video.badge': 'Official Video Showcase',
    'video.title': 'Experience BrainSetu in Action',
    'video.subtitle': 'Watch how our cognitive development methodology and the Intellia 360 Mathematics Program transform conceptual clarity, analytical thinking, and lifelong confidence.',
    'video.feat1Title': 'Conceptual Clarity',
    'video.feat1Desc': 'First-principles mathematical reasoning that banishes rote memorization.',
    'video.feat2Title': '10X Memory Power',
    'video.feat2Desc': 'Scientific concept chunking and neural recall techniques.',
    'video.feat3Title': 'Expert Mentorship',
    'video.feat3Desc': 'Dedicated mentors paired with adaptive digital practice tools.',
    'video.watchYoutube': 'Watch Directly on YouTube',

    // Learning Journey Section
    'journey.title': 'The Learning Journey',
    'journey.subtitle': 'A clear six-step cognitive progression that transforms new concepts into lifelong understanding and mastery.',
    'journey.stage': 'Stage',
    'journey.step1Title': 'Learn',
    'journey.step1Desc': 'Introduce the concept with intuition and real-world curiosity.',
    'journey.step2Title': 'Understand',
    'journey.step2Desc': 'Build conceptual clarity from first principles.',
    'journey.step3Title': 'Remember',
    'journey.step3Desc': 'Use memory techniques and meaningful neural connections.',
    'journey.step4Title': 'Practice',
    'journey.step4Desc': 'Reinforce through deliberate, tiered exercise sets.',
    'journey.step5Title': 'Apply',
    'journey.step5Desc': 'Use knowledge in non-routine problems and real situations.',
    'journey.step6Title': 'Master',
    'journey.step6Desc': 'Track progress, close feedback loops, and achieve enduring mastery.',

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

    // Technology Section
    'tech.title': 'Technology That Supports Learning — Not Replaces It',
    'tech.subtitle': 'BrainSetu harmonizes physical mentorship with digital tools to deepen comprehension and practice consistency.',
    'tech.pillar1Title': 'Physical Learning',
    'tech.pillar1Desc': 'Expert mentor-led instruction, interactive Socratic discussions, and personal attention to build confidence.',
    'tech.pillar2Title': 'Digital Learning',
    'tech.pillar2Desc': 'Dynamic mathematics visualizations, interactive geometry tools, and gamified practice to make concepts intuitive.',
    'tech.pillar3Title': 'AI Support',
    'tech.pillar3Desc': 'Intelligent diagnostic assessments, personalized revision recommendations, and progress tracking.',
    'tech.keyCapabilities': 'Key Learning Capabilities:',
    'tech.feat1': 'Interactive learning',
    'tech.feat2': 'Digital practice',
    'tech.feat3': 'Gamification',
    'tech.feat4': 'Assessments',
    'tech.feat5': 'Progress tracking',
    'tech.feat6': 'Personalized practice',

    // Student Development Section
    'dev.title': 'Learning Beyond Marks',
    'dev.subtitle': 'We cultivate eight foundational cognitive and academic faculties that prepare students for lifetime intellectual growth.',
    'dev.outcome1Title': 'Memory',
    'dev.outcome1Desc': 'Concept chunking and structured recall techniques.',
    'dev.outcome2Title': 'Concentration',
    'dev.outcome2Desc': 'Sustained focus and selective attention stamina.',
    'dev.outcome3Title': 'Reasoning',
    'dev.outcome3Desc': 'Deductive inquiry and validation of logical steps.',
    'dev.outcome4Title': 'Creativity',
    'dev.outcome4Desc': 'Exploring multiple paths to solve complex problems.',
    'dev.outcome5Title': 'Problem-Solving',
    'dev.outcome5Desc': 'Heuristic toolkits to approach unfamiliar challenges.',
    'dev.outcome6Title': 'Logical Thinking',
    'dev.outcome6Desc': 'Sequential and algorithmic thought clarity.',
    'dev.outcome7Title': 'Academic Confidence',
    'dev.outcome7Desc': 'Poise and composure during rigorous examinations.',
    'dev.outcome8Title': 'Independent Learning',
    'dev.outcome8Desc': 'Autonomous study habits and metacognition.',

    // CTA Section
    'cta.title': 'A Brighter Learning Journey Starts Here',
    'cta.subtitle': 'Discover how your child approaches learning and identify foundational prerequisite gaps with a complimentary diagnostic consultation.',
    'cta.btn': 'Enquire Now',
    'cta.orCall': 'Or Call Direct:',
    'cta.address': '📍 Panvel Center: Feliz Flow Studio, Next to Hiranandani Trust School',
    'common.compareBtn': 'Compare Both Programs',

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

    // Impact Section
    'impact.badge': 'हमारा प्रभाव',
    'impact.title': 'उत्कृष्टता का प्रमाणित रिकॉर्ड',
    'impact.subtitle': 'अनुसंधान-आधारित संज्ञानात्मक और संकल्पनात्मक शिक्षण पद्धतियों के साथ देश भर के छात्रों, शिक्षकों और स्कूलों को सशक्त बनाना।',
    'impact.stat1Label': 'सफल पंजीकरण',
    'impact.stat2Label': 'सक्रिय सदस्य',
    'impact.stat3Label': 'वर्षों का अनुभव',
    'impact.stat4Label': 'लाइव वेबिनार',
    'impact.stat5Label': 'सेमिनार और कार्यशालाएं',
    'impact.stat6Label': 'संबद्ध विद्यालय',

    // Why BrainSetu Section
    'why.title': 'सिर्फ पढ़ाई से कहीं अधिक',
    'why.subtitle': 'ब्रेनसेतु गणित, संज्ञानात्मक विकास, मेमोरी तकनीक, मेंटरशिप और तकनीक को जोड़कर एक गहरा और सार्थक शिक्षण अनुभव प्रदान करता है।',
    'why.benefit1Title': 'संकल्पनात्मक शिक्षा',
    'why.benefit1Desc': 'गणितीय सूत्रों को रटने के बजाय उनके पीछे के "क्यों" और तार्किक संबंधों को गहराई से समझें।',
    'why.benefit2Title': 'तार्किक सोच',
    'why.benefit2Desc': 'संरचित विश्लेषण, पैटर्न पहचान और विश्लेषणात्मक स्पष्टता विकसित करें जो हर विषय में काम आए।',
    'why.benefit3Title': 'मेमोरी तकनीक',
    'why.benefit3Desc': 'वैज्ञानिक संकल्पना चंकिंग और सक्रिय स्मरण विधियाँ जो दीर्घकालिक याददाश्त को तनावमुक्त बनाती हैं।',
    'why.benefit4Title': 'समस्या समाधान और तकनीक',
    'why.benefit4Desc': 'आधुनिक डिजिटल गणित शिक्षण उपकरणों द्वारा समर्थित स्वतंत्र समस्या-समाधान कौशल।',

    // Video Showcase Section
    'video.badge': 'आधिकारिक वीडियो प्रस्तुति',
    'video.title': 'ब्रेनसेतु को कार्य में देखें',
    'video.subtitle': 'देखें कि कैसे हमारी संज्ञानात्मक विकास पद्धति और इंटेलीया 360 प्रोग्राम छात्रों में गणितीय स्पष्टता, तार्किक सोच और आजीवन आत्मविश्वास का निर्माण करते हैं।',
    'video.feat1Title': 'संकल्पनात्मक स्पष्टता',
    'video.feat1Desc': 'मूल सिद्धांतों पर आधारित गणितीय तर्क जो रटने की आदत को समाप्त करता है।',
    'video.feat2Title': '10X स्मरण तकनीक',
    'video.feat2Desc': 'वैज्ञानिक संकल्पना चंकिंग और न्यूरल रिकॉल तकनीकें।',
    'video.feat3Title': 'विशेषज्ञ मेंटरशिप',
    'video.feat3Desc': 'अनुकूली डिजिटल अभ्यास उपकरणों के साथ समर्पित मार्गदर्शक।',
    'video.watchYoutube': 'यूट्यूब पर सीधे देखें',

    // Learning Journey Section
    'journey.title': 'सीखने की यात्रा',
    'journey.subtitle': 'एक स्पष्ट छह-चरणीय संज्ञानात्मक प्रगति जो नई अवधारणाओं को स्थायी समझ और महारत में बदलती है।',
    'journey.stage': 'चरण',
    'journey.step1Title': 'सीखें (Learn)',
    'journey.step1Desc': 'सहज अंतर्दृष्टि और वास्तविक दुनिया की जिज्ञासा के साथ अवधारणा का परिचय।',
    'journey.step2Title': 'समझें (Understand)',
    'journey.step2Desc': 'मूल सिद्धांतों के आधार पर अवधारणात्मक स्पष्टता का निर्माण।',
    'journey.step3Title': 'याद रखें (Remember)',
    'journey.step3Desc': 'मेमोरी तकनीकों और न्यूरल संबंधों का उपयोग करके याददाश्त मजबूत करें।',
    'journey.step4Title': 'अभ्यास (Practice)',
    'journey.step4Desc': 'सोचे-समझे, श्रेणीबद्ध अभ्यास सेटों के माध्यम से सुदृढ़ करें।',
    'journey.step5Title': 'लागू करें (Apply)',
    'journey.step5Desc': 'कठिन समस्याओं और वास्तविक जीवन स्थितियों में ज्ञान का उपयोग करें।',
    'journey.step6Title': 'महारत (Master)',
    'journey.step6Desc': 'प्रगति को ट्रैक करें, कमियों को दूर करें और स्थायी महारत हासिल करें।',

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

    // Technology Section
    'tech.title': 'सीखने में सहायक तकनीक — विकल्प नहीं',
    'tech.subtitle': 'ब्रेनसेतु समझ को गहरा करने और नियमित अभ्यास के लिए व्यक्तिगत मेंटरशिप को डिजिटल उपकरणों के साथ जोड़ता है।',
    'tech.pillar1Title': 'प्रत्यक्ष शिक्षण (Physical Learning)',
    'tech.pillar1Desc': 'आत्मविश्वास बढ़ाने के लिए विशेषज्ञ शिक्षकों द्वारा मार्गदर्शन, संवादात्मक चर्चा और व्यक्तिगत ध्यान।',
    'tech.pillar2Title': 'डिजिटल शिक्षण (Digital Learning)',
    'tech.pillar2Desc': 'अवधारणाओं को सहज बनाने के लिए गतिशील गणितीय विज़ुअलाइज़ेशन और गेम-आधारित अभ्यास।',
    'tech.pillar3Title': 'एआई सहायता (AI Support)',
    'tech.pillar3Desc': 'बुद्धिमान डायग्नोस्टिक मूल्यांकन, व्यक्तिगत संशोधन सिफारिशें और प्रगति ट्रैकिंग।',
    'tech.keyCapabilities': 'प्रमुख शिक्षण क्षमताएं:',
    'tech.feat1': 'इंटरैक्टिव लर्निंग',
    'tech.feat2': 'डिजिटल अभ्यास',
    'tech.feat3': 'गेमिफिकेशन',
    'tech.feat4': 'मूल्यांकन',
    'tech.feat5': 'प्रगति ट्रैकिंग',
    'tech.feat6': 'व्यक्तिगत अभ्यास',

    // Student Development Section
    'dev.title': 'अंकों से परे वास्तविक शिक्षा',
    'dev.subtitle': 'हम आठ मूलभूत संज्ञानात्मक और शैक्षणिक क्षमताओं को विकसित करते हैं जो छात्रों को जीवन भर बौद्धिक विकास के लिए तैयार करती हैं।',
    'dev.outcome1Title': 'स्मरण शक्ति (Memory)',
    'dev.outcome1Desc': 'संकल्पना चंकिंग और संरचित स्मरण तकनीक।',
    'dev.outcome2Title': 'एकाग्रता (Concentration)',
    'dev.outcome2Desc': 'लगातार ध्यान केंद्रित करने और एकाग्रता बनाए रखने की क्षमता।',
    'dev.outcome3Title': 'तर्क क्षमता (Reasoning)',
    'dev.outcome3Desc': 'तार्किक जांच और तार्किक कदमों का सत्यापन।',
    'dev.outcome4Title': 'रचनात्मकता (Creativity)',
    'dev.outcome4Desc': 'जटिल समस्याओं को हल करने के लिए कई रास्ते तलाशना।',
    'dev.outcome5Title': 'समस्या समाधान (Problem-Solving)',
    'dev.outcome5Desc': 'अपरिचित चुनौतियों से निपटने के लिए ह्यूरिस्टिक टूलकिट।',
    'dev.outcome6Title': 'तार्किक सोच (Logical Thinking)',
    'dev.outcome6Desc': 'क्रमबद्ध और एल्गोरिथम विचार स्पष्टता।',
    'dev.outcome7Title': 'शैक्षणिक आत्मविश्वास (Academic Confidence)',
    'dev.outcome7Desc': 'कठिन परीक्षाओं के दौरान धैर्य, संतुलन और आत्मविश्वास।',
    'dev.outcome8Title': 'स्वतंत्र अध्ययन (Independent Learning)',
    'dev.outcome8Desc': 'स्वायत्त अध्ययन की आदतें और आत्म-चिंतन।',

    // CTA Section
    'cta.title': 'एक उज्जवल शिक्षण यात्रा यहाँ से शुरू होती है',
    'cta.subtitle': 'जानें कि आपका बच्चा कैसे सीखता है और हमारे मानार्थ डायग्नोस्टिक परामर्श के साथ बुनियादी कमियों की पहचान करें।',
    'cta.btn': 'पूछताछ करें',
    'cta.orCall': 'या सीधे कॉल करें:',
    'cta.address': '📍 पनवेल केंद्र: फेलिज़ फ्लो स्टूडियो, हीरानंदानी ट्रस्ट स्कूल के पास',
    'common.compareBtn': 'दोनों कार्यक्रमों की तुलना करें',

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

    // Impact Section
    'impact.badge': 'आमचा प्रभाव',
    'impact.title': 'उत्कृष्टतेचा सिद्ध ट्रॅक रेकॉर्ड',
    'impact.subtitle': 'संशोधनावर आधारित संज्ञानात्मक आणि संकल्पनात्मक शिक्षण पद्धतींद्वारे देशभरातील विद्यार्थी, शिक्षक आणि शाळांना सक्षम करणे.',
    'impact.stat1Label': 'यशस्वी नोंदणी',
    'impact.stat2Label': 'सक्रिय सदस्य',
    'impact.stat3Label': 'वर्षांचा अनुभव',
    'impact.stat4Label': 'थेट वेबिनार',
    'impact.stat5Label': 'चर्चासत्रे आणि कार्यशाळा',
    'impact.stat6Label': 'सहभागी शाळा',

    // Why BrainSetu Section
    'why.title': 'केवळ शिक्षणापेक्षा बरेच काही',
    'why.subtitle': 'ब्रेनसेतु गणित, संज्ञानात्मक विकास, स्मरण तंत्रे, वैयक्तिक मार्गदर्शन आणि तंत्रज्ञान एकत्र आणून अधिक अर्थपूर्ण शिकण्याचा अनुभव निर्माण करते.',
    'why.benefit1Title': 'संकल्पनात्मक शिक्षण',
    'why.benefit1Desc': 'नियम केवळ पाठांतर करण्याऐवजी गणितीय संबंधांमागील "का" हे समजून घ्या.',
    'why.benefit2Title': 'तार्किक विचारसरणी',
    'why.benefit2Desc': 'संरचित निष्कर्ष, पॅटर्न ओळख आणि विश्लेषणात्मक स्पष्टता विकसित करा जी सर्व क्षेत्रांत उपयोगी ठरते.',
    'why.benefit3Title': 'स्मरणशक्ती तंत्रे',
    'why.benefit3Desc': 'वैज्ञानिक संकल्पना चंकिंग आणि सक्रिय आठवण पद्धती ज्या दीर्घकाळ लक्षात ठेवणे सोपे आणि तणावमुक्त करतात.',
    'why.benefit4Title': 'समस्या निवारण आणि तंत्रज्ञान',
    'why.benefit4Desc': 'आधुनिक डिजिटल गणित साधनांद्वारे समर्थित स्वतंत्र समस्या निवारण कौशल्ये.',

    // Video Showcase Section
    'video.badge': 'अधिकृत व्हिडिओ सादरीकरण',
    'video.title': 'ब्रेनसेतुचे प्रत्यक्ष कार्य पहा',
    'video.subtitle': 'आमची संज्ञानात्मक शिक्षण पद्धती आणि इंटेलीया ३६० मॅथेमॅटिक्स प्रोग्राम विद्यार्थ्यांमध्ये संकल्पनात्मक स्पष्टता, तार्किक विचार आणि आत्मविश्वास कसा घडवतात ते पहा.',
    'video.feat1Title': 'संकल्पनात्मक स्पष्टता',
    'video.feat1Desc': 'पाठांतर न करता मूळ सिद्धांतांवर आधारित गणितीय विचार.',
    'video.feat2Title': '१० पट स्मरणशक्ती',
    'video.feat2Desc': 'वैज्ञानिक संकल्पना चंकिंग आणि न्यूरल स्मरण तंत्रे.',
    'video.feat3Title': 'तज्ज्ञ मार्गदर्शन',
    'video.feat3Desc': 'आधुनिक डिजिटल सराव साधनांसह अनुभवी शिक्षकांचे वैयक्तिक लक्ष.',
    'video.watchYoutube': 'थेट यूट्यूबवर पहा',

    // Learning Journey Section
    'journey.title': 'शिकण्याचा प्रवास',
    'journey.subtitle': 'एक स्पष्ट सहा-टप्प्यांची संज्ञानात्मक प्रगती जी नवीन संकल्पनांना कायमस्वरूपी समज आणि प्रभुत्वात रूपांतरित करते.',
    'journey.stage': 'टप्पा',
    'journey.step1Title': 'शिका (Learn)',
    'journey.step1Desc': 'सहज ज्ञान आणि वास्तविक जगातील कुतूहलासह संकल्पनेची ओळख करून द्या.',
    'journey.step2Title': 'समजून घ्या (Understand)',
    'journey.step2Desc': 'मूळ सिद्धांतांपासून संकल्पनात्मक स्पष्टता निर्माण करा.',
    'journey.step3Title': 'लक्षात ठेवा (Remember)',
    'journey.step3Desc': 'स्मरण तंत्रे आणि न्यूरल कनेक्शनचा वापर करून स्मृती दृढ करा.',
    'journey.step4Title': 'सराव करा (Practice)',
    'journey.step4Desc': 'काळजीपूर्वक तयार केलेल्या सराव संचांद्वारे सराव मजबूत करा.',
    'journey.step5Title': 'उपयोजन करा (Apply)',
    'journey.step5Desc': 'कठीण समस्या आणि वास्तविक जीवनातील प्रसंगांमध्ये ज्ञानाचा वापर करा.',
    'journey.step6Title': 'प्रभुत्व मिळवा (Master)',
    'journey.step6Desc': 'प्रगती ट्रॅक करा, त्रुटी दूर करा आणि चिरस्थायी प्राविण्य मिळवा.',

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

    // Technology Section
    'tech.title': 'शिक्षणाला पूरक तंत्रज्ञान — पर्याय नाही',
    'tech.subtitle': 'ब्रेनसेतु समज दृढ करण्यासाठी आणि सरावात सातत्य ठेवण्यासाठी प्रत्यक्ष मार्गदर्शनाला डिजिटल साधनांशी जोडते.',
    'tech.pillar1Title': 'प्रत्यक्ष शिक्षण (Physical Learning)',
    'tech.pillar1Desc': 'आत्मविश्वास वाढवण्यासाठी तज्ज्ञ शिक्षकांचे मार्गदर्शन, संवादात्मक चर्चा आणि वैयक्तिक लक्ष.',
    'tech.pillar2Title': 'डिजिटल शिक्षण (Digital Learning)',
    'tech.pillar2Desc': 'संकल्पना सहज समजण्यासाठी गतिमान गणितीय व्हिज्युअलायझेशन आणि खेळाच्या स्वरूपातील सराव.',
    'tech.pillar3Title': 'एआय साहाय्य (AI Support)',
    'tech.pillar3Desc': 'बुद्धिमान डायग्नोस्टिक मूल्यांकन, वैयक्तिक सराव शिफारसी आणि प्रगती ट्रॅकिंग.',
    'tech.keyCapabilities': 'महत्त्वाची शिक्षण वैशिष्ट्ये:',
    'tech.feat1': 'संवादात्मक शिक्षण',
    'tech.feat2': 'डिजिटल सराव',
    'tech.feat3': 'गेमिफिकेशन',
    'tech.feat4': 'मूल्यांकन',
    'tech.feat5': 'प्रगती ट्रॅकिंग',
    'tech.feat6': 'वैयक्तिकृत सराव',

    // Student Development Section
    'dev.title': 'गुणांच्या पलीकडचे सर्वांगीण शिक्षण',
    'dev.subtitle': 'आम्ही आठ मूलभूत संज्ञानात्मक आणि शैक्षणिक क्षमता विकसित करतो ज्या विद्यार्थ्यांना आयुष्यभराच्या बौद्धिक विकासासाठी सज्ज करतात.',
    'dev.outcome1Title': 'स्मरणशक्ती (Memory)',
    'dev.outcome1Desc': 'संकल्पना चंकिंग आणि संरचित स्मरण तंत्रे.',
    'dev.outcome2Title': 'एकाग्रता (Concentration)',
    'dev.outcome2Desc': 'दीर्घकाळ लक्ष केंद्रित ठेवण्याची आणि एकाग्रतेची क्षमता.',
    'dev.outcome3Title': 'तर्कक्षमता (Reasoning)',
    'dev.outcome3Desc': 'तार्किक विचार आणि पायऱ्यांची योग्य पडताळणी.',
    'dev.outcome4Title': 'सर्जनशीलता (Creativity)',
    'dev.outcome4Desc': 'जटिल समस्या सोडवण्यासाठी विविध पर्यायांचा शोध घेणे.',
    'dev.outcome5Title': 'समस्या निवारण (Problem-Solving)',
    'dev.outcome5Desc': 'अपरिचित आव्हानांना सामोरे जाण्यासाठी उपयुक्त टूलकिट्स.',
    'dev.outcome6Title': 'तार्किक विचार (Logical Thinking)',
    'dev.outcome6Desc': 'क्रमबद्ध आणि अल्गोरिदमिक विचारांची स्पष्टता.',
    'dev.outcome7Title': 'शैक्षणिक आत्मविश्वास (Academic Confidence)',
    'dev.outcome7Desc': 'कठीण परीक्षांच्या वेळी संयम, संतुलन आणि आत्मविश्वास.',
    'dev.outcome8Title': 'स्वतंत्र शिक्षण (Independent Learning)',
    'dev.outcome8Desc': 'स्वावलंबी अभ्यासाच्या सवयी आणि आत्म-चिंतन.',

    // CTA Section
    'cta.title': 'एक उज्ज्वल शिक्षण प्रवास येथून सुरू होतो',
    'cta.subtitle': 'तुमचे मूल कसे शिकते ते जाणून घ्या आणि आमच्या मोफत डायग्नोस्टिक सल्लामसलतीद्वारे मूलभूत उणीवा ओळखा.',
    'cta.btn': 'चौकशी करा',
    'cta.orCall': 'किंवा थेट फोन करा:',
    'cta.address': '📍 पनवेल केंद्र: फेलिज फ्लो स्टुडिओ, हिरानंदानी ट्रस्ट स्कूलजवळ',
    'common.compareBtn': 'दोन्ही अभ्यासक्रमांची तुलना करा',

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
