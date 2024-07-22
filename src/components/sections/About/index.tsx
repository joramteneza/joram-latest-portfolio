import SectionTitle from "@/components/commons/SectionTitle";
import Image from "next/image";
import React from "react";
import { MdEmojiPeople } from "react-icons/md";
import me1 from "../../../../public/static/images/me1.jpg";
import me2 from "../../../../public/static/images/me2.jpg";
import me3 from "../../../../public/static/images/me3.jpg";

const About = () => {
  return (
    <div className="h-screen w-full  relative m-auto max-w-[1200px] py-28 text-white">
      <SectionTitle title="About" display={{ icon: MdEmojiPeople }} />
      <div className="flex flex-col lg:items-center lg:justify-center gap-6 px-0 sm:p-6 lg:p-10 h-full min-h-96 overflow-hidden overflow-y-auto scrollbar-hide">
        <p className="text-3xl md:text-4xl lg:text-5xl pb-4 text-center md:text-left xl:w-[95%]">
          “In the world of development, every problem is an{" "}
          <span className="text-primary-100">opportunity</span> to create an{" "}
          <span className="text-primary-100">innovative solution.</span>”
        </p>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 xl:flex xl:flex-col-reverse 2xl:grid 2xl:grid-cols-2">
          <div className="text-4xl lg:text-6xl">
            <p className="text-sm md:text-base leading-tight text-neutral-300 xl:w-[95%] text-start sm:text-justify pb-5">
              I am an experienced Full Stack Web Developer with a solid track
              record of collaborating with various agencies, startups, and
              talented professionals. I have extensive experience in JavaScript
              ES6, TypeScript, HTML5, and a variety of CSS libraries, including
              JSS, Tailwind CSS, Styled Components, and Sass. My proficiency
              extends to several JavaScript libraries and frameworks, including
              React JS and Next JS. While my expertise and passion lie in
              front-end development, I am equally skilled in back-end
              development, specifically with Node JS, Nest JS, Amazon Web
              Services, Docker, and PostgreSQL, allowing me to create dynamic,
              robust, and scalable web applications from end to end.
            </p>
            <p className="text-sm md:text-base leading-tight text-neutral-300 xl:w-[95%] ttext-start sm:text-justify pb-5">
              At White Cloak Technologies, Inc., I contributed as a Software
              Engineer, specializing in front-end development to deliver
              high-quality software solutions. My role involved implementing
              UI/UX designs, participating in agile development processes, and
              collaborating with back-end developers for seamless integration of
              REST APIs. As a full stack developer at Ticketnation Philippines,
              I implemented UI/UX designs, modified API endpoints, built Admin
              and Partner Dashboards, and documented code for future use. At
              Altev Technologies, Inc., as a mid front-end developer, I focused
              on building reusable components, debugging, maintaining the
              website, and ensuring code quality. At Pahiram.ph, my role
              involved managing the connection between the Node API and React
              JS, developing an inventory system, and creating user profiles and
              listing features.
            </p>
            <p className="text-sm md:text-base leading-tight text-neutral-300 xl:w-[95%] ttext-start sm:text-justify pb-5">
              With 4 years of experience, I approach my work with quiet
              confidence and an insatiable curiosity, constantly seeking new
              challenges to enhance my web development skills. My dedication to
              continuous improvement ensures that I consistently deliver
              high-quality results in web development.
            </p>
          </div>
          <div className="flex gap-2 sm:gap-7 h-28 lg:h-full xl:h-28 2xl:h-full 2xl:w-full relative xl:w-[95%] lg:mx-10 xl:mx-0 2xl:mx-10">
            <Image
              className="lg:absolute xl:static 2xl:absolute top-6 left-6 rounded-full h-[85%] w-[85%] z-20 transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
              src={me1}
              alt="me 1"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Image
              className="lg:absolute xl:static 2xl:absolute top-10 left-10 rounded-full h-[85%] w-[85%] z-10 hover:z-30 transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
              src={me2}
              alt="me 2"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Image
              className="lg:absolute xl:static 2xl:absolute top-14 left-14 rounded-full h-[85%] w-[85%] hover:z-30 transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
              src={me3}
              alt="me 3"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
