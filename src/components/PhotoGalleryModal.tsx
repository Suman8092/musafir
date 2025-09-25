import { useState, useEffect } from "react";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: number;
}

export default function PhotoGalleryModal({
  isOpen,
  onClose,
  selectedImage,
}: PhotoGalleryModalProps) {
  const [currentImage, setCurrentImage] = useState(selectedImage);

  const galleryImages = [
    {
      src: "./assest/images/shoot2.jpg",
      title: "India Gate Session",
      description:
        "Professional travel photography capturing authentic moments at Delhi's most iconic landmark",
      location: "India Gate, New Delhi",
      photographer: "Rahul Sharma",
    },
    {
      src: "./assest/images/shoot3.jpg",
      title: "Romantic Couple Shoot",
      description:
        "Beautiful couple photography showcasing love against historic architecture",
      location: "Humayun's Tomb, Delhi",
      photographer: "Priya Gupta",
    },
    {
      src: "./assest/images/shoot1.jpg",
      title: "Content Creator Session",
      description:
        "Social media optimized photography for modern content creators",
      location: "Lodhi Garden, Delhi",
      photographer: "Arjun Mehta",
    },
  ];

  useEffect(() => {
    setCurrentImage(selectedImage);
  }, [selectedImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPhoto = galleryImages[currentImage];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
      >
        <i className="ri-close-line text-2xl text-white"></i>
      </button>

      {/* Navigation (Desktop only arrows on sides) */}
      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors z-10"
      >
        <i className="ri-arrow-left-line text-xl text-white"></i>
      </button>
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors z-10"
      >
        <i className="ri-arrow-right-line text-xl text-white"></i>
      </button>

      {/* Main Content */}
      <div className="max-w-6xl w-full h-[90vh] mx-4 bg-black/40 rounded-xl overflow-y-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div className="relative">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="w-full max-h-[70vh] object-cover rounded-xl"
            />
            <div className="absolute top-3 left-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
              {currentImage + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Details */}
          <div className="text-white space-y-4">
            <h2 className="text-xl md:text-3xl font-bold">
              {currentPhoto.title}
            </h2>
            <p className="text-gray-300 text-sm md:text-lg">
              {currentPhoto.description}
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <i className="ri-map-pin-line text-orange-400"></i>
                <span className="text-gray-300">{currentPhoto.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <i className="ri-camera-line text-orange-400"></i>
                <span className="text-gray-300">
                  Shot by {currentPhoto.photographer}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex flex-wrap gap-2 mt-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 ${
                    index === currentImage
                      ? "border-orange-400"
                      : "border-transparent hover:border-white/40"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={onClose}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold text-sm md:text-base"
              >
                📸 Book Similar Shoot
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/918092460529?text=Hi! I saw your portfolio and want to book a photography session in Delhi",
                    "_blank"
                  )
                }
                className="border border-white/30 hover:border-white hover:bg-white/10 text-white px-5 py-2 rounded-lg font-semibold text-sm md:text-base"
              >
                📱 WhatsApp Inquiry
              </button>
            </div>

            {/* Tips */}
            <div className="bg-white/10 rounded-lg p-3 mt-4 text-sm md:text-base">
              <h4 className="font-semibold mb-1 flex items-center gap-1">
                <i className="ri-lightbulb-line text-yellow-400"></i>
                Photography Tips
              </h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Best lighting: Golden hour (6-7 AM or 5-6 PM)</li>
                <li>• Dress code: Solid colors work best</li>
                <li>• Duration: Allow 1-2 hours for perfect shots</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions (only desktop) */}
      <div className="hidden md:block absolute bottom-3 left-1/2 -translate-x-1/2 text-white/70 text-xs text-center">
        <p>Use arrow keys • Press ESC to close</p>
      </div>
    </div>
  );
}
