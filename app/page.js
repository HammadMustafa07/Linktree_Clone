'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  
  return (
    <>
      <div className="bg-[#254F1A] h-[160vh] flex ">
        <Navbar />
        <div className=" h-full  ml-[5vw] w-[45vw]  flex justify-center ">
          <div className=" flex flex-col mt-[18vw] gap-7">
            <p className="text-[#D2E823] text-[78.3333px] leading-[78.4666px] font-[800] font-outfit  text-5xl">
              Everything you are. In one, simple link in bio.
            </p>
            <p className="text-[18px] text-white font-[600] font-outfit">
              Join 70M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>
            <div className="flex gap-2 font-outfit">
              <input
                type="text"
                placeholder="linktr.ee/"
                className="py-5 px-3.5 w-[260px]  font-[600]  focus:border-white rounded-lg"
              />
              <button className="py-2 px-7 bg-[#E9C0E9] font-[600] rounded-full">
                Claim you Linktree
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50vw]  h-full  flex justify-center items-center">
          <Image src="/hero.png" alt="heroimg" height={450} width={450} className=""></Image>
        </div>
      </div>
      <div className="h-[110vh] bg-[#E9C0E9] flex">
        <div className="h-full w-[50vw]    flex justify-center items-center">
          <Image src="/about.png" alt="about"height={400} width={400} />
        </div>
        <div className="h-full w-[50vw] flex flex-col justify-center gap-7">
          <p className="text-[53.9px] mx-auto leading-[50.4666px] font-[800] text-[#502274] font-outfit text-5xl ">
            Create and customize <br /> your Linktree in <br /> minutes
          </p>
          <p className="text-[18px] mx-auto  font-[500] leading-[24.4666px] text-[#1E2330] font-outfit">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, <br /> podcast, events and more. It all comes together in a
            link in bio landing <br /> page designed to convert.
          </p>
          <button className="py-5 mx-12 font-outfit text-white px-7 bg-[#502274] w-[250px] font-[600] rounded-full">
            Get started for free
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
