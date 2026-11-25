import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Globe2,
  CheckCircle2,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenDemo: (preselectedProduct?: string) => void;
  onScrollToPricing: () => void;
}

const ABOUT_PILLARS = [
  {
    id: 'sync',
    icon: Layers,
    title: 'Built on Existing ERPs',
    copy: 'Connect Tally, Busy, SAP, Zoho, and 17+ accounting systems in minutes without changing how your accounts team bills.',
  },
  {
    id: 'clarity',
    icon: ShieldCheck,
    title: 'Zero-Spreadsheet Discipline',
    copy: 'Replace manual weekly Excel merges with verified morning dashboards, aging alerts, and clear branch accountability.',
  },
  {
    id: 'global',
    icon: Globe2,
    title: 'Global · Remote & On-site',
    copy: 'Fast remote deployment worldwide with dedicated on-site onboarding workshops for multi-depot distribution enterprises.',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenDemo,
  onScrollToPricing,
}) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('sync');

  return (
    <section
      id="about"
      className="scroll-mt-[76px] py-10 lg:py-12 bg-[#DCE7FA] border-y border-[#AEC7F3]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT: Story & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5"
          >
            <div>
              <span className="inline-block text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#2865B0] mb-2">
                ABOUT US
              </span>
              <h2 className="font-display font-semibold text-[32px] sm:text-[38px] leading-[1.12] tracking-[-0.02em] text-[#091B46] text-balance">
                Engineering Operational Clarity for Distribution Businesses
              </h2>
            </div>

            <p className="text-[15.5px] leading-[1.7] text-[#24395E]">
              Elymento Insights was built to solve a daily bottleneck inside
              growing distribution companies: financial data sits locked in ERPs,
              field updates scatter across chats, and leaders wait days for
              Excel MIS packs before spotting margin leaks or silent dealers.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-1">
              {[
                { val: '25+', label: 'Industries Served' },
                { val: '21+', label: 'ERP Connectors' },
                { val: '99.4%', label: 'Sync Reliability' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white border border-[#AEC7F3]/80 px-4 py-3.5 shadow-[0_6px_18px_-10px_rgba(9,27,70,0.14)]"
                >
                  <div className="font-display font-semibold text-[24px] sm:text-[26px] text-[#091B46] leading-none tabular-nums">
                    {stat.val}
                  </div>
                  <div className="text-[12px] font-medium text-slate-600 mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onScrollToPricing}
                className="group inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-[#091B46] hover:bg-[#12346A] text-white text-[14px] font-semibold transition-all shadow-[0_10px_24px_-8px_rgba(9,27,70,0.45)] active:scale-[0.97] cursor-pointer"
              >
                <span>View Pricing Plans</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#091B46] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => onOpenDemo('About Elymento Overview')}
                className="px-5 py-2.5 rounded-full border border-[#091B46] text-[#091B46] hover:bg-[#C2D4F6] text-[14px] font-semibold transition-colors active:scale-[0.97] cursor-pointer"
              >
                Talk to Our Team
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Interactive 3-Pillar Architecture Cards */}
          <div className="lg:col-span-6 space-y-3">
            {ABOUT_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = selectedPillarId === pillar.id;
              return (
                <motion.button
                  key={pillar.id}
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.38, delay: idx * 0.07 }}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full text-left rounded-2xl border p-4 sm:p-5 transition-all flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#091B46]/50 ring-1 ring-[#091B46]/20 shadow-[0_18px_40px_-14px_rgba(9,27,70,0.2)]'
                      : 'bg-white/80 border-slate-200/80 hover:border-[#091B46]/35'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#091B46] text-white'
                        : 'bg-[#DCE7FA] text-[#091B46]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-semibold text-[20px] text-[#091B46]">
                        {pillar.title}
                      </h3>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#091B46] shrink-0" />
                      )}
                    </div>
                    <p className="text-[14px] leading-[1.6] text-slate-600 mt-1.5">
                      {pillar.copy}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
