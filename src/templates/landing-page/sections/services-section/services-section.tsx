import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    { name: "Custom Design", price: "Starting at $150", description: "Unique artwork tailored to your vision" },
    { name: "Traditional Tattoos", price: "$120/hour", description: "Classic American traditional style" },
    { name: "Realistic Portraits", price: "$180/hour", description: "Photorealistic black & grey or color" },
    { name: "Cover-ups", price: "$160/hour", description: "Transform old tattoos into new art" },
    { name: "Touch-ups", price: "$80/hour", description: "Refresh and revitalize existing work" },
    { name: "Consultations", price: "Free", description: "Discuss your ideas and get expert advice" },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services & Pricing</h2>
          <p className="text-xl text-foreground">Professional tattoo services with transparent pricing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover-scale transition-shadow duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                <div className="text-2xl font-bold text-foreground mb-3">{service.price}</div>
                <p className="text-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground mb-6">All prices include consultation and aftercare instructions</p>
          <Button size="lg" >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}