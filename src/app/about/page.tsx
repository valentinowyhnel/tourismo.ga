import Image from 'next/image';
import { Leaf, Users, Eye, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Leaf className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Gabon Explorer</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to showcasing the unparalleled beauty and rich cultural heritage of Gabon to the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="https://picsum.photos/seed/gabon-team/600/400"
              alt="Gabon landscape diversity"
              width={600}
              height={400}
              className="rounded-xl shadow-xl object-cover aspect-[3/2]"
              data-ai-hint="diverse landscape collage"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              At Gabon Explorer, our mission is to be the premier digital gateway for tourists seeking authentic and memorable experiences in Gabon. We aim to connect travelers with local communities, promote sustainable tourism practices, and highlight the diverse attractions that make Gabon a unique destination.
            </p>
            <div className="flex items-start space-x-3">
              <Target className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
              <p className="text-foreground/80">
                To provide comprehensive, up-to-date information on Gabonese destinations, activities, and accommodations.
              </p>
            </div>
             <div className="flex items-start space-x-3">
              <Users className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
              <p className="text-foreground/80">
                To foster a deeper appreciation for Gabon's natural wonders and cultural richness.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 md:order-2">
            <h2 className="text-3xl font-semibold text-primary">Our Vision</h2>
            <p className="text-foreground/80 leading-relaxed">
              We envision Gabon Explorer as a catalyst for responsible tourism growth in Gabon, contributing to local economies while preserving the nation's precious ecosystems and cultural heritage for generations to come. We strive to make trip planning seamless, inspiring, and respectful of local customs and environments.
            </p>
             <div className="flex items-start space-x-3">
              <Eye className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
              <p className="text-foreground/80">
                To be the most trusted and user-friendly platform for exploring Gabon.
              </p>
            </div>
          </div>
          <div className="md:order-1">
            <Image
              src="https://picsum.photos/seed/gabon-culture/600/400"
              alt="Gabonese cultural elements"
              width={600}
              height={400}
              className="rounded-xl shadow-xl object-cover aspect-[3/2]"
              data-ai-hint="cultural items people"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
