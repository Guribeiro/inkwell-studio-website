import { Badge } from "@/components/ui/badge";
import { Award, Heart, Palette } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the Artist</h2>
            <p className="text-lg text-foreground mb-6">
              With over 8 years of experience in the tattoo industry, Alex Rivera has established
              Inkwell Studio as a premier destination for custom tattoo artistry. Specializing in
              traditional, realistic, and geometric designs.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-full mb-2 mx-auto">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground">8+</div>
                <div className="text-sm text-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-full mb-2 mx-auto">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-full mb-2 mx-auto">
                  <Palette className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-foreground">Tattoos Created</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Badge variant="outline" className="text-foreground">Licensed Artist</Badge>
              <Badge variant="outline" className="text-foreground">Sterile Environment</Badge>
              <Badge variant="outline" className="text-foreground">Custom Designs</Badge>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=600&fit=crop"
              alt="Artist at work"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}