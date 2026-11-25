import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Users,
  BarChart3,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type AuthMode = 'signin' | 'signup';

interface AuthPageProps {
  mode: AuthMode;
  onChangeMode: (mode: AuthMode) => void;
  onBackHome: () => void;
  onGoContact: () => void;
}

type AuthStep = 'form' | 'otp' | 'success';

export const AuthPage: React.FC<AuthPageProps> = ({
  mode,
  onChangeMode,
  onBackHome,
  onGoContact,
}) => {
  const [step, setStep] = useState<AuthStep>('form');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [formError, setFormError] = useState('');
  const [resendMessage, setResendMessage] = useState(false);

  const isSignUp = mode === 'signup';

  const switchMode = (nextMode: AuthMode) => {
    onChangeMode(nextMode);
    setStep('form');
    setFormError('');
    setOtpCode('');
    setResendMessage(false);
  };

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      if (!fullName.trim()) {
        setFormError('Please enter your full name.');
        return;
      }
      if (!companyName.trim()) {
        setFormError('Please enter your company name.');
        return;
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError('Please enter a valid work email address.');
      return;
    }
    setFormError('');
    setResendMessage(false);
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = otpCode.replace(/\s+/g, '');
    if (cleaned.length < 4) {
      setFormError('Please enter the verification code sent to your email.');
      return;
    }
    setFormError('');
    setStep('success');
  };

  const handleResend = () => {
    setResendMessage(true);
    setFormError('');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Left Split Pane: Deep Midnight Ocean Branding & Feature Overview */}
      <div
        className="relative overflow-hidden flex flex-col justify-between px-7 sm:px-12 py-8 sm:py-10 text-white"
        style={{
          background:
            'radial-gradient(circle at 80% 35%, rgba(40, 101, 176, 0.36) 0%, rgba(18, 52, 106, 0.96) 50%, #091B46 100%)',
        }}
      >
        {/* Top Brand Row */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackHome}
            className="text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DCE7FA] rounded-lg"
          >
            <BrandLogo size="sm" variant="inverted" />
          </button>
          <span className="hidden sm:inline-block text-[12.5px] font-medium text-slate-300/80 tracking-wide">
            Smarter Insights. Bigger Impact.
          </span>
        </div>

        {/* Headline + 3 Value Pillars */}
        <div className="relative z-10 my-10 lg:my-auto max-w-[440px]">
          <h1 className="font-display text-[36px] sm:text-[44px] leading-[1.08] tracking-[-0.02em] font-semibold">
            <span className="block text-white">Track. Decide.</span>
            <span className="block text-[#6896D8]">Make It Happen.</span>
          </h1>

          <p className="text-[15px] leading-[1.65] text-slate-300/90 mt-4">
            Unify your ERP ledgers, field sales activity, and distributor network
            into one workspace. Build clarity, protect margins, and scale growth
            — all in one place.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#12346A]/80 border border-[#2865B0]/60 text-[#DCE7FA] flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[14.5px] font-semibold text-white">
                  Easy to Launch
                </div>
                <div className="text-[13px] text-slate-300/80">
                  Connect Tally, Busy, SAP, or Zoho in minutes
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#12346A]/80 border border-[#2865B0]/60 text-[#DCE7FA] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[14.5px] font-semibold text-white">
                  Connected Execution
                </div>
                <div className="text-[13px] text-slate-300/80">
                  Keep leaders, sales reps, and dealers aligned live
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#12346A]/80 border border-[#2865B0]/60 text-[#DCE7FA] flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[14.5px] font-semibold text-white">
                  Real Results
                </div>
                <div className="text-[13px] text-slate-300/80">
                  Track profitability, inventory aging, and growth
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Centered Preview Card Illustration */}
        <div className="relative z-10 flex justify-center pt-2">
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden="true"
              className="w-[180px] h-[180px] rounded-full border border-dashed border-[#2865B0]/45 flex items-center justify-center"
            />

            <div className="absolute w-[112px] h-[164px] rounded-[22px] bg-gradient-to-b from-[#12346A] to-[#091B46] p-2 shadow-[0_24px_50px_-10px_rgba(0,0,0,0.65)] border border-[#2865B0]/55">
              <div className="w-full h-full rounded-[15px] bg-white p-2.5 flex flex-col justify-between text-[#091B46]">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-1.5 rounded-full bg-[#091B46]/20" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <div className="grid grid-cols-4 items-end gap-1.5 h-14 px-1">
                  <div className="h-6 rounded-sm bg-[#DCE7FA]" />
                  <div className="h-9 rounded-sm bg-[#6896D8]" />
                  <div className="h-7 rounded-sm bg-[#2865B0]" />
                  <div className="h-12 rounded-sm bg-[#091B46]" />
                </div>

                <div className="text-center">
                  <div className="text-[9.5px] font-bold tracking-wider text-[#091B46] uppercase">
                    ELYMENTO LIVE
                  </div>
                  <div className="text-[7.5px] text-slate-500 mt-0.5">
                    Real-time ERP sync
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2865B0] to-[#12346A] border border-[#6896D8]/40 shadow-xl flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Split Pane: Clean White Sign In / Sign Up Form */}
      <div
        className="relative flex flex-col justify-between px-6 sm:px-12 py-8 sm:py-10"
        style={{
          background:
            'radial-gradient(circle at 90% 10%, rgba(220, 231, 250, 0.85) 0%, #FFFFFF 48%)',
        }}
      >
        {/* Top Utility Row */}
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#091B46] hover:text-[#091B46] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3 text-[13px]">
            <span className="hidden sm:inline text-slate-500">
              {isSignUp ? 'Already registered?' : "Don't have an account?"}
            </span>
            <button
              type="button"
              onClick={onGoContact}
              className="font-semibold text-[#091B46] hover:underline cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>

        {/* Centered Form Card */}
        <div className="w-full max-w-[400px] mx-auto my-12">
          <AnimatePresence mode="wait">
            {step === 'form' && (
              <motion.div
                key={`auth-form-${mode}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="font-display text-[32px] font-semibold text-[#091B46] leading-tight">
                  {isSignUp ? 'Sign up' : 'Sign in'}
                </h2>
                <p className="text-[14.5px] text-[#091B46] mt-1.5">
                  {isSignUp
                    ? 'Create your workspace and we’ll send you a verification code.'
                    : "Enter your email and we'll send you a one-time code."}
                </p>

                <form
                  onSubmit={handleSendCode}
                  noValidate
                  className="mt-7 space-y-4"
                >
                  {isSignUp && (
                    <>
                      <div>
                        <label
                          htmlFor="auth-fullname"
                          className="block text-[13px] font-semibold text-[#091B46] mb-1.5"
                        >
                          Full name
                        </label>
                        <input
                          id="auth-fullname"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Aarav Mehta"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-[14.5px] text-[#091B46] placeholder:text-slate-400 focus:outline-none focus:border-[#091B46] focus:ring-2 focus:ring-[#091B46]/15 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="auth-company"
                          className="block text-[13px] font-semibold text-[#091B46] mb-1.5"
                        >
                          Company name
                        </label>
                        <input
                          id="auth-company"
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Apex Distribution Pvt. Ltd."
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-[14.5px] text-[#091B46] placeholder:text-slate-400 focus:outline-none focus:border-[#091B46] focus:ring-2 focus:ring-[#091B46]/15 transition-all"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label
                      htmlFor="auth-email"
                      className="block text-[13px] font-semibold text-[#091B46] mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="auth-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-[14.5px] text-[#091B46] placeholder:text-slate-400 focus:outline-none focus:border-[#091B46] focus:ring-2 focus:ring-[#091B46]/15 transition-all"
                    />
                  </div>

                  {formError && (
                    <p className="text-[12.5px] font-medium text-rose-600">
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#091B46] hover:bg-[#12346A] text-white text-[14.5px] font-semibold transition-colors shadow-[0_10px_24px_-8px_rgba(9,27,70,0.45)] active:scale-[0.99] cursor-pointer"
                  >
                    {isSignUp ? 'Create account' : 'Send code'}
                  </button>
                </form>

                <div className="mt-5 text-center text-[13.5px] text-[#091B46]">
                  {isSignUp ? (
                    <>
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => switchMode('signin')}
                        className="font-semibold underline underline-offset-2 hover:text-[#091B46] cursor-pointer"
                      >
                        Sign in
                      </button>
                    </>
                  ) : (
                    <>
                      Don&apos;t have an account?{' '}
                      <button
                        type="button"
                        onClick={() => switchMode('signup')}
                        className="font-semibold underline underline-offset-2 hover:text-[#091B46] cursor-pointer"
                      >
                        Create one
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            )}

            {step === 'otp' && (
              <motion.div
                key="auth-otp"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="font-display text-[30px] font-semibold text-[#091B46] leading-tight">
                  Check your email
                </h2>
                <p className="text-[14.5px] text-[#091B46] mt-1.5">
                  We sent a one-time verification code to{' '}
                  <strong className="font-semibold text-[#091B46]">{email}</strong>.
                </p>

                <form
                  onSubmit={handleVerifyOtp}
                  noValidate
                  className="mt-7 space-y-4"
                >
                  <div>
                    <label
                      htmlFor="auth-otp-input"
                      className="block text-[13px] font-semibold text-[#091B46] mb-1.5"
                    >
                      Verification code
                    </label>
                    <input
                      id="auth-otp-input"
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="Enter 6-digit code"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-[15px] tracking-[0.22em] text-[#091B46] placeholder:tracking-normal placeholder:text-slate-400 focus:outline-none focus:border-[#091B46] focus:ring-2 focus:ring-[#091B46]/15 transition-all"
                    />
                  </div>

                  {formError && (
                    <p className="text-[12.5px] font-medium text-rose-600">
                      {formError}
                    </p>
                  )}

                  {resendMessage && (
                    <p className="text-[12.5px] font-medium text-emerald-700">
                      A fresh verification code has been sent to {email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#091B46] hover:bg-[#12346A] text-white text-[14.5px] font-semibold transition-colors shadow-[0_10px_24px_-8px_rgba(9,27,70,0.45)] cursor-pointer"
                  >
                    {isSignUp ? 'Verify & Create account' : 'Verify & Sign in'}
                  </button>
                </form>

                <div className="mt-5 flex items-center justify-between text-[13px] text-[#091B46]">
                  <button
                    type="button"
                    onClick={() => {
                      setStep('form');
                      setOtpCode('');
                      setFormError('');
                    }}
                    className="hover:underline cursor-pointer"
                  >
                    Change email
                  </button>
                  <button
                    type="button"
                    onClick={handleResend}
                    className="font-semibold hover:underline cursor-pointer"
                  >
                    Resend code
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="auth-success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-center py-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="font-display text-[28px] font-semibold text-[#091B46] mt-4">
                  {isSignUp ? 'Account Created' : 'Signed In Successfully'}
                </h2>
                <p className="text-[14.5px] text-slate-600 mt-2 leading-relaxed">
                  {isSignUp
                    ? `Welcome${fullName ? `, ${fullName}` : ''}! Your Elymento Insights workspace request for ${email} is verified.`
                    : `Welcome back! You are verified under ${email}.`}
                </p>

                <button
                  type="button"
                  onClick={onBackHome}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#091B46] hover:bg-[#12346A] text-white text-[14.5px] font-semibold transition-colors cursor-pointer"
                >
                  <span>Go to Home</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Centered Trust Indicator */}
        <div className="flex items-center justify-center gap-2 text-[12.5px] text-[#2865B0]">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Your data is safe and secure with us.</span>
        </div>
      </div>
    </div>
  );
};
