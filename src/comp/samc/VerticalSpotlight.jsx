import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-6 text-center">
      {/* Header */}
      <p className="text-orange-500 text-4xl font-bold">05.25</p>
      <h1 className="text-gray-800 text-5xl font-semibold mt-2">
        Verticle Spotlight
      </h1>

      {/* Industry Showcase */}
      <div className="mt-8">
        <h2 className="text-orange-500 text-2xl font-semibold">
          Monthly Industry Showcase
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technology Section */}
          <div className="flex flex-col items-center">
            <p className="text-orange-500 text-xl font-semibold">
              01 Technology
            </p>
            <p className="text-gray-800 text-lg font-medium">
              Leading Companies Into the Future
            </p>
            <Image
              src="/dummy-tech.jpg"
              alt="Technology"
              width={500}
              height={300}
              className="mt-2 rounded-lg shadow-lg"
            />
          </div>
          {/* Healthcare Section */}
          <div className="flex flex-col items-center">
            <p className="text-orange-500 text-xl font-semibold">
              02 Healthcare
            </p>
            <p className="text-gray-800 text-lg font-medium">
              Guiding Hospitals to Help Patients
            </p>
            <Image
              src="/dummy-healthcare.jpg"
              alt="Healthcare"
              width={500}
              height={300}
              className="mt-2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
