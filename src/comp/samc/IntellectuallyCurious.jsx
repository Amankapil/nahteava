export default function ValueSection() {
  return (
    <section className="relative bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative text-center">
          {/* Dummy image - replace with actual */}
          <div className="mb-16 inline-block  ">
            <img
              src="/sam/rec.png"
              alt="Team discussion"
              className="object-cover w-full h64 "
            />
          </div>

          {/* Text content */}
          <div className="flex items-end justify-end w-full">
            <div className="max-w-xl  mx-aut o flex items-end justify-end w-full">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-8">
                  logo{" "}
                </h2>
                <p className="text-[36px] text-left  text-[#EA993F] leading-relaxed font-medium">
                  We are intellectually curious, asking incisive questions,
                  respectfully challenging one another, and striving to succeed
                  together, invested in your business success.
                </p>
              </div>

              {/* Decorative elements */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
