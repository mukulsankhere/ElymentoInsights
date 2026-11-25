import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeDetail, setActiveDetail] = useState<'phone' | 'email' | 'location'>('location');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (phone.trim().length < 7) {
      setError('Please enter a valid phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleCopyPhone = async () => {
    const phoneText = '+918962750260';
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phoneText);
      } else {
        const el = document.createElement('textarea');
        el.value = phoneText;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
    } catch {
      // ignore clipboard permissions error
    }
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setError('');
    setSubmitted(false);
  };

  return (
    <div className="bg-white">
      {/* Top Hero Headline + Overlapping Elevated Contact Card (SS1) */}
      <section className="scroll-mt-[76px] relative pt-8 pb-12 lg:pt-10 lg:pb-14 overflow-hidden">
        {/* Soft misty radial gradient backdrop behind headline & card top */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-gradient-to-b from-[#DCE7FA] via-[#CDDCF8]/75 to-white"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[130px] w-[960px] h-[240px] rounded-full bg-[#2865B0]/30 blur-3xl"
        />

        <div className="relative max-w-[1160px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-[820px] mx-auto"
          >
            <h1 className="font-display font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.12] tracking-[-0.025em] text-[#091B46] text-balance">
              Let&apos;s Talk how Elymento Insights can bring control and clarity
              to your business.
            </h1>
          </motion.div>

          {/* Elevated Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-7 sm:mt-8 rounded-[26px] bg-white border border-slate-200/75 shadow-[0_24px_70px_-20px_rgba(9,27,70,0.14)] p-6 sm:p-9 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-10">
                <div>
                  <h2 className="font-display font-semibold text-[28px] sm:text-[32px] leading-tight text-[#091B46]">
                    Let&apos;s Connect!
                  </h2>
                  <p className="text-[16px] leading-[1.7] text-[#1E293B] mt-4 max-w-[330px]">
                    Tell us what you&apos;re looking to improve, and our team
                    will get in touch.
                  </p>
                </div>

                <div>
                  <div className="text-[14px] text-[#334155]">
                    Connect with us for support
                  </div>
                  <div className="mt-1.5 flex items-center gap-3">
                    <a
                      href="tel:+918962750260"
                      className="font-display font-semibold text-[24px] sm:text-[26px] text-[#091B46] hover:text-[#12346A] transition-colors tabular-nums"
                    >
                      +918962750260
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      aria-label="Copy support phone number"
                      title="Copy number"
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#091B46] hover:border-slate-300 transition-colors cursor-pointer"
                    >
                      {copiedPhone ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Minimalist Bottom-Border Form */}
              <div className="lg:col-span-7">
                {!submitted ? (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <label htmlFor="contact-name" className="sr-only">
                        Full name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full name*"
                        className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-[#091B46] text-[14.5px] text-[#091B46] placeholder:text-[#1E293B]/75 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address*"
                        className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-[#091B46] text-[14.5px] text-[#091B46] placeholder:text-[#1E293B]/75 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="sr-only">
                        Phone number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number*"
                        className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-[#091B46] text-[14.5px] text-[#091B46] placeholder:text-[#1E293B]/75 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-[#091B46] text-[14.5px] text-[#091B46] placeholder:text-[#1E293B]/75 focus:outline-none transition-colors resize-y"
                      />
                    </div>

                    {error && (
                      <p className="text-[13px] font-medium text-rose-600 bg-rose-50 px-3.5 py-2 rounded-xl border border-rose-100">
                        {error}
                      </p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full bg-[#091B46] hover:bg-[#12346A] text-white text-[14.5px] font-semibold transition-all duration-200 shadow-[0_10px_24px_-6px_rgba(9,27,70,0.45)] active:scale-[0.98] cursor-pointer"
                      >
                        <span>Submit now</span>
                        <span className="w-8 h-8 rounded-full bg-white text-[#091B46] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                        </span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-8 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-semibold text-[26px] text-[#091B46]">
                      Message Received
                    </h3>
                    <p className="text-[15px] leading-relaxed text-slate-600 max-w-[440px]">
                      Thank you,{' '}
                      <span className="font-semibold text-[#091B46]">
                        {fullName}
                      </span>
                      . Our team will contact you shortly at{' '}
                      <span className="font-medium text-slate-800">{email}</span>{' '}
                      or{' '}
                      <span className="font-medium text-slate-800">{phone}</span>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-full border border-[#091B46] text-[#091B46] hover:bg-[#091B46] hover:text-white text-[13.5px] font-semibold transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Contact Details Section (SS2) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="inline-block text-[12.5px] font-semibold tracking-[0.16em] uppercase text-[#2865B0] mb-2.5">
              OUR CONTACT DETAILS
            </span>
            <h2 className="font-display font-semibold text-[34px] sm:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#091B46]">
              Speak With The Elymento Team
            </h2>
          </motion.div>

          <div className="mt-14 border-t border-slate-200/90 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 max-w-[1040px] mx-auto">
            {/* Phone Number */}
            <motion.div
              role="button"
              tabIndex={0}
              whileTap={{ scale: 0.985 }}
              onClick={() => setActiveDetail('phone')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveDetail('phone');
                }
              }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`group text-left py-9 px-6 md:px-8 flex items-start gap-4 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#091B46] ${
                activeDetail === 'phone'
                  ? 'bg-[#DCE7FA] ring-1 ring-inset ring-[#091B46]/30'
                  : 'hover:bg-slate-50/70'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-105 ${
                  activeDetail === 'phone'
                    ? 'bg-[#091B46] text-white shadow-[0_8px_18px_-6px_rgba(9,27,70,0.45)]'
                    : 'bg-[#DCE7FA] text-[#091B46]'
                }`}
              >
                <PhoneCall className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-[21px] text-[#091B46]">
                  Phone number
                </h3>
                <a
                  href="tel:+918962750260"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block mt-1.5 text-[14.5px] text-slate-600 hover:text-[#091B46] transition-colors tabular-nums"
                >
                  +918962750260
                </a>
                <div className="text-[12px] text-[#091B46] font-medium mt-1">
                  Mon–Sat · Direct Support
                </div>
              </div>
            </motion.div>

            {/* Send us an email */}
            <motion.div
              role="button"
              tabIndex={0}
              whileTap={{ scale: 0.985 }}
              onClick={() => setActiveDetail('email')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveDetail('email');
                }
              }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group text-left py-9 px-6 md:px-8 flex items-start gap-4 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#091B46] ${
                activeDetail === 'email'
                  ? 'bg-[#DCE7FA] ring-1 ring-inset ring-[#091B46]/30'
                  : 'hover:bg-slate-50/70'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-105 ${
                  activeDetail === 'email'
                    ? 'bg-[#091B46] text-white shadow-[0_8px_18px_-6px_rgba(9,27,70,0.45)]'
                    : 'bg-[#DCE7FA] text-[#091B46]'
                }`}
              >
                <Mail className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-[21px] text-[#091B46]">
                  Send us an email
                </h3>
                <a
                  href="mailto:info@elymento.ai"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block mt-1.5 text-[14.5px] text-slate-600 hover:text-[#091B46] transition-colors"
                >
                  info@elymento.ai
                </a>
                <div className="text-[12px] text-[#091B46] font-medium mt-1">
                  Replies within 4 business hours
                </div>
              </div>
            </motion.div>

            {/* Location matching uploaded image */}
            <motion.div
              role="button"
              tabIndex={0}
              whileTap={{ scale: 0.985 }}
              onClick={() => setActiveDetail('location')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveDetail('location');
                }
              }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group text-left py-9 px-6 md:px-8 flex items-start gap-4 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#091B46] ${
                activeDetail === 'location'
                  ? 'bg-[#DCE7FA] ring-1 ring-inset ring-[#091B46]/30'
                  : 'hover:bg-slate-50/70'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-105 ${
                  activeDetail === 'location'
                    ? 'bg-[#091B46] text-white shadow-[0_8px_18px_-6px_rgba(9,27,70,0.45)]'
                    : 'bg-[#DCE7FA] text-[#091B46]'
                }`}
              >
                <MapPin className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-[21px] text-[#091B46]">
                  Location
                </h3>
                <div className="mt-1 text-[14.5px] font-medium text-[#091B46]">
                  Global
                </div>
                <div className="mt-0.5 text-[14px] text-slate-600">
                  Remote &amp; On-site Services
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Selected Contact Channel Readout */}
          <motion.div
            key={activeDetail}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-[1040px] mx-auto mt-6 rounded-2xl bg-[#DCE7FA] border border-[#AEC7F3] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13.5px] text-[#091B46]"
          >
            {activeDetail === 'location' ? (
              <>
                <span>
                  <strong className="text-[#091B46]">Global Coverage:</strong>{' '}
                  Remote ERP onboarding worldwide and dedicated on-site rollout workshops for enterprise distribution networks.
                </span>
                <span className="text-[12px] font-semibold text-[#091B46] whitespace-nowrap">
                  Remote &amp; On-site Ready
                </span>
              </>
            ) : activeDetail === 'phone' ? (
              <>
                <span>
                  <strong className="text-[#091B46]">Direct Line:</strong>{' '}
                  Speak with our implementation team on{' '}
                  <span className="font-semibold tabular-nums">+918962750260</span>.
                </span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#091B46] text-white text-[12px] font-semibold hover:bg-[#12346A] transition-colors cursor-pointer self-start sm:self-auto"
                >
                  {copiedPhone ? 'Copied!' : 'Copy Number'}
                </button>
              </>
            ) : (
              <>
                <span>
                  <strong className="text-[#091B46]">Email Desk:</strong>{' '}
                  Send ERP integration requirements or RFPs to{' '}
                  <span className="font-semibold">info@elymento.ai</span>.
                </span>
                <a
                  href="mailto:info@elymento.ai"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#091B46] text-white text-[12px] font-semibold hover:bg-[#12346A] transition-colors self-start sm:self-auto"
                >
                  Compose Email
                </a>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
