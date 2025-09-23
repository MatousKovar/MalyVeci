import { useState } from "react";
import Image from "next/image";

function PosterModal({ posterSrc, onClose }) {
  if (!posterSrc) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative bg-gray-900 p-4 rounded-xl shadow-xl">
        {/* Poster image */}
        <Image
          src={posterSrc}
          alt="Event Poster"
          width={600}
          height={800}
          className="rounded-lg object-contain"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
