import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Map } from 'lucide-react'; // Added Map icon
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute inset-0">
        <Image 
          src="https://picsum.photos/seed/gabon-whales/1920/1080" 
          alt="Baleines à bosse au large des côtes du Gabon"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
          data-ai-hint="humpback whales Gabon"
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
            Découvrez les géants de l’Atlantique au cœur du <span className="text-accent">Gabon sauvage</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10">
            Le Gabon est un sanctuaire pour les baleines à bosse, particulièrement visibles près de Mayumba et dans le Parc National de Loango. Assistez à leur spectacle majestueux lors de leur migration annuelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="/interactive-map">
                Explorer le Gabon <Map className="ml-2 h-5 w-5" />
              </Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 shadow-lg transition-transform hover:scale-105">
              <Link href="/trip-planner">
                Planifier Votre Aventure
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
