import Image from "next/image"

export default function About() {
    return (
        <>
            <div className="flex justify-between h-17 p-20">
                <div className="w-[300px] ">
                    <Image src={"/logo.png"} alt="Image" width={60} height={40}></Image>
                    <p className="mt-10">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl">Company</h1>
                    <p>About</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>How it Works</p>
                    <p>Contact Us</p>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl">Support</h1>
                    <p>Support Carrer</p>
                    <p>24h Service</p>
                    <p>Quick Chat</p>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl">Contact</h1>
                    <p>Whatsapp</p>
                    <p>24 Hour Support</p>
                </div>
            </div>
        </>
    )
}