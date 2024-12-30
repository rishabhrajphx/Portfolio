import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Navigation } from '../components/Navigation';

const Contacts = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="glass-card p-8 rounded-lg max-w-md w-full mx-4">
          <div className="flex flex-col items-center space-y-6">
            
            <h1 className="text-2xl font-bold">Rishabh Raj</h1>
            <p className="text-muted-foreground text-center">
               Software Developer
            </p>

            <div className="flex flex-col w-full gap-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://github.com/rishabhrajphx', '_blank')}
              >
                <Github className="mr-2" />
                GitHub
              </Button>
              
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://linkedin.com/in/rishabhrajcs', '_blank')}
              >
                <Linkedin className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;