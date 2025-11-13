import { useState } from 'react';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/davisHeatingAndAir.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="hidden md:flex items-center justify-between relative">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Davis Heating + Air" className="h-12 w-auto" />
          </div>

          {/* Center: Navigation (Absolutely Positioned) */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-[#1e3a5f] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#1e3a5f] transition-colors">
              Our Work
            </button>
            <button onClick={() => scrollToSection('brands')} className="hover:text-[#1e3a5f] transition-colors">
              Brands
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#1e3a5f] transition-colors">
              Contact
            </button>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a 
                href="https://www.facebook.com/davis.hvac.electrical/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1e3a5f]/10 hover:bg-[#1e3a5f] hover:text-white text-[#1e3a5f] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/thedavishvac/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1e3a5f]/10 hover:bg-[#1e3a5f] hover:text-white text-[#1e3a5f] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://share.google/fbnuLqUOFKyXcBjNN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1e3a5f]/10 hover:bg-[#1e3a5f] hover:text-white text-[#1e3a5f] rounded-full flex items-center justify-center transition-colors"
                aria-label="Google Reviews"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <a href="tel:336-374-6656" className="flex items-center gap-2 text-[#1e3a5f] whitespace-nowrap">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span>(336) 374-6656</span>
            </a>
            <Button onClick={() => scrollToSection('schedule')} className="bg-[#1e3a5f] hover:bg-[#2d5280] whitespace-nowrap">
              Schedule Service
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Davis Heating + Air" className="h-12 w-auto" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-[#1e3a5f] transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('areas')} className="text-left hover:text-[#1e3a5f] transition-colors">
                Service Areas
              </button>
              <button onClick={() => scrollToSection('brands')} className="text-left hover:text-[#1e3a5f] transition-colors">
                Brands
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-[#1e3a5f] transition-colors">
                Contact
              </button>
              <div className="flex items-center gap-2 pt-2 border-t">
                <span className="text-sm text-gray-600">Follow us:</span>
                <a 
                  href="https://www.facebook.com/davis.hvac.electrical/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#1e3a5f]/10 hover:bg-[#1e3a5f] hover:text-white text-[#1e3a5f] rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/thedavishvac/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#1e3a5f]/10 hover:bg-[#1e3a5f] hover:text-white text-[#1e3a5f] rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://share.google/fbnuLqUOFKyXcBjNN" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#1e3a5f]/10 hover:bg-[#1e3a5f] hover:text-white text-[#1e3a5f] rounded-full flex items-center justify-center transition-colors"
                  aria-label="Google Reviews"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              </div>
              <a href="tel:336-374-6656" className="flex items-center gap-2 text-[#1e3a5f]">
                <Phone className="h-5 w-5" />
                <span>(336) 374-6656</span>
              </a>
              <Button onClick={() => scrollToSection('schedule')} className="bg-[#1e3a5f] hover:bg-[#2d5280] w-full">
                Schedule Service
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
