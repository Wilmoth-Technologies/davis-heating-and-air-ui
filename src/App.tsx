import { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { HeroTrust } from './components/HeroTrust';
import { Services } from './components/Services';
import { Toaster } from './components/ui/sonner';

// Lazy load below-the-fold components for better initial performance
const Portfolio = lazy(() => import('./components/Portfolio').then(m => ({ default: m.Portfolio })));
const Brands = lazy(() => import('./components/Brands').then(m => ({ default: m.Brands })));
const ScheduleContact = lazy(() => import('./components/ScheduleContact').then(m => ({ default: m.ScheduleContact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroTrust />
        <Services />
        <Suspense fallback={null}>
          <Portfolio />
          <Brands />
          <ScheduleContact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Toaster />
    </div>
  );
}
