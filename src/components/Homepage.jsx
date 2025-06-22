import React from "react";
import Navbar from "../partials/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

function Homepage() {
  const textRef = React.useRef(null);
  const splitRef = React.useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".nav-logo", {
      scale: 0,
    });
    tl.from(".nav-item a", {
      y: -100,
      opacity: 0,
      stagger: 0.2,
      // duration: 0.8,
      ease: "power2.out",
    });
    tl.from(".nav-crad a", {
      y: -100,
      opacity: 0,
      stagger: 0.2,
      // duration: 0.8,
      ease: "power2.out",
    },"-=0.2");
    if (textRef.current) {
      splitRef.current = new SplitText(textRef.current, {
        type: "chars,words,lines",
      });
      if (splitRef.current?.words) {
        tl.from(splitRef.current.words, {
          y: -100,
          opacity: 0,
          rotation: "random(-80, 80)",
          ease: "back",
          stagger: 0.15,
        },'-=0.6');
      }
      tl.from(".str", {
        scale: 0,
        rotate: 180,
      });
      tl.from(".text-2 ", {
        scale: 0,
      },"a");
      tl.from(".btn-up",{
        scale:0
      },"a")
      tl.from(".quenching",{
        scale:0,
        top:100
      })
      tl.from(".mana-end",{
        scale:0
      })
      tl.from(".imgs > div", {
        top: 400,
        stagger: 0.3
      })
      gsap.to(".imgs",{
        scrollTrigger:{
          trigger: ".hero-end",
          start: "top 15  %",
          end: "top 10%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
        y: 300,
        
      })
    }
  }, []);

  return (
    <div className=" md:h-screen w-full  bg-gradient-to-t kafir from-[#ffffff]/70 to-[#efa5da]/32">
      <Navbar />
      <div className="p-5 flex flex-col items-center h-full w-full text-[#390531]">
        <h1 ref={textRef} className="text-5xl md:text-8xl font-black text-center text-1">
          Just say goodbye to
        </h1>
        <div className="flex items-center ">
          <span className="str">
            <img src="/images/str.png" className="w-15" alt="" />
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-center text-2  flex items-center gap-2">
            being thirsty.{" "}
          </h1>
          <span className="mt-4 btn-up">
            <button className="text-2xl flex items-center gap-2 border-2 border-[#390531] text-[#390531] rounded-full px-4 py-2">
              Drink up{" "}
              <span className="w-7 h-7 bg-[#390531] rounded-full flex items-center justify-center text-white">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </span>
        </div>
        <div className="flex flex-col items-center  mt-8 mb-8 w-full text-[#390531] quenching ">
          <h3 className="text-3xl  text-center">
            Thirst <span className="font-black"> quenching</span> drinks made
            just for You
          </h3>
        </div>
        
        <div className="flex items-center justify-evenly w-full overflow-hidden max-md:h-screen max-md:flex-col font-sans hero-end ">
          <div className="flex flex-col w-full items-center mana-end">
            {/* Quote Icon */}
            <div className="text-8xl text-[#390531]">
              <span>“</span>
            </div>
            {/* Avatars */}
            <div className="flex gap-2  ">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar1"
                className="w-16 h-16 rounded-full border-4 border-yellow-300 object-cover"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar2"
                className="w-16 h-16 rounded-full border-4 border-blue-300 object-cover"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="avatar3"
                className="w-16 h-16 rounded-full border-4 border-green-300 object-cover"
              />
            </div>
            {/* Testimonial Text */}
            <div className="text-center">
              <h2 className="text-3xl font-black text-[#390531] ">
                The drink <span className="font-normal">you need</span>
                <br />
                this summer <span className="font-normal">" </span>
              </h2>
              <p className="text-lg text-[#6d4a6b]">
                Product with great taste,
                <br />
                and instant energy
              </p>
            </div>
          </div>
          <div className="relative md:flex h-full w-full imgs">
            <div className="absolute -left-18 top-7 z-9">
              <img src="/images/img3.png" className="w-100 img-1" alt="" />
            </div>
            <div className="absolute left-3 z-10">
              <img src="/images/img1.png" className="w-100 img-2" alt="" />
            </div>
            <div className="absolute left-30 top-7 z-9">
              <img src="/images/img4.png" className="w-100 img-3" alt="" />
            </div>
          </div>
          <div className="flex flex-col w-full mana-end">
            {/* Lightning Icon */}
            <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center mb-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c026d3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
              </svg>
            </div>
            <div className="text-xl font-semibold text-[#390531] mb-3">
              The drink of the nation -
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-[#ede7e3] text-[#390531] font-bold text-base">
                CAFFEINE
              </span>
              <span className="px-4 py-2 rounded-full bg-[#ffe082] text-[#390531] font-bold text-base">
                CITRIC ACID
              </span>
              <span className="px-4 py-2 rounded-full bg-[#ffc1e3] text-[#390531] font-bold text-base">
                LEMON
              </span>
              <span className="px-4 py-2 rounded-full bg-[#b3e5fc] text-[#390531] font-bold text-base">
                CANE SUGAR
              </span>
              <span className="w-10 h-10 rounded-full bg-[#390531] flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 6.6c-1.1-2.1-3.7-2.7-5.5-1.2-.7.6-1.2 1.3-1.3 2.1-.1-.8-.6-1.5-1.3-2.1-1.8-1.5-4.4-.9-5.5 1.2-1.2 2.2-.3 4.7 2.2 7.1 1.2 1.1 2.5 2.1 3.2 2.6.2.2.6.2.8 0 .7-.5 2-1.5 3.2-2.6 2.5-2.4 3.4-4.9 2.2-7.1z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
