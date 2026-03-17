"use client";

import { Hero } from "@/components/ui/animated-hero";
import { TeamSectionBlock } from "@/components/ui/team-section-block-shadcnui";
import { Pricing } from "@/components/blocks/pricing";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const pricingPlans = [
  {
    name: "STARTER",
    price: "500",
    yearlyPrice: "400",
    period: "per project",
    features: [
      "One-page website",
      "Mobiel-responsive design",
      "Contactformulier",
      "Basis-SEO optimalisatie",
      "Google Maps-integratie",
      "1 revisieronde",
    ],
    description: "Perfect voor een sterke eerste indruk online",
    buttonText: "Neem contact op",
    href: "https://wa.me/31624904544",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "1000",
    yearlyPrice: "800",
    period: "per project",
    features: [
      "Multi-page website (4-6 pagina's)",
      "Alles uit Starter",
      "Google Business Profile setup",
      "Professionele fotografie",
      "2 revisierondes",
      "Snelheidsoptimalisatie",
      "SEO-strategie",
    ],
    description: "De complete oplossing voor serieuze ondernemers",
    buttonText: "Aan de slag",
    href: "https://wa.me/31624904544",
    isPopular: true,
  },
  {
    name: "PREMIUM",
    price: "1500",
    yearlyPrice: "1200",
    period: "per project",
    features: [
      "Alles uit Professional",
      "Professioneel e-mailadres",
      "6 maanden onderhoud inbegrepen",
      "Uitgebreide SEO-strategie",
      "Social media koppeling",
      "Maandelijks prestatierapport",
      "Custom features op maat",
      "Priority support",
    ],
    description: "Alles wat je nodig hebt, zonder zorgen",
    buttonText: "Contact opnemen",
    href: "https://wa.me/31624904544",
    isPopular: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Component 1: Animated Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Component 2: Team Section */}
      <section id="team">
        <TeamSectionBlock />
      </section>

      {/* Component 3: Pricing */}
      <section id="pricing">
        <Pricing
          plans={pricingPlans}
          title="Transparante Prijzen"
          description={`Geen verborgen kosten, geen verrassingen.\nKies het pakket dat bij jouw bedrijf past.`}
        />
      </section>

      {/* Component 4: Interactive Hover Button showcase */}
      <section id="cta" className="py-20 flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          Klaar om te beginnen?
        </h2>
        <p className="text-muted-foreground text-center max-w-md">
          Neem vandaag nog contact op voor een vrijblijvend gesprek over jouw nieuwe website.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <InteractiveHoverButton text="WhatsApp" className="w-40" />
          <InteractiveHoverButton text="E-mail" className="w-40" />
          <InteractiveHoverButton text="Bel mij" className="w-40" />
        </div>
      </section>
    </main>
  );
}
