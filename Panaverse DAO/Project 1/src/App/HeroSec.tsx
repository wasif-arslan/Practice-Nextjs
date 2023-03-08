import Head from "next/head";

export default function HeroSec() {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between mt-24 mb-24 md:mb-32 relative">
      <div className="w-full md:w-1/2 mb-16 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          enim nec metus malesuada, sit amet molestie magna bibendum. Praesent
          euismod risus vel tincidunt efficitur. Nulla in semper nunc.{" "}
        </p>
        <p className="text-xl mb-8">
          Suspendisse eu sapien odio. Praesent in magna gravida, iaculis nibh
          vel, lacinia est. Morbi nec quam vel augue suscipit hendrerit a ut
          ipsum. In bibendum neque ut ante efficitur, vel ultrices ipsum
          iaculis.{" "}
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/images/mission.jpg"
          alt="Mission"
          className="w-full h-full object-cover object-center rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
