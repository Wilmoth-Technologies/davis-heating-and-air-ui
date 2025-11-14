import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

export function ScheduleContact() {
  const [scheduleForm, setScheduleForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    address: '',
    message: ''
  });

  const [scheduleErrors, setScheduleErrors] = useState({
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    address: '',
    message: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [contactErrors, setContactErrors] = useState({
    email: '',
    phone: ''
  });

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    // Check if it has 10 digits (US phone number format)
    return digitsOnly.length === 10;
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = {
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      address: '',
      message: ''
    };

    let hasErrors = false;

    // Validate email
    if (!scheduleForm.email || !validateEmail(scheduleForm.email)) {
      newErrors.email = 'Please enter a valid email address';
      hasErrors = true;
    }

    // Validate phone
    if (!scheduleForm.phone || !validatePhone(scheduleForm.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      hasErrors = true;
    }

    // Validate required fields
    if (!scheduleForm.service) {
      newErrors.service = 'Please select a service type';
      hasErrors = true;
    }

    if (!scheduleForm.date) {
      newErrors.date = 'Please select a preferred date';
      hasErrors = true;
    }

    if (!scheduleForm.time) {
      newErrors.time = 'Please select a preferred time';
      hasErrors = true;
    }

    if (!scheduleForm.address.trim()) {
      newErrors.address = 'Please enter a service address';
      hasErrors = true;
    }

    if (!scheduleForm.message.trim()) {
      newErrors.message = 'Please provide additional details';
      hasErrors = true;
    }

    setScheduleErrors(newErrors);

    if (hasErrors) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    // If validation passes, submit the form
    toast.success('Service request received! We\'ll contact you shortly to confirm your appointment.');
    setScheduleForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      address: '',
      message: ''
    });
    setScheduleErrors({
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      address: '',
      message: ''
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = {
      email: '',
      phone: ''
    };

    let hasErrors = false;

    // Validate email
    if (!contactForm.email || !validateEmail(contactForm.email)) {
      newErrors.email = 'Please enter a valid email address';
      hasErrors = true;
    }

    // Validate phone (now required)
    if (!contactForm.phone || !validatePhone(contactForm.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      hasErrors = true;
    }

    setContactErrors(newErrors);

    if (hasErrors) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    // If validation passes, submit the form
    toast.success('Thank you for contacting us! We\'ll get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setContactErrors({
      email: '',
      phone: ''
    });
  };

  return (
    <section id="schedule" className="py-12 md:py-12 bg-white" aria-labelledby="schedule-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="schedule-heading" className="mb-4 text-[#1e3a5f] text-xl">Schedule Service or Contact Us Today!</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ready to get started? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Schedule Service */}
          <Card className="border-2 border-[#1e3a5f]">
            <CardHeader>
              <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Schedule Service</CardTitle>
              <CardDescription>
                Request an appointment for installation, maintenance, or repair
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleScheduleSubmit} className="space-y-4" aria-label="Schedule service appointment form">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="schedule-name">Name *</Label>
                    <Input
                      id="schedule-name"
                      type="text"
                      required
                      value={scheduleForm.name}
                      onChange={(e) => setScheduleForm({ ...scheduleForm, name: e.target.value })}
                      placeholder="Your name"
                      aria-required="true"
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schedule-phone">Phone *</Label>
                    <Input
                      id="schedule-phone"
                      type="tel"
                      required
                      value={scheduleForm.phone}
                      onChange={(e) => {
                        setScheduleForm({ ...scheduleForm, phone: e.target.value });
                        if (scheduleErrors.phone) {
                          setScheduleErrors({ ...scheduleErrors, phone: '' });
                        }
                      }}
                      placeholder="(555) 123-4567"
                      aria-required="true"
                      autoComplete="tel"
                      className={scheduleErrors.phone ? 'border-red-500' : ''}
                    />
                    {scheduleErrors.phone && (
                      <p className="text-sm text-red-500 mt-1">{scheduleErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-email">Email *</Label>
                    <Input
                      id="schedule-email"
                      type="email"
                      required
                      value={scheduleForm.email}
                      onChange={(e) => {
                        setScheduleForm({ ...scheduleForm, email: e.target.value });
                        if (scheduleErrors.email) {
                          setScheduleErrors({ ...scheduleErrors, email: '' });
                        }
                      }}
                      placeholder="your@email.com"
                      aria-required="true"
                      autoComplete="email"
                      className={scheduleErrors.email ? 'border-red-500' : ''}
                    />
                    {scheduleErrors.email && (
                      <p className="text-sm text-red-500 mt-1">{scheduleErrors.email}</p>
                    )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-service">Service Type *</Label>
                  <Select
                    value={scheduleForm.service}
                    onValueChange={(value: string) => {
                      setScheduleForm({ ...scheduleForm, service: value });
                      if (scheduleErrors.service) {
                        setScheduleErrors({ ...scheduleErrors, service: '' });
                      }
                    }}
                    required
                  >
                    <SelectTrigger 
                      id="schedule-service" 
                      aria-required="true" 
                      aria-label="Select service type"
                      className={scheduleErrors.service ? 'border-red-500' : ''}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation">New Installation/Upgrade</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="repair">Repair Service</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                  {scheduleErrors.service && (
                    <p className="text-sm text-red-500 mt-1">{scheduleErrors.service}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="schedule-date">Preferred Date *</Label>
                    <Input
                      id="schedule-date"
                      type="date"
                      required
                      value={scheduleForm.date}
                      onChange={(e) => {
                        setScheduleForm({ ...scheduleForm, date: e.target.value });
                        if (scheduleErrors.date) {
                          setScheduleErrors({ ...scheduleErrors, date: '' });
                        }
                      }}
                      className={scheduleErrors.date ? 'border-red-500' : ''}
                      aria-required="true"
                    />
                    {scheduleErrors.date && (
                      <p className="text-sm text-red-500 mt-1">{scheduleErrors.date}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schedule-time">Preferred Time *</Label>
                    <Select
                      value={scheduleForm.time}
                      onValueChange={(value: string) => {
                        setScheduleForm({ ...scheduleForm, time: value });
                        if (scheduleErrors.time) {
                          setScheduleErrors({ ...scheduleErrors, time: '' });
                        }
                      }}
                      required
                    >
                    <SelectTrigger 
                      id="schedule-time" 
                      aria-label="Select preferred time"
                      aria-required="true"
                      className={scheduleErrors.time ? 'border-red-500' : ''}
                    >
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                        <SelectItem value="evening">Evening (4pm - 7pm)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                    {scheduleErrors.time && (
                      <p className="text-sm text-red-500 mt-1">{scheduleErrors.time}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-address">Service Address *</Label>
                  <Input
                    id="schedule-address"
                    required
                    value={scheduleForm.address}
                    onChange={(e) => {
                      setScheduleForm({ ...scheduleForm, address: e.target.value });
                      if (scheduleErrors.address) {
                        setScheduleErrors({ ...scheduleErrors, address: '' });
                      }
                    }}
                    placeholder="123 Main St, City, NC"
                    aria-required="true"
                    className={scheduleErrors.address ? 'border-red-500' : ''}
                  />
                  {scheduleErrors.address && (
                    <p className="text-sm text-red-500 mt-1">{scheduleErrors.address}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-message">Additional Details *</Label>
                    <Textarea
                      id="schedule-message"
                      required
                      value={scheduleForm.message}
                      onChange={(e) => {
                        setScheduleForm({ ...scheduleForm, message: e.target.value });
                        if (scheduleErrors.message) {
                          setScheduleErrors({ ...scheduleErrors, message: '' });
                        }
                      }}
                      placeholder="Tell us more about what you need..."
                      rows={3}
                      aria-label="Additional details about your service request"
                      aria-required="true"
                      className={scheduleErrors.message ? 'border-red-500' : ''}
                    />
                    {scheduleErrors.message && (
                      <p className="text-sm text-red-500 mt-1">{scheduleErrors.message}</p>
                    )}
                </div>

                <Button type="submit" className="w-full bg-[#1e3a5f] hover:bg-[#2d5280]" aria-label="Submit service appointment request">
                  Request Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card id="contact" aria-labelledby="contact-heading">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ff6b5a] rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <CardTitle id="contact-heading">Contact Us</CardTitle>
                <CardDescription>
                  Have questions? We're here to help!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4" aria-label="Contact form">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                      aria-required="true"
                      autoComplete="name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, email: e.target.value });
                          if (contactErrors.email) {
                            setContactErrors({ ...contactErrors, email: '' });
                          }
                        }}
                        placeholder="your@email.com"
                        aria-required="true"
                        autoComplete="email"
                        className={contactErrors.email ? 'border-red-500' : ''}
                      />
                      {contactErrors.email && (
                        <p className="text-sm text-red-500 mt-1">{contactErrors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone *</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, phone: e.target.value });
                          if (contactErrors.phone) {
                            setContactErrors({ ...contactErrors, phone: '' });
                          }
                        }}
                        placeholder="(555) 123-4567"
                        aria-required="true"
                        autoComplete="tel"
                        className={contactErrors.phone ? 'border-red-500' : ''}
                      />
                      {contactErrors.phone && (
                        <p className="text-sm text-red-500 mt-1">{contactErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject *</Label>
                    <Input
                      id="contact-subject"
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      placeholder="What can we help you with?"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Your message..."
                      rows={4}
                      aria-required="true"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#ff6b5a] hover:bg-[#ff5544]" aria-label="Submit contact form">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5280] text-white border-0">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#4fc3dc] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-white/80">Phone</div>
                    <a href="tel:336-374-6656" className="hover:text-[#4fc3dc] transition-colors">
                      (336) 374-6656
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#4fc3dc] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-white/80">Email</div>
                    <a href="mailto:info@staycoolstaycozy.com" className="hover:text-[#4fc3dc] transition-colors">
                      info@staycoolstaycozy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#4fc3dc] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-white/80">Service Area</div>
                    <div>Northwest NC & Piedmont Triad</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#4fc3dc] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-white/80">Hours</div>
                    <div>Mon-Fri: 8am - 5pm</div>
                    <div>Sat: 9am - 3pm</div>
                    <div className="text-[#ff6b5a] mt-1">24/7 Emergency Service</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
