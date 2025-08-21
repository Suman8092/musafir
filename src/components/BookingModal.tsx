interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    package: 'basic',
    location: '',
    guests: '1',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // 👇 apna Google Apps Script URL yahan daalo
  const SCRIPT_URL = "https://sheetdb.io/api/v1/wwqazq8psczy4";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Google Sheets ke liye zaroori
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          package: formData.package,
          location: formData.location,
          guests: formData.guests,
          message: formData.message,
          
        }).toString(),
      });

      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          package: 'basic',
          location: '',
          guests: '1',
          message: ''
        });
        onClose();
      }, 3000);

    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">📸 Book Your Delhi Shoot</h2>
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
            <h3 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h3>
            <p className="text-gray-600">
              We'll contact you within 2 hours to confirm your Delhi photography session.
            </p>
          </div>
        ) : (
          // ⬇️ aapka pura form as it is
          <form id="delhi-photography-booking" onSubmit={handleSubmit}>
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
<label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
<input
type="date"
name="date"
value={formData.date}
onChange={handleInputChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
min={new Date().toISOString().split('T')[0]}
required
/>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Package *</label>
<div className="relative">
<select
name="package"
value={formData.package}
onChange={handleInputChange}
className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors appearance-none cursor-pointer"
required
>
<option value="basic">📷 Basic - ₹1,499 (1 hour)</option>
<option value="basic-reel">📷 Basic + Reel - ₹2,198 (1 hour + Reel)</option>
<option value="half-day">🕓 Half Day - ₹3,999 (4-5 hours)</option>
<option value="full-day">🏙 Full Day - ₹6,999 (8 hours)</option>
<option value="custom">🧡 Custom Package</option>
</select>
<i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Location</label>
<input
type="text"
name="location"
value={formData.location}
onChange={handleInputChange}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
placeholder="India Gate, Lodhi Garden, Humayun's Tomb..."
/>
</div>

<div className="md:col-span-2">
<label className="block text-sm font-semibold text-gray-700 mb-2">Number of People</label>
<div className="flex gap-2">
{[1, 2, 3, 4, 5, '6+'].map((num) => (
<button
key={num}
type="button"
onClick={() => setFormData(prev => ({ ...prev, guests: num.toString() }))}
className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
formData.guests === num.toString()
? 'bg-orange-500 text-white'
: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
}`}
>
{num}
</button>
))}
</div>
</div>

<div className="md:col-span-2">
<label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
<textarea
name="message"
value={formData.message}
onChange={handleInputChange}
rows={3}
maxLength={500}
className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
placeholder="Any specific requirements, themes, or locations you'd like to include..."
/>
<div className="text-right text-sm text-gray-400 mt-1">
{formData.message.length}/500 characters
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
Processing...
</div>
) : (
'📸 Book My Shoot'
)}
</button>

<button
type="button"
onClick={() => window.open('https://wa.me/918092460529?text=Hi! I want to book a photography session in Delhi', '_blank')}
className="flex-1 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-4 rounded-xl text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
>
📱 Book via WhatsApp
</button>
</div>

<p className="text-center text-sm text-gray-500 mt-4">
By booking, you agree to our Terms & Conditions. We'll contact you within 2 hours to confirm details.
</p>
</form>
        )}
      </div>
    </div>
  );
}
