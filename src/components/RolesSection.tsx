import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  PhoneCall,
  Activity,
  FileSpreadsheet,
} from 'lucide-react';
import { ROLE_ITEMS, RoleItem, DashboardTabId } from '../data/elymentoData';

interface RolesSectionProps {
  onSelectRoleDashboard: (tab: DashboardTabId) => void;
  onOpenDemo: (preselectedProduct?: string) => void;
}

export const RolesSection: React.FC<RolesSectionProps> = ({
  onSelectRoleDashboard,
  onOpenDemo,
}) => {
  const [activeRoleId, setActiveRoleId] = useState<string>('leaders');
  const [expandedRoleDetail, setExpandedRoleDetail] = useState<RoleItem | null>(
    null
  );

  const renderRoleIcon = (type: RoleItem['iconType']) => {
    const cls = 'w-4 h-4 text-white';
    switch (type) {
      case 'leaders':
        return <PhoneCall className={cls} />;
      case 'sales':
        return <Activity className={cls} />;
      case 'operations':
        return <FileSpreadsheet className={cls} />;
    }
  };

  return (
    <section id="roles" className="scroll-mt-[76px] py-12 lg:py-14 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[760px] mx-auto"
        >
          <span className="inline-block text-[13px] font-semibold tracking-[0.14em] uppercase text-[#2865B0] mb-2">
            WHO IT HELPS
          </span>
          <h2 className="font-display font-semibold text-[32px] sm:text-[42px] leading-[1.12] tracking-[-0.02em] text-[#091B46] text-balance">
            Built For Every Role That Runs Your Business
          </h2>
        </motion.div>

        {/* 3 Role Cards matching SS4 */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {ROLE_ITEMS.map((role, idx) => {
            const isActive = activeRoleId === role.id;
            return (
              <motion.div
                key={role.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  opacity: { duration: 0.4, delay: idx * 0.08 },
                  y: { duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] },
                  layout: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.985 }}
                onMouseEnter={() => setActiveRoleId(role.id)}
                onClick={() => setActiveRoleId(role.id)}
                className={`rounded-[22px] border bg-white overflow-hidden transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-[#091B46]/45 ring-1 ring-[#091B46]/20 shadow-[0_18px_44px_-16px_rgba(9,27,70,0.22)]'
                    : 'border-slate-200/85 hover:border-[#091B46]/35'
                }`}
              >
                {/* Curved Header Band */}
                <div
                  className="px-5 py-3.5 flex items-center gap-3 rounded-b-[16px] transition-colors duration-300"
                  style={{
                    backgroundColor: isActive
                      ? role.id === 'leaders'
                        ? '#2865B0'
                        : role.headerBg
                      : role.headerBg,
                  }}
                >
                  <motion.span
                    animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0,
                      ease: 'easeInOut',
                    }}
                    className="w-8 h-8 rounded-full bg-[#091B46]/85 flex items-center justify-center shrink-0"
                  >
                    {renderRoleIcon(role.iconType)}
                  </motion.span>
                  <h3 className="font-display font-semibold text-[18px] leading-tight truncate text-white">
                    {role.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7">
                  <p className="text-[15px] leading-[1.6] text-[#334155]">
                    {role.description}
                  </p>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 22 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedRoleDetail(
                              expandedRoleDetail?.id === role.id ? null : role
                            );
                          }}
                          className="group inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-[#091B46] hover:bg-[#12346A] text-white text-[14px] font-semibold transition-all shadow-[0_8px_20px_-6px_rgba(9,27,70,0.4)] cursor-pointer"
                        >
                          <span>See How Elymento Works</span>
                          <span className="w-7 h-7 rounded-full bg-white text-[#091B46] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                          </span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Role Workflow Breakdown Strip */}
        <AnimatePresence>
          {expandedRoleDetail && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 rounded-2xl bg-[#DCE7FA] border border-[#AEC7F3] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#12346A]">
                  Daily Workflow · {expandedRoleDetail.title}
                </div>
                <ul className="mt-2.5 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {expandedRoleDetail.outcomes.map((outcome, i) => (
                    <li
                      key={outcome}
                      className="bg-white rounded-xl px-4 py-3 border border-slate-200/70 text-[13.5px] text-slate-700"
                    >
                      <span className="font-semibold text-[#091B46] mr-1.5 tabular-nums">
                        0{i + 1}.
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    onSelectRoleDashboard(expandedRoleDetail.recommendedTab);
                    document
                      .getElementById('home')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#091B46] text-white text-[13.5px] font-semibold hover:bg-[#12346A] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Preview Live View
                </button>
                <button
                  type="button"
                  onClick={() => onOpenDemo(expandedRoleDetail.title)}
                  className="px-4 py-2.5 rounded-full border border-[#091B46] text-[#091B46] hover:bg-[#091B46] hover:text-white text-[13.5px] font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  Book Role Demo
                </button>
                <button
                  type="button"
                  onClick={() => setExpandedRoleDetail(null)}
                  className="text-[13px] text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
