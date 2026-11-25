/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MotionConfig, AnimatePresence, motion } from 'motion/react';
import { Header, PageView } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ClientStrip } from './components/ClientStrip';
import { EcosystemSection } from './components/EcosystemSection';
import { RolesSection } from './components/RolesSection';
import { FundamentalsSection } from './components/FundamentalsSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { ContactPage } from './components/ContactPage';
import { InfoPage, FooterDocKey } from './components/InfoPage';
import { ProductPage } from './components/ProductPage';
import { ContactFooter } from './components/ContactFooter';
import { DemoModal } from './components/DemoModal';
import { AuthPage, AuthMode } from './components/AuthPage';
import { DashboardTabId } from './data/elymentoData';
import { ProductPageId } from './data/productPagesData';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [activeInfoDoc, setActiveInfoDoc] = useState<FooterDocKey>('About Us');
  const [activeProductId, setActiveProductId] =
    useState<ProductPageId>('insights');
  const [activeDashboardTab, setActiveDashboardTab] =
    useState<DashboardTabId>('overview');
  const [activeHomeSection, setActiveHomeSection] = useState<
    'about' | 'pricing' | null
  >(null);
  const [pendingSection, setPendingSection] = useState<
    'about' | 'pricing' | null
  >(null);
  const [authMode, setAuthMode] = useState<AuthMode>('signup');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState<
    string | undefined
  >(undefined);

  const handleOpenDemo = (product?: string) => {
    setPreselectedProduct(product);
    setDemoModalOpen(true);
  };

  const handleOpenInfoDoc = (doc: FooterDocKey) => {
    setActiveHomeSection(null);
    setActiveInfoDoc(doc);
    setActivePage('info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductPage = (productId: ProductPageId) => {
    setActiveHomeSection(null);
    setActiveProductId(productId);
    setActivePage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (activePage !== 'home' || !pendingSection) return;
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(pendingSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setPendingSection(null);
      } else if (attempts < 20) {
        attempts += 1;
        window.setTimeout(tryScroll, 45);
      }
    };
    const timer = window.setTimeout(tryScroll, 50);
    return () => window.clearTimeout(timer);
  }, [activePage, pendingSection]);

  const handleNavigateSection = (sectionId: 'about' | 'pricing') => {
    setActiveHomeSection(sectionId);
    setActivePage('home');
    setPendingSection(sectionId);
  };

  const handleOpenSignUp = () => {
    setActiveHomeSection(null);
    setAuthMode('signup');
    setActivePage('auth');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activePage === 'auth') {
    return (
      <MotionConfig reducedMotion="user">
        <AuthPage
          mode={authMode}
          onChangeMode={setAuthMode}
          onBackHome={() => {
            setActiveHomeSection(null);
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onGoContact={() => {
            setActiveHomeSection(null);
            setActivePage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-[#091B46]">
        <Header
          activePage={activePage}
          activeProductId={activeProductId}
          activeHomeSection={activeHomeSection}
          onNavigate={(page) => {
            setActiveHomeSection(null);
            setActivePage(page);
          }}
          onNavigateSection={handleNavigateSection}
          onOpenDemo={handleOpenDemo}
          onSelectProductPage={handleOpenProductPage}
          onOpenSignUp={handleOpenSignUp}
        />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            {activePage === 'home' && (
              <motion.div
                key="home-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HeroSection
                  activeTab={activeDashboardTab}
                  onChangeTab={setActiveDashboardTab}
                  onOpenDemo={handleOpenDemo}
                />
                <ClientStrip />
                <EcosystemSection onOpenProductPage={handleOpenProductPage} />
                <RolesSection
                  onSelectRoleDashboard={setActiveDashboardTab}
                  onOpenDemo={handleOpenDemo}
                />
                <FundamentalsSection />
                <AboutSection
                  onOpenDemo={handleOpenDemo}
                  onScrollToPricing={() => handleNavigateSection('pricing')}
                />
                <PricingSection onOpenDemo={handleOpenDemo} />
              </motion.div>
            )}

            {activePage === 'product' && (
              <motion.div
                key={`product-view-${activeProductId}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductPage
                  productId={activeProductId}
                  onOpenDemo={handleOpenDemo}
                />
              </motion.div>
            )}

            {activePage === 'contact' && (
              <motion.div
                key="contact-view"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <ContactPage />
              </motion.div>
            )}

            {activePage === 'info' && (
              <motion.div
                key="info-view"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <InfoPage
                  activeDoc={activeInfoDoc}
                  onGoContact={() => {
                    setActiveHomeSection(null);
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <ContactFooter
          onNavigate={(page) => {
            setActiveHomeSection(null);
            setActivePage(page);
          }}
          onOpenInfoDoc={handleOpenInfoDoc}
        />

        <DemoModal
          isOpen={demoModalOpen}
          initialFocus={preselectedProduct}
          onClose={() => setDemoModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
