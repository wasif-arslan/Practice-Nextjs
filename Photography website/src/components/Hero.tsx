
export default function Hero({heading , message}: any) {
  return (
    <div className=" flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-[2]"/>
        <div className="p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]">
            <h2 className="text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-xl">{message}</p>
            <button className=" py-2 px-8 border">Book</button>
        </div>

    </div>
  )
}

 