import { services } from "@/data/services";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <>


      <div className="fixed bottom-0 left-0 right-0 z-50">
        <p className="text-center text-2xl font-charon font-black">HELLO!</p>
      </div>

      <div className="py-12 lg:py-24 space-y-24 lg:space-y-48">
        <div className="max-w-5xl w-full mx-auto px-12 lg:px-24 space-y-12">

          <div className="space-y-2 lg:text-center">
            <p className="font-zalando text-2xl lg:text-4xl font-black">NaplesLabs</p>
            <p className="font-charon text-lg">A computer repair & upgrade company based in Naples, Florida.</p>
          </div>

          <div>
            <p className="font-charon font-black text-4xl lg:text-7xl">Is your computer being stupid? <a href="" className="bg-yellow-300">{"Let's make it smart again."}</a></p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {services.map((service) => (
              <div key={service.id} className=" border-2 border-black/80 p-6 rounded space-y-2">
                <p className="font-zalando font-black text-2xl">{service.name}</p>
                <p className="text-2xl font-charon">{service.description}</p>
                <p className="font-charon font-black inline-block bg-black text-white px-3 py-0.5">{service.price}</p>
              </div>
            ))}

          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto bg-black text-white p-12 py-24 space-y-24 lg:p-24 lg:py-48 flex flex-col items-center justify-center">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <p className="text-4xl lg:text-7xl font-zalando font-black">Send us a message to get started.</p>
            <p className="text-4xl lg:text-7xl font-zalando font-black">You could have your machine up and running in the next 24 hours.</p>
            {/* <p className="text-2xl lg:text-4xl font-zalando font-black opacity-80">We'll get back to you as soon as possible.</p> */}
          </div>
          <div className="flex gap-6">
            <p className="text-2xl font-charon bg-white text-black px-6 py-3 font-black inline-block">Send a Message on Facebook</p>
            <p className="text-2xl font-charon bg-white text-black px-6 py-3 font-black inline-block">Send an Email</p>
          </div>
        </div>


        <div className="max-w-5xl w-full mx-auto px-12 lg:px-24 space-y-12">

          <p className="font-zalando font-black text-2xl lg:text-4xl">But most importantly... why should I trust you with my computer?</p>
          <p className="text-2xl lg:text-4xl font-charon"><a href="https://sebastianalsina.com" className="underline hover:no-underline">Sebastian Alsina</a> is a professional software engineer who has been tinkering with computers for over 10 years.
          </p>
          <p className="text-2xl lg:text-4xl font-charon">
            Sebastian spends his time building software for startups and small businesses, hacking together hardware projects, modding retro gaming consoles, deploying complex homelab and automation systems for media centers and hobbyists, and exploring the world of technology.
          </p>
          <p className="text-2xl lg:text-4xl font-charon">
            Naples Labs is the culmination of his passion for computers and his desire to help people get the most out of their machines.
          </p>
          <p className="font-zalando font-black text-2xl lg:text-4xl">Our Promise...</p>

          <div className="space-y-4">
            <div className="font-charon flex gap-6">
              <Check className="w-8 h-8 shrink-0" />
              <p className="text-2xl"><b>No upgrade or fix, no charge.</b>{" "}
                {"If we can't upgrade your machine, you don't pay. No questions asked."}</p>
            </div>
            <div className="font-charon flex gap-6">
              <Check className="w-8 h-8 shrink-0" />
              <p className="text-2xl"><b>Upfront pricing:</b>{" "}
                {"you'll know the cost before we do anything — no surprises."}</p>
            </div>
            <div className="font-charon flex gap-6">
              <Check className="w-8 h-8 shrink-0" />
              <p className="text-2xl"><b>Fast turnarounds:</b> most jobs are done same-day or next-day.</p>
            </div>
            <div className="font-charon flex gap-6">
              <Check className="w-8 h-8 shrink-0" />
              <p className="text-2xl"><b>Data integrity matters to us.</b> We take care when handling your files and always prioritize keeping your data intact and private.
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl w-full mx-auto text-white">
          <img
            className="w-full"
            src="/img/working.png"
            alt="Computer repair and upgrade work"
          />
          <p className="absolute bottom-0 left-0 right-0 text-center p-6 text-white text-2xl font-zalando font-black">Naples Labs &copy; {new Date().getFullYear()}</p>
        </div>


      </div >
    </>
  );
}
