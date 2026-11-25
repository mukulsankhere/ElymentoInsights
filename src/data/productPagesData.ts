import { DashboardTabId } from './elymentoData';

export type ProductPageId = 'insights' | 'onfield' | 'workflow' | 'dms';

export interface ProductPageSpec {
  id: ProductPageId;
  name: string;
  shortName: string;
  kicker: string;
  headline: string;
  subheadline: string;
  heroVariant: 'erp-snap' | 'dashboard';
  defaultTab: DashboardTabId;
  problemTitle: string;
  problemSubtitle: string;
  problemCards: {
    title: string;
    copy: string;
    variant: 'sky' | 'navy';
  }[];
  bento: {
    visibilityTitle: string;
    visibilityCopy: string;
    kpis: { label: string; value: string }[];
    signalsTitle: string;
    signalsCopy: string;
    signalBadges: string[];
    mobileSales: string;
    mobileOrders: string;
    mobileOutletLabel: string;
    mobileOutletCount: string;
  };
  winningTitle: string;
  winningSubtitle: string;
  winningCards: {
    title: string;
    copy: string;
    highlight?: boolean;
  }[];
}

export const PRODUCT_PAGE_SPECS: Record<ProductPageId, ProductPageSpec> = {
  insights: {
    id: 'insights',
    name: 'Elymento Insights',
    shortName: 'Insights',
    kicker: 'ACTIONABLE INSIGHTS',
    headline: 'Powerful Insights & Reports that drive Sales Growth',
    subheadline:
      'No more wasting time preparing and analyzing reports on spreadsheets',
    heroVariant: 'erp-snap',
    defaultTab: 'insights',
    problemTitle: 'ERPs store everything. They explain nothing.',
    problemSubtitle:
      'Millions of distribution businesses run on Tally, SAP, Zoho, Busy, and dozens of other ERPs. But when it comes to actually understanding performance — growth levers, team output, inventory health — everyone falls back to spreadsheets.',
    problemCards: [
      {
        title: 'Decision Makers',
        copy: "No dashboards. No KPIs. No real-time view of what's working and what's bleeding money.",
        variant: 'sky',
      },
      {
        title: 'Sales Teams',
        copy: 'Zero mobile access to customer data, order history, or territory insights while in the field.',
        variant: 'navy',
      },
      {
        title: 'MIS & Operations',
        copy: 'Days spent every week exporting CSVs and formatting Excel reports before reviews.',
        variant: 'sky',
      },
    ],
    bento: {
      visibilityTitle: 'Real-Time Visibility',
      visibilityCopy:
        'Track sales, stock, payments and team activity as it happens.',
      kpis: [
        { label: 'Sales Today', value: '₹3,45,000' },
        { label: 'Stock Value', value: '₹12,75,800' },
        { label: 'Outstanding', value: '₹2,18,400' },
      ],
      signalsTitle: 'Clear Business Signals',
      signalsCopy:
        'Spot margin leaks, aging stock, and overdue receivables before they compound.',
      signalBadges: [
        '12 payments overdue',
        '18 slow-moving items',
        '5 follow-ups pending',
      ],
      mobileSales: '₹98,29,39,193',
      mobileOrders: '7,39,48,201',
      mobileOutletLabel: 'New Outlets',
      mobileOutletCount: '26',
    },
    winningTitle: 'Why Our Customers Are Winning with Elymento Insights',
    winningSubtitle:
      'Turn Tally, Busy, SAP, and Zoho ledgers into daily clarity across every territory, depot, and distributor tier.',
    winningCards: [
      {
        title: 'Faster Decisions',
        copy: 'See what needs attention without chasing reports.',
      },
      {
        title: 'Better Control',
        copy: 'Track sales, stock, payments and business gaps in one place.',
      },
      {
        title: 'Less Manual Reporting',
        copy: 'Reduce Excel work and repeated follow-ups.',
        highlight: true,
      },
      {
        title: 'Clear Priorities',
        copy: 'Know what is moving, what is stuck and where action is needed.',
      },
      {
        title: 'Stronger Accountability',
        copy: 'Give teams the same numbers, clearer reviews and better ownership.',
      },
    ],
  },

  onfield: {
    id: 'onfield',
    name: 'Elymento OnField',
    shortName: 'OnField',
    kicker: 'FIELD SALES MANAGEMENT',
    headline: 'Complete visibility and control over every field sales activity',
    subheadline:
      'Plan journeys, track teams, validate outlet visits and capture orders in real time.',
    heroVariant: 'dashboard',
    defaultTab: 'onfield',
    problemTitle: 'Field teams stay busy. Coverage stays invisible.',
    problemSubtitle:
      'When beat plans live in WhatsApp groups and spreadsheets, managers never know which territories are covered, which outlets were skipped, or where follow-ups stalled.',
    problemCards: [
      {
        title: 'Sales Leaders',
        copy: 'No real-time clarity on daily beat adherence, productive calls, or territory coverage gaps.',
        variant: 'sky',
      },
      {
        title: 'Field Executives',
        copy: 'Reps arrive at outlets without overdue balances, SKU history, or target gaps on mobile.',
        variant: 'navy',
      },
      {
        title: 'Regional Managers',
        copy: 'Hours lost calling reps for end-of-day visit summaries instead of coaching high-value beats.',
        variant: 'sky',
      },
    ],
    bento: {
      visibilityTitle: 'Live Beat Coverage',
      visibilityCopy:
        'Monitor check-ins, route compliance, and secondary orders as reps move.',
      kpis: [
        { label: 'Visits Today', value: '142 / 156' },
        { label: 'Order Value', value: '₹8,92,400' },
        { label: 'Collections', value: '₹4,15,000' },
      ],
      signalsTitle: 'Field Exception Alerts',
      signalsCopy:
        'Surface missed high-value outlets and unvisited dormant dealers automatically.',
      signalBadges: [
        '6 beats behind schedule',
        '14 dormant outlets nearby',
        '9 orders pending dispatch',
      ],
      mobileSales: '₹18,45,20,110',
      mobileOrders: '1,42,890',
      mobileOutletLabel: 'Visited Today',
      mobileOutletCount: '142',
    },
    winningTitle: 'Why Our Customers Are Winning with Elymento OnField',
    winningSubtitle:
      'Connect every sales rep’s mobile check-in directly with ERP stock, credit limits, and daily revenue targets.',
    winningCards: [
      {
        title: 'Verified Coverage',
        copy: 'Confirm geo-tagged outlet visits and productive call ratios daily.',
      },
      {
        title: 'Instant Order Sync',
        copy: 'Push secondary and primary orders straight into your billing workflow.',
      },
      {
        title: 'Smart Beat Routing',
        copy: 'Prioritize dormant and high-potential outlets on every route.',
        highlight: true,
      },
      {
        title: 'Live Stock Context',
        copy: 'Reps see real depot availability before promising delivery.',
      },
      {
        title: 'Higher Conversion',
        copy: 'Turn routine check-ins into measurable SKU expansion.',
      },
    ],
  },

  workflow: {
    id: 'workflow',
    name: 'Elymento Workflow',
    shortName: 'Workflow',
    kicker: 'PROCESS AUTOMATION',
    headline: 'Automated workflows that move approvals and tasks forward',
    subheadline:
      'Eliminate bottlenecks across credit limits, scheme claims, dispatches, and daily follow-ups.',
    heroVariant: 'dashboard',
    defaultTab: 'workflow',
    problemTitle: 'Approvals stall in chats. Operations slow down.',
    problemSubtitle:
      'Critical credit extensions, scheme overrides, and overdue escalations get buried in emails and calls—delaying dispatches and leaving ownership unclear.',
    problemCards: [
      {
        title: 'Finance & Credit',
        copy: 'Manual back-and-forth to verify ledger aging before approving distributor credit limits.',
        variant: 'sky',
      },
      {
        title: 'Sales Operations',
        copy: 'Discount and scheme approvals wait days in inbox threads while orders sit on hold.',
        variant: 'navy',
      },
      {
        title: 'Department Heads',
        copy: 'Zero audit trail of who approved what, when follow-ups happened, or where SLAs breached.',
        variant: 'sky',
      },
    ],
    bento: {
      visibilityTitle: 'Approval Velocity',
      visibilityCopy:
        'Track pending approvals, SLA timers, and automated task completions live.',
      kpis: [
        { label: 'Cleared Today', value: '38 Requests' },
        { label: 'Avg Turnaround', value: '14 Mins' },
        { label: 'SLA Compliance', value: '96.4%' },
      ],
      signalsTitle: 'Escalation Guardrails',
      signalsCopy:
        'Route overdue reminders, credit holds, and exception alerts with zero manual chasing.',
      signalBadges: [
        '3 credit limits pending',
        '7 auto-reminders sent',
        '2 SLA escalations',
      ],
      mobileSales: '₹42,10,80,450',
      mobileOrders: '3,18,400',
      mobileOutletLabel: 'Auto Cleared',
      mobileOutletCount: '38',
    },
    winningTitle: 'Why Our Customers Are Winning with Elymento Workflow',
    winningSubtitle:
      'Replace ad-hoc follow-ups with rule-based approvals and clear accountability tied to your ERP.',
    winningCards: [
      {
        title: '4x Faster Approvals',
        copy: 'Approve credit and scheme requests in one tap with full ledger context.',
      },
      {
        title: 'Automated Escalations',
        copy: 'Trigger overdue reminders and manager alerts without manual tracking.',
      },
      {
        title: 'Zero Lost Tasks',
        copy: 'Every ERP exception automatically becomes an assigned owner task.',
        highlight: true,
      },
      {
        title: 'Audit-Ready Trail',
        copy: 'Keep timestamped records of every discount, limit, and claim sign-off.',
      },
      {
        title: 'Consistent Discipline',
        copy: 'Enforce credit and dispatch rules cleanly across every branch.',
      },
    ],
  },

  dms: {
    id: 'dms',
    name: 'Elymento DMS',
    shortName: 'DMS',
    kicker: 'DISTRIBUTOR MANAGEMENT',
    headline: 'Connected distributor operations from order to collection',
    subheadline:
      'Unite secondary sales, channel inventory, schemes, and dealer payments in one portal.',
    heroVariant: 'dashboard',
    defaultTab: 'automation',
    problemTitle: 'Primary billing is visible. Channel stock is a blind spot.',
    problemSubtitle:
      'Brands see what leaves the factory, but lose sight of distributor closing stock, secondary pull-through, and scheme claims across hundreds of partners.',
    problemCards: [
      {
        title: 'Channel Heads',
        copy: 'Blind to distributor inventory levels, causing overstocking in one region and stockouts in another.',
        variant: 'sky',
      },
      {
        title: 'Distributors',
        copy: 'Endless phone calls to check invoice status, ledger balance, and scheme eligibility.',
        variant: 'navy',
      },
      {
        title: 'Claims & Accounts',
        copy: 'Manual reconciliation of rebate claims, damaged returns, and credit notes every month-end.',
        variant: 'sky',
      },
    ],
    bento: {
      visibilityTitle: 'Channel Health Monitor',
      visibilityCopy:
        'See primary billing, secondary movement, and dealer credit utilization together.',
      kpis: [
        { label: 'Active Dealers', value: '412 / 440' },
        { label: 'Channel Stock', value: '₹4.8 Cr.' },
        { label: 'Order Accuracy', value: '99.4%' },
      ],
      signalsTitle: 'Distributor Risk Signals',
      signalsCopy:
        'Detect falling reorder frequency, stockouts, and credit limit saturation early.',
      signalBadges: [
        '14 inactive dealers',
        '11 low-stock depots',
        '8 claims reconciled',
      ],
      mobileSales: '₹64,90,12,800',
      mobileOrders: '5,12,640',
      mobileOutletLabel: 'Active Dealers',
      mobileOutletCount: '412',
    },
    winningTitle: 'Why Our Customers Are Winning with Elymento DMS',
    winningSubtitle:
      'Give every distributor a seamless ordering and ledger experience while keeping full channel visibility.',
    winningCards: [
      {
        title: 'Self-Serve Ordering',
        copy: 'Distributors place orders 24/7 with live pricing and stock status.',
      },
      {
        title: 'Secondary Visibility',
        copy: 'Track real sell-through beyond primary factory billing.',
      },
      {
        title: 'Clean Claims & Schemes',
        copy: 'Automate slab payouts and credit note reconciliation accurately.',
        highlight: true,
      },
      {
        title: 'Healthier Inventory',
        copy: 'Prevent dead-stock buildup and regional stockouts proactively.',
      },
      {
        title: 'Stronger Loyalty',
        copy: 'Transparent ledgers and faster dispatches build partner trust.',
      },
    ],
  },
};
