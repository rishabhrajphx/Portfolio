import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./pages/Index";
import Contacts from "./pages/Contacts";
import JobPortal from './pages/job-portal';
import { DarkModeProvider } from 'src/context/DarkModeContext';
import MnemosyneDemo from './pages/MnemosyneDemo';
import { Navigation } from './components/Navigation';
import { AgentInterfaceDemo } from './pages/agent-interface-demo';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router basename="/">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/job-portal" element={<JobPortal />} />
          <Route path="/mnemosyne-demo" element={<MnemosyneDemo />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
