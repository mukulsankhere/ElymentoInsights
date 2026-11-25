import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Sparkles, Clock } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: (preselectedProduct?: string) => void;
}

interface PricingTier {
  id: 'starter' | 'professional' | 'enterprise';
  name: string;
  price: string;
  cadence: string;
  syncLabel: string;
  subtitle: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹499',
    cadence: '/ month',
    syncLabel: 'Daily Sync',
    subtitle: 'For small distributors.',
    features: [
      '1 accounting company',
      'Daily automatic synchronization',
      'Sales and purchase reports',
      'Customer-wise sales analysis',
      'Supplier-wise purchase analysis',
      'Outstanding reports',
      'Basic business dashboard',
    ],
    ctaLabel: 'Start with Starter',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₹999',
    cadence: '/ month',
    syncLabel: 'Hourly Sync',
    subtitle: 'For growing distributors.',
    popular: true,
    features: [
      'Everything in Starter',
      'Hourly automatic synchronization',
      'Product-wise sales analysis',
      'Product profitability',
      'Customer buying behaviour',
      'Inventory intelligence',
      'Supplier price comparison',
      'Weekly AI business reports',
      'Customer purchase decline alerts',
    ],
    ctaLabel: 'Choose Professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '₹1,999',
    cadence: '/ month',
    syncLabel: 'Near Real-Time Sync',
    subtitle: 'For established distributors.',
    features: [
      'Everything in Professional',
      'Near real-time synchronization',
      'AI business assistant',
      'Ask questions about business data',
      'Sales forecasting',
      'Customer churn intelligence',
      'Advanced profitability analysis',
      'Automated business alerts',
      'Daily AI-generated insights',
    ],
    ctaLabel: 'Choose Enterprise',
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenDemo,
}) => {
  const [selectedTierId, setSelectedTierId] =
    useState<PricingTier['id']>('professional');

  return (
    <section id="pricing" className="scroll-mt-[76px] py-8 lg:py-10 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[740px] mx-auto"
        >
          <span className="inline-block text-[12px] font-semibold tracking-[0.14em] uppercase text-[#2865B0] mb-1.5">
            PRICING PLANS
          </span>
          <h2 className="font-display font-semibold text-[30px] sm:text-[36px] leading-[1.12] tracking-[-0.02em] text-[#091B46] text-balance">
            Transparent Pricing Built to Scale With Your Network
          </h2>
          <p className="text-[14.5px] leading-[1.55] text-slate-600 mt-2.5">
            Start with daily ERP reporting or upgrade to hourly and near
            real-time intelligence as your distribution operations expand.
          </p>
        </motion.div>

        {/* 3 Pricing Cards */}
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {PRICING_TIERS.map((tier, idx) => {
            const isSelected = selectedTierId === tier.id;
            const isPopular = Boolean(tier.popular);

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.42,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedTierId(tier.id)}
                className={`relative rounded-[22px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F2F6FE] border-2 border-[#091B46] ring-2 ring-[#091B46]/15 shadow-[0_24px_56px_-18px_rgba(9,27,70,0.28)]'
                    : isPopular
                      ? 'bg-white border border-[#091B46]/40 shadow-[0_18px_44px_-16px_rgba(9,27,70,0.16)]'
                      : 'bg-white border border-slate-200/90 hover:border-[#091B46]/45 shadow-[0_12px_32px_-16px_rgba(9,27,70,0.08)]'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 right-5 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#091B46] text-white text-[11px] font-semibold tracking-wide shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Header + Sync Tag */}
                  <div className="flex items-center justify-between gap-2.5">
                    <h3 className="font-display font-semibold text-[22px] text-[#091B46]">
                      {tier.name}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        isSelected
                          ? 'bg-[#C2D4F6] text-[#091B46]'
                          : 'bg-[#DCE7FA] text-[#12346A]'
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      <span>{tier.syncLabel}</span>
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="font-display text-[34px] sm:text-[38px] font-bold tracking-tight text-[#091B46] tabular-nums leading-none">
                      {tier.price}
                    </span>
                    <span className="text-[13.5px] font-medium text-slate-500">
                      {tier.cadence}
                    </span>
                  </div>

                  <p className="text-[13.5px] text-slate-600 mt-1.5">
                    {tier.subtitle}
                  </p>

                  <div className="my-4 h-px bg-slate-200/80" />

                  {/* Feature List */}
                  <ul className="space-y-2">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-[13px] text-[#24395E] leading-snug"
                      >
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-[#091B46] text-white'
                              : 'bg-[#DCE7FA] text-[#091B46]'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-5 pt-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTierId(tier.id);
                      onOpenDemo(`${tier.name} Plan (${tier.price} / month)`);
                    }}
                    className={`group w-full inline-flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-full text-[13.5px] font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer ${
                      isSelected
                        ? 'bg-[#091B46] hover:bg-[#12346A] text-white shadow-[0_10px_24px_-6px_rgba(9,27,70,0.45)]'
                        : 'border border-[#091B46] text-[#091B46] hover:bg-[#091B46] hover:text-white'
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isSelected
                          ? 'bg-white text-[#091B46]'
                          : 'bg-[#091B46] text-white group-hover:bg-white group-hover:text-[#091B46]'
                      }`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Pricing Disclaimer */}
        <p className="mt-5 text-center text-[13px] font-medium text-slate-500">
          All prices are per accounting company per month, excluding GST.
        </p>
      </div>
    </section>
  );
};
