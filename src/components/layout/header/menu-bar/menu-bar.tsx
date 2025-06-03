"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Contact",
    href: "#contact",
  }
]

export function NavMenu() {
  return (
    <NavigationMenu className="hidden md:flex space-x-8">
      <NavigationMenuList>
        {components.map(({ title, href }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} group bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent hover:text-foreground/50 data-[active]:text-foreground/50 focus:text-foreground/50 data-[state=open]:text-foreground/50`}>
              <Link href={href} className="group-data-[active]:text-red-400" >{title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
