import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/work1.png",
    alt: "Furniture Work 1",
  },
  {
    src: "/images/work2.png",
    alt: "Furniture Work 2",
  },
  {
    src: "/images/work3.png",
    alt: "Furniture Work 3",
  },
  {
    src: "/images/img1.jpg",
    alt: "Furniture Work 4",
  },
  {
    src: "/images/img2.jpg",
    alt: "Furniture Work 5",
  },
  {
    src: "/images/img3.jpg",
    alt: "Furniture Work 6",
  },
];

export function GallerySection() {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-[#7D4FEC]/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#7D4FEC]">
          Our Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 italic text-lg">
          "જે કામ કરું, તે સંપૂર્ણ ઈમાનદારી અને નિપુણતા સાથે કરું, કારણ કે
          ગુણવત્તા ક્યારેય સમજૂતી સાથે નથી આવતી."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
