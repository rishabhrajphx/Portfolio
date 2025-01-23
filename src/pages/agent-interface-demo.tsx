import React, { useState, useEffect, useRef } from 'react';

interface TravelOption {
  id: string;
  time: string;
  cost: string;
  details: string;
  thumbnail?: string;
  isPremium: boolean;
}

// Define mockDisruption BEFORE the component that uses it
const mockDisruption = {
  problem: "Flight AA123 (NYC → SF, 3 PM) canceled due to weather",
  impact: "Your meeting at 6 PM PT may be affected",
  options: [
    {
      id: "ua456",
      time: "4 PM, Same Day",
      cost: "$50 Credit Required",
      details: "Window seat available • Priority boarding • 2h flight time",
      thumbnail: "/airline-ua.png",
      isPremium: true
    },
    {
      id: "dl789",
      time: "6 AM Next Day",
      cost: "No Additional Cost",
      details: "Aisle seat • Free meal • 2h30m flight time",
      thumbnail: "/airline-dl.png",
      isPremium: false
    }
  ],
  defaultOption: "ua456"
};

export const AgentInterfaceDemo = ({ disruption = mockDisruption }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [upgradePrompt, setUpgradePrompt] = useState<string | null>(null);

  const handleAuth = () => {
    setIsAuthenticated(true);
    setUpgradePrompt(null); // Clear prompt after auth
  };

  const handleSelect = (optionId: string) => {
    const option = disruption.options.find(opt => opt.id === optionId);
    if (!option) return;

    if (option.isPremium && !isAuthenticated) {
      setUpgradePrompt(`🔓 Premium travel options require identity verification. Your corporate account provides access to these priority solutions.`);
      return;
    }

    if (!option.isPremium) {
      setUpgradePrompt(`💡 Consider upgrading for priority rebooking and premium benefits. Your organization's travel policy allows for emergency premium accommodations.`);
    }

    setSelectedOption(optionId);
    setShowDetails(true);
  };

  return (
    <div className="agent-interface max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="disruption-alert bg-yellow-100 p-4 rounded-lg mb-6">
        <h3 className="text-xl font-bold mb-2">🚨 Travel System Intervention Required</h3>
        <p className="text-gray-700 mb-2">{disruption.problem}</p>
        <p className="text-red-600 font-medium">{disruption.impact}</p>
      </div>

      {upgradePrompt && (
        <div className="upgrade-prompt bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-600">
          <p className="text-blue-800 flex items-center gap-2">
            <span className="font-semibold">System Note:</span> 
            {upgradePrompt}
          </p>
        </div>
      )}

      <div className="options-grid grid gap-4 mb-6">
        {disruption.options.map((option) => (
          <div 
            key={option.id} 
            className={`option-card relative bg-white p-4 rounded-lg transition-all
              ${selectedOption === option.id ? 'ring-2 ring-blue-500 shadow-lg' : 'shadow-md hover:shadow-lg'}
              ${option.isPremium ? 'border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-50 to-white' : ''}`}
          >
            <button 
              onClick={() => handleSelect(option.id)}
              className="w-full text-left flex items-start gap-4 focus:outline-none"
            >
              {option.thumbnail && (
                <img 
                  src={option.thumbnail} 
                  alt="Airline logo" 
                  className="w-12 h-12 object-contain mt-1"
                />
              )}
              <div className="option-details flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-800">
                    {option.time} 
                    <span className={`ml-2 ${option.isPremium ? 'text-yellow-600' : 'text-gray-600'}`}>
                      ({option.cost})
                    </span>
                  </h4>
                  {option.isPremium && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      RECOMMENDED SOLUTION
                    </span>
                  )}
                </div>
                <small className="text-gray-600 block mb-2">{option.details}</small>
              </div>
            </button>
            
            {showDetails && selectedOption === option.id && (
              <div className="option-expanded mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <button 
                    onClick={() => setShowDetails(false)}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Close Details
                  </button>
                  {!option.isPremium && (
                    <button
                      onClick={() => handleSelect(disruption.options[0].id)}
                      className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md hover:bg-yellow-200"
                    >
                      View Premium Alternative
                    </button>
                  )}
                </div>
                <p className="text-gray-700 text-sm">
                  {option.isPremium 
                    ? '✅ Priority rebooking confirmed\n🛫 Lounge access available\n⚡ Flexible change policy applies'
                    : '⚠️ Basic rebooking protocol\n🕒 Limited availability\n⏳ Standard change procedures'}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="status-bar bg-white p-4 rounded-lg shadow-md">
        {!isAuthenticated && disruption.options.find(opt => opt.id === selectedOption)?.isPremium && (
          <div className="auth-prompt mb-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-600">
            <button 
              onClick={handleAuth}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Verify Identity to Continue
            </button>
          </div>
        )}
        {isAuthenticated && (
          <p className="text-green-600">Identity verified - Access granted to premium solutions</p>
        )}
      </div>
    </div>
  );
};