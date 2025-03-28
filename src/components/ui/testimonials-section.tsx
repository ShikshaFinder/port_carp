import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Homeowner",
    content:
      "Jitu's craftsmanship is exceptional. He transformed our living room with custom furniture that perfectly matches our style.",
    rating: 5,
  },
  {
    name: "Priya Shah",
    role: "Interior Designer",
    content:
      "Working with Jitu has been a pleasure. His attention to detail and commitment to quality is unmatched.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Business Owner",
    content:
      "The custom office furniture he created for us is not just beautiful but also highly functional. Highly recommended!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-[#7D4FEC]/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#7D4FEC]">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div>
                <h4 className="font-semibold text-[#7D4FEC]">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
