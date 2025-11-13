import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Calendar,
  Shield,
  Award,
  Users,
  Clock,
} from "lucide-react";
import install1 from "../assets/greeOne.jpg";
import install2 from "../assets/greeTwo.jpg";
import install3 from "../assets/greeThree.jpg";

const backgroundImages = [install1, install2, install3];

const trustFactors = [
  {
    icon: Shield,
    title: "Licensed & Insured",
  },
  {
    icon: Award,
    title: "Certified Technicians",
  },
  {
    icon: Users,
    title: "100% Satisfaction",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
  },
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % backgroundImages.length,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSchedule = () => {
    const element = document.getElementById("schedule");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16 md:pt-20">
      {/* Background Image Carousel - Full Width */}
      <div className="relative h-[600px] md:h-[800px] overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Davis Heating + Air installation ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content Section Below Photos - Compact for Above the Fold */}
      <div className="bg-white py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            {/* Slogan */}
            <p className="mb-4 text-[#1e3a5f] text-lg md:text-xl">
              Let's make HVAC great again!
            </p>

            {/* Main Headline */}
            <h1 className="mb-4 text-[#1e3a5f]">
              Professional HVAC Services for Northwest North
              Carolina
            </h1>

            {/* Description */}
            <p className="mb-6 text-gray-700">
              Expert installation, maintenance, and service of
              high-efficiency heating and cooling systems.
              Serving Surry County, Yadkin, Stokes, Forsyth, and
              the Piedmont Triad.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={scrollToSchedule}
              className="bg-[#ff6b5a] hover:bg-[#ff5544] text-white px-8"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Service
            </Button>
          </div>

          {/* Trust Factors */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-6 text-[#1e3a5f]">
              Why Homeowners Trust Davis Heating + Air
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustFactors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <Card
                    key={index}
                    className="text-center border-2 border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="pt-5 pb-5">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2d5280] rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </div>
                      <h3 className="text-[#1e3a5f] text-sm md:text-base">
                        {factor.title}
                      </h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}