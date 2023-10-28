"use client";
import image from "../images/profile.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm
            </span>{" "}
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'ROUDI',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Passionate front-end developer',
        1000,
        'UI/UX Designer',
        1000,
        'Content Creator',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quaerat vero alias voluptatem corporis temporibus aliquam et. Magni,
            explicabo provident!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 mt-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
              {" "}
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] lg:w-[400px] lg:h-[400px] w-[200px] h-[200px]">
            <Image src={image} width={600} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
