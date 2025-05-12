// components/Hero.js
export default function Hero() {
  return (
    <section className="hero-section relative h-[600px] md:h-[700px] lg:h-[800px]">
      {/* Black Overlay */}

      <div className="spotlight-overlay absolute inset-0 z-10 pointer-events-none" />

      {/* Content */}
      <div className="absolute top-[200px] p-10 px-28 right-10 bg-[#404040] w-[700px] z-20 hfull flex flex-col items-start justify-start textcenter">
        {/* <div className="relative"> */}
        <span className="absolute h-[10px] w-[200px] bg-[#ea993f] -left-[15%] top-16"></span>
        {/* </div> */}
        <h1 className="text-[60px] font-bold text-white leading-tight font-inter">
          Leaders in{" "}
          <span className="text-[#ea993f]">IT and Software Asset</span>{" "}
          Management
        </h1>
        <p className="mt-6  text-white font-bold  max-w-4xl">
          Producing results that defy expectations.
        </p>
        <div className="mt-6">
          <button className="border border-[#ea993f] text-white px-4 py-2 mt-3">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
