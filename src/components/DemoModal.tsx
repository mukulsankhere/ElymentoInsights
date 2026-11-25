import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  initialFocus?: string;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  initialFocus,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [erp, setErp] = useState('Tally');
  const [teamSize, setTeamSize] = useState('15–50 Distributors');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError('');
    }
  }, [isOpen, initialFocus]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !company.trim()) {
      setError('Please enter your name and company name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid work email address.');
      return;
    }
    if (phone.trim().length < 7) {
      setError('Please enter a valid phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#091B46]/60 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[520px] bg-white rounded-3xl border border-slate-200/80 shadow-[0_28px_64px_-16px_rgba(9,27,70,0.28)] p-6 sm:p-8 z-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#091B46] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <>
                <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#2865B0] mb-1.5">
                  SCHEDULE A WALKTHROUGH
                </div>
                <h3
                  id="demo-modal-title"
                  className="font-display font-semibold text-[28px] leading-tight text-[#091B46]"
                >
                  See Elymento Insights on Your Data
                </h3>
                <p className="text-[14px] text-slate-600 mt-2 leading-relaxed">
                  {initialFocus
                    ? `Focused walkthrough for ${initialFocus}. Connect your ERP and see live territory signals in 20 minutes.`
                    : 'Connect your ERP, field teams, and distributor network in a personalized 20-minute walkthrough.'}
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Aarav Mehta"
                        className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-slate-200 focus:border-[#091B46] focus:outline-none focus:ring-2 focus:ring-[#091B46]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Meridian Distributors"
                        className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-slate-200 focus:border-[#091B46] focus:outline-none focus:ring-2 focus:ring-[#091B46]/10 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="aarav@company.com"
                        className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-slate-200 focus:border-[#091B46] focus:outline-none focus:ring-2 focus:ring-[#091B46]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98200 11223"
                        className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-slate-200 focus:border-[#091B46] focus:outline-none focus:ring-2 focus:ring-[#091B46]/10 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1">
                        Primary ERP / Accounting
                      </label>
                      <select
                        value={erp}
                        onChange={(e) => setErp(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-slate-200 bg-white focus:border-[#091B46] focus:outline-none focus:ring-2 focus:ring-[#091B46]/10 transition"
                      >
                        <option value="Tally">Tally Prime / ERP 9</option>
                        <option value="Busy">Busy Accounting</option>
                        <option value="SAP">SAP Business One / S4</option>
                        <option value="Zoho">Zoho Books / Inventory</option>
                        <option value="Other">Other ERP (Marg / NetSuite / SQL)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1">
                        Distribution Scale
                      </label>
                      <select
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-[14px] rounded-xl border border-slate-200 bg-white focus:border-[#091B46] focus:outline-none focus:ring-2 focus:ring-[#091B46]/10 transition"
                      >
                        <option value="15–50 Distributors">15–50 Distributors</option>
                        <option value="50–250 Distributors">50–250 Distributors</option>
                        <option value="250+ Distributors">250+ Distributors</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p className="text-[13px] font-medium text-rose-600 bg-rose-50 px-3.5 py-2 rounded-xl border border-rose-100">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-full bg-[#091B46] hover:bg-[#12346A] text-white text-[15px] font-semibold transition-all shadow-[0_10px_24px_-6px_rgba(9,27,70,0.4)] cursor-pointer"
                  >
                    <span>Confirm Demo Request</span>
                    <span className="w-7 h-7 rounded-full bg-white text-[#091B46] flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                    </span>
                  </button>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-semibold text-[26px] text-[#091B46]">
                  Demo Request Confirmed
                </h3>
                <p className="text-[14px] text-slate-600 mt-2 max-w-[380px] mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#091B46]">{name}</span>. Our solutions team has prepared a{' '}
                  <span className="font-semibold text-[#091B46]">{erp}</span> integration preview for{' '}
                  <span className="font-semibold text-[#091B46]">{company}</span> and will reach out at{' '}
                  <span className="font-medium text-slate-800">{email}</span>.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#091B46] text-white text-[14px] font-semibold hover:bg-[#12346A] transition-colors cursor-pointer"
                >
                  Back to Elymento Insights
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
