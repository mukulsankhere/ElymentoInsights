import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  BookOpen,
} from 'lucide-react';

export type FooterDocKey =
  | 'About Us'
  | "We're Hiring"
  | 'Our Story'
  | 'Security Statement'
  | 'ToS'
  | 'Privacy Policy'
  | 'Blogs'
  | 'Newsletter';

interface InfoPageProps {
  activeDoc: FooterDocKey;
  onGoContact: () => void;
}

const BLOG_ARTICLES = [
  {
    id: 'dormant-dealers',
    category: 'Channel Growth',
    readTime: '4 min read',
    title: 'How to Spot Dormant Dealers 45 Days Before They Churn',
    summary:
      'Most distribution teams notice a lost dealer only at quarterly review. Tracking order-interval drift inside your ERP catches silent accounts weeks earlier.',
    body: 'By comparing each distributor’s rolling 30-day billing cadence against their 6-month baseline, Elymento Insights flags accounts the moment their order cycle slips by more than 12 days—triggering an automated field visit task before competitors step in.',
  },
  {
    id: 'working-capital',
    category: 'Working Capital',
    readTime: '5 min read',
    title: 'Cutting Working Capital Lock-Up Across Multi-Depot Networks',
    summary:
      'Non-moving stock in one warehouse often pairs with stockouts in another. Automated inter-depot transfer signals unlock cash without discounting.',
    body: 'When SKU aging crosses 45 days in a primary depot while neighboring territories show active demand, automated rebalancing recommendations help operations teams shift inventory instead of writing credit notes.',
  },
  {
    id: 'tally-excel',
    category: 'MIS & Operations',
    readTime: '3 min read',
    title: 'Replacing Manual Tally-to-Excel MIS Reports in 48 Hours',
    summary:
      'Finance and MIS teams spend 10–15 hours every week merging branch exports. Automated ERP sync delivers one verified view every morning.',
    body: 'Connecting Tally, Busy, SAP, or Zoho directly to Elymento removes copy-paste errors, keeps outstanding aging accurate to the hour, and frees analysts to focus on margin exceptions.',
  },
];

const OPEN_ROLES = [
  {
    id: 'role-1',
    title: 'Senior Full-Stack Engineer (TypeScript / Node)',
    location: 'Ahmedabad · Full-time',
    team: 'Core Platform',
  },
  {
    id: 'role-2',
    title: 'ERP & Data Pipeline Specialist',
    location: 'Bengaluru / Hybrid · Full-time',
    team: 'Integrations',
  },
  {
    id: 'role-3',
    title: 'Product Designer — Analytics & Workflows',
    location: 'Ahmedabad · Full-time',
    team: 'Design',
  },
  {
    id: 'role-4',
    title: 'Enterprise Implementation Consultant',
    location: 'Mumbai / Delhi NCR · Full-time',
    team: 'Customer Success',
  },
];

export const InfoPage: React.FC<InfoPageProps> = ({
  activeDoc,
  onGoContact,
}) => {
  const [expandedBlogId, setExpandedBlogId] = useState<string | null>(
    'dormant-dealers'
  );
  const [appliedRoleIds, setAppliedRoleIds] = useState<string[]>([]);
  const [selectedIssueId, setSelectedIssueId] = useState<string>('Issue #14');

  return (
    <div className="bg-white min-h-[70vh]">

      {/* Main Content Area */}
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 py-10 lg:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDoc}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeDoc === 'About Us' && (
              <div className="space-y-10">
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#2865B0]">
                    ABOUT ELYMENTO INSIGHTS
                  </span>
                  <h1 className="font-display font-semibold text-[34px] sm:text-[46px] leading-[1.15] text-[#091B46] mt-2">
                    Building the Control Layer for Modern Distribution
                  </h1>
                  <p className="text-[16px] leading-[1.7] text-slate-600 mt-4 max-w-[740px]">
                    Elymento Insights connects ERP ledgers, field sales
                    activity, internal approvals, and distributor networks into
                    one operational workspace—helping leaders act on clear
                    signals instead of chasing spreadsheets.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    {
                      value: '25+ Industries',
                      label:
                        'Serving FMCG, electricals, hardware, pharma & building materials',
                    },
                    {
                      value: '21+ ERPs',
                      label:
                        'Native connectors for Tally, Busy, SAP, Zoho, Marg & NetSuite',
                    },
                    {
                      value: '99.4% Sync',
                      label:
                        'Automated ledger, inventory & receivables reconciliation',
                    },
                  ].map((item) => (
                    <div
                      key={item.value}
                      className="rounded-2xl border border-slate-200/85 p-6 bg-[#F2F6FE]"
                    >
                      <div className="font-display font-semibold text-[26px] text-[#091B46] tabular-nums">
                        {item.value}
                      </div>
                      <p className="text-[13.5px] text-slate-600 mt-2 leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-[#DCE7FA] border border-[#AEC7F3] p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div>
                    <h2 className="font-display font-semibold text-[22px] text-[#091B46]">
                      Want to see how Elymento fits your network?
                    </h2>
                    <p className="text-[14px] text-slate-600 mt-1">
                      Talk directly with our implementation specialists.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onGoContact}
                    className="inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-[#091B46] hover:bg-[#12346A] text-white text-[13.5px] font-semibold shrink-0 transition-colors cursor-pointer"
                  >
                    <span>Contact Us</span>
                    <span className="w-7 h-7 rounded-full bg-white text-[#091B46] flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            )}

            {activeDoc === "We're Hiring" && (
              <div className="space-y-8">
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#2865B0]">
                    CAREERS AT ELYMENTO
                  </span>
                  <h1 className="font-display font-semibold text-[34px] sm:text-[46px] leading-[1.15] text-[#091B46] mt-2">
                    Join the Team Engineering Distribution Clarity
                  </h1>
                  <p className="text-[16px] leading-[1.7] text-slate-600 mt-4 max-w-[720px]">
                    We are a focused product and engineering team solving real
                    operational bottlenecks for high-volume distribution
                    enterprises.
                  </p>
                </div>

                <div className="divide-y divide-slate-200 border-y border-slate-200">
                  {OPEN_ROLES.map((role) => {
                    const isApplied = appliedRoleIds.includes(role.id);
                    return (
                      <div
                        key={role.id}
                        className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#DCE7FA] text-[#091B46] flex items-center justify-center shrink-0 mt-0.5">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <div>
                            <h2 className="font-display font-semibold text-[20px] text-[#091B46]">
                              {role.title}
                            </h2>
                            <div className="text-[13.5px] text-slate-500 mt-0.5">
                              {role.team} · {role.location}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setAppliedRoleIds((prev) =>
                              isApplied
                                ? prev.filter((id) => id !== role.id)
                                : [...prev, role.id]
                            )
                          }
                          className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-colors shrink-0 cursor-pointer ${
                            isApplied
                              ? 'bg-[#E2F6E7] text-[#15803D]'
                              : 'bg-[#091B46] hover:bg-[#12346A] text-white'
                          }`}
                        >
                          {isApplied ? 'Interest Noted ✓' : 'Apply Now'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeDoc === 'Our Story' && (
              <div className="space-y-9">
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#2865B0]">
                    OUR STORY
                  </span>
                  <h1 className="font-display font-semibold text-[34px] sm:text-[46px] leading-[1.15] text-[#091B46] mt-2">
                    From Fragmented Spreadsheets to Real-Time Business Control
                  </h1>
                  <p className="text-[16px] leading-[1.7] text-slate-600 mt-4 max-w-[740px]">
                    Elymento Insights began inside busy distributor warehouses
                    where business owners had accounting data in Tally or SAP,
                    field updates in WhatsApp chats, and targets buried in
                    spreadsheets.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      year: 'Chapter 01',
                      title: 'The Visibility Gap',
                      copy: 'Saw growing distribution brands lose margin to silent dealer churn and unmonitored overdue credit.',
                    },
                    {
                      year: 'Chapter 02',
                      title: 'Zero-Disruption Connectors',
                      copy: 'Built plug-and-play sync engines for 21+ ERPs so finance teams never had to replace their accounting software.',
                    },
                    {
                      year: 'Chapter 03',
                      title: 'Connected Execution',
                      copy: 'Unified Insights, OnField, Workflow, and DMS so every signal turns into an assigned action.',
                    },
                  ].map((step) => (
                    <div
                      key={step.year}
                      className="rounded-2xl border border-slate-200/85 p-6 bg-white"
                    >
                      <div className="text-[12px] font-semibold uppercase tracking-wider text-[#2865B0]">
                        {step.year}
                      </div>
                      <h2 className="font-display font-semibold text-[21px] text-[#091B46] mt-2">
                        {step.title}
                      </h2>
                      <p className="text-[14px] text-slate-600 mt-2.5 leading-relaxed">
                        {step.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeDoc === 'Security Statement' && (
              <div className="space-y-9">
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#2865B0]">
                    SECURITY & TRUST
                  </span>
                  <h1 className="font-display font-semibold text-[34px] sm:text-[46px] leading-[1.15] text-[#091B46] mt-2">
                    Enterprise-Grade Security for Your Financial & Channel Data
                  </h1>
                  <p className="text-[16px] leading-[1.7] text-slate-600 mt-4 max-w-[740px]">
                    Distribution intelligence relies on sensitive ledger,
                    pricing, and dealer receivable records. Every layer of
                    Elymento Insights is engineered for strict confidentiality
                    and isolation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    {
                      title: 'Encrypted Data Transit & Storage',
                      copy: 'All ERP sync tunnels use TLS 1.3 encryption in transit and AES-256 encryption at rest.',
                    },
                    {
                      title: 'Read-Only Connector Modes',
                      copy: 'Accounting ledgers are ingested safely without altering voucher integrity inside Tally, Busy, or SAP.',
                    },
                    {
                      title: 'Role-Based Access Governance',
                      copy: 'Restrict territory, margin, and branch visibility strictly by user role—from RSMs to MIS analysts.',
                    },
                    {
                      title: 'Audit Logs & Tenant Isolation',
                      copy: 'Every approval, credit override, and export is logged with isolated tenant storage.',
                    },
                  ].map((sec) => (
                    <div
                      key={sec.title}
                      className="rounded-2xl border border-slate-200/85 p-6 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#DCE7FA] text-[#091B46] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-display font-semibold text-[19px] text-[#091B46]">
                          {sec.title}
                        </h2>
                        <p className="text-[14px] text-slate-600 mt-1.5 leading-relaxed">
                          {sec.copy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeDoc === 'ToS' && (
              <div className="space-y-8 max-w-[780px]">
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#2865B0]">
                    LEGAL · EFFECTIVE 2026
                  </span>
                  <h1 className="font-display font-semibold text-[34px] sm:text-[44px] leading-[1.15] text-[#091B46] mt-2">
                    Terms of Service
                  </h1>
                </div>

                <div className="space-y-6 text-[15px] leading-[1.7] text-slate-600">
                  <div>
                    <h2 className="font-display font-semibold text-[21px] text-[#091B46] mb-1.5">
                      01. Platform Access & Subscription
                    </h2>
                    <p>
                      Elymento Insights grants subscribing organizations a
                      non-exclusive, organization-wide license to access
                      Insights, OnField, Workflow, and DMS modules according to
                      their active plan tier.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display font-semibold text-[21px] text-[#091B46] mb-1.5">
                      02. Customer Data Ownership
                    </h2>
                    <p>
                      You retain 100% ownership of all ERP, dealer, inventory,
                      and transaction records synced to Elymento Insights. You
                      may export or request complete removal of your records at
                      any time.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display font-semibold text-[21px] text-[#091B46] mb-1.5">
                      03. Service Reliability & Support
                    </h2>
                    <p>
                      Scheduled ERP connector health checks, automated retries,
                      and dedicated support via +918962750260 are included
                      across all enterprise deployments.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeDoc === 'Privacy Policy' && (
              <div className="space-y-8 max-w-[780px]">
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#2865B0]">
                    PRIVACY · UPDATED 2026
                  </span>
                  <h1 className="font-display font-semibold text-[34px] sm:text-[44px] leading-[1.15] text-[#091B46] mt-2">
                    Privacy Policy
                  </h1>
                </div>

                <div className="space-y-6 text-[15px] leading-[1.7] text-slate-600">
                  <div>
                    <h2 className="font-display font-semibold text-[21px] text-[#091B46] mb-1.5">
                      01. Information We Process
                    </h2>
                    <p>
                      We collect only the contact details you submit (name,
                      work email, phone number) and the business operational
                      data authorized through your ERP and field application
                      integrations.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display font-semibold text-[21px] text-[#091B46] mb-1.5">
                      02. Zero Third-Party Data Sale
                    </h2>
                    <p>
                      Elymento Insights never sells, rents, or shares your
                      dealer lists, pricing structures, or revenue telemetry
                      with third-party marketers or external brokers.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display font-semibold text-[21px] text-[#091B46] mb-1.5">
                      03. Access & Deletion Requests
                    </h2>
                    <p>
                      Authorized account administrators can request data
                      exports, correction, or deletion by emailing{' '}
                      <a
                        href="mailto:info@elymento.ai"
                        className="text-[#091B46] font-medium underline"
                      >
                        info@elymento.ai
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeDoc === 'Blogs' && (
              <div className="space-y-8">
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#2865B0]">
                    DISTRIBUTION PLAYBOOKS
                  </span>
                  <h1 className="font-display font-semibold text-[34px] sm:text-[46px] leading-[1.15] text-[#091B46] mt-2">
                    Insights & Field Notes
                  </h1>
                </div>

                <div className="space-y-5">
                  {BLOG_ARTICLES.map((post) => {
                    const isOpen = expandedBlogId === post.id;
                    return (
                      <div
                        key={post.id}
                        className="rounded-2xl border border-slate-200/85 p-6 bg-white"
                      >
                        <div className="text-[12px] text-slate-500">
                          {post.category} · {post.readTime}
                        </div>
                        <h2 className="font-display font-semibold text-[23px] text-[#091B46] mt-1.5">
                          {post.title}
                        </h2>
                        <p className="text-[14.5px] text-slate-600 mt-2 leading-relaxed">
                          {post.summary}
                        </p>

                        {isOpen && (
                          <p className="text-[14.5px] text-[#091B46] mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                            {post.body}
                          </p>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            setExpandedBlogId(isOpen ? null : post.id)
                          }
                          className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#091B46] hover:underline cursor-pointer"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>
                            {isOpen ? 'Show less' : 'Read full article'}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeDoc === 'Newsletter' && (
              <div className="space-y-9">
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#2865B0]">
                    MONTHLY DISPATCH
                  </span>
                  <h1 className="font-display font-semibold text-[34px] sm:text-[46px] leading-[1.15] text-[#091B46] mt-2">
                    The Elymento Distribution Brief
                  </h1>
                  <p className="text-[16px] leading-[1.7] text-slate-600 mt-4 max-w-[700px]">
                    One concise briefing each month covering dealer retention
                    benchmarks, credit automation workflows, and ERP reporting
                    templates.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      issue: 'Issue #14',
                      title: 'Beat Adherence Benchmarks Across 25 Industries',
                      excerpt:
                        'Teams maintaining >88% daily beat adherence report 2.1x faster recovery on overdue 30-day accounts.',
                    },
                    {
                      issue: 'Issue #13',
                      title: 'Enforcing Credit Guardrails Without Slowing Orders',
                      excerpt:
                        'Rule-based ERP thresholds clear 92% of repeat distributor orders in under 15 minutes.',
                    },
                    {
                      issue: 'Issue #12',
                      title: 'The 45-Day Dead Stock Rebalancing Checklist',
                      excerpt:
                        'Spot aging SKUs early and trigger inter-depot stock transfers before seasonal discounting.',
                    },
                  ].map((item) => {
                    const isSelected = selectedIssueId === item.issue;
                    return (
                      <button
                        key={item.issue}
                        type="button"
                        onClick={() => setSelectedIssueId(item.issue)}
                        className={`text-left rounded-2xl border p-5 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#091B46] bg-[#DCE7FA] shadow-sm'
                            : 'border-slate-200/85 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="text-[12px] font-semibold text-[#2865B0]">
                          {item.issue}
                        </div>
                        <h2 className="font-display font-semibold text-[18px] text-[#091B46] mt-1.5 leading-snug">
                          {item.title}
                        </h2>
                        {isSelected && (
                          <p className="text-[13px] text-slate-600 mt-2.5 leading-relaxed">
                            {item.excerpt}
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
