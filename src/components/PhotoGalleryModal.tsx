
interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: number;
}

export default function PhotoGalleryModal({ isOpen, onClose, selectedImage }: PhotoGalleryModalProps) {
  const [currentImage, setCurrentImage] = useState(selectedImage);

  const galleryImages = [
    {
      src: "https://readdy.ai/api/search-image?query=Professional%20travel%20photography%20session%20at%20India%20Gate%20Delhi%20with%20happy%20tourists%20posing%2C%20golden%20hour%20lighting%2C%20cinematic%20composition%2C%20photographer%20in%20background%2C%20authentic%20travel%20moments%2C%20joyful%20expressions%2C%20iconic%20landmark&width=800&height=1000&seq=gallery-1&orientation=portrait",
      title: "India Gate Session",
      description: "Professional travel photography capturing authentic moments at Delhi's most iconic landmark",
      location: "India Gate, New Delhi",
      photographer: "Rahul Sharma"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Couple%20photography%20session%20at%20Humayuns%20Tomb%20Delhi%2C%20romantic%20poses%2C%20professional%20photographer%20capturing%20moment%2C%20beautiful%20architecture%20background%2C%20warm%20sunset%20lighting%2C%20love%20story%20photoshoot%2C%20heritage%20monument%20setting&width=800&height=1000&seq=gallery-2&orientation=portrait",
      title: "Romantic Couple Shoot",
      description: "Beautiful couple photography showcasing love against historic architecture",
      location: "Humayun's Tomb, Delhi",
      photographer: "Priya Gupta"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Instagram%20influencer%20content%20creation%20shoot%20at%20Lodhi%20Garden%20Delhi%2C%20trendy%20poses%2C%20smartphone%20and%20camera%20setup%2C%20content%20creator%20with%20photographer%2C%20vibrant%20colors%2C%20social%20media%20style%20photography%2C%20garden%20background&width=800&height=1000&seq=gallery-3&orientation=portrait",
      title: "Content Creator Session",
      description: "Social media optimized photography for modern content creators",
      location: "Lodhi Garden, Delhi",
      photographer: "Arjun Mehta"
    }
  ];

  useEffect(() => {
    setCurrentImage(selectedImage);
  }, [selectedImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPhoto = galleryImages[currentImage];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
      >
        <i className="ri-close-line text-2xl text-white"></i>
      </button>

      {/* Navigation Buttons */}
      <button 
        onClick={prevImage}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
      >
        <i className="ri-arrow-left-line text-2xl text-white"></i>
      </button>

      <button 
        onClick={nextImage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
      >
        <i className="ri-arrow-right-line text-2xl text-white"></i>
      </button>

      {/* Main Content */}
      <div className="max-w-6xl w-full mx-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative">
          <img 
            src={currentPhoto.src}
            alt={currentPhoto.title}
            className="w-full max-h-[80vh] object-cover object-top rounded-2xl"
          />
          
          {/* Image Counter */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Details */}
        <div className="text-white space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">{currentPhoto.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{currentPhoto.description}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-map-pin-line text-orange-400"></i>
              </div>
              <span className="text-gray-300">{currentPhoto.location}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-camera-line text-orange-400"></i>
              </div>
              <span className="text-gray-300">Shot by {currentPhoto.photographer}</span>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-3 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                  index === currentImage ? 'border-orange-400' : 'border-transparent hover:border-white/50'
                }`}
              >
                <img 
                  src={galleryImages[index].src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button 
              onClick={onClose}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              📸 Book Similar Shoot
            </button>
            
            <button 
              onClick={() => window.open('https://wa.me/918092460529?text=Hi! I saw your portfolio and want to book a photography session in Delhi', '_blank')}
              className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              📱 WhatsApp Inquiry
            </button>
          </div>

          {/* Tips */}
          <div className="bg-white/10 rounded-xl p-4 mt-6">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <i className="ri-lightbulb-line text-yellow-400"></i>
              Photography Tips
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Best lighting: Golden hour (6-7 AM or 5-6 PM)</li>
              <li>• Dress code: Solid colors work best for photos</li>
              <li>• Duration: Allow 1-2 hours for perfect shots</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
        <p>Use arrow keys to navigate • Press ESC to close</p>
      </div>
    </div>
  );
}
