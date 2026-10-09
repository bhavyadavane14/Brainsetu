import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Brain, 
  Cpu, 
  Binary, 
  CheckCircle2, 
  XCircle, 
  Sun, 
  BookOpen, 
  Palette, 
  Laptop, 
  RotateCcw, 
  PartyPopper,
  Users,
  Building2,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../common/ScrollReveal';

export const PreschoolSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pillars' | 'ecosystem' | 'comparison' | 'routine' | 'agewise' | 'parents' | 'business' | 'vision'>('pillars');

  // Daily routine activities
  const routineItems = [
    {
      title: t('preschool.routine1Title'),
      desc: t('preschool.routine1Desc'),
      icon: Sun,
      color: 'from-amber-400 to-yellow-500 text-amber-900 bg-amber-50',
      time: '01'
    },
    {
      title: t('preschool.routine2Title'),
      desc: t('preschool.routine2Desc'),
      icon: Heart,
      color: 'from-teal-400 to-emerald-500 text-teal-900 bg-teal-50',
      time: '02'
    },
    {
      title: t('preschool.routine3Title'),
      desc: t('preschool.routine3Desc'),
      icon: Binary,
      color: 'from-blue-400 to-indigo-500 text-blue-900 bg-blue-50',
      time: '03'
    },
    {
      title: t('preschool.routine4Title'),
      desc: t('preschool.routine4Desc'),
      icon: Palette,
      color: 'from-purple-400 to-pink-500 text-purple-900 bg-purple-50',
      time: '04'
    },
    {
      title: t('preschool.routine5Title'),
      desc: t('preschool.routine5Desc'),
      icon: Laptop,
      color: 'from-cyan-400 to-sky-500 text-cyan-900 bg-cyan-50',
      time: '05'
    },
    {
      title: t('preschool.routine6Title'),
      desc: t('preschool.routine6Desc'),
      icon: RotateCcw,
      color: 'from-rose-400 to-red-500 text-rose-900 bg-rose-50',
      time: '06'
    },
    {
      title: t('preschool.routine7Title'),
      desc: t('preschool.routine7Desc'),
      icon: PartyPopper,
      color: 'from-emerald-400 to-green-500 text-emerald-900 bg-emerald-50',
      time: '07'
    },
  ];

  // Comparison items
  const comparisonItems = [
    {
      trad: t('preschool.diff1Trad'),
      bs: t('preschool.diff1Bs')
    },
    {
      trad: t('preschool.diff2Trad'),
      bs: t('preschool.diff2Bs')
    },
    {
      trad: t('preschool.diff3Trad'),
      bs: t('preschool.diff3Bs')
    },
    {
      trad: t('preschool.diff4Trad'),
      bs: t('preschool.diff4Bs')
    },
    {
      trad: t('preschool.diff5Trad'),
      bs: t('preschool.diff5Bs')
    },
    {
      trad: t('preschool.diff6Trad'),
      bs: t('preschool.diff6Bs')
    },
  ];

  // Age framework
  const ageStages = [
    {
      name: t('preschool.stage1Name'),
      age: t('preschool.stage1Age'),
      points: [
        t('preschool.stage1P1'),
        t('preschool.stage1P2'),
        t('preschool.stage1P3'),
        t('preschool.stage1P4')
      ],
      color: 'border-amber-200 bg-amber-50/40 text-amber-900'
    },
    {
      name: t('preschool.stage2Name'),
      age: t('preschool.stage2Age'),
      points: [
        t('preschool.stage2P1'),
        t('preschool.stage2P2'),
        t('preschool.stage2P3'),
        t('preschool.stage2P4')
      ],
      color: 'border-cyan-200 bg-cyan-50/40 text-cyan-900'
    },
    {
      name: t('preschool.stage3Name'),
      age: t('preschool.stage3Age'),
      points: [
        t('preschool.stage3P1'),
        t('preschool.stage3P2'),
        t('preschool.stage3P3'),
        t('preschool.stage3P4')
      ],
      color: 'border-blue-200 bg-blue-50/40 text-blue-900'
    },
    {
      name: t('preschool.stage4Name'),
      age: t('preschool.stage4Age'),
      points: [
        t('preschool.stage4P1'),
        t('preschool.stage4P2'),
        t('preschool.stage4P3'),
        t('preschool.stage4P4')
      ],
      color: 'border-emerald-200 bg-emerald-50/40 text-emerald-900'
    },
  ];

  // Parent advantage
  const parentAdv = [
    { title: t('preschool.adv1Title'), desc: t('preschool.adv1Desc'), icon: Brain },
    { title: t('preschool.adv2Title'), desc: t('preschool.adv2Desc'), icon: RotateCcw },
    { title: t('preschool.adv3Title'), desc: t('preschool.adv3Desc'), icon: Heart },
    { title: t('preschool.adv4Title'), desc: t('preschool.adv4Desc'), icon: Palette },
    { title: t('preschool.adv5Title'), desc: t('preschool.adv5Desc'), icon: Cpu },
    { title: t('preschool.adv6Title'), desc: t('preschool.adv6Desc'), icon: Users },
  ];

  return (
    <section id="preschool" className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Decorative gradient blur */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Hero Area */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{t('preschool.badge')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-primary-deep tracking-tight">
                {t('preschool.title')}
              </h2>

              <p className="text-lg sm:text-xl font-bold text-brand-secondary">
                {t('preschool.subtitle')}
              </p>

              <blockquote className="p-4 rounded-2xl bg-amber-50/80 border-l-4 border-amber-400 text-amber-950 font-display font-extrabold text-base sm:text-lg italic shadow-xs">
                {t('preschool.tagline')}
              </blockquote>

              <div className="space-y-3 pt-2 text-sm sm:text-base text-brand-slate-muted leading-relaxed">
                <p>{t('preschool.intro1')}</p>
                <p>{t('preschool.intro2')}</p>
                <p className="font-medium text-brand-navy-700">{t('preschool.intro3')}</p>
              </div>
            </div>

            {/* Generated Image: Preschool Hero */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group relative">
                <img
                  src="/images/preschool-hero.jpg"
                  alt="BrainSetu Preschool children exploring joyful experiential learning with teacher"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-900 font-black text-sm flex items-center justify-center flex-shrink-0">
                    12
                  </div>
                  <div className="text-xs leading-tight">
                    <span className="font-bold text-slate-900 block">Intelligent, Mindful, Confident</span>
                    <span className="text-slate-500">{t('preschool.statYears')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation Tabs for 8 Subsections */}
        <div className="mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max border-b border-slate-200 pb-3">
            {[
              { id: 'pillars', label: '1. Four Pillars' },
              { id: 'ecosystem', label: '2. Learning Ecosystem' },
              { id: 'comparison', label: '3. What Makes Us Different' },
              { id: 'routine', label: '4. Daily Experience' },
              { id: 'agewise', label: '5. Age Framework' },
              { id: 'parents', label: '6. Parent Advantage' },
              { id: 'business', label: '7. Business Model' },
              { id: 'vision', label: '8. Our Vision' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-primary-deep text-white shadow-md shadow-brand-primary-deep/20 scale-102'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: 1. Our Core Philosophy: Four Pillars of Development */}
        {activeTab === 'pillars' && (
          <ScrollReveal>
            <div className="space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep">
                  {t('preschool.sec1Title')}
                </h3>
                <p className="text-sm sm:text-base text-brand-slate-muted mt-1">
                  {t('preschool.sec1Subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pillar 1 */}
                <div className="p-7 rounded-3xl bg-white border-2 border-cyan-200 shadow-sm hover:shadow-card transition-all duration-300 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                      <Laptop className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold">
                      {t('preschool.pillar1Powered')}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-brand-primary-deep">
                    {t('preschool.pillar1Title')}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('preschool.pillar1Desc')}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-cyan-800 bg-cyan-50/60 p-3 rounded-xl">
                    {t('preschool.pillar1Outcome')}
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="p-7 rounded-3xl bg-white border-2 border-blue-200 shadow-sm hover:shadow-card transition-all duration-300 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Binary className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
                      {t('preschool.pillar2Powered')}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-brand-primary-deep">
                    {t('preschool.pillar2Title')}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('preschool.pillar2Desc')}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-blue-800 bg-blue-50/60 p-3 rounded-xl">
                    {t('preschool.pillar2Outcome')}
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="p-7 rounded-3xl bg-white border-2 border-emerald-200 shadow-sm hover:shadow-card transition-all duration-300 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Heart className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                      {t('preschool.pillar3Powered')}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-brand-primary-deep">
                    {t('preschool.pillar3Title')}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('preschool.pillar3Desc')}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-800 bg-emerald-50/60 p-3 rounded-xl">
                    {t('preschool.pillar3Outcome')}
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="p-7 rounded-3xl bg-white border-2 border-purple-200 shadow-sm hover:shadow-card transition-all duration-300 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                      <Brain className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold">
                      {t('preschool.pillar4Powered')}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-brand-primary-deep">
                    {t('preschool.pillar4Title')}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('preschool.pillar4Desc')}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-purple-800 bg-purple-50/60 p-3 rounded-xl">
                    {t('preschool.pillar4Outcome')}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tab 2: 2. The BrainSetu Learning Ecosystem */}
        {activeTab === 'ecosystem' && (
          <ScrollReveal>
            <div className="space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep">
                  {t('preschool.sec2Title')}
                </h3>
                <p className="text-sm sm:text-base text-brand-slate-muted mt-1">
                  {t('preschool.sec2Subtitle')}
                </p>
              </div>

              {/* Central Core Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-primary-deep via-brand-navy-900 to-brand-primary text-white text-center shadow-xl">
                <span className="px-3.5 py-1 rounded-full bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider">
                  Central Architecture
                </span>
                <h4 className="text-2xl sm:text-3xl font-display font-black mt-3">
                  {t('preschool.ecoCore')}
                </h4>
                <p className="text-sm sm:text-base text-cyan-200 max-w-xl mx-auto mt-2">
                  {t('preschool.ecoCoreDesc')}
                </p>
              </div>

              {/* Partners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-black">1</div>
                  <h5 className="text-lg font-bold text-brand-primary-deep">{t('preschool.ecoPartner1')}</h5>
                  <p className="text-xs font-bold text-cyan-800 uppercase tracking-wider">{t('preschool.ecoPartner1Role')}</p>
                  <p className="text-sm text-slate-600">{t('preschool.ecoPartner1Detail')}</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">2</div>
                  <h5 className="text-lg font-bold text-brand-primary-deep">{t('preschool.ecoPartner2')}</h5>
                  <p className="text-xs font-bold text-blue-800 uppercase tracking-wider">{t('preschool.ecoPartner2Role')}</p>
                  <p className="text-sm text-slate-600">{t('preschool.ecoPartner2Detail')}</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">3</div>
                  <h5 className="text-lg font-bold text-brand-primary-deep">{t('preschool.ecoPartner3')}</h5>
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">{t('preschool.ecoPartner3Role')}</p>
                  <p className="text-sm text-slate-600">{t('preschool.ecoPartner3Detail')}</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black">4</div>
                  <h5 className="text-lg font-bold text-brand-primary-deep">{t('preschool.ecoPartner4')}</h5>
                  <p className="text-xs font-bold text-purple-800 uppercase tracking-wider">{t('preschool.ecoPartner4Role')}</p>
                  <p className="text-sm text-slate-600">{t('preschool.ecoPartner4Detail')}</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 md:col-span-2 lg:col-span-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">5</div>
                  <h5 className="text-lg font-bold text-brand-primary-deep">{t('preschool.ecoPartner5')}</h5>
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">{t('preschool.ecoPartner5Role')}</p>
                  <p className="text-sm text-slate-600">{t('preschool.ecoPartner5Detail')}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 italic text-center">
                {t('preschool.ecoNote')}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tab 3: 3. What Makes BrainSetu Different? */}
        {activeTab === 'comparison' && (
          <ScrollReveal>
            <div className="space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep">
                  {t('preschool.sec3Title')}
                </h3>
                <p className="text-sm sm:text-base text-brand-slate-muted mt-1">
                  {t('preschool.sec3Subtitle')}
                </p>
              </div>

              {/* Table / Cards */}
              <div className="space-y-3">
                <div className="hidden md:grid grid-cols-2 gap-4 px-6 py-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  <div>{t('preschool.colTrad')}</div>
                  <div className="text-brand-primary">{t('preschool.colBrainSetu')}</div>
                </div>

                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-start gap-3 text-slate-600">
                      <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item.trad}</span>
                    </div>
                    <div className="flex items-start gap-3 text-brand-primary-deep font-bold bg-cyan-50/50 p-3 rounded-xl border border-cyan-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item.bs}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Principle Quote */}
              <div className="p-6 sm:p-8 rounded-3xl bg-amber-50 border border-amber-200 text-amber-950 text-center font-display font-bold text-base sm:text-lg">
                <p>{t('preschool.principle')}</p>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tab 4: 4. The BrainSetu Daily Learning Experience */}
        {activeTab === 'routine' && (
          <ScrollReveal>
            <div className="space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-brand-primary text-xs font-bold mb-2">
                  <span>8 Hours Structured Flow</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep">
                  {t('preschool.sec4Title')}
                </h3>
                <p className="text-sm sm:text-base text-brand-slate-muted mt-1">
                  {t('preschool.sec4Subtitle')}
                </p>
              </div>

              {/* Image banner: Mindfulness & Tech in Classroom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                  <img 
                    src="/images/preschool-mindful.jpg" 
                    alt="Preschool children doing mindful breathing and calm listening" 
                    className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-3 bg-white text-xs font-bold text-slate-700">
                    Mindful Moments & Emotional Calmness
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                  <img 
                    src="/images/preschool-tech.jpg" 
                    alt="Supervised digital discovery labs for preschoolers" 
                    className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-3 bg-white text-xs font-bold text-slate-700">
                    Guided Digital Discovery & Logic Games
                  </div>
                </div>
              </div>

              {/* Routine Activities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {routineItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-slate-300">#{item.time}</span>
                      </div>
                      <h4 className="text-base font-bold text-brand-primary-deep">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
                {t('preschool.routineNote')}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tab 5: 5. Age-Wise Learning Framework */}
        {activeTab === 'agewise' && (
          <ScrollReveal>
            <div className="space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep">
                  {t('preschool.sec5Title')}
                </h3>
                <p className="text-sm sm:text-base text-brand-slate-muted mt-1">
                  {t('preschool.sec5Subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ageStages.map((stage, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border ${stage.color} flex flex-col justify-between space-y-4 shadow-xs`}>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        {stage.age}
                      </span>
                      <h4 className="text-xl font-display font-black mt-1">
                        {stage.name}
                      </h4>

                      <ul className="mt-4 space-y-2 text-xs sm:text-sm">
                        {stage.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-brand-secondary font-black mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
                {t('preschool.ageNote')}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tab 6: 6. The BrainSetu Advantage for Parents */}
        {activeTab === 'parents' && (
          <ScrollReveal>
            <div className="space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep">
                  {t('preschool.sec6Title')}
                </h3>
                <p className="text-sm sm:text-base text-brand-slate-muted mt-1">
                  {t('preschool.sec6Subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {parentAdv.map((adv, idx) => {
                  const Icon = adv.icon;
                  return (
                    <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-card transition-all space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 text-brand-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-brand-primary-deep">
                        {adv.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                {t('preschool.advNote')}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tab 7: 7. The Business & Partnership Model */}
        {activeTab === 'business' && (
          <ScrollReveal>
            <div className="space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep">
                  {t('preschool.sec7Title')}
                </h3>
                <p className="text-sm sm:text-base text-brand-slate-muted mt-1">
                  {t('preschool.sec7Subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-primary-deep">{t('preschool.biz1Title')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('preschool.biz1Desc')}</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-primary-deep">{t('preschool.biz2Title')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('preschool.biz2Desc')}</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-primary-deep">{t('preschool.biz3Title')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('preschool.biz3Desc')}</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-primary-deep">{t('preschool.biz4Title')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('preschool.biz4Desc')}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
                {t('preschool.bizNote')}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tab 8: 8. Our Vision */}
        {activeTab === 'vision' && (
          <ScrollReveal>
            <div className="space-y-8 animate-fadeIn">
              <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-primary-deep via-brand-navy-900 to-brand-primary text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-6 max-w-4xl">
                  <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider">
                    {t('preschool.sec8Title')}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold leading-snug">
                    {t('preschool.vision1')}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    {t('preschool.vision2')}
                  </p>

                  <div className="pt-6 border-t border-white/10 space-y-2">
                    <h4 className="text-xl sm:text-2xl font-display font-black text-amber-300">
                      {t('preschool.visionTagline1')}
                    </h4>
                    <p className="text-lg font-bold text-cyan-300">
                      {t('preschool.visionTagline2')}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-slate-200">
                      {t('preschool.visionTagline3')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong>{t('preschool.recStep')}</strong>
              </div>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};
