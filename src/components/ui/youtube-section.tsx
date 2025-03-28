import React from "react";

const videos = [
  {
    id: "VIDEO_ID_1",
    title: "Custom Furniture Making Process",
    description: "Watch how we create beautiful custom furniture pieces",
  },
  {
    id: "VIDEO_ID_2",
    title: "Color Matching Techniques",
    description: "Learn about our professional color matching services",
  },
  {
    id: "VIDEO_ID_3",
    title: "Sofa Collection Showcase",
    description: "Explore our premium sofa collection",
  },
];

export function YoutubeSection() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#7D4FEC]">
          Watch Our Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#7D4FEC]">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
