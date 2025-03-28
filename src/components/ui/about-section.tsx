import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/profile_furniture.png"
                alt="Jitu Panchal"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-[#7D4FEC]">About Me</h2>
            <h3 className="text-2xl font-semibold text-gray-800">
              Jitu Panchal – Crafting Furniture with Precision & Passion
            </h3>

            <div className="space-y-4">
              <p className="text-lg text-gray-600 italic">
                "ગ્રાહકનું સંતોષ એ મારું લક્ષ્ય છે, અને શ્રેષ્ઠતા અને નિષ્ઠા
                સાથે કામ કરવું એ મારી ઓળખ છે." 😊
              </p>

              <p className="text-gray-600">
                With 15 years of experience in the furniture industry, I have
                honed my skills to deliver top-notch craftsmanship. Beyond
                furniture, I continuously learn relevant skills like light
                fitting, coloring, and more to provide a complete solution. My
                ultimate goal is customer satisfaction, and I ensure precision
                and accuracy in every project. I believe that when a customer
                trusts me with their work, it is my duty to give my 100% to meet
                and exceed their expectations.
              </p>

              <p className="text-lg text-gray-600 italic">
                "જે કામ કરું, તે સંપૂર્ણ ઈમાનદારી અને નિપુણતા સાથે કરું, કારણ કે
                ગુણવત્તા ક્યારેય સમજૂતી સાથે નથી આવતી."
              </p>

              <p className="text-lg text-gray-600 italic">
                "કામ એવી રીતે કરો કે ગ્રાહકને માત્ર એક વખત નહીં, પણ હંમેશા
                તમારું યાદ રહે."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
