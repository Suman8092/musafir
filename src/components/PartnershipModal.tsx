interface PartnershipModalProps {
isOpen: boolean;
onClose: () => void;
}

export default function PartnershipModal({ isOpen, onClose }: PartnershipModalProps) {
const [formData, setFormData] = useState({
name: '',
email: '',
phone: '',
company: '',
partnerType: 'travel-agency',
experience: '',
location: '',
website: '',
message: ''
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
const { name, value } = e.target;
setFormData(prev => ({
...prev,
[name]: value
}));
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setIsSubmitting(true);

// Simulate form submission
setTimeout(() => {
setIsSubmitting(false);
setShowSuccess(true);
// Reset form after 3 seconds
setTimeout(() => {
setShowSuccess(false);
setFormData({
name: '',
email: '',
phone: '',
company: '',
partnerType: 'travel-agency',
experience: '',
location: '',
website: '',
message: ''
});
onClose();
}, 3000);
}, 2000);
};

if (!isOpen) return null;

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
<div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
<div className="flex justify-between items-center mb-6">
<h2 className="text-3xl font-bold text-gray-900">🤝 Partner With Musaffirhoon</h2>
<button
onClick={onClose}
className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
>
<i className="ri-close-line text-2xl text-gray-500"></i>
</button>
</div>

{showSuccess ? (
<div className="text-center py-8">
<div className="text-6xl mb-4">🎉</div>
<h3 className="text-2xl font-bold text-green-600 mb-4">Application Submitted!</h3>
<p className="text-gray-600">Thank you for your interest! Our partnership team will contact you within 24 hours to discuss opportunities.</p>
</div>
) : (
<form id="musaffirhoon-partnership" onSubmit={handleSubmit}>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handleInputChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
placeholder="Enter your full name"
required
/>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleInputChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
placeholder="your@email.com"
required
/>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
<input
type="tel"
name="phone"
value={formData.phone}
onChange={handleInputChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
placeholder="+91 XXXXXXXXXX"
required
/>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Company/Organization</label>
<input
type="text"
name="company"
value={formData.company}
onChange={handleInputChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
placeholder="Company or organization name"
/>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Type *</label>
<div className="relative">
<select
name="partnerType"
value={formData.partnerType}
onChange={handleInputChange}
className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors appearance-none cursor-pointer"
required
>
<option value="travel-agency">🏢 Travel Agency/Tour Operator</option>
<option value="photographer">📸 Photographer/Videographer</option>
<option value="influencer">📱 Content Creator/Influencer</option>
<option value="hotel">🏨 Hotel/Accommodation</option>
<option value="affiliate">💰 Affiliate Marketer</option>
<option value="other">🔗 Other Partnership</option>
</select>
<i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience</label>
<input
type="text"
name="experience"
value={formData.experience}
onChange={handleInputChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
placeholder="e.g., 3 years, 5+ years"
/>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Location/City *</label>
<input
type="text"
name="location"
value={formData.location}
onChange={handleInputChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
placeholder="Delhi, Mumbai, Bangalore..."
required
/>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Website/Portfolio</label>
<input
type="url"
name="website"
value={formData.website}
onChange={handleInputChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
placeholder="https://your-website.com"
/>
</div>

<div className="md:col-span-2">
<label className="block text-sm font-semibold text-gray-700 mb-2">Tell Us More About Your Business</label>
<textarea
name="message"
value={formData.message}
onChange={handleInputChange}
rows={4}
maxLength={500}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
placeholder="Describe your business, services, target audience, and how you'd like to partner with us..."
/>
<div className="text-right text-sm text-gray-400 mt-1">
{formData.message.length}/500 characters
</div>
</div>
</div>

{/* Partnership Benefits Preview */}
<div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 mt-6">
<h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Partnership Benefits</h3>
<div className="grid md:grid-cols-2 gap-4 text-sm">
<div className="flex items-center">
<i className="ri-check-line text-green-500 mr-2"></i>
<span>Commission on every booking</span>
</div>
<div className="flex items-center">
<i className="ri-check-line text-green-500 mr-2"></i>
<span>Custom referral links & QR codes</span>
</div>
<div className="flex items-center">
<i className="ri-check-line text-green-500 mr-2"></i>
<span>Marketing support & materials</span>
</div>
<div className="flex items-center">
<i className="ri-check-line text-green-500 mr-2"></i>
<span>Regular income opportunity</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 mt-8">
<button
type="submit"
disabled={isSubmitting}
className={`flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
}`}
>
{isSubmitting ? (
<div className="flex items-center justify-center gap-2">
<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
Submitting...
</div>
) : (
' Submit Partnership Application'
)}
</button>

<button
type="button"
onClick={() => window.open('https://wa.me/919599081863?text=Hi! I want to discuss partnership opportunities with Musaffirhoon', '_blank')}
className="flex-1 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-4 rounded-xl text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
>
Chat on WhatsApp
</button>
</div>

<p className="text-center text-sm text-gray-500 mt-4">
By applying, you agree to our Partnership Terms. We'll review your application and get back to you within 24-48 hours.
</p>
</form>
)}
</div>
</div>
);
}