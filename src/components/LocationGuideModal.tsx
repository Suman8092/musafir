
import { useState } from 'react';

interface LocationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationGuideModal({ isOpen, onClose }: LocationGuideModalProps) {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [activeTab, setActiveTab] = useState('popular');

  const popularLocations = [
    {
      name: "India Gate",
      description: "Delhi's most iconic monument, perfect for sunset photography",
      bestTime: "Golden hour (6-7 AM, 5-6 PM)",
      difficulty: "Easy",
      crowd: "High",
      tips: ["Arrive early for fewer crowds", "Best light 30 minutes before sunset", "Great for group photos"],
      image: "https://readdy.ai/api/search-image?query=India%20Gate%20Delhi%20at%20golden%20hour%20with%20professional%20photography%20session%2C%20tourists%20posing%2C%20warm%20sunset%20lighting%2C%20iconic%20landmark%2C%20manicured%20lawns%2C%20dramatic%20sky%2C%20heritage%20monument%20architecture&width=400&height=300&seq=location-india-gate&orientation=landscape"
    },
    {
      name: "Humayun's Tomb",
      description: "UNESCO World Heritage site with stunning Mughal architecture",
      bestTime: "Early morning (7-9 AM)",
      difficulty: "Medium",
      crowd: "Medium", 
      tips: ["Beautiful Persian garden backdrop", "Architectural details perfect for portraits", "Less crowded on weekdays"],
      image: "https://readdy.ai/api/search-image?query=Humayuns%20Tomb%20Delhi%20with%20Mughal%20architecture%2C%20professional%20couple%20photography%20session%2C%20beautiful%20Persian%20gardens%2C%20heritage%20monument%2C%20warm%20morning%20light%2C%20romantic%20atmosphere%2C%20detailed%20stonework&width=400&height=300&seq=location-humayun&orientation=landscape"
    },
    {
      name: "Lodhi Garden",
      description: "Beautiful gardens with historical monuments and lush greenery",
      bestTime: "Morning (6-9 AM)",
      difficulty: "Easy",
      crowd: "Low-Medium",
      tips: ["Perfect for nature photography", "Multiple monuments within walking distance", "Great for morning jog photos"],
      image: "https://readdy.ai/api/search-image?query=Lodhi%20Garden%20Delhi%20with%20lush%20greenery%2C%20historical%20monuments%2C%20professional%20photography%20session%2C%20morning%20light%20filtering%20through%20trees%2C%20peaceful%20garden%20setting%2C%20nature%20backdrop&width=400&height=300&seq=location-lodhi&orientation=landscape"
    },
    {
      name: "Red Fort",
      description: "Historic Mughal fortress with magnificent red sandstone walls",
      bestTime: "Late afternoon (4-6 PM)", 
      difficulty: "Medium",
      crowd: "High",
      tips: ["Dramatic architecture shots", "Rich historical context", "Beautiful contrast with traditional outfits"],
      image: "https://readdy.ai/api/search-image?query=Red%20Fort%20Delhi%20with%20massive%20red%20sandstone%20walls%2C%20Mughal%20architecture%2C%20professional%20photography%20session%2C%20dramatic%20afternoon%20lighting%2C%20historical%20fortress%2C%20majestic%20entrance%20gates&width=400&height=300&seq=location-red-fort&orientation=landscape"
    }
  ];

  const hiddenGems = [
    {
      name: "Agrasen Ki Baoli",
      description: "Ancient stepwell with incredible architecture and dramatic lighting",
      bestTime: "Mid-morning (10 AM - 12 PM)",
      difficulty: "Medium",
      crowd: "Low",
      tips: ["Unique geometric patterns", "Great for atmospheric shots", "Cool temperature inside"],
      image: "https://readdy.ai/api/search-image?query=Agrasen%20Ki%20Baoli%20Delhi%20ancient%20stepwell%20with%20geometric%20architecture%2C%20dramatic%20lighting%20from%20above%2C%20professional%20photography%20session%2C%20stone%20steps%20descending%2C%20mysterious%20atmosphere%2C%20historical%20monument&width=400&height=300&seq=location-baoli&orientation=landscape"
    },
    {
      name: "Hauz Khas Village",
      description: "Trendy area combining medieval ruins with modern cafes",
      bestTime: "Late afternoon (3-5 PM)",
      difficulty: "Easy",
      crowd: "Medium",
      tips: ["Mix of old and new architecture", "Vibrant street art", "Great for lifestyle shots"],
      image: "https://readdy.ai/api/search-image?query=Hauz%20Khas%20Village%20Delhi%20with%20medieval%20ruins%20and%20modern%20cafes%2C%20trendy%20urban%20setting%2C%20professional%20lifestyle%20photography%2C%20mix%20of%20historical%20and%20contemporary%20architecture%2C%20vibrant%20atmosphere&width=400&height=300&seq=location-hauz-khas&orientation=landscape"
    },
    {
      name: "Safdarjung Tomb",
      description: "Lesser-known Mughal monument with beautiful gardens and fewer crowds",
      bestTime: "Golden hour (5-6 PM)",
      difficulty: "Easy",
      crowd: "Low",
      tips: ["Peaceful atmosphere", "Similar architecture to Taj Mahal", "Perfect for couple shots"],
      image: "https://readdy.ai/api/search-image?query=Safdarjung%20Tomb%20Delhi%20with%20Mughal%20architecture%2C%20beautiful%20gardens%2C%20peaceful%20setting%2C%20professional%20photography%20session%2C%20golden%20hour%20lighting%2C%20fewer%20crowds%2C%20heritage%20monument&width=400&height=300&seq=location-safdarjung&orientation=landscape"
    }
  ];

  const currentLocations = activeTab === 'popular' ? popularLocations : hiddenGems;

  // Reset selectedLocation when switching tabs to prevent index out of bounds
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedLocation(0);
  };

  // Safety check to ensure selectedLocation is within bounds
  const safeSelectedLocation = Math.min(selectedLocation, currentLocations.length - 1);
  const selectedLocationData = currentLocations[safeSelectedLocation] || currentLocations[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-3xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">📍 Delhi Photography Locations</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-2xl text-gray-500"></i>
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="p-6">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => handleTabChange('popular')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeTab === 'popular' 
                      ? 'bg-orange-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  🏛️ Popular Locations
                </button>
                <button
                  onClick={() => handleTabChange('hidden')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeTab === 'hidden' 
                      ? 'bg-orange-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  💎 Hidden Gems
                </button>
              </div>
            </div>

            {/* Location Grid */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                {currentLocations.map((location, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedLocation(index)}
                    className={`group cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                      safeSelectedLocation === index 
                        ? 'border-orange-500 bg-orange-50 shadow-lg' 
                        : 'border-gray-200 hover:border-orange-200 hover:bg-orange-50/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <img 
                        src={location.image} 
                        alt={location.name}
                        className="w-20 h-16 object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{location.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                        <div className="flex items-center gap-4 text-xs">
                          <span className={`px-2 py-1 rounded-full ${
                            location.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                            location.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {location.difficulty}
                          </span>
                          <span className={`px-2 py-1 rounded-full ${
                            location.crowd === 'Low' ? 'bg-green-100 text-green-700' :
                            location.crowd === 'Medium' || location.crowd === 'Low-Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {location.crowd} Crowd
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Location Details */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 h-fit">
                <div className="mb-6">
                  <img 
                    src={selectedLocationData.image} 
                    alt={selectedLocationData.name}
                    className="w-full h-48 object-cover object-top rounded-xl shadow-lg"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedLocationData.name}</h3>
                <p className="text-gray-600 mb-4">{selectedLocationData.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                      <i className="ri-time-line text-white text-sm"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Best Time</div>
                      <div className="text-sm text-gray-600">{selectedLocationData.bestTime}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-white text-sm"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Difficulty</div>
                      <div className="text-sm text-gray-600">{selectedLocationData.difficulty}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                      <i className="ri-group-line text-white text-sm"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Crowd Level</div>
                      <div className="text-sm text-gray-600">{selectedLocationData.crowd}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-yellow-500"></i>
                    Pro Tips
                  </h4>
                  <ul className="space-y-2">
                    {selectedLocationData.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <i className="ri-check-line text-green-500 mt-0.5 flex-shrink-0"></i>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 whitespace-nowrap cursor-pointer"
                >
                  📸 Book Session at This Location
                </button>
              </div>
            </div>

            {/* Photography Tips */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">📚 General Photography Tips for Delhi</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-sun-line text-2xl text-white"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Best Seasons</h4>
                  <p className="text-sm text-gray-300">October to March for pleasant weather and clear skies</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shirt-line text-2xl text-white"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Outfit Tips</h4>
                  <p className="text-sm text-gray-300">Solid colors work best, avoid busy patterns and logos</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-time-line text-2xl text-white"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Timing</h4>
                  <p className="text-sm text-gray-300">Golden hour provides the most flattering natural light</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-heart-line text-2xl text-white"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Comfort</h4>
                  <p className="text-sm text-gray-300">Wear comfortable shoes and bring water for longer sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}