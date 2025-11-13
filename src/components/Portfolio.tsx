import { Card, CardContent } from './ui/card';
import { CheckCircle } from 'lucide-react';
import install1 from "../assets/greeOne.jpg";
import install2 from "../assets/greeTwo.jpg";
import install3 from "../assets/greeThree.jpg";

const projects = [
  {
    image: install1,
    title: 'Gree Indoor Air Handler Installation',
    description: 'Complete indoor unit installation with professional workmanship',
    category: 'Installation'
  },
  {
    image: install2,
    title: 'Gree Outdoor Unit - Dual Fan System',
    description: 'High-efficiency outdoor condenser installation on concrete pad',
    category: 'Installation'
  },
  {
    image: install3,
    title: 'Indoor Component Work',
    description: 'Expert installation ensuring optimal system performance',
    category: 'Service'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 px-4 py-2 rounded-full mb-4">
            <CheckCircle className="h-5 w-5 text-[#1e3a5f]" />
            <span className="text-[#1e3a5f]">See Our Work</span>
          </div>
          <h2 className="mb-4">Recent Projects & Installations</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Quality craftsmanship and attention to detail in every installation. 
            See examples of our professional HVAC work throughout Northwest North Carolina.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-[#1e3a5f] text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Every project is completed with the same attention to detail and commitment to excellence
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('schedule');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#1e3a5f] hover:underline"
          >
            Schedule your installation or service today →
          </button>
        </div>
      </div>
    </section>
  );
}
