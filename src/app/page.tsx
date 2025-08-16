'use client'
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import heroImg from "../../public/logomv.png"; 
import matous from "../../public/ja.jpeg";
import mates from "../../public/basak.jpeg";
import jiri from "../../public/jiri.jpeg";
import roubalka from "../../public/roubalka.jpeg";
import prokop from "../../public/prokop.jpeg";



import { useEffect, useState } from "react";


const images = [
  matous,
  mates,
  "/foto1.jpeg",
  "/foto2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpg",
  "/7.jpeg",
  "/8.jpeg",
  "/9.jpeg",
  "/10.png",
  "/11.jpg",
  "/12.jpg",
  "/13.jpeg",
  "/14.jpg",
];


const members = [
  {
    name: "Matouš Kovář",
    role: "Kytara",
    bio: "Kulervoucí frajer.",
    image: matous,
  },
  {
    name: "Jiří Bártík",
    role: "Nula",
    bio: "Bere fanynky na mražák (Týna o tom neví).",
    image: jiri,
  },

  {
    name: "Denča Roubalka",
    role: "Zpěv",
    bio: "Denisa Roubalová, zprávičky.",
    image: roubalka,
  },

  {
    name: "Matijas Fojtů",
    role: "Nejlepší kamarád",
    bio: "Kouří cigára a nemá rytmus, jinak docela ujde.",
    image: mates,
  },
  {
    name: "Prokop Roubal",
    role: "Buben",
    bio: "Já jsem hrál, ty jsi hrál, my jsme hráli na cimbál.",
    image: prokop,
  },
];



export default function Home() {
  //scrollovani
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //gallery
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  return (
    
    <div className="bg-black text-white overflow-x-hidden">
       {/* Top Navigation (sticky) */}
       <header className="bg-black text-white sticky top-0 z-50">
        <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end space-x-6 h-16 items-center">
            <a href="#onas" className=" hover:text-band-red">O nas</a>
            <a href="#akce" className=" hover:text-band-red">Akce</a>
            <a href="#fotogalerie" className="brghtness-75 hover:text-band-red">Fotogalerie</a>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex justify-center items-center bg-black -mt-16 ">
        <div className="relative w-64 h-64 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] brightness-75">
          <Image
            src={heroImg}
            alt="Hero"
            layout="fill"
            objectFit="contain"
            quality={100}
            className="rounded-lg"
          />
        </div>
      
        {/* Muzes pridat nejakej text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        </div>

      </section>

      {/* Page Sections */}
      <main 
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      >
        <section id="onas" className="py-20 bg-black text-white">
          <h2
            className=" text-stroke-2 text-5xl font-bold font-orbitron text-center mb-12 
            sm:text-6xl 
            md:text-7xl md:text-stroke-3
            lg:text-stroke-4 lg:text-8xl ">
            <span className="text-black brightness-85">O </span>
            <span 
              className="text-band-red brightness-85"
            >
              KAPELE
            </span>
          </h2>
            <p className="text-center mx-auto mt-6 mb-60 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-100 
                 px-4 py-4 rounded-lg shadow-lg">Co je Harley Davidson mezi motorkami, jsou Malý Věci mezi kapelami</p>
          <div className="max-w-5xl mx-auto space-y-16 px-4">
            {members.map((member, i) => (
              <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? "150" : "150", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: i % 2 === 0 ? "-150" : "150", opacity: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className={`flex flex-col overflow-hidden md:flex-row items-center md:items-start md:space-x-8 ${
                i % 2 === 0 ? "" : "md:flex-row-reverse md:space-x-reverse"
              }`}
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mt-4 md:mt-0 text-left md:max-w-xl">
                  <h3 className="text-xl font-semibold text-band-red ">{member.name}</h3>
                  <p className="text-gray-300 italic">{member.role}</p>
                  <p className="text-gray-400 mt-2">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="akce" className="py-20 text-center bg-black">
        <h2
            className="brightness-85 text-5xl text-stroke-2 font-bold font-orbitron text-center mb-12 sm:text-6xl md:text-7xl md:text-stroke-3 lg:text-8xl lg:text-stroke-3">
            <span className="text-black">A</span>
            <span className="text-band-red">KCE</span>
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-1 gap-8 px-4">
            {/* Event Card */}
            <div className="bg-gray-950 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Svatba Bártíků (vstupné 200)</h3>
              <p className="text-gray-300 mb-2">Datum: 30.8.2025</p>
              <p className="text-gray-400">Místo: Kvilda</p>
            </div>

            <div className="bg-gray-950 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-red-600">ASTEN JOHNSON Strakonice</h3>
              <p className="text-gray-300 mb-2">Datum: 5.9.2025</p>
              <p className="text-gray-400">Místo: Sádky Strakonice</p>
            </div>

            <div className="bg-gray-950 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-band-red">Svatba dvě</h3>
              <p className="text-gray-300 mb-2">Datum: 5.9.2025</p>
              <p className="text-gray-400">Místo: Sádky Sušice</p>
            </div>
          </div>
        </section>

        <section id="fotogalerie" className="py-20 bg-band-black text-white">
        <h2
            className="text-5xl text-stroke-2 brightness-85 font-bold font-orbitron text-center mb-12 sm:text-6xl md:text-7xl md:text-stroke-3 lg:text-8xl lg:text-stroke-3">
            <span className="text-black">FO</span>
            <span className="text-band-red">TOGRAFIE</span>
          </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 overflow-hidden max-w-7xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            animate={controls}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              src={src}
              alt={`Gallery ${i}`}
              width={300}
              height={100}
              objectFit="cover"
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
      </main>
    </div>
  );
}
