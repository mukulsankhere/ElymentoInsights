import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Eye,
  BarChart3,
  Settings,
  Bell,
} from 'lucide-react';
import {
  FUNDAMENTAL_PILLARS,
  FundamentalCardSignal,
} from '../data/elymentoData';

export const FundamentalsSection: React.FC = () => {
  // Default to 'control' active matching Screenshot 5
  const [activePillarId, setActivePillarId] = useState<
    'growth' | 'capital' | 'control'
  >('control');
  const [activeSignalIdx, setActiveSignalIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const activePillar =
    FUNDAMENTAL_PILLARS.find((p) => p.id === activePillarId) ||
    FUNDAMENTAL_PILLARS[2];

  useEffect(() => {
    setActiveSignalIdx(0);
  }, [activePillarId]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveSignalIdx((prev) => (prev + 1) % 4);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [isPaused, activePillarId]);

  const renderAnimatedIcon = (
    type: FundamentalCardSignal['iconType'],
    isFocused: boolean
  ) => {
    const cls = 'w-5 h-5 text-[#091B46]';
    switch (type) {
      case 'eye':
        return (
          <motion.div
            animate={
              isFocused
                ? { scale: [1, 1.18, 0.95, 1.12, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          >
            <Eye className={cls} />
          </motion.div>
        );
      case 'chart':
        return (
          <motion.div
            animate={isFocused ? { y: [0, -3, 0, -2, 0] } : { y: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          >
            <BarChart3 className={cls} />
          </motion.div>
        );
      case 'gear':
        return (
          <motion.div
            animate={{ rotate: isFocused ? 180 : 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Settings className={cls} />
          </motion.div>
        );
      case 'bell':
        return (
          <motion.div
            animate={
              isFocused
                ? { rotate: [0, -14, 14, -10, 10, 0] }
                : { rotate: 0 }
            }
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            <Bell className={cls} />
          </motion.div>
        );
    }
  };

  // Base horizontal offsets + continuous smooth alternating drift waves
  const floatWaves = [
    { x: [6, 18, 6, -4, 6], y: [0, -3, 0, 2, 0], duration: 7.5 },
    { x: [18, 6, 18, 26, 18], y: [0, 2, 0, -3, 0], duration: 8.2 },
    { x: [0, 12, 0, -8, 0], y: [0, -2.5, 0, 2.5, 0], duration: 7.8 },
    { x: [-18, -6, -18, -26, -18], y: [0, 3, 0, -2, 0], duration: 8.5 },
  ];

  return (
    <section id="fundamentals" className="scroll-mt-[76px] py-12 lg:py-14 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT: Visual Staggered Floating Signal Cards Panel */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="rounded-[28px] bg-white border border-slate-200/80 shadow-[0_22px_54px_-18px_rgba(9,27,70,0.12)] p-6 sm:p-7"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Sparkles className="w-5 h-5 text-[#091B46] fill-[#091B46]" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-[22px] text-[#091B46]">
                    {activePillar.panelTitle}
                  </h3>
                </div>

                {/* Animated Equalizer Bars */}
                <div
                  className="flex items-center gap-[3px] h-4"
                  aria-hidden="true"
                >
                  {[0.45, 0.9, 0.6, 0.85, 0.5].map((base, i) => (
                    <motion.span
                      key={i}
                      className="w-[2px] rounded-full bg-[#091B46]/65"
                      animate={{
                        scaleY: [base, 1, base * 0.6, 0.95, base],
                      }}
                      transition={{
                        duration: 1.4 + i * 0.18,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{ height: '14px', transformOrigin: 'center' }}
                    />
                  ))}
                </div>
              </div>

              {/* Inner Soft Sky-Tint Canvas */}
              <div className="rounded-3xl bg-gradient-to-b from-[#EBF1FD] via-[#DCE7FA] to-[#CDDCF8] p-5 sm:p-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-4 max-w-[390px] mx-auto"
                  >
                    {activePillar.cards.map((card, idx) => {
                      const wave = floatWaves[idx] || floatWaves[0];
                      const isFocused = activeSignalIdx === idx;
                      return (
                        <motion.div
                          key={card.title}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{
                            opacity: 1,
                            x: wave.x,
                            y: wave.y,
                            scale: isFocused ? 1.02 : 1,
                          }}
                          transition={{
                            opacity: { duration: 0.36, delay: idx * 0.07 },
                            scale: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                            x: {
                              duration: wave.duration,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            },
                            y: {
                              duration: wave.duration * 0.85,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            },
                          }}
                          onMouseEnter={() => setActiveSignalIdx(idx)}
                          onClick={() => setActiveSignalIdx(idx)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setActiveSignalIdx(idx);
                            }
                          }}
                          className={`bg-white rounded-2xl border px-5 py-4 flex items-center justify-between gap-4 transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#091B46] ${
                            isFocused
                              ? 'border-[#2865B0] shadow-[0_14px_34px_-10px_rgba(9,27,70,0.16)]'
                              : 'border-slate-100 shadow-[0_10px_28px_-10px_rgba(9,27,70,0.09)]'
                          }`}
                        >
                          <div>
                            <div className="text-[15.5px] font-semibold text-[#091B46] leading-snug">
                              {card.title}
                            </div>
                            <div className="text-[12.5px] text-slate-500 mt-0.5 leading-snug">
                              {card.subtitle}
                            </div>
                          </div>
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                              isFocused ? 'bg-[#8FB3EA]' : 'bg-[#B9CEF4]'
                            }`}
                          >
                            {renderAnimatedIcon(card.iconType, isFocused)}
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Interactive Business Fundamentals Accordion */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-[13px] font-semibold tracking-[0.14em] uppercase text-[#2865B0] mb-2.5">
                BUSINESS FUNDAMENTALS
              </span>
              <h2 className="font-display font-semibold text-[34px] sm:text-[42px] leading-[1.12] tracking-[-0.02em] text-[#091B46] text-balance">
                Built Around Business Fundamentals
              </h2>

              <div className="mt-10 divide-y divide-slate-200 border-b border-slate-200">
                {FUNDAMENTAL_PILLARS.map((pillar) => {
                  const isOpen = activePillarId === pillar.id;
                  return (
                    <div
                      key={pillar.id}
                      className={`py-5 transition-all duration-200 ${
                        isOpen ? 'border-l-4 border-l-[#091B46] pl-4 bg-[#F2F6FE]' : ''
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActivePillarId(pillar.id)}
                        aria-expanded={isOpen}
                        className="w-full text-left flex items-center justify-between gap-4 group cursor-pointer focus:outline-none active:scale-[0.99]"
                      >
                        <span
                          className={`font-display font-semibold text-[22px] transition-colors ${
                            isOpen
                              ? 'text-[#091B46]'
                              : 'text-[#1E293B] group-hover:text-[#091B46]'
                          }`}
                        >
                          {pillar.title}
                        </span>
                        <span
                          className={`text-[11.5px] font-semibold px-2.5 py-0.5 rounded-full transition-all ${
                            isOpen
                              ? 'bg-[#091B46] text-white opacity-100'
                              : 'text-slate-400 opacity-0 group-hover:opacity-100'
                          }`}
                        >
                          {isOpen ? 'Active' : 'Inspect'}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.24,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-[15.5px] leading-[1.6] text-[#475569] pt-3 pr-4">
                              {pillar.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
