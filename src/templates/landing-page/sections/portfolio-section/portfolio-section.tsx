'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    { id: 1, category: "traditional", image: "https://images.unsplash.com/photo-1565058379802-bbe93b2547a1?w=400&h=400&fit=crop", title: "Traditional Rose" },
    { id: 2, category: "realistic", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop", title: "Portrait Realism" },
    { id: 3, category: "geometric", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop", title: "Sacred Geometry" },
    { id: 4, category: "traditional", image: "https://images.unsplash.com/photo-1587496579291-8ad689b8b27d?w=400&h=400&fit=crop", title: "Old School Eagle" },
    { id: 5, category: "realistic", image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=400&fit=crop", title: "Wildlife Portrait" },
    { id: 6, category: "geometric", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", title: "Mandala Design" },
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Work</h2>
          <p className="text-xl text-foreground mb-8">Explore our finest tattoo artistry</p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "traditional", "realistic", "geometric"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-background border-border overflow-hidden hover-scale transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>

  )
}