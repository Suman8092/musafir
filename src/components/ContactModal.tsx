
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
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
          subject: 'general',
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
          <h2 className="text-3xl font-bold text-gray-900">📞 Contact Us</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-2xl text-gray-500"></i>
          </button>
        </div>

        {showSuccess ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h3>
            <p className="text-gray-600">Thank you for contacting us! We'll get back to you within 2 hours during business hours.</p>
          </div>
        ) : (
          <div>
            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-phone-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                <p className="text-sm text-gray-600">+91-8092460529</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-whatsapp-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors group">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-mail-line text-xl text-white"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-sm text-gray-600">hello@musaffirhoon.com</p>
              </div>
            </div>

            <form id="contact-musaffirhoon" onSubmit={handleSubmit}>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Question</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="complaint">Complaint/Issue</option>
                      <option value="feedback">Feedback</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                    required
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
                      Sending...
                    </div>
                  ) : (
                    '📧 Send Message'
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => window.open('https://wa.me/918092460529?text=Hi! I need help with my photography booking', '_blank')}
                  className="flex-1 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-4 rounded-xl text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  💬 WhatsApp Chat
                </button>
              </div>
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-4">📍 Our Service Areas</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Primary Locations:</p>
                  <ul className="space-y-1">
                    <li>• India Gate & Rajpath</li>
                    <li>• Red Fort & Old Delhi</li>
                    <li>• Humayun's Tomb</li>
                    <li>• Qutub Minar Complex</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Popular Spots:</p>
                  <ul className="space-y-1">
                    <li>• Lodhi Garden</li>
                    <li>• Lotus Temple</li>
                    <li>• Connaught Place</li>
                    <li>• Chandni Chowk</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Our response time: Within 2 hours during business hours (9 AM - 8 PM IST)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
