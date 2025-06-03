import { ModeToggle } from "../../mode-toggle";
import { Button } from "../../ui/button";
import { NavMenu } from "./menu-bar";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/50 border-b border-white/10 backdrop-blur supports-[backdrop-filters]:bg-background/60 ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-500">INKWELL STUDIO</div>
        <NavMenu />
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