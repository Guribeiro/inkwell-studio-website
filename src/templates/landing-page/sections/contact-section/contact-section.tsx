import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-foreground">Ready to start your tattoo journey?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-card rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-foreground">(555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-card rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-foreground">info@inkwellstudio.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-card rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-foreground">123 Art Street, Creative District, City 12345</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-card rounded-full">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-foreground">Tue-Sat: 12PM-8PM | Sun-Mon: Closed</div>
                </div>
              </div>
            </div>

            <Separator className="my-8 " />

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://www.instagram.com/art_pelle_oficial/" target="_blank" rel="noopener noreferrer" >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Book Your Appointment</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className=" border border-border rounded-lg px-4 py-3 focus:outline-none focus:border"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" border border-border rounded-lg px-4 py-3 focus:outline-none focus:border"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full  border border-border rounded-lg px-4 py-3 focus:outline-none focus:border"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full  border border-border rounded-lg px-4 py-3 focus:outline-none focus:border"
              />
              <select className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border">
                <option>Select Service</option>
                <option>Custom Design</option>
                <option>Traditional Tattoo</option>
                <option>Realistic Portrait</option>
                <option>Cover-up</option>
                <option>Touch-up</option>
                <option>Consultation</option>
              </select>
              <textarea
                placeholder="Describe your tattoo idea..."
                rows={4}
                className="w-full  border border-border rounded-lg px-4 py-3 focus:outline-none focus:border"
              ></textarea>
              <Button variant='default' className="w-full">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}