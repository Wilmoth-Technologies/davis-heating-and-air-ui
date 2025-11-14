import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/davisHeatingAndAir.png';

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={logo} alt="Davis Heating + Air logo" className="h-16 w-auto mb-4" />
            <p className="text-white/80 mb-4 max-w-md">
              Professional HVAC services for Northwest North Carolina. Stay cool, stay cozy!
            </p>
            <div className="flex items-center gap-2 text-[#4fc3dc] mb-4">
              <Phone className="h-5 w-5" aria-hidden="true" />
              <a href="tel:336-374-6656" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#4fc3dc] focus:ring-offset-2 rounded px-1" aria-label="Call us at (336) 374-6656">
                (336) 374-6656
              </a>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/davis.hvac.electrical/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#4fc3dc] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/thedavishvac/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#4fc3dc] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://share.google/fbnuLqUOFKyXcBjNN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#4fc3dc] rounded-full flex items-center justify-center transition-colors"
                aria-label="Google Reviews"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#4fc3dc] focus:ring-offset-2 rounded"
                  aria-label="Navigate to services section"
                >
                  New Installations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Maintenance Plans
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Repair Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Emergency Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="tel:336-374-6656" className="hover:text-white transition-colors">
                  (336) 374-6656
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@staycoolstaycozy.com" className="hover:text-white transition-colors">
                  info@staycoolstaycozy.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Northwest NC & Piedmont Triad</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Davis Heating + Air. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>24/7 Emergency Service</span>
            </div>
            <p className="text-white/60 text-xs">
              Website Built & Maintained - ©{' '}
              <a 
                href="https://wilmothtechnologyservices.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4fc3dc] hover:text-white hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#4fc3dc] focus:ring-offset-2 focus:ring-offset-[#1e3a5f] rounded px-1"
                aria-label="Visit Wilmoth Technology Services website"
              >
                Wilmoth Technology Services LLC
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
