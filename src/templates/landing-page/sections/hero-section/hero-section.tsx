import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565058379802-bbe93b2547a1?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-foreground">INK</span>
          <span className="text-foreground/50">WELL</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/50 animate-fade-in">
          Where Art Meets Skin - Professional Tattoo Studio
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" >
            View Portfolio
          </Button>
          <Button size="lg" variant="outline" >
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}