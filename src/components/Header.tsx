import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ECOSYSTEM_PRODUCTS } from '../data/elymentoData';
import { ProductPageId } from '../data/productPagesData';
import { BrandLogo } from './BrandLogo';

export type PageView = 'home' | 'contact' | 'info' | 'product' | 'auth';

interface HeaderProps {
  activePage: PageView;
  activeProductId?: ProductPageId;
  activeHomeSection?: 'about' | 'pricing' | null;
  onNavigate: (page: PageView) => void;
  onNavigateSection: (section: 'about' | 'pricing') => void;
  onOpenDemo: (preselectedProduct?: string) => void;
  onSelectProductPage: (id: ProductPageId) => void;
  onOpenSignUp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  activeProductId,
  activeHomeSection,
  onNavigate,
  onNavigateSection,
  onOpenDemo,
  onSelectProductPage,
  onOpenSignUp,
}) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProductsOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleGoHome = () => {
    setProductsOpen(false);
    setMobileMenuOpen(false);
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoContact = () => {
    setProductsOpen(false);
    setMobileMenuOpen(false);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (id: ProductPageId) => {
    setProductsOpen(false);
    setMobileMenuOpen(false);
    onSelectProductPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 border-b border-slate-200/80 shadow-[0_8px_28px_-14px_rgba(9,27,70,0.12)]'
          : 'bg-white/90 border-b border-slate-100'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-[76px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={handleGoHome}
          className="flex items-center whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#091B46] rounded-lg cursor-pointer"
        >
          <BrandLogo />
        </button>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-[#12346A]">
          <button
            type="button"
            onClick={handleGoHome}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 font-serif cursor-pointer ${
              activePage === 'home' && !activeHomeSection
                ? 'text-[#091B46] font-semibold'
                : 'text-[#12346A] hover:text-[#091B46]'
            }`}
          >
            Home
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              aria-expanded={productsOpen}
              className={`flex items-center gap-1.5 py-1 transition-colors whitespace-nowrap shrink-0 font-serif cursor-pointer focus:outline-none ${
                activePage === 'product' || productsOpen
                  ? 'text-[#091B46] font-semibold'
                  : 'text-[#12346A] hover:text-[#091B46]'
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  productsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[240px] bg-white rounded-2xl border border-slate-200/80 shadow-[0_18px_42px_-12px_rgba(9,27,70,0.18)] p-2 z-50 space-y-0.5"
                >
                  {ECOSYSTEM_PRODUCTS.map((item) => {
                    const isSelectedProduct =
                      activePage === 'product' && activeProductId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          handleProductClick(item.id as ProductPageId)
                        }
                        className="w-full text-left px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between gap-3 group cursor-pointer"
                      >
                        <span
                          className={`text-[14px] font-semibold transition-colors ${
                            isSelectedProduct
                              ? 'text-[#091B46]'
                              : 'text-[#091B46] group-hover:text-[#091B46]'
                          }`}
                        >
                          {item.title}
                        </span>
                        <ArrowUpRight
                          className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                            isSelectedProduct
                              ? 'text-[#091B46]'
                              : 'text-slate-400 group-hover:text-[#091B46]'
                          }`}
                        />
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => {
              setProductsOpen(false);
              setMobileMenuOpen(false);
              onNavigateSection('about');
            }}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 font-serif cursor-pointer ${
              activePage === 'home' && activeHomeSection === 'about'
                ? 'text-[#091B46] font-semibold'
                : 'text-[#12346A] hover:text-[#091B46]'
            }`}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => {
              setProductsOpen(false);
              setMobileMenuOpen(false);
              onNavigateSection('pricing');
            }}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 font-serif cursor-pointer ${
              activePage === 'home' && activeHomeSection === 'pricing'
                ? 'text-[#091B46] font-semibold'
                : 'text-[#12346A] hover:text-[#091B46]'
            }`}
          >
            Pricing
          </button>

          <button
            type="button"
            onClick={handleGoContact}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 font-serif cursor-pointer ${
              activePage === 'contact'
                ? 'text-[#091B46] font-semibold'
                : 'text-[#12346A] hover:text-[#091B46]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Sign Up & Demo Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">

          <button
            type="button"
            onClick={() => {
              setProductsOpen(false);
              setMobileMenuOpen(false);
              onOpenSignUp();
            }}
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full border border-[#091B46] text-[#091B46] hover:bg-[#091B46] hover:text-white text-[13.5px] font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Sign up
          </button>

          <button
            type="button"
            onClick={() => onOpenDemo()}
            className="group hidden sm:inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-[#091B46] hover:bg-[#12346A] text-white text-[13.5px] font-semibold transition-all duration-200 shadow-[0_8px_20px_-6px_rgba(9,27,70,0.45)] hover:shadow-[0_10px_24px_-4px_rgba(9,27,70,0.55)] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#091B46]"
          >
            <span>Book a Demo</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#091B46] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-[#091B46] hover:bg-slate-50 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="px-5 py-4 space-y-3">
              <button
                type="button"
                onClick={handleGoHome}
                className="block w-full text-left py-2 text-[15px] font-medium text-[#091B46]"
              >
                Home
              </button>
              <div className="space-y-1 pl-2 border-l border-slate-200">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Products
                </div>
                {ECOSYSTEM_PRODUCTS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      handleProductClick(item.id as ProductPageId)
                    }
                    className="block w-full text-left py-1.5 text-[14px] text-slate-700 hover:text-[#091B46]"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection('about');
                }}
                className="block w-full text-left py-2 text-[15px] font-medium text-[#091B46]"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection('pricing');
                }}
                className="block w-full text-left py-2 text-[15px] font-medium text-[#091B46]"
              >
                Pricing
              </button>
              <button
                type="button"
                onClick={handleGoContact}
                className="block w-full text-left py-2 text-[15px] font-medium text-[#091B46]"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignUp();
                }}
                className="w-full py-2.5 rounded-full border border-[#091B46] text-[#091B46] text-[14px] font-semibold cursor-pointer sm:hidden"
              >
                Sign up
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#091B46] text-white text-[14px] font-semibold"
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
