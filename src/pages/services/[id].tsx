import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Residential Furniture",
    category: "residential",
    image: "/images/img1.jpg",
    description: "Custom furniture for your home",
    details: {
      features: [
        "Custom designs tailored to your space",
        "Premium quality materials",
        "Expert craftsmanship",
        "On-site consultation",
        "Timely delivery and installation",
      ],
      process: [
        "Initial consultation to understand your needs",
        "Design proposal with 3D visualization",
        "Material selection and approval",
        "Crafting process with regular updates",
        "Final delivery and installation",
      ],
    },
  },
  {
    id: 2,
    title: "Color Consultation",
    category: "color",
    image: "/images/img2.jpg",
    description: "Expert color matching services",
    details: {
      features: [
        "Professional color analysis",
        "Custom color matching",
        "Material-specific recommendations",
        "Lighting consideration",
        "Color psychology guidance",
      ],
      process: [
        "Color preference assessment",
        "Material and finish analysis",
        "Sample preparation",
        "Color testing and approval",
        "Final application",
      ],
    },
  },
  {
    id: 3,
    title: "Sofa Collections",
    category: "sofa",
    image: "/images/img3.jpg",
    description: "Premium sofa designs",
    details: {
      features: [
        "Luxury upholstery options",
        "Customizable dimensions",
        "Ergonomic design",
        "Durable frame construction",
        "Premium cushioning",
      ],
      process: [
        "Style and size selection",
        "Material and fabric choice",
        "Customization options",
        "Production process",
        "Quality inspection and delivery",
      ],
    },
  },
  {
    id: 4,
    title: "Office Furniture",
    category: "office",
    image: "/images/img4.jpg",
    description: "Professional office furniture solutions",
    details: {
      features: [
        "Ergonomic design",
        "Customizable dimensions",
        "Storage solutions",
        "Durability and maintenance",
        "Space-efficient design",
      ],
      process: [
        "Space planning and layout",
        "Material selection",
        "Customization options",
        "Production process",
        "Quality inspection and delivery",
      ],
    },
  },
  {
    id: 5,
    title: "Outdoor Furniture",
    category: "outdoor",
    image: "/images/img5.jpg",
    description: "Outdoor furniture solutions",
    details: {
      features: ["Weather-resistant materials", "Durable construction"],
      process: [
        "Site assessment and measurements",
        "Material selection",
        "Customization options",
        "Production process",
        "Quality inspection and delivery",
      ],
    },
  },
  {
    id: 6,
    title: "Customized Furniture",
    category: "custom",
    image: "/images/img6.jpg",
    description: "Tailored furniture solutions",
    details: {
      features: ["Custom dimensions", "Unique designs", "High-quality materials"],
      process: [
        "Initial consultation",
        "Design proposal",
        "Material selection",
        "Production process",
        "Final delivery and installation",
      ],
    }
  }
];

export default function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query;

  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Service not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#7D4FEC]">Features</h2>
            <ul className="space-y-4">
              {service.details.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#7D4FEC] mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#7D4FEC]">
              Our Process
            </h2>
            <ul className="space-y-4">
              {service.details.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#7D4FEC] text-white flex items-center justify-center mr-3 mt-1">
                    {index + 1}
                  </div>
                  <span className="text-gray-600">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() =>
              window.open(
                `https://wa.me/913838838383?text=I'm interested in ${service.title}`,
                "_blank"
              )
            }
            className="bg-[#7D4FEC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6B3FD9] transition-colors"
          >
            Contact Us for {service.title}
          </button>
        </div>
      </div>
    </div>
  );
}
