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

const handleTabChange = (tab: string) => {
setActiveTab(tab);
setSelectedLocation(0);
};

const safeSelectedLocation = Math.min(selectedLocation, currentLocations.length - 1);
const selectedLocationData = currentLocations[safeSelectedLocation] || currentLocations[0];

if (!isOpen) return null;

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4">
<div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-6xl max-h-[95vh] overflow-hidden">
{/* Header */}
<div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
📍 Delhi Photography Locations
</h2>
<button
onClick={onClose}
className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
>
<i className="ri-close-line text-lg sm:text-2xl text-gray-500"></i>
</button>
</div>

{/* Content */}
<div className="overflow-y-auto max-h-[calc(95vh-80px)]">
<div className="p-4 sm:p-6">

{/* Tabs */}
<div className="flex justify-center mb-6 sm:mb-8">
<div className="bg-gray-100 rounded-full p-1 flex flex-wrap gap-2 sm:gap-0">
<button
onClick={() => handleTabChange('popular')}
className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
activeTab === 'popular'
? 'bg-orange-500 text-white shadow-lg'
: 'text-gray-600 hover:text-gray-900'
}`}
>
🏛️ Popular
</button>
<button
onClick={() => handleTabChange('hidden')}
className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
activeTab === 'hidden'
? 'bg-orange-500 text-white shadow-lg'
: 'text-gray-600 hover:text-gray-900'
}`}
>
💎 Hidden Gems
</button>
</div>
</div>

{/* Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
{/* Left Column */}
<div className="space-y-3 sm:space-y-4">
{currentLocations.map((location, index) => (
<div
key={index}
onClick={() => setSelectedLocation(index)}
className={`group cursor-pointer p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
safeSelectedLocation === index
? 'border-orange-500 bg-orange-50 shadow-lg'
: 'border-gray-200 hover:border-orange-200 hover:bg-orange-50/50'
}`}
>
<div className="flex items-start gap-3 sm:gap-4">
<img
src={location.image}
alt={location.name}
className="w-16 h-14 sm:w-20 sm:h-16 object-cover rounded-lg sm:rounded-xl"
/>
<div className="flex-1">
<h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">
{location.name}
</h3>
<p className="text-xs sm:text-sm text-gray-600 mb-2">
{location.description}
</p>
</div>
</div>
</div>
))}
</div>

{/* Right Column */}
<div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
<div className="mb-4 sm:mb-6">
<img
src={selectedLocationData.image}
alt={selectedLocationData.name}
className="w-full h-36 sm:h-48 lg:h-56 object-cover rounded-lg sm:rounded-xl"
/>
</div>
<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
{selectedLocationData.name}
</h3>
<p className="text-sm sm:text-base text-gray-600 mb-4">
{selectedLocationData.description}
</p>


<button
onClick={onClose}

className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-transform hover:scale-105 shadow-lg"
>
📸 Book Session
</button>

</div>
</div>
</div>
</div>
</div>
</div>
);
}