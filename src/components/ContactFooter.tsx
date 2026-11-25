import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { PageView } from './Header';
import { FooterDocKey } from './InfoPage';
import { BrandLogo } from './BrandLogo';

interface ContactFooterProps {
  onNavigate: (page: PageView) => void;
  onOpenInfoDoc: (doc: FooterDocKey) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onNavigate,
  onOpenInfoDoc,
}) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDocClick = (doc: FooterDocKey) => {
    onOpenInfoDoc(doc);
    scrollToTop();
  };

  return (
    <footer className="relative overflow-hidden bg-[#DCE7FA] border-t border-[#B9CEF4]/80 text-[#091B46]">
      {/* Subtle centered circular grid accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(circle, black 35%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 72%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 pt-14 pb-10">
        {/* Top Row: Brand Blurb */}
        <div className="max-w-[540px]">
          <button
            type="button"
            onClick={() => {
              onNavigate('home');
              scrollToTop();
            }}
            className="flex items-center cursor-pointer"
          >
            <BrandLogo />
          </button>

          <p className="font-serif text-[16.5px] leading-[1.6] text-[#091B46] mt-4">
            Discover how Elymento Insights can connect your ERP data, teams
            and distribution operations to create greater clarity, control and
            execution.
          </p>
        </div>

        {/* Middle Links Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Email, Location + Scroll to top button */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display font-semibold text-[19px] text-[#091B46]">Email</h3>
                <a
                  href="mailto:info@elymento.ai"
                  className="inline-block mt-1.5 text-[14px] text-[#12346A] hover:underline"
                >
                  info@elymento.ai
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C2D4F6] text-[#091B46] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 stroke-[1.9]" />
                </div>
                <div>
                  <h3 className="font-sans text-[15px] font-semibold text-[#12346A] leading-tight">
                    Location
                  </h3>
                  <div className="text-[13px] font-medium text-[#091B46] mt-0.5">
                    Global
                  </div>
                  <div className="text-[12.5px] text-slate-600">
                    Remote &amp; On-site Services
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-11 h-11 rounded-full bg-[#091B46] hover:bg-[#12346A] text-white flex items-center justify-center shadow-[0_8px_18px_-4px_rgba(9,27,70,0.4)] transition-transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-4 space-y-2.5 text-[14px] text-[#12346A]">
            {(
              [
                'About Us',
                "We're Hiring",
                'Our Story',
                'Security Statement',
              ] as FooterDocKey[]
            ).map((label) => (
              <div key={label}>
                <button
                  type="button"
                  onClick={() => handleDocClick(label)}
                  className="hover:underline cursor-pointer"
                >
                  {label}
                </button>
              </div>
            ))}
          </div>

          {/* Legal & Content Links */}
          <div className="lg:col-span-3 space-y-2.5 text-[14px] text-[#12346A]">
            {(
              ['ToS', 'Privacy Policy', 'Blogs', 'Newsletter'] as FooterDocKey[]
            ).map((label) => (
              <div key={label}>
                <button
                  type="button"
                  onClick={() => handleDocClick(label)}
                  className="hover:underline cursor-pointer"
                >
                  {label}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-300/70 text-center text-[13px] text-[#12346A]">
          © {new Date().getFullYear()} Elymento Insights Pvt. Ltd. Built with
          clarity and precision.
        </div>
      </div>
    </footer>
  );
};
