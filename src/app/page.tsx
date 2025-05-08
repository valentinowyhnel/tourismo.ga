import { HeroSection } from '@/components/home/hero-section';
import { DestinationList } from '@/components/destinations/destination-list';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, ShieldCheck, Users } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationList />
      <FeaturedHighlights />
      <CallToAction />
    </>
  );
}

function FeaturedHighlights() {
  const highlights = [
    {
      icon: <Image src="https://picsum.photos/seed/gorilla-icon/100/100" alt="Gorilla" width={64} height={64} className="rounded-full" data-ai-hint="gorilla face" />,
      title: "Rich Biodiversity",
      description: "Home to unique wildlife including forest elephants, lowland gorillas, and mandrills."
    },
    {
      icon: <Image src="https://picsum.photos/seed/culture-icon/100/100" alt="Traditional Mask" width={64} height={64} className="rounded-full" data-ai-hint="traditional mask" />,
      title: "Vibrant Culture",
      description: "Explore ancient traditions, music, dance, and intricate craftsmanship."
    },
    {
      icon: <Image src="https://picsum.photos/seed/beach-icon/100/100" alt="Beach Sunset" width={64} height={64} className="rounded-full" data-ai-hint="beach sunset" />,
      title: "Pristine Beaches",
      description: "Relax on untouched Atlantic coastlines with golden sands and clear waters."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">Why Visit Gabon?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 flex items-center justify-center h-16 w-16 text-primary">
                  {highlight.icon}
                </div>
                <CardTitle className="text-xl text-primary">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Gabonese Adventure?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Create your personalized itinerary, discover hidden gems, and experience the magic of Gabon.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-secondary-foreground hover:bg-secondary/90 shadow-lg transition-transform hover:scale-105">
            <Link href="/trip-planner">
              Start Planning Your Trip
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

