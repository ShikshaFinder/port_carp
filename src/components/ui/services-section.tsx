import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const services = [
  {
    id: 1,
    title: "Residential Furniture",
    category: "residential",
    image: "/images/img1.jpg",
    description: "Custom furniture for your home",
  },
  {
    id: 2,
    title: "Color Consultation",
    category: "color",
    image: "/images/img2.jpg",
    description: "Expert color matching services",
  },
  {
    id: 3,
    title: "Sofa Collection",
    category: "sofa",
    image: "/images/img3.jpg",
    description: "Premium sofa designs",
  },
  {
    id: 4,
    title: "Custom Wardrobes",
    category: "residential",
    image: "/images/img4.jpg",
    description: "Tailored storage solutions",
  },
  {
    id: 5,
    title: "Color Finishing",
    category: "color",
    image: "/images/work1.png",
    description: "Professional finishing services",
  },
  {
    id: 6,
    title: "Luxury Sofas",
    category: "sofa",
    image: "/images/work2.png",
    description: "High-end sofa collections",
  },
];

const categories = ["all", "residential", "color", "sofa"];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const router = useRouter();

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const handleCardClick = (id: number) => {
    router.push(`/services/${id}`);
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-[#7D4FEC]/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#7D4FEC]">
          Our Services
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                activeCategory === category
                  ? "bg-[#7D4FEC] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleCardClick(service.id)}
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#7D4FEC]">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
