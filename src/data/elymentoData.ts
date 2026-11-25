export type DashboardTabId =
  | 'overview'
  | 'insights'
  | 'onfield'
  | 'workflow'
  | 'automation'
  | 'task';

export interface DashboardTab {
  id: DashboardTabId;
  label: string;
}

export interface MapZone {
  id: string;
  name: string;
  level: 'high' | 'medium' | 'watch' | 'risk';
  color: string;
  inactiveDealers: number;
  lostDealers: number;
  growthPotential: string;
  topCategory: string;
  d: string;
}

export interface ErpConnector {
  id: string;
  name: string;
  subtitle?: string;
  accent: string;
  syncRate: string;
  modules: string[];
}

export interface EcosystemProduct {
  id: string;
  tabTarget: DashboardTabId;
  title: string;
  description: string;
  iconType: 'insights' | 'onfield' | 'workflow' | 'dms';
  highlights: string[];
  metricLabel: string;
  metricValue: string;
}

export interface RoleItem {
  id: string;
  title: string;
  description: string;
  headerBg: string;
  iconType: 'leaders' | 'sales' | 'operations';
  outcomes: string[];
  recommendedTab: DashboardTabId;
}

export interface FundamentalCardSignal {
  title: string;
  subtitle: string;
  iconType: 'eye' | 'chart' | 'gear' | 'bell';
}

export interface FundamentalPillar {
  id: 'growth' | 'capital' | 'control';
  title: string;
  description: string;
  panelTitle: string;
  cards: FundamentalCardSignal[];
}

export const DASHBOARD_TABS: DashboardTab[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'insights', label: 'Insights' },
  { id: 'onfield', label: 'OnField' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'automation', label: 'Automation' },
  { id: 'task', label: 'Task' },
];

export const INDIA_ZONES: MapZone[] = [
  {
    id: 'north',
    name: 'North Zone',
    level: 'high',
    color: '#8CC63F',
    inactiveDealers: 2,
    lostDealers: 1,
    growthPotential: '+24% YoY',
    topCategory: 'Consumer Hardware',
    d: 'M105,12 L135,8 L156,28 L168,54 L145,76 L112,84 L88,62 L92,32 Z',
  },
  {
    id: 'west',
    name: 'West Zone',
    level: 'medium',
    color: '#D5D836',
    inactiveDealers: 4,
    lostDealers: 1,
    growthPotential: '+19% YoY',
    topCategory: 'FMCG & Retail',
    d: 'M52,88 L88,62 L112,84 L110,124 L76,142 L48,120 Z',
  },
  {
    id: 'central',
    name: 'Central Zone',
    level: 'high',
    color: '#8CC63F',
    inactiveDealers: 3,
    lostDealers: 1,
    growthPotential: '+22% YoY',
    topCategory: 'Building Materials',
    d: 'M112,84 L145,76 L174,94 L162,130 L110,124 Z',
  },
  {
    id: 'east',
    name: 'East & NE Zone',
    level: 'risk',
    color: '#D9381E',
    inactiveDealers: 3,
    lostDealers: 2,
    growthPotential: 'Needs Coverage',
    topCategory: 'Packaged Foods',
    d: 'M174,94 L214,74 L244,88 L228,118 L188,128 L162,130 Z',
  },
  {
    id: 'south',
    name: 'South Zone',
    level: 'watch',
    color: '#E8832A',
    inactiveDealers: 2,
    lostDealers: 0,
    growthPotential: '+14% YoY',
    topCategory: 'Electricals & Grooming',
    d: 'M76,142 L110,124 L162,130 L144,178 L116,214 L92,188 Z',
  },
];

export const ERP_CONNECTORS: ErpConnector[] = [
  {
    id: 'tally',
    name: 'Tally',
    subtitle: 'Power of Simplicity',
    accent: '#2B6CB0',
    syncRate: 'Every 5 mins',
    modules: ['Ledgers', 'Vouchers', 'Stock Items', 'Outstanding Bills'],
  },
  {
    id: 'busy',
    name: 'Busy',
    subtitle: 'Business Accounting',
    accent: '#1E40AF',
    syncRate: 'Every 5 mins',
    modules: ['GST Billing', 'Batch Inventory', 'Party Receivables'],
  },
  {
    id: 'sap',
    name: 'SAP',
    subtitle: 'B1 & S/4HANA',
    accent: '#0284C7',
    syncRate: 'Real-time API',
    modules: ['Sales Orders', 'Warehouse Stock', 'Credit Control'],
  },
  {
    id: 'zoho',
    name: 'Zoho',
    subtitle: 'Books & Inventory',
    accent: '#DC2626',
    syncRate: 'Webhook Sync',
    modules: ['Invoices', 'Purchase Orders', 'Price Lists'],
  },
  {
    id: 'more',
    name: '& 15 more',
    subtitle: 'Marg, NetSuite, Dynamics & Custom SQL',
    accent: '#475569',
    syncRate: 'Scheduled / API',
    modules: ['Marg ERP', 'Microsoft Dynamics', 'Oracle NetSuite', 'Custom ODBC'],
  },
];

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'insights',
    tabTarget: 'insights',
    title: 'Elymento Insights',
    description:
      'Business reporting that turns scattered data into clear, actionable priorities.',
    iconType: 'insights',
    highlights: [
      'Territory & dealer drop-off alerts',
      'Margin leakage & aging stock diagnostics',
      'Automated WhatsApp & email executive briefs',
    ],
    metricLabel: 'Reporting Time Saved',
    metricValue: '14 hrs / week',
  },
  {
    id: 'onfield',
    tabTarget: 'onfield',
    title: 'Elymento OnField',
    description:
      'Sales visit tracking that keeps field activity, coverage and follow-ups visible.',
    iconType: 'onfield',
    highlights: [
      'Geo-verified beat plans & outlet check-ins',
      'Zero-gap secondary order capture',
      'Live rep coverage vs target scorecards',
    ],
    metricLabel: 'Beat Coverage Lift',
    metricValue: '+31% in 60 days',
  },
  {
    id: 'workflow',
    tabTarget: 'workflow',
    title: 'Elymento Workflow',
    description:
      'Workflow automation that moves tasks, approvals and responsibilities forward.',
    iconType: 'workflow',
    highlights: [
      'Credit limit & discount approval routing',
      'Automated overdue payment escalations',
      'Audit-ready ownership & SLA tracking',
    ],
    metricLabel: 'Approval Turnaround',
    metricValue: '4x faster',
  },
  {
    id: 'dms',
    tabTarget: 'automation',
    title: 'Elymento DMS',
    description:
      'Distributor management that connects inventory, orders, payments and channel performance.',
    iconType: 'dms',
    highlights: [
      'Self-serve distributor order & claim portal',
      'Real-time primary vs secondary stock visibility',
      'Automated scheme & rebate reconciliation',
    ],
    metricLabel: 'Order Accuracy',
    metricValue: '99.4% synced',
  },
];

export const ROLE_ITEMS: RoleItem[] = [
  {
    id: 'leaders',
    title: 'Business Leaders',
    description:
      'Know what is happening across the business and where you need to step in.',
    headerBg: '#2865B0',
    iconType: 'leaders',
    outcomes: [
      'Spot inactive territories before quarter-end dips',
      'Monitor working capital locked in overdue receivables',
      'Compare branch growth YoY in a single morning view',
    ],
    recommendedTab: 'overview',
  },
  {
    id: 'sales',
    title: 'Sales and Field Teams',
    description:
      'See what is selling, where opportunities are growing and which follow-ups need attention.',
    headerBg: '#12346A',
    iconType: 'sales',
    outcomes: [
      'Prioritize high-margin SKUs on every dealer beat',
      'Track pending follow-ups and lost-account winbacks',
      'Log verified outlet visits with instant ERP stock check',
    ],
    recommendedTab: 'onfield',
  },
  {
    id: 'operations',
    title: 'Accounts, MIS and Operations Teams',
    description:
      'Prepare reports faster, track daily operations and spend less time working through Excel files.',
    headerBg: '#091B46',
    iconType: 'operations',
    outcomes: [
      'Eliminate manual CSV merges across Tally, Busy & SAP',
      'Automate overdue collection reminders & credit holds',
      'Publish daily MIS packs with zero spreadsheet errors',
    ],
    recommendedTab: 'workflow',
  },
];

export const FUNDAMENTAL_PILLARS: FundamentalPillar[] = [
  {
    id: 'growth',
    title: 'Growth',
    description:
      'Identify high-potential districts, revive dormant dealers, and track SKU adoption across every distributor tier before market share slips.',
    panelTitle: 'Business Growth',
    cards: [
      {
        title: 'Territory Expansion Signals',
        subtitle: 'Pinpoint under-penetrated districts with high demand',
        iconType: 'chart',
      },
      {
        title: 'Dealer Reactivation Radar',
        subtitle: 'Flag 30-day & 60-day silent accounts automatically',
        iconType: 'eye',
      },
      {
        title: 'Smart Cross-Sell Prompts',
        subtitle: 'Recommend fast-moving SKUs per outlet history',
        iconType: 'gear',
      },
      {
        title: 'Beat Conversion Alerts',
        subtitle: 'Know which field routes convert visits to orders',
        iconType: 'bell',
      },
    ],
  },
  {
    id: 'capital',
    title: 'Working Capital',
    description:
      'Release cash trapped in aging receivables and slow-moving depot inventory with automated credit discipline and stock rebalancing alerts.',
    panelTitle: 'Working Capital Health',
    cards: [
      {
        title: 'Receivable Aging Watch',
        subtitle: 'Surface 45+ day overdue invoices before bad debt',
        iconType: 'eye',
      },
      {
        title: 'Dead Stock Rebalancing',
        subtitle: 'Move non-moving inventory to high-velocity depots',
        iconType: 'chart',
      },
      {
        title: 'Automated Credit Guardrails',
        subtitle: 'Pause dispatch when distributor limits breach',
        iconType: 'gear',
      },
      {
        title: 'Collection Priority Queue',
        subtitle: 'Rank daily follow-ups by cash recovery impact',
        iconType: 'bell',
      },
    ],
  },
  {
    id: 'control',
    title: 'Control',
    description:
      'Track field activities, approvals, workflows and distributor performance without constant follow-ups.',
    panelTitle: 'Business Visibility',
    cards: [
      {
        title: 'Real-Time Visibility',
        subtitle: 'See what is happening as it happens',
        iconType: 'eye',
      },
      {
        title: 'Actionable Insights',
        subtitle: 'Turn scattered data into clear priorities',
        iconType: 'chart',
      },
      {
        title: 'Automation that works',
        subtitle: 'Reduce manual work and follow-ups',
        iconType: 'gear',
      },
      {
        title: 'Clear Business Signals',
        subtitle: 'Know what needs attention first',
        iconType: 'bell',
      },
    ],
  },
];
