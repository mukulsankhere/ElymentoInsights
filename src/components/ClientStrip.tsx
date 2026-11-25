import React from 'react';
import { motion } from 'motion/react';

const BrandLogosSet: React.FC = () => (
  <div className="flex items-center shrink-0">
    {/* Brand 1: Velqor Supply */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#003459] to-[#007EA7] flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-white" />
        </span>
        <div className="leading-none">
          <span className="text-[14.5px] font-bold tracking-[0.14em] text-slate-800">
            VELQOR
          </span>
          <span className="block text-[8.5px] font-semibold tracking-[0.22em] text-slate-400 text-right">
            SUPPLY
          </span>
        </div>
      </div>
    </div>

    {/* Brand 2: Krovia */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <div className="flex items-center gap-1.5">
        <span className="px-2 py-0.5 bg-[#D94626] text-white font-black italic text-[12.5px] tracking-tight rounded-sm">
          KV
        </span>
        <span className="text-[15.5px] font-black tracking-tight text-slate-900 border-b-2 border-[#D94626] leading-tight">
          KROVIA
        </span>
      </div>
    </div>

    {/* Brand 3: Zynthara Harvest */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <div className="px-4 py-1.5 rounded-full bg-gradient-to-b from-[#B91C1C] to-[#991B1B] border-2 border-[#FBBF24] shadow-sm">
        <span className="block text-[10.5px] font-extrabold tracking-[0.12em] text-[#FEF3C7] leading-none">
          ZYNTHARA
        </span>
        <span className="block text-[7px] font-semibold tracking-[0.14em] text-[#FDE68A] text-center mt-0.5">
          ROYAL HARVEST
        </span>
      </div>
    </div>

    {/* Brand 4: Orvexa */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <span className="font-serif italic text-[21px] font-bold tracking-tight text-slate-900">
        Orvexa
        <span className="inline-block w-2 h-0.5 bg-[#007EA7] ml-0.5 align-middle" />
      </span>
    </div>

    {/* Brand 5: Trenlo Co. */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <div className="px-3.5 py-1 rounded-lg bg-[#BE123C] text-white shadow-sm border-b-[3px] border-[#15803D]">
        <span className="block text-[12.5px] font-black italic tracking-wide leading-none">
          T.M.
        </span>
        <span className="block text-[8px] font-semibold tracking-wider text-rose-100 leading-tight">
          Trenlo Co.
        </span>
      </div>
    </div>

    {/* Brand 6: Marvion Systems */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-md bg-[#003459] text-white font-extrabold text-[11px] flex items-center justify-center">
          M
        </span>
        <div className="leading-none">
          <span className="text-[14px] font-bold tracking-[0.13em] text-[#041B2D]">
            MARVION
          </span>
          <span className="block text-[8px] font-semibold tracking-[0.2em] text-[#007EA7] mt-0.5">
            SYSTEMS
          </span>
        </div>
      </div>
    </div>

    {/* Brand 7: Solvera Dairy */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <div className="px-3.5 py-1.5 rounded-full bg-[#FFFBEB] border border-[#F59E0B] text-center">
        <span className="block text-[11px] font-extrabold tracking-[0.14em] text-[#92400E] leading-none">
          SOLVERA
        </span>
        <span className="block text-[7.5px] font-semibold tracking-[0.16em] text-[#D97706] mt-0.5">
          PURE DAIRY
        </span>
      </div>
    </div>

    {/* Brand 8: Drayton Pipes */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <div className="flex items-center gap-1.5">
        <span className="px-2 py-0.5 bg-[#007EA7] text-white font-bold text-[12px] tracking-tight rounded">
          DR
        </span>
        <span className="text-[15px] font-extrabold tracking-tight text-[#041B2D]">
          DRAYTON
        </span>
      </div>
    </div>

    {/* Brand 9: Lyrux Care */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full border-2 border-[#007EA7] flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#007EA7]" />
        </span>
        <div className="leading-none">
          <span className="text-[14.5px] font-bold tracking-[0.16em] text-slate-800">
            LYRUX
          </span>
          <span className="block text-[8px] font-semibold tracking-[0.2em] text-slate-400 text-right mt-0.5">
            LIFECARE
          </span>
        </div>
      </div>
    </div>

    {/* Brand 10: Quorva Pack */}
    <div className="flex items-center justify-center px-9 border-r border-slate-200/90">
      <span className="font-serif italic text-[20px] font-bold tracking-tight text-[#003459]">
        Quorva
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#007EA7] ml-1 align-middle" />
      </span>
    </div>
  </div>
);

export const ClientStrip: React.FC = () => {
  return (
    <section
      aria-label="Trusted distribution brands"
      className="relative bg-white border-b border-slate-200/80 overflow-hidden select-none pointer-events-none"
    >
      {/* Subtle top ocean-sky transition wash */}
      <div
        aria-hidden="true"
        className="h-12 w-full bg-gradient-to-r from-[#E6F7FA]/80 via-[#F3FAFD] to-[#E6F5FA]/80"
      />

      <div className="relative max-w-[1280px] mx-auto py-8 overflow-hidden">
        {/* Soft edge fade masks */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"
        />

        {/* Continuous left-to-right marquee track */}
        <motion.div
          className="flex items-center w-max"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <BrandLogosSet />
          <BrandLogosSet />
        </motion.div>
      </div>
    </section>
  );
};
