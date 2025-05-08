"use client";

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-gradient-to-b from-background to-secondary/10 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Mail className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll reply as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..." 
                    rows={5} 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <a href="mailto:info@gabonexplorer.com" className="text-foreground/80 hover:text-primary">info@gabonexplorer.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">+241 XX XXX XXX (Placeholder)</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">
                    Gabon Explorer HQ<br />
                    123 Tourism Street<br />
                    Libreville, Gabon (Placeholder)
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl text-primary">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/80">Monday - Friday: 9:00 AM - 5:00 PM (WAT)</p>
                    <p className="text-foreground/80">Saturday - Sunday: Closed</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
