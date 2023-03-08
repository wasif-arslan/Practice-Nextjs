import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen absolute  ">
        <img src="cool-geometric-triangular-figure-neon-laser-light-great-backgrounds.jpg" alt="image" className="-mt-20 -z-10 "></img>
        <div className="-mt-130 z-10">
          <Head>
            <title>My Brand Website</title>
            <link rel="icon" href="" />
          </Head>

          <main className="flex flex-col items-center justify-center flex-1 px-20 text-center ">
            <h1 className="text-6xl font-bold">Welcome to My Brand</h1>

            <p className="mt-3 text-2xl">We make amazing products for you</p>

            <div className="mt-6">
              <a
                href="#"
                className="px-4 py-2 font-semibold bg-gray-800 text-white rounded-full"
              >
                Get started
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
