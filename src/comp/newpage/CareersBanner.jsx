import Link from "next/link";
import Image from "next/image";

export default function CareersBanner() {
  return (
    <section className="relative career h-[400px] md:h-[500px] 2xl:h-[700px] w-full">
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-black opacity-60 z-1" /> */}
      <div className="absolute inset-0">
        <Image
          src="/newimage/career.png?height=500&width=1200"
          alt="People walking with shadows"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-[99] flex items-center justify-center">
        <div className="text-center">
          <div className="bg-[#ea9a3f8d] px-8 py-6 md:px-16 md:py-10 inline-block mb-6">
            <h2 className="text-2xl md:text-4xl text-white font-medium">
              Where will your career take you?
            </h2>
          </div>
          <div className="block">
            <Link
              href="#"
              className="border border-white text-white px-8 py-2 inline-block transition-colors"
            >
              Join us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
