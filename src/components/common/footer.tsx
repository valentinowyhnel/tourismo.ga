import Link from 'next/link';
import { Leaf, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Gabon Explorer</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80">
              Discover the wonders of Gabon, from pristine nature reserves to rich cultural heritage.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-primary mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/#destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="/trip-planner" className="hover:text-primary transition-colors">Trip Planner</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-primary mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary/20 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>&copy; {currentYear} Gabon Explorer. All rights reserved.</p>
          <p className="mt-1">Designed with passion for Gabon's beauty.</p>
        </div>
      </div>
    </footer>
  );
}
