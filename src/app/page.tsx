'use client'
import { useState } from 'react';
import React from "react";
import Image from "next/image";
import heroImg from "../../public/logomv2.png"; 
import matous from "../../public/ja.jpeg";
import mates from "../../public/basak.jpeg";
import jiri from "../../public/jiri.jpeg";
import roubalka from "../../public/roubalka.jpeg";
import prokop from "../../public/prokop.jpeg";
import Navbar from '../../components/Navbar';

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

  return (
    
    <div className="bg-spotlight text-white">
      {/* Top Navigation (sticky) */}
      
      <Navbar />
      

    {/* Hero section */}
    <section className="relative w-full h-screen flex justify-center items-center bg-black ">
      {/* Image container → 70% */}
      <div className="flex  items-center -translate-y-25 sm:-translate-y-0">
        <div className=" ml-5 sm:mb-20 md:mb-0 relative w-90 h-100 sm:w-120 sm:h-120  md:w-200 md:h-200 lg:w-340 lg:h-340 brightness-75">
          <Image
            src={heroImg}
            alt="Hero"
            fill
            className="object-contain align-bottom"
            quality={100}
          />
        </div>
      </div>
    </section>

      {/* Main Sections */}
      <main>
        <section id="onas" className="py-20 bg-black text-white mt-50">
          <h2
            className="text-stroke-2 text-5xl font-bold font-orbitron text-center mb-12 
            sm:text-6xl md:text-7xl md:text-stroke-3 lg:text-stroke-8 lg:text-8xl"
          >
            <span className="text-black brightness-85">O </span>
            <span className="text-[#D90000] brightness-85">KAPELE</span>
          </h2>
          <p className="text-center mx-auto mt-6 mb-60 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-100 px-4 py-4 rounded-lg shadow-lg">
            Co je Harley Davidson mezi motorkami, jsou Malý Věci mezi kapelami
          </p>
          <div className="max-w-5xl mx-auto space-y-16 px-4">
            {members.map((member, i) => (
              <div
                key={i}
                className={`flex flex-col overflow-hidden lg:flex-row items-center lg:items-start md:space-x-8 ${
                  i % 2 === 0 ? "" : "lg:flex-row-reverse lg:space-x-reverse"
                }`}
              >
                <div className="relative w-38 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mt-4 md:mt-0 text-left md:max-w-xl">
                  <h3 className="text-xl font-semibold text-[#D90000]">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 italic">{member.role}</p>
                  <p className="text-gray-400 mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="Akce" className="py-20 text-center bg-black">
          <h2
            className="brightness-85 text-5xl text-stroke-2 font-bold font-orbitron text-center mb-12 sm:text-6xl md:text-7xl md:text-stroke-3 lg:text-8xl lg:text-stroke-3"
          >
            <span className="text-black">A</span>
            <span className="text-[#D90000]">KCE</span>
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-1 gap-8 px-4">
            <div className="bg-gray-950 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                Svatba Bártíků (vstupné 200)
              </h3>
              <p className="text-gray-300 mb-2">Datum: 30.8.2025</p>
              <p className="text-gray-400">Místo: Kvilda</p>
            </div>

            <div className="bg-gray-950 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                ASTEN JOHNSON Strakonice
              </h3>
              <p className="text-gray-300 mb-2">Datum: 5.9.2025</p>
              <p className="text-gray-400">Místo: Sádky Strakonice</p>
            </div>

            <div className="bg-gray-950 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#D90000]">
                Svatba dvě
              </h3>
              <p className="text-gray-300 mb-2">Datum: 5.9.2025</p>
              <p className="text-gray-400">Místo: Sádky Sušice</p>
            </div>
          </div>
        </section>
        
        {/* galerie */}
        <section id="Fotogalerie" className="py-20 bg-spotlight text-white">
          <h2
            className="text-5xl text-stroke-2 brightness-85 font-bold font-orbitron text-center mb-12 sm:text-6xl md:text-7xl md:text-stroke-3 lg:text-8xl lg:text-stroke-3"
          >
            <span className="text-black">FO</span>
            <span className="text-[#D90000]">TOGRAFIE</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 overflow-hidden max-w-7xl mx-auto">
            {images.map((src, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </div>
        </section>
        <section id="Videa" className="py-20 bg-black text-white flex flex-col items-center">
          <h2
            className="text-5xl text-stroke-2 brightness-85 font-bold font-orbitron text-center mb-12 sm:text-6xl md:text-7xl md:text-stroke-3 lg:text-8xl lg:text-stroke-3"
          >
            <span className="text-black">V</span>
            <span className="text-[#D90000]">IDEA</span>
          </h2>

          <iframe
            className="w-full max-w-3xl h-80 sm:h-96 md:h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/Hst2OSsuG2I"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </section>

        {/* Kontakty Section */}
        <section id="Kontakty" className="py-20 bg-black text-white">
          <h2
            className="text-5xl text-stroke-2 brightness-85 font-bold font-orbitron text-center mb-12 sm:text-6xl md:text-7xl md:text-stroke-3 lg:text-8xl lg:text-stroke-3"
          >
            <span className="text-black">K</span>
            <span className="text-[#D90000]">ONTAKTY</span>
          </h2>
          <div className="max-w-5xl mx-auto text-center px-4">
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Kontaktujte nás na emailu: <span className="text-[#D90000]">malyveci.band@gmail.com</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Nebo na telefonním čísle: <span className="text-[#D90000]">+420 774 236 616</span>
            </p>
            <div className=" w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
              <a href="https://www.facebook.com/share/1JLvMbwvA1/?mibextid=wwXIfr"
              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
                fill="none">
                  <path
                    d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                    fill="#D90000" />
                </svg>
              </a>
              <a href="https://www.instagram.com/maly.veci.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
                fill="none">
                  <path
                    d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
                    fill="#D90000" />
                </svg></a>
              <a href="https://www.youtube.com/@Mal%C3%BDV%C4%9BciOfficial/videos"
                className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 71"
                fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M56.5615 18.2428C58.8115 18.8504 60.58 20.6234 61.1778 22.8708C62.2654 26.9495 62.2654 35.4647 62.2654 35.4647C62.2654 35.4647 62.2654 43.98 61.1778 48.0586C60.5717 50.3144 58.8032 52.0873 56.5615 52.6866C52.4932 53.7771 36.1703 53.7771 36.1703 53.7771C36.1703 53.7771 19.8557 53.7771 15.7791 52.6866C13.5291 52.079 11.7606 50.306 11.1628 48.0586C10.0752 43.98 10.0752 35.4647 10.0752 35.4647C10.0752 35.4647 10.0752 26.9495 11.1628 22.8708C11.7689 20.615 13.5374 18.8421 15.7791 18.2428C19.8557 17.1523 36.1703 17.1523 36.1703 17.1523C36.1703 17.1523 52.4932 17.1523 56.5615 18.2428ZM44.5142 35.4647L30.9561 43.314V27.6154L44.5142 35.4647Z"
                  fill="#D90000" />
                </svg></a>
            </div>
          </div>
        </section>


        <div className="w-full overflow-x-auto">
  <div className="flex space-x-4 w-max">
    {/* Song 1 */}
    <iframe
      src="https://open.spotify.com/embed/track/7ouMYWpwJ422jRcDASZB7P"
      width="300"
      height="80"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-lg shadow-lg"
    ></iframe>

    {/* Song 2 */}
    <iframe
      src="https://open.spotify.com/embed/track/5CtI0qwDJkDQGwXD1H1cLb"
      width="300"
      height="80"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-lg shadow-lg"
    ></iframe>

    {/* Song 3 */}
    <iframe
      src="https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg"
      width="300"
      height="80"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-lg shadow-lg"
    ></iframe>
  </div>
</div>
      </main>
    </div>
  );
}
