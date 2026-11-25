import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Bell,
  Clock,
  Tv,
  Mic,
  LayoutGrid,
  Check,
  Calendar,
  FileText,
} from 'lucide-react';
import {
  PRODUCT_PAGE_SPECS,
  ProductPageId,
} from '../data/productPagesData';
import { DASHBOARD_TABS, DashboardTabId } from '../data/elymentoData';

interface ProductPageProps {
  productId: ProductPageId;
  onOpenDemo: (preselectedProduct?: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  productId,
  onOpenDemo,
}) => {
  const spec = PRODUCT_PAGE_SPECS[productId];
  const [activeTab, setActiveTab] = useState<DashboardTabId>(spec.defaultTab);
  const [mobileTasks, setMobileTasks] = useState<
    { id: string; label: string; done: boolean }[]
  >([
    { id: 'mt1', label: 'Review top 10 overdue dealers', done: true },
    { id: 'mt2', label: 'Approve West Zone scheme slab', done: true },
    { id: 'mt3', label: 'Assign follow-up for 14 inactive accounts', done: false },
  ]);
  const [activeSignalIdx, setActiveSignalIdx] = useState<number>(0);

  // Sync tab, signal selection, and phone tasks when switching products
  React.useEffect(() => {
    setActiveTab(spec.defaultTab);
    setActiveSignalIdx(0);
    setMobileTasks([
      {
        id: `${productId}-1`,
        label:
          productId === 'onfield'
            ? 'Verify 14 beat check-ins in South Zone'
            : productId === 'workflow'
              ? 'Approve 3 pending credit limit overrides'
              : productId === 'dms'
                ? 'Reconcile 8 distributor scheme claims'
                : 'Review top 10 overdue dealers',
        done: true,
      },
      {
        id: `${productId}-2`,
        label:
          productId === 'onfield'
            ? 'Follow up with dormant outlets on Route B'
            : productId === 'workflow'
              ? 'Clear dispatch holds before 5 PM cutoff'
              : productId === 'dms'
                ? 'Notify 11 low-stock channel partners'
                : 'Approve West Zone scheme slab',
        done: true,
      },
      {
        id: `${productId}-3`,
        label:
          productId === 'onfield'
            ? 'Sync secondary orders to Tally ERP'
            : productId === 'workflow'
              ? 'Audit SLA compliance log for West region'
              : productId === 'dms'
                ? 'Confirm primary stock dispatch for Jaipur'
                : 'Assign follow-up for 14 inactive accounts',
        done: false,
      },
    ]);
  }, [productId, spec.defaultTab]);

  const toggleMobileTask = (id: string) => {
    setMobileTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="bg-white">

      {/* SECTION 1: Product Hero (SS1 & SS4) */}
      <section className="scroll-mt-[76px] relative overflow-hidden bg-gradient-to-b from-[#DCE7FA] via-white to-white hero-grid-bg pt-8 pb-10 lg:pt-10 lg:pb-12">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
          <motion.div
            key={`hero-${spec.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-[780px] mx-auto"
          >
            <span className="inline-block text-[12px] font-semibold tracking-[0.16em] uppercase text-[#2865B0] mb-2">
              {spec.kicker}
            </span>
            <h1 className="font-display font-semibold text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#091B46] text-balance">
              {spec.headline}
            </h1>
            <p className="text-[15px] text-slate-600 mt-3 leading-relaxed">
              {spec.subheadline}
            </p>

            <div className="mt-5">
              <button
                type="button"
                onClick={() => onOpenDemo(spec.name)}
                className="group inline-flex items-center gap-3.5 pl-6 pr-2.5 py-2.5 rounded-full bg-[#091B46] hover:bg-[#12346A] text-white text-[14.5px] font-semibold transition-all shadow-[0_12px_28px_-8px_rgba(9,27,70,0.45)] active:scale-[0.98] cursor-pointer"
              >
                <span>Book a Demo</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#091B46] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Hero Visual Showcase */}
          {spec.heroVariant === 'erp-snap' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-[980px] mx-auto"
            >
              {/* Left ERP Source Stack */}
              <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 shadow-[0_18px_48px_-16px_rgba(9,27,70,0.12)] p-6 space-y-4">
                {[
                  { name: 'Tally', sub: 'POWER OF SIMPLICITY', color: '#B91C1C' },
                  { name: 'Busy', sub: 'BUSINESS ACCOUNTING', color: '#12346A' },
                  { name: 'Zoho', sub: 'BOOKS & INVENTORY', color: '#DC2626' },
                  { name: 'SAP', sub: 'BUSINESS ONE / S4', color: '#0284C7' },
                ].map((erp, i) => (
                  <motion.div
                    key={erp.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="rounded-xl border border-slate-100 bg-[#F2F6FE] px-4 py-3 flex items-center justify-between"
                  >
                    <div>
                      <div
                        className="text-[18px] font-extrabold tracking-tight leading-none"
                        style={{ color: erp.color }}
                      >
                        {erp.name}
                      </div>
                      <div className="text-[9px] font-semibold tracking-wider text-slate-400 mt-1">
                        {erp.sub}
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Synced
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Curved Animated Connector Arrow */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-10 h-10 rounded-full bg-orange-50 border border-orange-200 text-orange-500 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Right Snap View Analytics Frame */}
              <div className="lg:col-span-7 bg-[#091B46] rounded-[22px] p-3 shadow-[0_24px_60px_-18px_rgba(9,27,70,0.3)]">
                <div className="bg-[#F8FAFC] rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-[13px] font-bold text-[#091B46]">
                      Snap View
                    </div>
                    <div className="text-[10.5px] font-medium text-slate-500">
                      Live ERP Sync
                    </div>
                  </div>

                  {/* Mini KPI Row */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { k: 'Yesterday', v: '8.88 L' },
                      { k: 'Current Sales', v: '34.24 L' },
                      { k: 'Projection', v: '6.33 Cr' },
                      { k: 'Overdue O/S', v: '55.88 L' },
                    ].map((tile) => (
                      <div
                        key={tile.k}
                        className="bg-white rounded-lg border border-slate-200/80 p-2"
                      >
                        <div className="text-[9px] text-slate-400 truncate">
                          {tile.k}
                        </div>
                        <div className="text-[13px] font-bold text-[#091B46] mt-0.5 tabular-nums">
                          {tile.v}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Two Pie/Segment Charts */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: 'Segment wise Sales', pcts: [42, 33, 25] },
                      { title: 'Brand wise Sales', pcts: [48, 30, 22] },
                    ].map((chart) => (
                      <div
                        key={chart.title}
                        className="bg-white rounded-xl border border-slate-200/70 p-3 flex items-center gap-3"
                      >
                        <svg viewBox="0 0 64 64" className="w-14 h-14 -rotate-90 shrink-0">
                          <circle
                            cx="32"
                            cy="32"
                            r="22"
                            fill="none"
                            stroke="#F59E0B"
                            strokeWidth="12"
                            strokeDasharray="60 138"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="22"
                            fill="none"
                            stroke="#091B46"
                            strokeWidth="12"
                            strokeDasharray="48 138"
                            strokeDashoffset="-60"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="22"
                            fill="none"
                            stroke="#94A3B8"
                            strokeWidth="12"
                            strokeDasharray="30 138"
                            strokeDashoffset="-108"
                          />
                        </svg>
                        <div>
                          <div className="text-[11px] font-semibold text-[#091B46]">
                            {chart.title}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-1 tabular-nums">
                            Top 3 · {chart.pcts.join('% / ')}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Clean Dashboard Card for OnField / Workflow / DMS (no AI Assist bar) */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-[780px] mx-auto bg-white rounded-[26px] border border-slate-200/80 shadow-[0_24px_60px_-20px_rgba(9,27,70,0.14)] p-5 sm:p-6"
            >
              <div className="flex items-center justify-center flex-wrap gap-1.5 mb-5">
                {DASHBOARD_TABS.map((tab) => {
                  const isCurrent = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-colors cursor-pointer ${
                        isCurrent
                          ? 'text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {isCurrent && (
                        <motion.span
                          layoutId={`product-tab-pill-${spec.id}`}
                          className="absolute inset-0 rounded-full bg-[#091B46]"
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab-driven KPI Strip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${spec.id}-${activeTab}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3.5"
                >
                  {(activeTab === spec.defaultTab
                    ? spec.bento.kpis
                    : activeTab === 'overview'
                      ? [
                          { label: 'Active Revenue', value: '₹2.4 Cr.' },
                          { label: 'Plan vs Actual', value: '83%' },
                          { label: 'Healthy Accounts', value: '91.2%' },
                        ]
                      : activeTab === 'insights'
                        ? [
                            { label: 'At-Risk Accounts', value: '14 Dealers' },
                            { label: 'Stock Aging >60d', value: '₹6.2 L' },
                            { label: 'Margin Capture', value: '+4.8%' },
                          ]
                        : activeTab === 'onfield'
                          ? [
                              { label: 'Visits Logged', value: '142 / 156' },
                              { label: 'Productive Calls', value: '78.4%' },
                              { label: 'Beat Compliance', value: '91%' },
                            ]
                          : activeTab === 'workflow'
                            ? [
                                { label: 'Approvals Cleared', value: '38 Today' },
                                { label: 'Avg Turnaround', value: '14 Mins' },
                                { label: 'SLA Met', value: '96.4%' },
                              ]
                            : activeTab === 'automation'
                              ? [
                                  { label: 'Reminders Sent', value: '124 Auto' },
                                  { label: 'ERP Sync Latency', value: '< 15 sec' },
                                  { label: 'Manual Work Saved', value: '11.4 hrs' },
                                ]
                              : [
                                  { label: 'Open Follow-ups', value: '9 Tasks' },
                                  { label: 'Assigned Today', value: '24 Reps' },
                                  { label: 'Closure Rate', value: '89%' },
                                ]
                  ).map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-2xl bg-[#DCE7FA] border border-slate-100 p-4"
                    >
                      <div className="text-[11.5px] font-medium text-slate-500">
                        {kpi.label}
                      </div>
                      <div className="text-[21px] font-bold text-[#091B46] mt-1 tabular-nums">
                        {kpi.value}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* SECTION 2: Problem Statement + 3 Cards (SS2) */}
      <section className="py-18 lg:py-22 bg-white">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="text-center max-w-[740px] mx-auto"
          >
            <h2 className="font-display font-semibold text-[32px] sm:text-[42px] leading-[1.15] text-[#091B46] text-balance">
              {spec.problemTitle}
            </h2>
            <p className="text-[15px] leading-[1.65] text-slate-600 mt-4">
              {spec.problemSubtitle}
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {spec.problemCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-slate-200/85 bg-white p-7 text-center shadow-[0_10px_28px_-14px_rgba(9,27,70,0.08)]"
              >
                <div
                  className={`w-12 h-12 rounded-xl mx-auto flex items-center justify-center ${
                    card.variant === 'navy'
                      ? 'bg-[#091B46] text-white'
                      : 'bg-[#DCE7FA] text-[#091B46]'
                  }`}
                >
                  {idx === 0 ? (
                    <Mic className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <FileText className="w-5 h-5" />
                  ) : (
                    <LayoutGrid className="w-5 h-5" />
                  )}
                </div>
                <h3 className="font-display font-semibold text-[21px] text-[#091B46] mt-6">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-slate-600 mt-2.5">
                  {card.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Bento Grid + Tilted Mobile App Preview (SS3) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 2 Stacked Cards */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Top Light Card: Real-Time Visibility */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="rounded-[24px] bg-[#EBF1FD] p-7 sm:p-8 flex-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-semibold text-[24px] text-[#091B46]">
                    {spec.bento.visibilityTitle}
                  </h3>
                  <p className="text-[14.5px] text-slate-600 mt-2">
                    {spec.bento.visibilityCopy}
                  </p>
                </div>

                {/* Mini Sparkline Strip */}
                <div className="mt-7 bg-white rounded-2xl p-4 grid grid-cols-3 gap-3 shadow-xs">
                  {spec.bento.kpis.map((kpi) => (
                    <div key={kpi.label}>
                      <div className="text-[10px] text-slate-400 truncate">
                        {kpi.label}
                      </div>
                      <div className="text-[13px] font-bold text-[#091B46] mt-0.5 tabular-nums">
                        {kpi.value}
                      </div>
                      <svg
                        viewBox="0 0 60 16"
                        className="w-full h-4 mt-1.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 13 C12 12, 18 7, 28 9 C38 11, 46 3, 58 2"
                          fill="none"
                          stroke="#22C55E"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Deep Navy Card: Clear Business Signals */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#091B46] via-[#12346A] to-[#1E4B94] text-white p-7 sm:p-8 flex-1 flex flex-col justify-between min-h-[250px]"
              >
                {/* Pulsing Radar Alert Triangle on Right */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0.08, 0.3] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-36 h-36 rounded-full border border-blue-300/30"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.15, 0.45] }}
                    transition={{ duration: 2.8, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-24 h-24 rounded-full border border-blue-300/40"
                  />
                  <div className="w-14 h-14 rounded-2xl bg-red-600/20 flex items-center justify-center">
                    <AlertTriangle className="w-9 h-9 text-[#B91C1C] fill-[#B91C1C] stroke-white" />
                  </div>
                </div>

                <div className="relative z-10 max-w-[290px]">
                  <h3 className="font-display font-semibold text-[24px] text-white">
                    {spec.bento.signalsTitle}
                  </h3>
                  <p className="text-[14px] text-blue-100/80 mt-2 leading-relaxed">
                    {spec.bento.signalsCopy}
                  </p>
                </div>

                <div className="relative z-10 mt-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {spec.bento.signalBadges.map((badge, i) => (
                      <button
                        key={badge}
                        type="button"
                        onClick={() => setActiveSignalIdx(i)}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
                          activeSignalIdx === i
                            ? 'bg-white text-[#091B46] border-white font-semibold'
                            : 'bg-white/10 border-white/20 text-blue-100 hover:bg-white/20'
                        }`}
                      >
                        {badge}
                      </button>
                    ))}
                  </div>
                  <div className="rounded-xl bg-white/10 border border-white/15 px-3.5 py-2.5 text-[11.5px] text-blue-50 flex items-center justify-between gap-2">
                    <span className="truncate">
                      Active signal:{' '}
                      <strong className="text-white">
                        {spec.bento.signalBadges[activeSignalIdx]}
                      </strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenDemo(spec.name)}
                      className="text-[11px] font-semibold text-[#DCE7FA] hover:text-white underline shrink-0 cursor-pointer"
                    >
                      Inspect
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Large Card: Tilted Interactive Mobile Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 rounded-[24px] bg-[#EBF1FD] p-6 sm:p-8 flex items-center justify-center overflow-hidden"
            >
              <motion.div
                initial={{ rotate: -5 }}
                whileHover={{ rotate: -2, scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[320px] rounded-[36px] bg-[#091B46] p-2.5 shadow-[0_28px_64px_-16px_rgba(9,27,70,0.35)]"
              >
                <div className="rounded-[28px] bg-white p-4 space-y-3.5">
                  {/* Phone Status + Greeting */}
                  <div className="flex items-center justify-between text-[10px] font-semibold text-slate-700">
                    <span>9:41</span>
                    <div className="w-16 h-3.5 rounded-full bg-slate-900" />
                    <span>5G</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="font-display font-semibold text-[16px] text-[#091B46]">
                      Good Morning!
                    </div>
                    <span className="w-7 h-7 rounded-full bg-[#091B46] text-white text-[10px] font-bold flex items-center justify-center">
                      EI
                    </span>
                  </div>

                  {/* Today Stats */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Today</span>
                    <Calendar className="w-3.5 h-3.5" />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="rounded-xl border border-slate-200 p-2.5">
                      <div className="text-[10px] text-slate-500">Sales</div>
                      <div className="text-[12px] font-bold text-[#091B46] mt-1 tabular-nums truncate">
                        {spec.bento.mobileSales}
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-2.5">
                      <div className="text-[10px] text-slate-500">Orders</div>
                      <div className="text-[12px] font-bold text-[#091B46] mt-1 tabular-nums truncate">
                        {spec.bento.mobileOrders}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Tasks Inside Phone */}
                  <div className="rounded-xl border border-slate-200 p-3 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#091B46]">
                      <span>Tasks</span>
                      <span className="tabular-nums">
                        {mobileTasks.filter((t) => t.done).length}/
                        {mobileTasks.length}
                      </span>
                    </div>
                    {mobileTasks.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => toggleMobileTask(t.id)}
                        className="w-full text-left flex items-center gap-2 text-[10.5px] text-slate-700 cursor-pointer"
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded flex items-center justify-center border shrink-0 ${
                            t.done
                              ? 'bg-[#091B46] border-[#091B46] text-white'
                              : 'border-slate-300'
                          }`}
                        >
                          {t.done && <Check className="w-2.5 h-2.5" />}
                        </span>
                        <span
                          className={`truncate ${
                            t.done ? 'line-through text-slate-400' : ''
                          }`}
                        >
                          {t.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Mini Map Card */}
                  <div className="relative rounded-xl bg-[#DCE7FA] h-24 overflow-hidden p-2.5 flex items-end justify-between">
                    <svg
                      viewBox="0 0 200 80"
                      className="absolute inset-0 w-full h-full opacity-55"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 40 Q60 10, 120 45 T200 30"
                        stroke="#94A3B8"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle cx="65" cy="30" r="4" fill="#091B46" />
                      <circle cx="115" cy="45" r="5" fill="#091B46" />
                      <circle cx="155" cy="24" r="4" fill="#091B46" />
                    </svg>
                    <div className="relative z-10 rounded-lg bg-[#091B46] text-white px-2.5 py-1.5">
                      <div className="text-[9px] text-blue-200">
                        {spec.bento.mobileOutletLabel}
                      </div>
                      <div className="text-[14px] font-bold leading-none mt-0.5 tabular-nums">
                        {spec.bento.mobileOutletCount}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Deep Navy Winning Cards (SS5) */}
      <section className="py-20 lg:py-24 bg-[#091B46] text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="text-center max-w-[780px] mx-auto"
          >
            <h2 className="font-display font-semibold text-[32px] sm:text-[42px] leading-[1.15] text-white text-balance">
              {spec.winningTitle}
            </h2>
            <p className="text-[14.5px] leading-[1.65] text-blue-100/80 mt-4">
              {spec.winningSubtitle}
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {spec.winningCards.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] p-6 flex flex-col justify-between min-h-[240px] transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    item.highlight
                      ? 'bg-[#2865B0] text-white'
                      : 'bg-white text-[#091B46]'
                  }`}
                >
                  {idx === 0 ? (
                    <Bell className="w-4 h-4" />
                  ) : idx === 1 ? (
                    <Clock className="w-4 h-4" />
                  ) : (
                    <Tv className="w-4 h-4" />
                  )}
                </div>

                <div className="mt-8">
                  <h3 className="font-display font-semibold text-[20px] leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.6] text-blue-100/80 mt-2.5">
                    {item.copy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
