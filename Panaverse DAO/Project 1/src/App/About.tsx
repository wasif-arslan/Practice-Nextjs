import Head from 'next/head'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          About Us
        </h1>

        <p className="mt-3 text-2xl">
          We are a company that is passionate about creating innovative products for our customers. Our team is made up of experts in design, engineering, and marketing who work together to bring our ideas to life.
        </p>

        <div className="mt-6">
          <a
            href="#"
            className="px-4 py-2 font-semibold bg-gray-800 text-white rounded-full"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  )
}