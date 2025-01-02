import { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Navigation } from '../components/Navigation';


const Contacts = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  
  return (
    <>
    <Navigation />
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div 
        className={`w-[700px] h-[500px] cursor-pointer transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div className="absolute w-full h-full [backface-visibility:hidden]
          rounded-xl p-12
          bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300
          shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.8)]
          border border-gray-300"
        >
          <div className="flex gap-4">
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-maroon shadow-lg">
              <img 
                src="/dist/profile.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Title */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-maroon">Rishabh Raj</h2>
              <p className="text-sm text-gray-600">Software Developer</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Mail className="w-4 h-4 text-maroon" />
              <span>raj@rishabhraj.net</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Phone className="w-4 h-4 text-maroon" />
              <span>+1 (623) 280-8705</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 text-xs text-gray-400">
            Flip →
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]
          rounded-xl p-6
          bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400
          shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.8)]
          border border-gray-300"
        >
          <h3 className="text-lg font-semibold text-maroon mb-4">Connect With Me</h3>
          
          <div className="space-y-3">
            <a 
              href="https://github.com/rishabhrajphx" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg
                bg-white/50 hover:bg-white/80 transition-colors
                text-gray-700 hover:text-maroon group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>

            <a 
              href="https://linkedin.com/in/rishabhrajcs" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg
                bg-white/50 hover:bg-white/80 transition-colors
                text-gray-700 hover:text-maroon group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="absolute bottom-4 left-4 text-xs text-gray-400">
            ← flip back
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contacts;