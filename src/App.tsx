import { Header } from './components/Header';
import { HeroTrust } from './components/HeroTrust';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Brands } from './components/Brands';
import { ScheduleContact } from './components/ScheduleContact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroTrust />
        <Services />
        <Portfolio />
        <Brands />
        <ScheduleContact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
