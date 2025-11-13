import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

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

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for contacting us! We\'ll get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-12 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-[#1e3a5f] text-xl">Schedule Service or Contact Us Today!</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ready to get started? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Schedule Service */}
          <Card id="schedule" className="border-2 border-[#1e3a5f]">
            <CardHeader>
              <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Schedule Service</CardTitle>
              <CardDescription>
                Request an appointment for installation, maintenance, or repair
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleScheduleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="schedule-name">Name *</Label>
                    <Input
                      id="schedule-name"
                      required
                      value={scheduleForm.name}
                      onChange={(e) => setScheduleForm({ ...scheduleForm, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schedule-phone">Phone *</Label>
                    <Input
                      id="schedule-phone"
                      type="tel"
                      required
                      value={scheduleForm.phone}
                      onChange={(e) => setScheduleForm({ ...scheduleForm, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-email">Email *</Label>
                  <Input
                    id="schedule-email"
                    type="email"
                    required
                    value={scheduleForm.email}
                    onChange={(e) => setScheduleForm({ ...scheduleForm, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-service">Service Type *</Label>
                  <Select
                    value={scheduleForm.service}
                    onValueChange={(value) => setScheduleForm({ ...scheduleForm, service: value })}
                    required
                  >
                    <SelectTrigger id="schedule-service">
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="schedule-date">Preferred Date</Label>
                    <Input
                      id="schedule-date"
                      type="date"
                      value={scheduleForm.date}
                      onChange={(e) => setScheduleForm({ ...scheduleForm, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schedule-time">Preferred Time</Label>
                    <Select
                      value={scheduleForm.time}
                      onValueChange={(value) => setScheduleForm({ ...scheduleForm, time: value })}
                    >
                      <SelectTrigger id="schedule-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                        <SelectItem value="evening">Evening (4pm - 7pm)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-address">Service Address</Label>
                  <Input
                    id="schedule-address"
                    value={scheduleForm.address}
                    onChange={(e) => setScheduleForm({ ...scheduleForm, address: e.target.value })}
                    placeholder="123 Main St, City, NC"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-message">Additional Details</Label>
                  <Textarea
                    id="schedule-message"
                    value={scheduleForm.message}
                    onChange={(e) => setScheduleForm({ ...scheduleForm, message: e.target.value })}
                    placeholder="Tell us more about what you need..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-[#1e3a5f] hover:bg-[#2d5280]">
                  Request Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card id="contact">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ff6b5a] rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Have questions? We're here to help!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input
                      id="contact-name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
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
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject *</Label>
                    <Input
                      id="contact-subject"
                      required
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      placeholder="What can we help you with?"
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
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#ff6b5a] hover:bg-[#ff5544]">
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
                    <a href="mailto:info@davisheatingair.com" className="hover:text-[#4fc3dc] transition-colors">
                      info@davisheatingair.com
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
                    <div>Mon-Fri: 8am - 6pm</div>
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
