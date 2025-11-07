import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "Madras Engineering College, Tambaram, Chennai - 600025, Tamil Nadu, India",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 44 2235 2278",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@mec.edu.in",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for admissions, collaborations, or any queries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <Card className="border-none shadow-xl mb-8">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input id="contact-name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input id="contact-email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input id="contact-subject" placeholder="What is this regarding?" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea id="contact-message" placeholder="Write your message here..." rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2845267890595!2d80.12374931482183!3d12.95901999087468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f3c7f2a7e97%3A0x3d9a6f3c4b7e3c7d!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MEC Location"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
