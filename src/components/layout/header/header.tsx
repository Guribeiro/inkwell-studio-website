import { ModeToggle } from "../../mode-toggle";
import { Button } from "../../ui/button";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/50 border-b border-white/10 backdrop-blur supports-[backdrop-filters]:bg-background/60 ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-500">INKWELL STUDIO</div>
        <div className="hidden md:flex space-x-8">
          <Button variant='link' asChild>
            <a href="#home">Home</a>
          </Button>
          <Button variant='link' asChild>
            <a href="#portfolio">Portfolio</a>
          </Button>
          <Button variant='link' asChild>
            <a href="#about">About</a>
          </Button>
          <Button variant='link' asChild>
            <a href="#services">Services</a>
          </Button>
          <Button variant='link' asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant='outline'>
            Book Now
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}