import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Phone,
  Calendar,
  Shield,
  Award,
  Users,
  Clock,
  Star,
  Quote,
  CheckCircle,
  ThumbsUp,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import circularLogo from "figma:asset/afe5f074f5f9b43a043b0f40abb67abaadb54140.png";
import install1 from "../assets/greeOne.jpg";
import install2 from "../assets/greeTwo.jpg";
import install3 from "../assets/greeThree.jpg";

const backgroundImages = [install1, install2, install3];

const trustFactors = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed HVAC contractors with comprehensive insurance coverage for your protection",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description:
      "Factory-trained and certified on all major brands, especially Friedrich systems",
  },
  {
    icon: Users,
    title: "100% Satisfaction",
    description:
      "We don't consider the job done until you're completely satisfied with our work",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description:
      "HVAC emergencies don't wait - neither do we. Available around the clock",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Upfront, honest pricing with no hidden fees or surprise charges",
  },
  {
    icon: CheckCircle,
    title: "Quality Workmanship",
    description:
      "Factory-authorized parts and guaranteed craftsmanship on every installation",
  },
  {
    icon: TrendingUp,
    title: "15+ Years Experience",
    description:
      "Serving Northwest NC with expertise and reliability since day one",
  },
  {
    icon: Star,
    title: "1,000+ Happy Customers",
    description:
      "Trusted by homeowners across the Piedmont Triad with an A+ BBB rating",
  },
];

const testimonials = [
  {
    name: "Alex Bell",
    location: "Surry County, NC",
    rating: 5,
    text: "Brad is as thorough as they come in the service industry. If he does not get something right, he will see it through until it is completed. Reasonably priced work and trustworthy. Hard to come by HVAC people like Brad. I would HIGHLY recommend him and his crew!",
    service: "Service",
  },
  {
    name: "Deanna Edmonds",
    location: "Dobson, NC",
    rating: 5,
    text: "Brad went above and beyond to ensure everything was working perfectly. We have been pleased with the service and professionalism.",
    service: "Emergency Repair",
  },
  {
    name: "Amy Jessup",
    location: "Forsyth County, NC",
    rating: 5,
    text: "Excellent service! Very thorough and professional- always willing to make a house call at your convenience.",
    service: "Emergency Repair",
  },
  {
    name: "Robert Davis",
    location: "Yadkin County, NC",
    rating: 5,
    text: "Amazing work! Highly recommend!",
    service: "Installation",
  },
];

export function HeroTrust() {
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

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Photos */}
      <section className="pt-16 md:pt-20" aria-label="Hero image carousel">
        <div className="relative h-[380px] md:h-[560px] overflow-hidden" role="img" aria-label="Professional HVAC installation images">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              aria-hidden={index !== currentImageIndex}
            >
              <img
                src={image}
                alt={`Professional HVAC installation by Davis Heating + Air - ${index === 0 ? 'Gree indoor air handler installation' : index === 1 ? 'Gree outdoor dual fan system installation' : 'Indoor component installation'}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Main Headline and CTA Section */}
      <section className="bg-white py-8 md:py-12" aria-labelledby="main-headline">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="mb-4 text-[#1e3a5f] text-lg md:text-xl" role="text">
              Stay cool, stay cozy!
            </p>

            <h1 id="main-headline" className="mb-4 text-[#1e3a5f]">
              Professional HVAC Services for Northwest North
              Carolina
            </h1>

            <p className="mb-6 text-gray-700">
              Expert installation, maintenance, and service of
              high-efficiency heating and cooling systems.
              Serving Surry County, Yadkin, Stokes, Forsyth, and
              the Piedmont Triad.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <Button
                size="lg"
                onClick={scrollToSchedule}
                className="bg-[#ff6b5a] hover:bg-[#ff5544] text-white"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="bg-white text-[#1e3a5f] hover:bg-gray-100 border-[#1e3a5f]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>

            <a
              href="tel:336-374-6656"
              className="inline-flex items-center gap-2 text-lg text-[#1e3a5f] hover:text-[#4fc3dc]"
            >
              <Phone className="h-5 w-5" />
              (336) 374-6656
            </a>
          </div>
        </div>
      </section>

      {/* Trust Factors - Blue Background */}
      <section className="py-16 bg-[#1e3a5f]" aria-labelledby="trust-factors-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="trust-factors-heading" className="mb-4 text-white">
              Why Homeowners Trust Davis Heating + Air
            </h2>
            <p className="max-w-2xl mx-auto text-white/90">
              We've built our reputation on quality,
              reliability, and exceptional customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-white">
                    {factor.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {factor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-white py-12 md:py-12" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <div>
            <div className="text-center mb-10">
              <h2 id="testimonials-heading" className="max-w-2xl mx-auto text-[#1e3a5f] text-xl">
                Don't just take our word for it - hear from
                homeowners throughout Northwest North Carolina
              </h2>
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-[#ff6b5a] fill-current"
                    />
                  ))}
                </div>
                <span className="text-gray-700">
                  Rated 5.0 out of 5 stars by our customers
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-10">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-2 border-gray-100"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5280] rounded-full flex items-center justify-center flex-shrink-0">
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(testimonial.rating)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-[#ff6b5a] fill-current"
                              />
                            ),
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="text-[#1e3a5f]">
                            {testimonial.service}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-[#1e3a5f]">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.location}
                        </div>
                      </div>
                      <div className="text-sm bg-[#4fc3dc]/10 text-[#1e3a5f] px-3 py-1 rounded-full">
                        Verified Customer
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}