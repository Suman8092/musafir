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