import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen   ">
        <div>
          <img
            src="cool-geometric-triangular-figure-neon-laser-light-great-backgrounds.jpg"
            alt="image"
            className="-mt-20 -z-10 relative"
          ></img>
        </div>
        <div className="absolute inset-0 bg-opacity-50 text-white my-[300px]">
          <Head>
            <title>Panaverse Site By Wasif</title>
            <link rel="icon" href="" />
          </Head>

          <main className="flex flex-col items-center justify-center flex-1 px-20 text-center ">
            <h1 className="text-6xl font-bold">
              Certified Web 3.0 and Metaverse Developer:
            </h1>
            <br />
            <h1 className="text-4xl">
              A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
            </h1>
            <br />
            <p className="mt-3 text-2xl">
              Getting Ready for the Next Generation and Future of the Internet -
              Join a 13 Trillion Dollar Industry with 5 Billion Users
            </p>

            <div className="mt-9">
              <a
                href="#"
                className="px-5 py-3 hover:text-gray-800 font-semibold bg-red-600 text-white rounded-full"
              >
                Apply Now !
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
