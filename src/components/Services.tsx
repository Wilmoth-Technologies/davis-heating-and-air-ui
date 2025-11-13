import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Wrench, Shield, Snowflake, Flame, Settings, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Snowflake,
    title: 'New Installations & Upgrades',
    description: 'State-of-the-art, high-efficiency HVAC systems designed to reduce your energy costs and maximize comfort.',
    details: 'Upgrade to modern, energy-efficient heating and cooling with Friedrich, Rheem, Gree, and LG systems. Our certified technicians ensure proper sizing and installation for optimal performance.',
    features: [
      'Free in-home consultation & estimate',
      'Energy-efficient Friedrich systems',
      'Professional installation by certified techs',
      'Up to 40% energy savings',
      'Extended warranty options',
      'Financing available'
    ]
  },
  {
    icon: Shield,
    title: 'Maintenance Plans',
    description: 'Preventative maintenance programs to keep your system running efficiently and extend its lifespan.',
    details: 'Regular maintenance is the key to avoiding costly repairs and ensuring your system runs efficiently year-round. Our maintenance plans give you priority service and peace of mind.',
    features: [
      'Bi-annual tune-ups (spring & fall)',
      'Priority scheduling for repairs',
      'Discounted repair rates',
      'Extended equipment life',
      'Lower energy bills',
      'Peace of mind protection'
    ]
  },
  {
    icon: Wrench,
    title: 'Service & Repair',
    description: 'Fast, reliable repair services to get your heating and cooling system back up and running quickly.',
    details: 'When your HVAC system breaks down, you need help fast. Our expert technicians diagnose and repair all makes and models, getting you back to comfort quickly.',
    features: [
      '24/7 emergency service available',
      'Same-day service in most cases',
      'Expert diagnostics',
      'Quality OEM parts',
      'Upfront pricing - no surprises',
      '100% satisfaction guaranteed'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-12 bg-[#1e3a5f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white text-xl">Our Services</h2>
          <p className="max-w-2xl mx-auto text-white/90">
            Comprehensive HVAC solutions for residential and commercial properties in Northwest North Carolina
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2d5280] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4 pb-4 border-b">
                    {service.details}
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4fc3dc] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5280] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="mb-4">Why Choose Davis Heating + Air?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#4fc3dc] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="mb-1">Expert Service</div>
                    <p className="text-sm text-white/80">Certified HVAC professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#ff6b5a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Flame className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="mb-1">Local Experience</div>
                    <p className="text-sm text-white/80">Serving NC Piedmont Triad</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-lg mb-4">
                We specialize in energy-efficient HVAC solutions that save you money while keeping you comfortable year-round.
              </p>
              <p className="text-white/80">
                Our commitment to quality and customer satisfaction has made us a trusted name in heating and air conditioning services throughout the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
