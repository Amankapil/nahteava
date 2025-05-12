import Link from "next/link";

export default function WhatWeDoSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-[#EA993F] font-bold">What We Do</span>
      </div>

      <div className="max-w4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl  text-[#5A5A5A] leading-tight font-normal">
          Nahteava equips organizations with the strategic vision and
          technological expertise to future-proof their business, driving
          efficiency and maximizing the value of their assets.
        </h2>
      </div>

      <div className="grid max-w-3xl mx-auto md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
        {/* First Stat */}

        <div className="flex flex-col 2xl:px-10 justify-between items-center md:items-start border-r-0 md:border-r border-gray-200 pr-0 md:pr-4 lg:pr-8">
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-[#EA993F] mb-4">
              568+
            </h3>
            <p className="font-bold font-inter text-[#5A5A5A] mb-2">
              is the amount of clients we serve
            </p>
            <p className="text-[#5A5A5A] text-sm mb-6 text-center md:text-left">
              Get real-time asset tracking to unlock full ROI across every stage
              in the asset lifecycle.
            </p>
          </div>
          <Link
            href="#"
            className="border  border-orange-400 text-[#5A5A5A] px-6 py-2 inline-block hover:bg-orange-50 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Second Stat */}
        <div className="flex flex-col justify-between items-center md:items-start border-r-0 md:border-r border-gray-200 pr-0 md:pr-4 lg:pr-8">
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-[#EA993F] mb-4">
              12M
            </h3>
            <p className="font-medium text-gray-800 mb-2">
              in savings for asset management
            </p>
            <p className="text-[#5A5A5A] text-sm mb-6 text-center md:text-left">
              From advanced audit to RFID — take the next step in managing your
              assets.
            </p>
          </div>
          <Link
            href="#"
            className="border border-[#EA993F] text-[#5A5A5A] px-6 py-2 inline-block hover:bg-orange-50 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Third Stat */}
        <div className="flex justify-between flex-col items-center md:items-start">
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-[#EA993F] mb-4">
              98%
            </h3>
            <p className="font-medium text-gray-800 mb-2">
              customer satisfaction for working with us
            </p>
            <p className="text-[#5A5A5A] text-sm mb-6 text-center md:text-left">
              {" "}
              Build up an asset management solution tailored exactly to your
              business.
            </p>
          </div>
          <Link
            href="#"
            className="border border-[#EA993F] text-[#5A5A5A] px-6 py-2 inline-block hover:bg-orange-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* <div className="mt-16 border-b border-orange-300"></div> */}
    </section>
  );
}
