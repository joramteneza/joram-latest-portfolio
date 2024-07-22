"use client";
import SectionTitle from "@/components/commons/SectionTitle";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import logo from "../../../../public/favicon.ico";
import Image from "next/image";

const Introduction = () => {
  const scrollHandle = (e: any) => {
    e.preventDefault();
    let id = e.target.id;
    let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "#about" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }); //scrolling the page
  };

  const handleViewResume = () => {
    window.open("/static/pdf/Joram-Profile.pdf", "_blank");
  };

  return (
    <div className="h-screen relative max-w-[1200px] flex flex-col items-center justify-center w-full py-20 m-auto text-center">
      <SectionTitle title="Introduction" display={{ icon: AiFillHome }} />
      <div className="group">
        <Image
          className="rounded-3xl h-20 transition-transform duration-300 ease-in-out hover:rotate-[360deg] hover:scale-110"
          src={logo}
          alt="logo"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <p className="mb-5 text-xl text-white">
        Hey, I&apos;m <span className="text-primary-100">Joram</span>.
      </p>
      <h1 className="relative inline-block w-auto max-w-2xl mb-10 text-3xl tracking-tighter heroTitle lg:max-w-4xl md:text-5xl lg:text-6xl text-white">
        I am <span className="text-primary-100">passionate</span> and{" "}
        <span className="text-primary-100">skilled</span> in{" "}
        <span className="text-primary-100">building</span> and{" "}
        <span className="text-primary-100">designing</span> impactful online
        experiences.
      </h1>

      <div className="flex gap-4">
        <Link href="/#about" legacyBehavior>
          <a onClick={scrollHandle}>
            <div className="px-6 py-2 lg:px-10 lg:py-4 text-xl transition-colors border-2 rounded-full cursor-pointer whitespace-nowrap text-white border-white bg-bg hover:bg-primary-100 hover:text-white hover:border-primary-100 hover:bg-opacity-40">
              Tell me more
            </div>
          </a>
        </Link>
        <a onClick={handleViewResume}>
          <div className="px-6 py-2 lg:px-10 lg:py-4 text-xl transition-colors rounded-full cursor-pointer whitespace-nowrap bg-primary-100 text-white  hover:bg-dark-900 hover:text-primary-100 hover:border hover:border-primary-100 bg-opacity-40">
            Here&apos;s my Resume
          </div>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
