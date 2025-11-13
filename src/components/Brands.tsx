import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import friedrichImage from '../assets/Friedrich.jpeg';
import rheemImage from '../assets/rheem.jpeg';
import greeImage from '../assets/Gree.jpeg';

const brands = [
  { name: 'Friedrich', featured: true, image: friedrichImage },
  { name: 'Rheem', featured: false, image: rheemImage },
  { name: 'Gree', featured: false, image: greeImage }
];

export function Brands() {
  return (
    <section id="brands" className="py-12 md:py-12 bg-[#1e3a5f]" aria-labelledby="brands-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="brands-heading" className="mb-4 text-white text-xl">Premium Brands We Install</h2>
          <p className="max-w-2xl mx-auto text-white/90">
            We partner with industry-leading manufacturers to bring you the best in heating and cooling technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-xl overflow-hidden
                  transition-all hover:shadow-lg
                  ${brand.featured ? 'md:col-span-2 border-2 border-[#1e3a5f]' : 'border border-gray-200'}
                `}
              >
                {brand.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="flex items-center gap-1 bg-[#1e3a5f] text-white px-3 py-1 rounded-full text-xs">
                      <Star className="h-3 w-3 fill-current" />
                      Featured Partner
                    </div>
                  </div>
                )}
                <div className="h-48 relative flex items-center justify-center bg-white p-8">
                  <ImageWithFallback
                    src={brand.image}
                    alt={`${brand.name} HVAC brand logo - ${brand.featured ? 'Featured partner' : 'Available brand'}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="bg-gray-50 py-4 text-center border-t border-gray-200">
                  <span className={`${brand.featured ? 'text-xl' : 'text-lg'} text-[#1e3a5f]`}>
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5280] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#4fc3dc] rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="h-6 w-6 text-white fill-current" />
              </div>
              <div>
                <h3 className="mb-2">Authorized Friedrich Dealer</h3>
                <p className="text-white/90">
                  We're proud to be a leading installer of Friedrich HVAC systems, known for their exceptional quality, 
                  energy efficiency, and reliability. Friedrich's innovative technology ensures optimal comfort while 
                  reducing your energy costs.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl mb-2">A+</div>
                <p className="text-sm text-white/80">Energy Efficiency Ratings</p>
              </div>
              <div>
                <div className="text-3xl mb-2">10+</div>
                <p className="text-sm text-white/80">Years Warranty Options</p>
              </div>
              <div>
                <div className="text-3xl mb-2">100%</div>
                <p className="text-sm text-white/80">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
