import type {Metadata} from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { cn } from '@/lib/utils';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Gabon Explorer - Discover Gabon',
  description: 'Explore the rich natural beauty and culture of Gabon. Plan your adventure today!',
  keywords: ['Gabon', 'tourism', 'travel', 'Africa', 'national parks', 'wildlife', 'culture', 'interactive map'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex flex-col">{/* Ensure main can flex its children column-wise */}
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
