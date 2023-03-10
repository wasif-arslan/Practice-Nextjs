import Head from "next/head";

export default function HeroSec() {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between  mb-24 md:mb-32 ">
      <div>
        <img
          src="medium-shot-man-wearing-vr-glasses.jpg"
          alt="image"
          className="relative"
        ></img>
      </div>
      <div className="md:w-5/12 text-teal-800 absolute font-semibold border-2 border-inherit bg-white md:mb-0 ml-5 mt-2 rounded-lg p-10">
        <h2 className="text-3xl items-left  font-bold mb-4">
          Program of Studies
        </h2>
        <p className="text-xl mb-8 font-semibold text-teal-600 text-Slate-200">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialities and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a year-long hybrid programme that includes both onsite and
          online classes and is divided into four quarters of 13 weeks each.{" "}
        </p>
        <p className="text-xl text-teal-600 font-semibold mb-8">
          The emphasis will be on hands-on learning by educating students to
          produce projects. To accommodate everyone, courses will be held
          primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays.
          It employs a hybrid teaching format, with core onsite classes
          complemented by online Zoom laboratories and recorded videos.{" "}
        </p>
      </div>
    </section>
  );
}
