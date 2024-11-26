"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/diary (1).jpg", alt: "wood", category: "living room" },
  { src: "/image.jpg", alt: "wood", category: "office" },
  { src: "/diary (4).jpg", alt: "wood", category: "kitchen" },
  { src: "/collection.jpeg", alt: "wood", category: "living room" },
  { src: "/collection1.jpeg", alt: "wood", category: "office" },
  { src: "/image1.jpg", alt: "wood", category: "kitchen" },
  { src: "/image2.jpg", alt: "wood", category: "living room" },
  { src: "/image2.jpg", alt: "wood", category: "office" },
  { src: "/image.jpg", alt: "wood", category: "kitchen" },
  { src: "/image4.jpg", alt: "wood", category: "living room" },
  { src: "/image5.jpg", alt: "wood", category: "office" },
  { src: "/diary (4).jpg", alt: "wood", category: "kitchen" },
  { src: "/diary (1).jpg", alt: "wood", category: "living room" },
  { src: "/image.jpg", alt: "wood", category: "office" },
  { src: "/diary (4).jpg", alt: "wood", category: "kitchen" },
  { src: "/collection.jpeg", alt: "wood", category: "living room" },
  { src: "/collection1.jpeg", alt: "wood", category: "office" },
  { src: "/image1.jpg", alt: "wood", category: "kitchen" },
  { src: "/image2.jpg", alt: "wood", category: "living room" },
  { src: "/image2.jpg", alt: "wood", category: "office" },
  { src: "/image.jpg", alt: "wood", category: "kitchen" },
  { src: "/image4.jpg", alt: "wood", category: "living room" },
  { src: "/image5.jpg", alt: "wood", category: "office" },
  { src: "/diary (4).jpg", alt: "wood", category: "kitchen" },
  { src: "/diary (1).jpg", alt: "wood", category: "living room" },
  { src: "/image.jpg", alt: "wood", category: "office" },
  { src: "/diary (4).jpg", alt: "wood", category: "kitchen" },
  { src: "/collection.jpeg", alt: "wood", category: "living room" },
  { src: "/collection1.jpeg", alt: "wood", category: "office" },
  { src: "/image1.jpg", alt: "wood", category: "kitchen" },
  { src: "/image2.jpg", alt: "wood", category: "living room" },
  { src: "/image2.jpg", alt: "wood", category: "office" },
  { src: "/image.jpg", alt: "wood", category: "kitchen" },
  { src: "/image4.jpg", alt: "wood", category: "living room" },
  { src: "/image5.jpg", alt: "wood", category: "office" },
  { src: "/diary (4).jpg", alt: "wood", category: "kitchen" },
];

export default function Designstudio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <div className="mt-40">
      <h2
        className="text-4xl sm:text-4xl md:text-5xl ml-2 lg:ml-12 lg:text-6xl font-bold mt-8 mb-2"
        data-aos="fade-up"
      >
        Design Studio
      </h2>

      <div className="flex ml-2 lg:ml-10 mb-8 flex-wrap" data-aos='fade-up'>
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 m-2 ${
            activeCategory === "all"
              ? "active-gradient"
              : "bg-gray-200 border border-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory("living room")}
          className={`px-4 py-2 m-2 ${
            activeCategory === "living room"
              ? "active-gradient"
              : "bg-gray-200 border border-gray-300"
          }`}
        >
          Living Room
        </button>
        <button
          onClick={() => setActiveCategory("office")}
          className={`px-4 py-2 m-2 ${
            activeCategory === "office"
              ? "active-gradient"
              : "bg-gray-200 border border-gray-300"
          }`}
        >
          Office
        </button>
        <button
          onClick={() => setActiveCategory("kitchen")}
          className={`px-4 py-2 m-2 ${
            activeCategory === "kitchen"
              ? "active-gradient"
              : "bg-gray-200 border border-gray-300"
          }`}
        >
          Kitchen
        </button>
      </div>

      <div className="design-container">
        {filteredImages.map((image, index) => (
          <div className="box" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              objectFit="cover"
              className="image"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
