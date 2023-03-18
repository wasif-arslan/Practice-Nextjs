import Head from "next/head";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Contact Us</h1>

        <p className="mt-3 text-2xl">
          We would love to hear from you! If you have any questions or feedback,
          please feel free to get in touch with us.
        </p>

        <div className="mt-6">
          <a
            href="#"
            className="px-4 py-2 font-semibold bg-gray-800 text-white rounded-full"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}
