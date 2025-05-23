"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/background.jpg"
          alt="background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[120%] z-10">
        <Image
          src="/assets/pinkbg.png"
          alt="pink background"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[70%] z-20">
        <Image
          src="/assets/cloud.svg"
          alt="cloud"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        className="absolute top-4 right-4 z-30 w-10 h-10 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="relative w-full h-full">
          <Image
            src="/assets/Group_3.png"
            alt="menu button"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {menuOpen && (
        <ul className="absolute top-20 right-6 z-40 bg-white text-black shadow-lg rounded-lg p-4 space-y-2 w-40">
          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
            Home
          </li>
          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
            About
          </li>
          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
            Login
          </li>
        </ul>
      )}
      <div className="absolute z-20 top-1/3 left-1/2 w-[90%] md:w-[700px] h-[200px] transform -translate-x-1/2 -translate-y-1/2">
        <Image src="/assets/Group.png" alt="group" fill priority />
      </div>
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 text-white font-bold text-center text-sm md:text-base">
        <h1 className="hidden md:block">(proof below)</h1>
        <h1 className="block md:hidden">(Here's the proof)</h1>
      </div>

      <div className="absolute top-[5%] left-0 z-20 w-full px-4 md:px-0 h-auto flex flex-col md:flex-row justify-between items-center text-white font-bold space-y-3 md:space-y-0 text-balance mt-[105%] md:mt-0">
        <div className="w-full md:w-1/2 h-full flex items-center text-center md:text-left pl-[10%]">
          <h1 className="text-lg md:text-2xl leading-relaxed">
            Join the World's Highest-Rated Online Masterclass (for Parents)
            <br />
            Learn simple, science-backed techniques to teach your child to read
            — in just 15 minutes a day.
          </h1>
        </div>

        <div className="w-full md:w-1/2 relative aspect-[1/1] md:aspect-[3/4] md:pr-0">
          <Image
            src="/assets/user.png"
            alt="user"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div
        className="absolute top-[120%] left-0 w-full min-h-[2000px] z-10 bg-repeat-y bg-top"
        style={{
          backgroundImage: "url('/assets/Group_2.png')",
          backgroundSize: "contain", // or "auto" or "100% auto" depending on your image
        }}
      ></div>
      <div className="absolute top-[110%] md:top-[90%] left-0 w-full h-full z-30">
        <Image
          src={"/assets/vector_1.png"}
          alt="vector"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute left-1/2 top-[160%] md:top-[130%] w-[99%] h-[200px] transform -translate-x-1/2 z-40">
        <Image
          src="/assets/Group_1.png"
          alt="group1"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute top-[180%] md:top-[140%] w-full h-full z-30">
        <Image
          src="/assets/Group_4.png"
          alt="group1"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute top-[270%] md:top-[220%] h-[150rem] w-full z-50 ">
        <Image
          src="/assets/Group_5.png"
          alt="group5"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute top-[200%] md:top-[150%] h-[150rem] w-full z-50 ">
        <Image
          src="/assets/Group_6.png"
          alt="group5"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
