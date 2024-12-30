import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contacts = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass-card p-8 rounded-lg max-w-md w-full mx-4">
        <div className="flex flex-col items-center space-y-6">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full object-cover border-2 border-primary"
          />
          
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-muted-foreground text-center">
            Cryptography enthusiast & Software Developer
          </p>

          <div className="flex flex-col w-full gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
            >
              <Github className="mr-2" />
              GitHub
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}
            >
              <Linkedin className="mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;