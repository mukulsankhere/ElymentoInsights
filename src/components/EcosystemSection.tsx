import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  BarChart3,
  MapPin,
  Workflow,
  Store,
} from 'lucide-react';
import {
  ECOSYSTEM_PRODUCTS,
  EcosystemProduct,
} from '../data/elymentoData';
import { ProductPageId } from '../data/productPagesData';

interface EcosystemSectionProps {
  onOpenProductPage: (productId: ProductPageId) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onOpenProductPage,
}) => {
  const [activeId, setActiveId] = useState<string>('onfield');

  const renderIcon = (type: EcosystemProduct['iconType'], isActive: boolean) => {
    const iconClass = `w-5 h-5 ${
      isActive ? 'text-[#091B46]' : 'text-[#12346A]'
    }`;
    const anim = isActive
      ? type === 'onfield'
        ? { y: [0, -3, 0] }
        : type === 'insights'
        ? { scale: [1, 1.12, 1] }
        : type === 'workflow'
        ? { rotate: [0, 8, -8, 0] }
        : { scale: [1, 1.08, 1] }
      : { y: 0, scale: 1, rotate: 0 };

    return (
      <motion.div
        animate={anim}
        transition={{
          duration: 1.8,
          repeat: isActive ? Infinity : 0,
          repeatDelay: 1.2,
          ease: 'easeInOut',
        }}
      >
        {type === 'insights' && <BarChart3 className={iconClass} />}
        {type === 'onfield' && <MapPin className={iconClass} />}
        {type === 'workflow' && <Workflow className={iconClass} />}
        {type === 'dms' && <Store className={iconClass} />}
      </motion.div>
    );
  };

  return (
    <section id="ecosystem" className="scroll-mt-[76px] py-12 lg:py-14 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[700px] mx-auto"
        >
          <span className="inline-block text-[13px] font-semibold tracking-[0.14em] uppercase text-[#2865B0] mb-2.5">
            ELYMENTO ECOSYSTEM
          </span>
          <h2 className="font-display font-semibold text-[34px] sm:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#091B46] text-balance">
            Complete Business Visibility.
          </h2>
          <p className="text-[15.5px] leading-[1.65] text-[#475569] mt-4">
            Bring reporting, field execution, workflows and distributor
            operations into one connected ecosystem, so your teams can see what
            matters, act faster and stay in control.
          </p>
        </motion.div>

        {/* 4 Ecosystem Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {ECOSYSTEM_PRODUCTS.map((product, idx) => {
            const isActive = activeId === product.id;
            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  opacity: { duration: 0.4, delay: idx * 0.06 },
                  y: { duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] },
                  layout: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setActiveId(product.id)}
                onClick={() => {
                  setActiveId(product.id);
                  onOpenProductPage(product.id as ProductPageId);
                }}
                className={`group rounded-[22px] border p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#F2F6FE] border-[#091B46]/45 ring-1 ring-[#091B46]/20 shadow-[0_20px_48px_-16px_rgba(9,27,70,0.22)] min-h-[348px]'
                    : 'bg-white border-slate-200/80 hover:border-[#091B46]/35 min-h-[296px]'
                }`}
              >
                <div>
                  {/* Icon Circle */}
                  <motion.div
                    animate={{ scale: isActive ? 1.06 : 1 }}
                    transition={{ duration: 0.25 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive ? 'bg-[#B9CEF4]' : 'bg-[#DCE7FA]'
                    }`}
                  >
                    {renderIcon(product.iconType, isActive)}
                  </motion.div>

                  {/* Card Title */}
                  <h3 className="font-display font-semibold text-[23px] leading-snug text-[#091B46] mt-7">
                    {product.title}
                  </h3>

                  {/* Card Copy */}
                  <p className="text-[14.5px] leading-[1.6] text-[#475569] mt-3">
                    {product.description}
                  </p>
                </div>

                {/* Expandable Explore More CTA */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, paddingTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', paddingTop: 28 }}
                      exit={{ opacity: 0, height: 0, paddingTop: 0 }}
                      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenProductPage(product.id as ProductPageId);
                        }}
                        className="inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full border border-[#091B46] text-[#091B46] hover:bg-[#091B46] hover:text-white text-[14px] font-medium transition-colors duration-200 cursor-pointer group/btn"
                      >
                        <span>Explore more</span>
                        <span className="w-7 h-7 rounded-full bg-[#091B46] text-white group-hover/btn:bg-white group-hover/btn:text-[#091B46] flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                        </span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
