import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Navigation } from '../components/Navigation';

const Contacts = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-background perspective-1000">
        <div 
          className={`w-[400px] h-[250px] cursor-pointer transition-transform duration-1000 preserve-3d 
            ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of the card */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="w-full h-full rounded-xl p-6 shadow-2xl 
              bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900
              border border-neutral-600 transform-style-preserve-3d">
              <div className="flex gap-4">
                {/* Profile Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold shadow-xl">
                  <img 
                    src="/path-to-your-image.jpg" 
                    alt="Rishabh Raj" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name and Title */}
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl font-bold text-gold">Rishabh Raj</h1>
                  <p className="text-neutral-400">Software Developer</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-2 text-neutral-300">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold" />
                  your.email@example.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  +1 (234) 567-8900
                </p>
              </div>

              <p className="mt-4 text-sm text-neutral-400">
                Click to see more details
              </p>
            </div>
          </div>

          {/* Back of the card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="w-full h-full rounded-xl p-6 shadow-2xl 
              bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950
              border border-neutral-600">
              <h2 className="text-xl font-semibold text-gold mb-4">Connect With Me</h2>
              
              <div className="space-y-4">
                <a 
                  href="https://github.com/rishabhrajphx" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg 
                    bg-neutral-800 hover:bg-neutral-700 transition-colors
                    text-neutral-300 hover:text-gold"
                >
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
                
                <a 
                  href="https://linkedin.com/in/rishabhrajcs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg 
                    bg-neutral-800 hover:bg-neutral-700 transition-colors
                    text-neutral-300 hover:text-gold"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </div>

              <p className="mt-4 text-sm text-neutral-400">
                Click to flip back
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;