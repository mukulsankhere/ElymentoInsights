import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Zap,
  Target,
  Check,
  MapPin,
  Clock,
  SlidersHorizontal,
} from 'lucide-react';
import {
  DASHBOARD_TABS,
  DashboardTabId,
  INDIA_ZONES,
  ERP_CONNECTORS,
  MapZone,
} from '../data/elymentoData';

interface HeroSectionProps {
  activeTab: DashboardTabId;
  onChangeTab: (tab: DashboardTabId) => void;
  onOpenDemo: (preselectedProduct?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeTab,
  onChangeTab,
  onOpenDemo,
}) => {
  const [selectedZone, setSelectedZone] = useState<MapZone | null>(null);
  const [hoveredLeakIndex, setHoveredLeakIndex] = useState<number | null>(null);
  const [heroStatDetail, setHeroStatDetail] = useState<
    'industries' | 'erps' | null
  >(null);

  // Interactive states for secondary tabs
  const [approvedWorkflowIds, setApprovedWorkflowIds] = useState<string[]>([]);
  const [automationRules, setAutomationRules] = useState([
    {
      id: 'rule-1',
      name: 'Auto-remind 30d overdue invoices',
      channel: 'WhatsApp + Email',
      enabled: true,
    },
    {
      id: 'rule-2',
      name: 'Flag 45d inactive distributors',
      channel: 'ASM Alert',
      enabled: true,
    },
    {
      id: 'rule-3',
      name: 'Hold dispatch on credit limit breach',
      channel: 'ERP Sync',
      enabled: false,
    },
  ]);
  const [tasks, setTasks] = useState([
    {
      id: 't1',
      title: 'Follow up with Metro Traders (₹1.8L overdue)',
      owner: 'R. Sharma',
      done: false,
    },
    {
      id: 't2',
      title: 'Rebalance 120 units slow stock from Jaipur Depot',
      owner: 'M. Verma',
      done: true,
    },
    {
      id: 't3',
      title: 'Onboard 4 new retail outlets in Pune East',
      owner: 'S. Kulkarni',
      done: false,
    },
  ]);

  const toggleRule = (id: string) => {
    setAutomationRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const totalInactive = selectedZone
    ? selectedZone.inactiveDealers
    : 14;
  const totalLost = selectedZone ? selectedZone.lostDealers : 5;

  const leakageItems = [
    { label: 'Late Payments', pct: 45, color: '#6896D8' },
    { label: 'Non Moving Stock', pct: 32, color: '#12346A' },
    { label: 'Lost opportunity', pct: 23, color: '#091B46' },
  ];

  // SVG Donut ring geometry (r=30, circumference = 2 * pi * 30 ≈ 188.5)
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  let cumulativePct = 0;

  return (
    <section
      id="home"
      className="scroll-mt-[76px] relative overflow-hidden bg-gradient-to-br from-[#EBF1FD] via-[#DCE7FA] to-[#CDDCF8] hero-grid-bg pt-6 pb-9 lg:pt-8 lg:pb-11"
    >
      {/* Subtle Decorative Circuit Trace Accents with traveling signal pulse */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-55"
        viewBox="0 0 1440 760"
        fill="none"
      >
        <path
          d="M0 390 H42 C58 390 68 380 68 364 V320"
          stroke="#CBD5E1"
          strokeWidth="1"
        />
        <motion.path
          d="M0 390 H42 C58 390 68 380 68 364 V320"
          stroke="#2865B0"
          strokeWidth="1.5"
          strokeDasharray="18 140"
          animate={{ strokeDashoffset: [158, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          cx="145"
          cy="200"
          r="3.5"
          fill="#94A3B8"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <path
          d="M145 80 V200"
          stroke="#CBD5E1"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M1440 165 H1300 C1280 165 1270 175 1270 195 V210"
          stroke="#CBD5E1"
          strokeWidth="1"
        />
        <motion.path
          d="M1440 165 H1300 C1280 165 1270 175 1270 195 V210"
          stroke="#2865B0"
          strokeWidth="1.5"
          strokeDasharray="24 180"
          animate={{ strokeDashoffset: [204, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Proposition & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-[13px] font-semibold tracking-[0.14em] uppercase text-[#2865B0] mb-3">
                BUSINESS CONTROL
              </span>
              <h1 className="font-display font-semibold text-[40px] sm:text-[50px] xl:text-[58px] leading-[1.06] tracking-[-0.025em] text-[#091B46] text-balance">
                The Intelligence Layer for Your Distribution Business
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[16px] leading-[1.65] text-[#24395E] max-w-[475px]"
            >
              Connect your ERP, field teams, workflows and distributor network,
              turning scattered business data into clear priorities and
              measurable execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-1"
            >
              <button
                type="button"
                onClick={() => onOpenDemo()}
                className="group inline-flex items-center gap-3.5 pl-6 pr-2.5 py-2.5 rounded-full bg-[#091B46] hover:bg-[#12346A] text-white text-[15px] font-semibold transition-all duration-200 shadow-[0_12px_28px_-8px_rgba(9,27,70,0.45)] hover:shadow-[0_16px_32px_-6px_rgba(9,27,70,0.55)] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#091B46]"
              >
                <span>Book a Demo</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#091B46] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </span>
              </button>
            </motion.div>

            {/* Bottom Metric Cards matching SS1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-6 space-y-3"
            >
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setHeroStatDetail((prev) =>
                      prev === 'industries' ? null : 'industries'
                    )
                  }
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl backdrop-blur-xs border transition-all cursor-pointer ${
                    heroStatDetail === 'industries'
                      ? 'bg-[#091B46] text-white border-[#091B46] shadow-[0_10px_24px_-8px_rgba(9,27,70,0.35)]'
                      : 'bg-white/75 text-[#091B46] border-slate-200/80 hover:border-[#2865B0] shadow-[0_6px_20px_-10px_rgba(9,27,70,0.08)]'
                  }`}
                >
                  <Zap
                    className={`w-5 h-5 ${
                      heroStatDetail === 'industries'
                        ? 'text-white fill-white'
                        : 'text-[#091B46] fill-[#091B46]'
                    }`}
                  />
                  <span className="text-[15px] font-medium tabular-nums">
                    25+ Industries
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setHeroStatDetail((prev) =>
                      prev === 'erps' ? null : 'erps'
                    )
                  }
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl backdrop-blur-xs border transition-all cursor-pointer ${
                    heroStatDetail === 'erps'
                      ? 'bg-[#091B46] text-white border-[#091B46] shadow-[0_10px_24px_-8px_rgba(9,27,70,0.35)]'
                      : 'bg-white/75 text-[#091B46] border-slate-200/80 hover:border-[#2865B0] shadow-[0_6px_20px_-10px_rgba(9,27,70,0.08)]'
                  }`}
                >
                  <Target
                    className={`w-5 h-5 ${
                      heroStatDetail === 'erps'
                        ? 'text-white'
                        : 'text-[#091B46]'
                    }`}
                  />
                  <span className="text-[15px] font-medium tabular-nums">
                    21+ ERPs
                  </span>
                </button>
              </div>

              <AnimatePresence>
                {heroStatDetail && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.16 }}
                    className="max-w-[460px] rounded-2xl bg-white/95 border border-slate-200/90 px-4 py-3 text-[12.5px] text-slate-600 shadow-sm flex items-start justify-between gap-3"
                  >
                    <span>
                      {heroStatDetail === 'industries'
                        ? 'Pre-built templates for FMCG, Packaged Foods, Electricals, Hardware, Building Materials, Pharma, Lubricants, and 18+ distribution verticals.'
                        : 'Native connectors for Tally Prime, Busy, SAP B1 & S/4HANA, Zoho Books, Marg ERP, Microsoft Dynamics, Oracle NetSuite, and custom SQL.'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setHeroStatDetail(null)}
                      className="text-[11px] font-semibold text-[#091B46] hover:underline shrink-0 cursor-pointer"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Intelligence Layer Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative bg-white/95 rounded-[28px] border border-slate-200/80 shadow-[0_24px_60px_-20px_rgba(9,27,70,0.13)] p-4 sm:p-5"
            >
              {/* Segmented Tab Navigation */}
              <div className="flex items-center justify-center flex-wrap gap-1 pt-1 mb-4">
                {DASHBOARD_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => onChangeTab(tab.id)}
                      className={`relative px-3 py-1 rounded-full text-[11.5px] font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'text-white'
                          : 'text-[#1E293B] hover:text-[#091B46] hover:bg-slate-100/70'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="hero-tab-pill"
                          transition={{
                            type: 'spring',
                            stiffness: 420,
                            damping: 32,
                          }}
                          className="absolute inset-0 rounded-full bg-[#091B46] -z-0"
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Tab Views */}
              <div className="min-h-[348px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-3"
                    >
                      {/* Card 1: Where can I Grow? (Map + Inactive/Lost Dealers) */}
                      <div className="sm:col-span-7 bg-[#F2F6FE] rounded-2xl border border-slate-100 p-3.5 shadow-[0_2px_10px_-4px_rgba(9,27,70,0.05)]">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <h2 className="font-sans text-[14px] font-semibold text-[#091B46] leading-snug">
                              Where can
                              <br />I Grow?
                            </h2>
                          </div>
                          {selectedZone && (
                            <button
                              type="button"
                              onClick={() => setSelectedZone(null)}
                              className="text-[10.5px] font-medium text-[#091B46] hover:underline cursor-pointer"
                            >
                              All India
                            </button>
                          )}
                        </div>

                        <div className="relative flex items-center justify-between gap-2">
                          {/* Interactive India Zones SVG */}
                          <div className="w-[155px] h-[142px] shrink-0">
                            <svg
                              viewBox="35 0 220 225"
                              className="w-full h-full drop-shadow-xs"
                              role="img"
                              aria-label="Regional dealer growth map"
                            >
                              {INDIA_ZONES.map((zone) => {
                                const isSelected =
                                  selectedZone?.id === zone.id;
                                return (
                                  <motion.path
                                    key={zone.id}
                                    d={zone.d}
                                    fill={zone.color}
                                    stroke="#FFFFFF"
                                    strokeWidth={isSelected ? 3 : 1.5}
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() =>
                                      setSelectedZone(
                                        isSelected ? null : zone
                                      )
                                    }
                                    className="cursor-pointer transition-opacity"
                                    style={{
                                      opacity:
                                        selectedZone && !isSelected ? 0.45 : 1,
                                    }}
                                  >
                                    <title>
                                      {`${zone.name}: ${zone.growthPotential} (${zone.inactiveDealers} inactive)`}
                                    </title>
                                  </motion.path>
                                );
                              })}
                            </svg>
                          </div>

                          {/* Right Floating Stat Badges */}
                          <div className="flex-1 space-y-2">
                            <div className="bg-white rounded-xl border border-slate-100 px-2.5 py-2 shadow-xs flex items-center gap-2">
                              <span className="text-[14px] font-bold text-[#091B46] tabular-nums">
                                {String(totalInactive).padStart(2, '0')}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                              <span className="text-[10.5px] text-slate-600 leading-tight">
                                Inactive dealers
                              </span>
                            </div>
                            <div className="bg-white rounded-xl border border-slate-100 px-2.5 py-2 shadow-xs flex items-center gap-2">
                              <span className="text-[14px] font-bold text-[#091B46] tabular-nums">
                                {String(totalLost).padStart(2, '0')}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                              <span className="text-[10.5px] text-slate-600 leading-tight">
                                Lost dealers
                              </span>
                            </div>
                            {selectedZone && (
                              <div className="px-2 py-1 rounded-lg bg-[#DCE7FA] text-[10px] font-medium text-[#12346A]">
                                {selectedZone.name}: {selectedZone.growthPotential}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Legend */}
                        <div className="mt-1 flex items-center gap-1.5 text-[9.5px] text-slate-400">
                          <span>High</span>
                          <span className="w-2.5 h-1 rounded-full bg-[#8CC63F]" />
                          <span className="w-2.5 h-1 rounded-full bg-[#D5D836]" />
                          <span className="w-2.5 h-1 rounded-full bg-[#E8832A]" />
                          <span className="w-2.5 h-1 rounded-full bg-[#D9381E]" />
                          <span>Low</span>
                        </div>
                      </div>

                      {/* Card 2: Compare Sales with Last Year */}
                      <div className="sm:col-span-5 bg-[#F2F6FE] rounded-2xl border border-slate-100 p-3.5 shadow-[0_2px_10px_-4px_rgba(9,27,70,0.05)] flex flex-col justify-between">
                        <div>
                          <h2 className="font-sans text-[14px] font-semibold text-[#091B46] leading-snug">
                            Compare Sales
                            <br />
                            with Last Year
                          </h2>
                        </div>

                        <div className="flex items-end justify-between gap-2 mt-3">
                          <div className="pb-2">
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="text-[22px] font-bold text-[#091B46] tracking-tight tabular-nums"
                            >
                              ₹2.4 Cr.
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.35, delay: 0.18 }}
                              className="inline-block mt-1 px-2 py-0.5 rounded-full bg-[#E2F6E7] text-[#15803D] text-[10px] font-semibold tabular-nums"
                            >
                              +18% vs last year
                            </motion.div>
                          </div>

                          {/* Animated LY vs CY Bars */}
                          <div className="flex items-end gap-2.5 h-[112px] pr-1">
                            <div className="flex flex-col items-center gap-1">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 74 }}
                                transition={{
                                  duration: 0.65,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="w-7 rounded-t-lg bg-[#6896D8]"
                              />
                              <span className="text-[9.5px] font-semibold text-slate-400">
                                LY
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 96 }}
                                transition={{
                                  duration: 0.75,
                                  delay: 0.1,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="w-7 rounded-t-lg bg-[#091B46]"
                              />
                              <span className="text-[9.5px] font-semibold text-slate-500">
                                CY
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card 3: Where am I Losing Money? */}
                      <div className="sm:col-span-6 bg-[#F2F6FE] rounded-2xl border border-slate-100 p-3.5 shadow-[0_2px_10px_-4px_rgba(9,27,70,0.05)]">
                        <h2 className="font-sans text-[13.5px] font-semibold text-[#091B46] mb-2.5">
                          Where am I Losing Money?
                        </h2>
                        <div className="flex items-center gap-3">
                          {/* Animated Donut Ring */}
                          <div className="relative w-[84px] h-[84px] shrink-0">
                            <svg
                              viewBox="0 0 80 80"
                              className="w-full h-full -rotate-90"
                            >
                              {leakageItems.map((item, idx) => {
                                const dashLength =
                                  (item.pct / 100) * circumference;
                                const dashOffset =
                                  -(cumulativePct / 100) * circumference;
                                cumulativePct += item.pct;
                                const isDimmed =
                                  hoveredLeakIndex !== null &&
                                  hoveredLeakIndex !== idx;
                                return (
                                  <motion.circle
                                    key={item.label}
                                    cx="40"
                                    cy="40"
                                    r={radius}
                                    fill="none"
                                    stroke={item.color}
                                    strokeWidth="12"
                                    strokeDashoffset={dashOffset}
                                    initial={{
                                      strokeDasharray: `0 ${circumference}`,
                                      opacity: 0.4,
                                    }}
                                    animate={{
                                      strokeDasharray: `${dashLength} ${circumference}`,
                                      opacity: isDimmed ? 0.35 : 1,
                                    }}
                                    transition={{
                                      strokeDasharray: {
                                        duration: 0.75,
                                        delay: idx * 0.12,
                                        ease: [0.16, 1, 0.3, 1],
                                      },
                                      opacity: { duration: 0.25 },
                                    }}
                                  />
                                );
                              })}
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <span className="text-[12.5px] font-bold text-[#091B46] leading-none tabular-nums">
                                ₹6.2L
                              </span>
                              <span className="text-[9px] text-slate-500 mt-0.5">
                                leaking
                              </span>
                            </div>
                          </div>

                          {/* Breakdown list */}
                          <div className="flex-1 space-y-1.5">
                            {leakageItems.map((item, idx) => (
                              <button
                                key={item.label}
                                type="button"
                                onMouseEnter={() => setHoveredLeakIndex(idx)}
                                onMouseLeave={() => setHoveredLeakIndex(null)}
                                onClick={() =>
                                  setHoveredLeakIndex((prev) =>
                                    prev === idx ? null : idx
                                  )
                                }
                                className="w-full flex items-center justify-between gap-2 text-[11px] cursor-pointer rounded px-1 py-0.5 hover:bg-slate-100/70 transition-colors"
                              >
                                <div className="flex items-center gap-1.5 text-slate-600 truncate">
                                  <span
                                    className="w-2 h-2 rounded-xs shrink-0"
                                    style={{ backgroundColor: item.color }}
                                  />
                                  <span className="truncate">{item.label}</span>
                                </div>
                                <span className="font-semibold text-[#091B46] tabular-nums">
                                  {item.pct}%
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card 4: Plan vs Achievement */}
                      <div className="sm:col-span-6 bg-[#F2F6FE] rounded-2xl border border-slate-100 p-3.5 shadow-[0_2px_10px_-4px_rgba(9,27,70,0.05)]">
                        <h2 className="font-sans text-[13.5px] font-semibold text-[#091B46] mb-2.5">
                          Plan vs Achievement
                        </h2>
                        <div className="space-y-2.5">
                          {[
                            { label: 'Sales', pct: 83, color: '#091B46' },
                            { label: 'Beat Visits', pct: 91, color: '#12346A' },
                            { label: 'Collections', pct: 64, color: '#2865B0' },
                          ].map((row, idx) => (
                            <div key={row.label}>
                              <div className="flex items-center justify-between text-[11px] mb-1">
                                <span className="font-medium text-slate-600">
                                  {row.label}
                                </span>
                                <span className="font-semibold text-[#091B46] tabular-nums">
                                  {row.pct}%
                                </span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-[#B9CEF4] overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${row.pct}%` }}
                                  transition={{
                                    duration: 0.7,
                                    delay: 0.1 + idx * 0.08,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: row.color }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'insights' && (
                    <motion.div
                      key="insights"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      <div className="bg-[#F2F6FE] rounded-2xl border border-slate-100 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#2865B0]">
                          Margin & SKU Intelligence
                        </div>
                        <div className="text-[22px] font-bold text-[#091B46] mt-1 tabular-nums">
                          ₹14.6L
                        </div>
                        <p className="text-[12px] text-slate-500 mt-0.5">
                          Recoverable gross margin across 11 slow-moving SKUs
                        </p>
                        <div className="mt-4 space-y-2.5">
                          {[
                            { sku: 'Prime Gasket Kit 400', days: '74d aging', val: '₹2.4L' },
                            { sku: 'Apex Control Valve B2', days: '68d aging', val: '₹1.9L' },
                            { sku: 'ProPack Sealant 1L', days: '61d aging', val: '₹1.4L' },
                          ].map((item) => (
                            <div
                              key={item.sku}
                              className="flex items-center justify-between text-[12px] py-1.5 border-b border-slate-100 last:border-0"
                            >
                              <div>
                                <div className="font-semibold text-[#091B46]">
                                  {item.sku}
                                </div>
                                <div className="text-[11px] text-slate-400">
                                  {item.days}
                                </div>
                              </div>
                              <span className="font-semibold text-[#091B46] tabular-nums">
                                {item.val}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#F2F6FE] rounded-2xl border border-slate-100 p-4 flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#2865B0]">
                            Dealer Cohort Shift
                          </div>
                          <div className="text-[14px] font-semibold text-[#091B46] mt-1">
                            Top Reactivation Priorities
                          </div>
                          <div className="mt-3 space-y-2.5">
                            {[
                              { name: 'Shree Ganesh Agencies', city: 'Pune', gap: '42d silent', potential: '₹4.2L/mo' },
                              { name: 'Kaveri Hardware Mart', city: 'Bengaluru', gap: '38d silent', potential: '₹3.6L/mo' },
                              { name: 'National Distributors', city: 'Jaipur', gap: '35d silent', potential: '₹2.9L/mo' },
                            ].map((d) => (
                              <div
                                key={d.name}
                                className="p-2.5 rounded-xl bg-white border border-slate-100 flex items-center justify-between"
                              >
                                <div>
                                  <div className="text-[12px] font-semibold text-[#091B46]">
                                    {d.name}
                                  </div>
                                  <div className="text-[10.5px] text-slate-500">
                                    {d.city} · {d.gap}
                                  </div>
                                </div>
                                <span className="text-[11.5px] font-semibold text-[#15803D] bg-[#E2F6E7] px-2 py-0.5 rounded-full tabular-nums">
                                  {d.potential}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'onfield' && (
                    <motion.div
                      key="onfield"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-3 gap-2.5">
                        {[
                          { label: 'Active Reps', val: '38 / 42' },
                          { label: 'Outlet Check-ins', val: '142' },
                          { label: 'Beat Adherence', val: '91%' },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className="bg-[#F2F6FE] rounded-2xl border border-slate-100 p-3 text-center"
                          >
                            <div className="text-[18px] font-bold text-[#091B46] tabular-nums">
                              {stat.val}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-[#F2F6FE] rounded-2xl border border-slate-100 p-3.5 space-y-2.5">
                        <div className="text-[12.5px] font-semibold text-[#091B46]">
                          Live Field Activity Stream
                        </div>
                        {[
                          {
                            rep: 'Vikram Joshi',
                            outlet: 'Mahalaxmi Superstore · South Beat',
                            order: '₹48,500 order booked',
                            time: '4m ago',
                          },
                          {
                            rep: 'Ananya Nair',
                            outlet: 'City Central Traders · Kochi Zone',
                            order: 'Payment collected ₹1.1L',
                            time: '12m ago',
                          },
                          {
                            rep: 'Deepak Patel',
                            outlet: 'Navrang Distributors · Ahmedabad',
                            order: 'Stock audit completed',
                            time: '19m ago',
                          },
                        ].map((visit) => (
                          <div
                            key={visit.rep}
                            className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white border border-slate-100"
                          >
                            <div className="flex items-start gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-[#DCE7FA] text-[#091B46] flex items-center justify-center shrink-0 mt-0.5">
                                <MapPin className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-[12px] font-semibold text-[#091B46]">
                                  {visit.rep}
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  {visit.outlet}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-[11px] font-semibold text-[#091B46]">
                                {visit.order}
                              </div>
                              <div className="text-[10px] text-slate-400">
                                {visit.time}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'workflow' && (
                    <motion.div
                      key="workflow"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="bg-[#F2F6FE] rounded-2xl border border-slate-100 p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[13.5px] font-semibold text-[#091B46]">
                            Approval Queue (Interactive)
                          </div>
                          <div className="text-[11.5px] text-slate-500">
                            Click Approve to clear distributor bottlenecks
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold text-[#091B46] bg-[#DCE7FA] px-2.5 py-1 rounded-full tabular-nums">
                          {3 - approvedWorkflowIds.length} Pending
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          {
                            id: 'wf-1',
                            title: 'Credit Limit Extension · ₹2.5L',
                            detail: 'Balaji Enterprises · 98% historical on-time pay',
                          },
                          {
                            id: 'wf-2',
                            title: 'Festival Scheme Slab Override · 2.5%',
                            detail: 'North Zone Super Stockist · Volume > 400 cases',
                          },
                          {
                            id: 'wf-3',
                            title: 'Expired Stock Credit Note · ₹34,200',
                            detail: 'Verified by ASM with batch photo proof',
                          },
                        ].map((wf) => {
                          const isApproved = approvedWorkflowIds.includes(wf.id);
                          return (
                            <div
                              key={wf.id}
                              className="p-3 rounded-xl bg-white border border-slate-100 flex items-center justify-between gap-3"
                            >
                              <div>
                                <div className="text-[12.5px] font-semibold text-[#091B46]">
                                  {wf.title}
                                </div>
                                <div className="text-[11px] text-slate-500 mt-0.5">
                                  {wf.detail}
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() =>
                                  setApprovedWorkflowIds((prev) =>
                                    isApproved
                                      ? prev.filter((x) => x !== wf.id)
                                      : [...prev, wf.id]
                                  )
                                }
                                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors shrink-0 cursor-pointer ${
                                  isApproved
                                    ? 'bg-[#E2F6E7] text-[#15803D]'
                                    : 'bg-[#091B46] text-white hover:bg-[#12346A]'
                                }`}
                              >
                                {isApproved ? 'Approved ✓' : 'Approve'}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'automation' && (
                    <motion.div
                      key="automation"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="bg-[#F2F6FE] rounded-2xl border border-slate-100 p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[13.5px] font-semibold text-[#091B46]">
                            Active Business Rules
                          </div>
                          <div className="text-[11.5px] text-slate-500">
                            Toggle automated triggers across ERP & WhatsApp
                          </div>
                        </div>
                        <SlidersHorizontal className="w-4 h-4 text-[#2865B0]" />
                      </div>

                      <div className="space-y-2.5">
                        {automationRules.map((rule) => (
                          <div
                            key={rule.id}
                            className="p-3 rounded-xl bg-white border border-slate-100 flex items-center justify-between gap-3"
                          >
                            <div>
                              <div className="text-[12.5px] font-semibold text-[#091B46]">
                                {rule.name}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                Trigger channel: {rule.channel}
                              </div>
                            </div>
                            <button
                              type="button"
                              role="switch"
                              aria-checked={rule.enabled}
                              onClick={() => toggleRule(rule.id)}
                              className={`w-11 h-6 rounded-full p-0.5 transition-colors cursor-pointer shrink-0 ${
                                rule.enabled ? 'bg-[#091B46]' : 'bg-slate-200'
                              }`}
                            >
                              <span
                                className={`block w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                                  rule.enabled ? 'translate-x-5' : 'translate-x-0'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'task' && (
                    <motion.div
                      key="task"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="bg-[#F2F6FE] rounded-2xl border border-slate-100 p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[13.5px] font-semibold text-[#091B46]">
                            Daily Execution Checklist
                          </div>
                          <div className="text-[11.5px] text-slate-500">
                            Assigned automatically from ERP exceptions
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold text-[#091B46] tabular-nums">
                          {tasks.filter((t) => t.done).length}/{tasks.length} Done
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {tasks.map((task) => (
                          <button
                            key={task.id}
                            type="button"
                            onClick={() => toggleTask(task.id)}
                            className="w-full text-left p-3 rounded-xl bg-white border border-slate-100 flex items-center justify-between gap-3 hover:border-slate-200 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                                  task.done
                                    ? 'bg-[#091B46] border-[#091B46] text-white'
                                    : 'border-slate-300 bg-white'
                                }`}
                              >
                                {task.done && <Check className="w-3.5 h-3.5" />}
                              </span>
                              <div>
                                <div
                                  className={`text-[12.5px] font-medium ${
                                    task.done
                                      ? 'line-through text-slate-400'
                                      : 'text-[#091B46]'
                                  }`}
                                >
                                  {task.title}
                                </div>
                                <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                                  <Clock className="w-3 h-3" />
                                  <span>Owner: {task.owner}</span>
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom ERP Connector Tree */}
              <div className="relative pt-3">
                {/* Connecting SVG Lines with Animated Data Stream Pulses */}
                <div className="relative h-10 w-full flex items-start justify-center">
                  <svg
                    viewBox="0 0 460 44"
                    fill="none"
                    className="w-full max-w-[440px] h-10 overflow-visible"
                    aria-hidden="true"
                  >
                    {/* Base dotted branches */}
                    <path
                      d="M48 40 C48 16, 230 24, 230 8"
                      stroke="#CBD5E1"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M138 40 C138 18, 230 24, 230 8"
                      stroke="#CBD5E1"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M230 40 V8"
                      stroke="#CBD5E1"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M322 40 C322 18, 230 24, 230 8"
                      stroke="#CBD5E1"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M412 40 C412 16, 230 24, 230 8"
                      stroke="#CBD5E1"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />

                    {/* Animated upward sync pulses */}
                    {[
                      { d: 'M48 40 C48 16, 230 24, 230 8', delay: 0 },
                      { d: 'M138 40 C138 18, 230 24, 230 8', delay: 0.45 },
                      { d: 'M230 40 V8', delay: 0.9 },
                      { d: 'M322 40 C322 18, 230 24, 230 8', delay: 1.35 },
                      { d: 'M412 40 C412 16, 230 24, 230 8', delay: 1.8 },
                    ].map((branch, idx) => (
                      <motion.path
                        key={idx}
                        d={branch.d}
                        stroke="#091B46"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeDasharray="16 200"
                        animate={{ strokeDashoffset: [216, 0] }}
                        transition={{
                          duration: 2.6,
                          delay: branch.delay,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    ))}

                    {/* Central Hub Node */}
                    <motion.circle
                      cx="230"
                      cy="4"
                      r="7"
                      fill="#091B46"
                      fillOpacity="0.2"
                      animate={{ scale: [0.85, 1.35, 0.85], opacity: [0.35, 0.05, 0.35] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <circle cx="230" cy="4" r="4" fill="#091B46" />
                  </svg>
                </div>

                {/* 5 ERP Nodes (Non-clickable) */}
                <div className="grid grid-cols-5 gap-2 max-w-[460px] mx-auto select-none pointer-events-none">
                  {ERP_CONNECTORS.map((erp) => {
                    const isMore = erp.id === 'more';
                    return (
                      <div
                        key={erp.id}
                        className={`px-2 py-2 rounded-full border text-center flex flex-col items-center justify-center ${
                          isMore
                            ? 'bg-[#091B46] text-white border-[#091B46] shadow-sm'
                            : 'bg-white text-[#091B46] border-slate-200/90'
                        }`}
                      >
                        <div className="text-[11px] font-bold leading-tight truncate max-w-full">
                          {erp.name}
                        </div>
                        {!isMore && (
                          <div className="text-[8px] text-slate-400 truncate max-w-full mt-0.5">
                            {erp.subtitle}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
