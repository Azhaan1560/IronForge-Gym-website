// app/gallery/components/GalleryGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
interface GalleryImage {
  src: string;
  alt: string;
  span: string;
  label?: string; // Optional property
}

const initialImages: GalleryImage[] = [
  { src: "/images/hero2.png", alt: "Main Floor", label: "The Main Floor", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery2.jpg", alt: "Dumbbells", span: "" },
  { src: "/images/gallery3.jpg", alt: "Barbell", span: "" },
  { src: "/images/gallery4.jpg", alt: "Cardio Area", span: "md:col-span-2" },
  { src: "/images/gallery5.jpg", alt: "Weight Plates", span: "" },
  { src: "/images/gallery6.jpg", alt: "Chalk Bowl", span: "" },
  { src: "/images/gallery7.jpg", alt: "Power Racks", span: "md:col-span-2" },
];

const archiveImages: GalleryImage[] = [
  { src: "/images/gallery8.png", alt: "weights", span: "" },
  { src: "/images/gallery9.png", alt: "Stretch Zone", span: "" },
  { src: "/images/gallery10.png", alt: "Front Desk", span: "md:col-span-2" },
];

export default function GalleryGrid() {
  const [showArchives, setShowArchives] = useState(false);

  const imagesToShow = showArchives ? [...initialImages, ...archiveImages] : initialImages;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {imagesToShow.map((image) => (
          <div
            key={image.src}
            className={`gallery-item ${image.span} rounded bg-surface-card overflow-hidden relative group cursor-pointer`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            {image.label && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/90 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="font-label-bold text-label-bold text-secondary uppercase tracking-widest block mb-2">
                    {image.label}
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {!showArchives && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowArchives(true)}
            className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface border border-border-dark px-8 py-4 rounded bg-surface-card hover:border-electric-blue hover:text-electric-blue transition-all duration-300 shadow-sm flex items-center gap-2"
          >
            Load More Archives
            <span className="material-symbols-outlined text-lg" style={{ fontSize: "20px" }}>
              arrow_downward
            </span>
          </button>
        </div>
      )}
    </>
  );
}