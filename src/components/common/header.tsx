"use client";

import Link from 'next/link';
import { Leaf, Landmark, Compass, Home, ClipboardList, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/#destinations', label: 'Destinations', icon: Compass },
  { href: '/trip-planner', label: 'Trip Planner', icon: ClipboardList },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLinkItem = ({ href, label, icon: Icon, onClick }: { href: string, label: string, icon: React.ElementType, onClick?: () => void }) => (
    <Link href={href} passHref legacyBehavior>
      <a
        onClick={onClick}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
          "hover:bg-primary/10 hover:text-primary",
          pathname === href ? "text-primary font-semibold" : "text-foreground/80"
        )}
      >
        <Icon className="h-5 w-5" />
        {label}
      </a>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Gabon Explorer Home">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">Gabon Explorer</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} {...link} />
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Leaf className="h-7 w-7 text-primary" />
                        <span className="text-xl font-bold text-primary">Gabon Explorer</span>
                    </Link>
                    <SheetClose asChild>
                         <Button variant="ghost" size="icon" aria-label="Close menu">
                            <X className="h-6 w-6" />
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col gap-2 p-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <NavLinkItem {...link} onClick={() => setIsMobileMenuOpen(false)} />
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
