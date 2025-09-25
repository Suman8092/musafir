import { motion } from "framer-motion";
import CountUp from "react-countup";
import BookingModal from '../../components/BookingModal';
import PartnershipModal from '../../components/PartnershipModal';
import PhotoGalleryModal from '../../components/PhotoGalleryModal';
import ContactModal from '../../components/ContactModal';
import LocationGuideModal from '../../components/LocationGuideModal';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLocationGuideOpen, setIsLocationGuideOpen] = useState(false);
  

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handlePartnershipClick = () => {
    setIsPartnershipModalOpen(true);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Modern 3D Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with 3D effect */}
            <div className="flex items-center">
              <div className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: "Pacifico, serif" }}>
                <span className="relative">
                  Musaffirhoon
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                </span>
              </div>
            </div>

            {/* Desktop Navigation with 3D hover effects */}
         <div className="hidden lg:flex items-center space-x-8">

<button onClick={() => scrollToSection('services')} className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer ${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:text-orange-300 hover:bg-white/10'} hover:shadow-lg`}>
Services
</button>
<button onClick={() => scrollToSection('packages')} className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer ${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:text-orange-300 hover:bg-white/10'} hover:shadow-lg`}>
Packages
</button>
<button onClick={() => scrollToSection('portfolio')} className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer ${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:text-orange-300 hover:bg-white/10'} hover:shadow-lg`}>
Portfolio
</button>
<button onClick={() => scrollToSection('about')} className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer ${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:text-orange-300 hover:bg-white/10'} hover:shadow-lg`}>
About
</button>
<button onClick={() => setIsLocationGuideOpen(true)} className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer ${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:text-orange-300 hover:bg-white/10'} hover:shadow-lg`}>
Locations
</button>
{/* 3D CTA Button */}
<button onClick={handleBookingClick} className="relative px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 whitespace-nowrap cursor-pointer">
<span className="relative z-10">Book Now</span>
<div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
</button>

{/* Contact Button with 3D effect */}
<button onClick={() => setIsContactModalOpen(true)} className={`relative px-4 py-2 rounded-lg font-medium border-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer ${scrolled ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' : 'border-white text-white hover:bg-white hover:text-gray-900'} hover:shadow-lg whitespace-nowrap`}>
<i className="ri-phone-line mr-2"></i>
Contact
</button>
</div>

{/* Mobile menu button */}
<button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
<i className={`text-2xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
</button>
</div>

{/* Mobile Navigation with 3D effects */}
<div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
<div className="bg-white/95 backdrop-blur-md rounded-2xl mt-4 p-6 shadow-xl">
<div className="space-y-4">
<button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer">
Services
</button>
<button onClick={() => scrollToSection('packages')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer">
Packages
</button>
<button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer">
Portfolio
</button>
<button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer">
About
</button>
<button onClick={() => setIsLocationGuideOpen(true)} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer">
Locations
</button>
<div className="pt-4 space-y-3">
<button onClick={handleBookingClick} className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap">
Book Now
</button>
<button onClick={() => setIsContactModalOpen(true)} className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
<i className="ri-phone-line mr-2"></i>
Contact Us
</button>
</div>
</div>
</div>
</div>
</div>
</nav>
{/* Hero Section Main */}
    <section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('./assest/images/shoot6.jpg')`,
  }}
>
  <div className="container mx-auto px-4 sm:px-6 text-white relative z-10 text-center sm:text-left">
    <div className="max-w-4xl mx-auto sm:mx-0">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-grotesk"
      >
        Capture Your Delhi Journey Like a
        <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          {" "}
          Movie
        </span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 leading-relaxed opacity-90 font-poppins"
      >
        Book verified photographers & videographers to shoot your travel moments
        at iconic locations across Delhi & Agra.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
      >
        <button
          onClick={handleBookingClick}
          className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 whitespace-nowrap cursor-pointer overflow-hidden group font-poppins"
        >
          <span className="relative z-10">Book Your Shoot Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>

        <button
          onClick={handlePartnershipClick}
          className="relative border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl whitespace-nowrap cursor-pointer overflow-hidden group font-poppins"
        >
          <span className="relative z-10">Partner With Us</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </motion.div>
    </div>
  </div>
</section>



      {/* What We Offer Section with 3D cards */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-100 to-red-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Professional photography services for travelers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[ 
              { icon: "ri-camera-3-line", title: "Cinematic Travel Shoots", desc: "Professional photography capturing your Delhi experience" },
              { icon: "ri-video-line", title: "Reels & Videos", desc: "Instagram-ready reels, portraits, couple sessions, and influencer-style videos" },
              { icon: "ri-gift-line", title: "Flexible Packages", desc: "Packages from 1 hour to full day shoots" },
              { icon: "ri-calendar-check-line", title: "Easy Booking", desc: "Book easily via online form or WhatsApp" },
              { icon: "ri-time-line", title: "Quick Delivery", desc: "Get your photos and videos within 72 hours" },
              { icon: "ri-global-line", title: "Global Service", desc: "Digital delivery worldwide with multilingual support" }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                {/* 3D card background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={handleBookingClick} className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 whitespace-nowrap cursor-pointer overflow-hidden group">
              <span className="relative z-10">Plan My Shoot</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* For Tourists Section with 3D elements */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
        {/* 3D Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-4 h-4 bg-orange-400 rounded-full transform rotate-45"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-red-400 rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-3 h-3 bg-orange-300 rounded-full transform rotate-45"></div>
          <div className="absolute bottom-40 right-10 w-5 h-5 bg-red-300 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Travelers Love Musaffirhoon</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[ 
              { icon: "ri-shield-check-line", title: "Verified Photographers", desc: "All our photographers & videographers are verified professionals" },
              { icon: "ri-money-dollar-circle-line", title: "Transparent Pricing", desc: "No hidden fees, clear pricing for all packages" },
              { icon: "ri-instagram-line", title: "Social Media Ready", desc: "Reels & photos optimized for Instagram and social platforms" },
              { icon: "ri-send-plane-line", title: "Global Delivery", desc: "Digital delivery anywhere in the world" },
              { icon: "ri-translate-2", title: "Multilingual Support", desc: "We speak your language comfort guaranteed" },
              { icon: "ri-flashlight-line", title: "Quick Turnaround", desc: "Fast delivery within 48-72 hours" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg hover:shadow-2xl hover:shadow-orange-500/25">
                  <i className={`${item.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonials with 3D cards */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[ 
                { quote: "Amazing experience! The photographer knew all the best spots in Delhi. Our photos look professional and Instagram-ready!", author: "Suman, India" },
                { quote: "Perfect service for tourists. Easy booking, great communication, and fantastic results. Highly recommended!", author: "Rohit, India" },
                { quote: "The reels they created for our Delhi trip got thousands of views! Professional quality at affordable prices.", author: "Arvind, India" }
              ].map((testimonial, index) => (
                <div key={index} className="text-center p-6 group hover:bg-gray-50 rounded-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-2">
                    <i className="ri-double-quotes-l text-orange-500"></i>
                  </div>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">"{testimonial.quote}"</p>
                  <p className="font-semibold text-orange-600">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Freelancers Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* 3D Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Creator Network</h2>
            <p className="text-xl mb-8 opacity-90">Are you a freelance photographer or videographer in Delhi?</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[ 
                { icon: "ri-briefcase-line", title: "Regular Work", desc: "Frequent paid shoots with verified tourists" },
                { icon: "ri-time-line", title: "Flexible Schedule", desc: "Work on your schedule, at your rates" },
                { icon: "ri-check-double-line", title: "Zero Hassle", desc: "We handle clients, payments, and delivery" },
                { icon: "ri-shield-star-line", title: "Protection", desc: "Dispute protection & fast payouts" },
                { icon: "ri-star-line", title: "Get Featured", desc: "Featured on our platform & Instagram" },
                { icon: "ri-money-dollar-box-line", title: "Good Earnings", desc: "Competitive rates with regular income" }
              ].map((item, index) => (
                <div key={index} className="group bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <i className={`${item.icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item.desc}</p>
                </div>
              ))}
            </div>

            <button onClick={handlePartnershipClick} className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 whitespace-nowrap cursor-pointer overflow-hidden group">
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* For Travel Agencies Section */}
      <section className="py-20 bg-blue-50 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-2xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner With Us – Earn on Every Referral</h2>
            <p className="text-xl text-gray-600 mb-12">Add premium photo & video shoot services to your travel package with zero setup cost.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[ 
                { icon: "ri-money-dollar-circle-line", title: "Commission Earnings", desc: "Earn commission on every confirmed booking" },
                { icon: "ri-qr-code-line", title: "Custom Links", desc: "Get custom QR & WhatsApp booking links" },
                { icon: "ri-image-line", title: "Marketing Material", desc: "Promotional flyers & digital marketing material" },
                { icon: "ri-star-smile-line", title: "Better Reviews", desc: "Improved client satisfaction and feedback" },
                { icon: "ri-check-line", title: "Zero Work", desc: "We manage everything - you just refer" },
                { icon: "ri-arrow-up-line", title: "Grow Revenue", desc: "Additional revenue stream with no investment" }
              ].map((item, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <i className={`${item.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handlePartnershipClick} className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 whitespace-nowrap cursor-pointer overflow-hidden group">
              <span className="relative z-10">Become a Partner</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Packages Section with 3D cards */}
      <section id="packages" className="py-20 bg-white relative overflow-hidden">
        {/* 3D Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-orange-300 rounded-full"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-red-300 rounded-full"></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-red-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your Delhi adventure</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[ 
                { icon: "ri-camera-line", title: "Basic", price: "₹1,499", duration: "1 hour session", features: ["30+ edited photos", "Professional editing", "72-hour delivery"], gradient: "from-orange-50 to-red-50", border: "border-orange-200", priceColor: "text-orange-600" },
                { icon: "ri-video-add-line", title: "Reels Add-on", price: "+₹699", duration: "Additional service", features: ["1 cinematic Instagram reel", "Music & transitions", "Social media optimized"], gradient: "from-purple-50 to-pink-50", border: "border-purple-200", priceColor: "text-purple-600" },
                { icon: "ri-time-line", title: "Half Day", price: "₹3,999", duration: "4-5 hours session", features: ["Key Delhi locations", "100+ edited photos", "2 Instagram reels"], gradient: "from-blue-50 to-cyan-50", border: "border-blue-200", priceColor: "text-blue-600" },
                { icon: "ri-sun-line", title: "Full Day", price: "₹6,999", duration: "8 hours session", features: ["All major spots", "200+ edited photos", "Drone option available"], gradient: "from-green-50 to-emerald-50", border: "border-green-200", priceColor: "text-green-600" }
              ].map((pkg, index) => (
                <div key={index} className={`group bg-gradient-to-br ${pkg.gradient} p-8 rounded-3xl border-2 ${pkg.border} hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden`}>
                  {/* 3D background effect */}
                  <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <i className={`${pkg.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <div className={`text-3xl font-bold ${pkg.priceColor} mb-4`}>{pkg.price}</div>
                    <p className="text-sm text-gray-600 mb-4">{pkg.duration}</p>
                    <ul className="space-y-2 text-sm">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <i className="ri-check-line text-green-500 mr-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Packages Available</h3>
              <p className="text-lg text-gray-600 mb-6">Custom packages for couples, families, and content creators</p>
              <button onClick={handleBookingClick} className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 whitespace-nowrap cursor-pointer overflow-hidden group">
                <span className="relative z-10">Get Custom Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section with 3D gallery */}
     <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-full blur-xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-2xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
            <p className="text-xl text-gray-600">See what our talented photographers capture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[ 
              {
                src: "./assest/images/lotust.jpg",
                alt: "Client shoot at India Gate"
              },
              {
                src: "./assest/images/lotust2.jpg",
                alt: "Couple shoot at Humayun's Tomb"
              },
              {
                src: "./assest/images/shoot4.jpg",
                alt: "Influencer shoot at Lodhi Garden"
              }
            ].map((image, index) => (
              <div key={index} className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2" onClick={() => handleImageClick(index)}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img src={image.src} alt={image.alt} className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-2xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <i className="ri-eye-line text-3xl text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3D hover effect border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur"></div>
              </div>
            ))}
          </div>

          

  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
  <div className="grid md:grid-cols-3 gap-8 text-center">
    {[
      { number: 500, suffix: "+", label: "Happy Travelers" },
      { number: 50, suffix: "+", label: "Verified Photographers" },
      { number: 25, suffix: "+", label: "Iconic Locations" }
    ].map((stat, index) => (
      <div key={index} className="group">
        <div className="text-4xl font-bold text-orange-600 mb-2 transform group-hover:scale-110 transition-transform duration-300">
          <CountUp 
            end={stat.number} 
            duration={3} 
            enableScrollSpy={true}   // 👈 scroll par start hoga
            scrollSpyOnce={true}     // 👈 ek hi baar chalega
          />
          {stat.suffix}
        </div>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>



      {/* About Section with 3D elements */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-yellow-200/25 to-orange-200/25 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Musaffirhoon</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your trusted partner for capturing memorable travel moments in Delhi with professional photographers and videographers</p>
            </div>

            {/* Story Section with 3D cards */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Founded in 2022, Musaffirhoon started with a simple mission: to help travelers capture their Delhi experience professionally and affordably. We noticed that tourists often struggled to get quality photos of themselves at Delhi's iconic landmarks.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    What began as a small team of passionate photographers has grown into Delhi's most trusted travel photography platform, serving hundreds of happy travelers from around the world.
                  </p>
                </div>
                {/* 3D effect border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-20 blur -z-10"></div>
              </div>

              <div className="relative group">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20photography%20team%20at%20work%20in%20Delhi%2C%20diverse%20group%20of%20photographers%20with%20cameras%20and%20equipment%2C%20India%20Gate%20in%20background%2C%20warm%20lighting%2C%20team%20collaboration%2C%20creative%20professionals%2C%20friendly%20atmosphere%2C%20modern%20photography%20gear&width=600&height=400&seq=about-team&orientation=landscape"
                  alt="Our photography team"
                  className="w-full rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 object-cover object-top"
                />
                {/* 3D hover effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur"></div>
              </div>
            </div>

            {/* Mission & Vision with 3D cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <i className="ri-target-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    To make professional travel photography accessible to every visitor in Delhi, creating lasting memories through authentic, high-quality visual storytelling that captures the essence of their journey.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <i className="ri-eye-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    To become India's leading travel photography platform, expanding to major tourist destinations while maintaining our commitment to quality, affordability, and exceptional customer experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Values with 3D grid */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden mb-16">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[ 
                  { icon: "ri-shield-check-line", title: "Trusted Quality", desc: "Verified photographers with proven track records" },
                  { icon: "ri-heart-line", title: "Passion-Driven", desc: "We genuinely love what we do and it shows in our work" },
                  { icon: "ri-customer-service-2-line", title: "24/7 Support", desc: "Always here to help before, during, and after your shoot" },
                  { icon: "ri-rocket-line", title: "Innovation", desc: "Latest photography techniques and social media trends" }
                ].map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg hover:shadow-xl">
                      <i className={`${value.icon} text-2xl text-white`}></i>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{value.title}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Stats with 3D counters */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
  {[
    { number: 2, suffix: "+", label: "Years Experience", icon: "ri-calendar-line" },
    { number: 500, suffix: "+", label: "Happy Clients", icon: "ri-user-smile-line" },
    { number: 50, suffix: "+", label: "Pro Photographers", icon: "ri-camera-line" },
    { number: 25, suffix: "+", label: "Delhi Locations", icon: "ri-map-pin-line" }
  ].map((stat, index) => (
    <div
      key={index}
      className="text-center group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
          <i className={`${stat.icon} text-xl text-white`}></i>
        </div>
        <div className="text-3xl font-bold text-orange-600 mb-1 transform group-hover:scale-110 transition-transform duration-300">
          <CountUp end={stat.number} duration={3} />{stat.suffix}
        </div>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {stat.label}
        </p>
      </div>
    </div>
  ))}
</div>
            {/* Call to Action with 3D button */}
            <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white relative overflow-hidden">
              {/* 3D background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to Capture Your Delhi Story?</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Join hundreds of happy travelers who've chosen Musaffirhoon for their Delhi photography experience</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={handleBookingClick} className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                    <span className="relative z-10">Book Your Shoot</span>
                    <div className="absolute inset-0 bg-gray-100 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  <button onClick={() => window.open('https://wa.me/919599081863?text=Hi! I want to know more about your photography services', '_blank')} className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl whitespace-nowrap cursor-pointer">
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="ri-whatsapp-line mr-2"></i>
                      Chat With Us
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with 3D cards */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-orange-100 to-red-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our photography services</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[ 
                {
                  question: "How far in advance should I book my photo session?",
                  answer: "We recommend booking at least 2-3 days in advance to ensure availability. However, we also accept same-day bookings based on photographer availability. During peak tourist seasons (October-March), booking 1 week ahead is ideal."
                },
                {
                  question: "What happens if it rains during my shoot?",
                  answer: "Delhi weather can be unpredictable! We offer free rescheduling if there's heavy rain. Light rain can actually create beautiful, dramatic photos. We'll work with you to find the best solution and ensure you get amazing shots."
                },
                {
                  question: "Can I choose my photographer?",
                  answer: "Absolutely! You can view our photographer profiles and select your preferred photographer when booking. Each photographer has their unique style and specialties. We'll match you with the best photographer for your specific needs."
                },
                {
                  question: "How long does it take to receive my photos?",
                  answer: "You'll receive a sneak peek within 24 hours! The complete edited gallery is delivered within 48-72 hours via digital download. Rush delivery (within 24 hours) is available for an additional fee."
                },
                {
                  question: "Do you provide props or costumes?",
                  answer: "We provide basic props like colorful scarves, balloons, and traditional accessories upon request. For special themed shoots or costumes, we can arrange them with advance notice for an additional fee."
                },
                {
                  question: "Can you shoot at locations not listed on your website?",
                  answer: "Yes! We're familiar with many hidden gems in Delhi. Custom locations are welcome, though some may require additional travel fees. We'll help you choose the perfect spots for your vision."
                }
              ].map((faq, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden">
                  <details className="cursor-pointer">
                    <summary className="p-6 flex items-center justify-between font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      <span>{faq.question}</span>
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-180 transition-all duration-300">
                        <i className="ri-arrow-down-s-line text-white"></i>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Our friendly team is here to help you plan the perfect photo session</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 whitespace-nowrap cursor-pointer">
                  Contact Support
                </button>
                <button onClick={() => window.open('https://wa.me/919599081863?text=Hi! I have some questions about your photography services', '_blank')} className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 whitespace-nowrap cursor-pointer">
                  <i className="ri-whatsapp-line mr-2"></i>
                  WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Reviews Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full blur-xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-2xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Client Reviews</h2>
            <p className="text-xl text-gray-600">See what our recent clients are saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[ 
              {
                name: "Mannat Thakur",
                country: "Delhi, India",
                rating: 5,
                date: "2 days ago",
                review: "Absolutely incredible experience! The photographer knew all the perfect spots and angles. Our photos look like they're from a professional magazine. Highly recommend!",
                avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20woman%20smiling%2C%20blonde%20hair%2C%20casual%20outfit%2C%20warm%20lighting%2C%20friendly%20expression%2C%20travel%20blogger%20style&width=100&height=100&seq=review-1&orientation=squarish"
              },
              {
                name: "Pehal Rajpoot",
                country: "Jammu, India",
                rating: 5,
                date: "5 days ago", 
                review: "Perfect service from start to finish! Communication was excellent, and the photos exceeded our expectations. The Instagram reel they created got over 50k views!",
                avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20man%20smiling%2C%20dark%20hair%2C%20casual%20shirt%2C%20warm%20lighting%2C%20confident%20expression%2C%20travel%20enthusiast%20style&width=100&height=100&seq=review-2&orientation=squarish"
              },
              {
                name: "Surbhi Pathaniya",
                country: "Punjab, india",
                rating: 5,
                date: "1 week ago",
                review: "Amazing photographer and wonderful experience! They helped us feel comfortable and captured our personalities perfectly. The editing quality is top-notch. Thank you!",
                avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20Asian%20woman%20smiling%2C%20black%20hair%2C%20stylish%20outfit%2C%20warm%20lighting%2C%20cheerful%20expression%2C%20modern%20traveler%20style&width=100&height=100&seq=review-3&orientation=squarish"
              }
            ].map((review, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover object-top mr-4 transform group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.country} • {review.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-lg transform group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }}></i>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">"{review.review}"</p>
                  
                  <div className="flex items-center mt-4 text-sm text-green-600 font-medium">
                    <i className="ri-check-double-line mr-1"></i>
                    Verified Booking
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center mr-6">
                <span className="text-3xl font-bold mb-2 text-orange-600">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                  ))}
                </div>
              </div>
              <div className="text-gray-600">
                <div className="font-semibold">500+ Reviews</div>
                <div className="text-sm">Average Rating</div>
              </div>
            </div>
            <p className="text-gray-600 mb-6">Join hundreds of happy travelers who chose Musaffirhoon for their Delhi photography experience</p>
            <button onClick={handleBookingClick} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 whitespace-nowrap cursor-pointer">
              Book Your Session
            </button>
          </div>
        </div>
      </section>
{/*
       Special Offers Section 
                             Limited Time Offer

      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-5 h-5 bg-white rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-3000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Limited Time Offers</h2>
            <p className="text-xl opacity-90">Don't miss these amazing deals for your Delhi photo session</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-white/15 group">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-2xl flex items-center justify-center mr-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <i className="ri-gift-2-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">First-Timer Special</h3>
                  <p className="opacity-90">20% OFF your first booking</p>
                </div>
              </div>
              <p className="text-lg opacity-80 mb-4">New to Delhi? Get 20% off any package + complimentary location recommendations</p>
              <div className="bg-white/20 rounded-xl p-4 mb-6">
                <div className="text-sm font-medium opacity-90 mb-1">Promo Code:</div>
                <div className="text-2xl font-bold tracking-wider">DELHI20</div>
              </div>
              <button onClick={handleBookingClick} className="w-full bg-white text-orange-600 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                Claim This Offer
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-white/15 group">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-300 rounded-2xl flex items-center justify-center mr-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <i className="ri-heart-3-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Couple's Package</h3>
                  <p className="opacity-90">Buy 1 Get 1 Reel Free</p>
                </div>
              </div>
              <p className="text-lg opacity-80 mb-4">Perfect for couples! Book any package and get an additional Instagram reel absolutely free</p>
              <div className="bg-white/20 rounded-xl p-4 mb-6">
                <div className="text-sm font-medium opacity-90 mb-1">Valid Until:</div>
                <div className="text-2xl font-bold">Dec 31, 2024</div>
              </div>
              <button onClick={handleBookingClick} className="w-full bg-white text-red-600 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                Book Couple's Special
              </button>
            </div>
          </div>

          <div className="text-center mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4"> Group Booking Discounts</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3-5 People</div>
                <div className="text-lg opacity-90">15% OFF</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6-10 People</div>
                <div className="text-lg opacity-90">25% OFF</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+ People</div>
                <div className="text-lg opacity-90">35% OFF</div>
              </div>
            </div>
            <p className="opacity-90 mb-6">Traveling with friends or family? The more people, the bigger the savings!</p>
            <button onClick={handleBookingClick} className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Get Group Quote
            </button>
          </div>
        </div>
      </section>
*/}
      {/* Footer with 3D elements */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
  {/* Background Blurs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-xl"></div>
    <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Footer Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
      {/* Brand Section */}
      <div className="group text-center sm:text-left">
        <h3
          className="text-2xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-300"
          style={{ fontFamily: "Pacifico, serif" }}
        >
          Musaffirhoon
        </h3>
        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
          Capturing your Delhi journey like a movie
        </p>
        <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 space-y-2">
          <p className="flex items-center justify-center sm:justify-start">
            <i className="ri-map-pin-line mr-2 text-orange-500"></i>
            Delhi, India
          </p>
          <p className="flex items-center justify-center sm:justify-start">
            <i className="ri-mail-line mr-2 text-orange-500"></i>
            contact@musaffirhoon.com
          </p>
          <p className="flex items-center justify-center sm:justify-start">
            <i className="ri-phone-line mr-2 text-orange-500"></i>
            +91-9599081863
          </p>
        </div>
      </div>

      {/* Travelers Section */}
      <div className="group text-center sm:text-left">
        <h4 className="text-lg font-semibold mb-4 transform group-hover:scale-105 transition-transform duration-300">
          For Travelers
        </h4>
        <ul className="space-y-2 text-gray-400">
          {["Book a Shoot", "Our Packages", "Popular Locations", "How it Works"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="hover:text-orange-400 transition-colors cursor-pointer transform hover:translate-x-1 inline-block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Partnerships Section */}
      <div className="group text-center sm:text-left">
        <h4 className="text-lg font-semibold mb-4 transform group-hover:scale-105 transition-transform duration-300">
          Partnerships
        </h4>
        <ul className="space-y-2 text-gray-400">
          {["Join as Creator", "Partner With Us", "Travel Agency Program", "Affiliate Program"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="hover:text-orange-400 transition-colors cursor-pointer transform hover:translate-x-1 inline-block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social + Policies */}
      <div className="group text-center sm:text-left">
        <h4 className="text-lg font-semibold mb-4 transform group-hover:scale-105 transition-transform duration-300">
          Connect
        </h4>
        <div className="flex justify-center sm:justify-start space-x-4 mb-4">
          <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-orange-500/25">
            <i className="ri-instagram-line text-lg"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-green-500/25">
            <i className="ri-whatsapp-line text-lg"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-red-500/25">
            <i className="ri-youtube-line text-lg"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25">
            <i className="ri-facebook-line text-lg"></i>
          </a>
        </div>
        <ul className="space-y-2 text-gray-400 text-sm">
          {["Terms & Conditions", "Privacy Policy", "Contact Us"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="hover:text-orange-400 transition-colors cursor-pointer transform hover:translate-x-1 inline-block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
      <p className="transform hover:scale-105 transition-transform duration-300 inline-block">
        © 2024 Musaffirhoon. All rights reserved. Made with ❤️ for travelers in Delhi
      </p>
    </div>
  </div>
</footer>


      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      {/* Partnership Modal */}
      <PartnershipModal isOpen={isPartnershipModalOpen} onClose={() => setIsPartnershipModalOpen(false)} />

      {/* Photo Gallery Modal */}
      <PhotoGalleryModal isOpen={isGalleryModalOpen} onClose={() => setIsGalleryModalOpen(false)} selectedImage={selectedImageIndex} />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Location Guide Modal */}
      <LocationGuideModal isOpen={isLocationGuideOpen} onClose={() => setIsLocationGuideOpen(false)} />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => window.open('https://wa.me/919599081863?text=Hi! I want to book a photography session in Delhi', '_blank')}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-bounce cursor-pointer"
        >
          <i className="ri-whatsapp-line"></i>
        </button>
        <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us!
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 z-40 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl cursor-pointer ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>
    </div>
  );
}
