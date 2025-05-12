import Image from "next/image";
import Link from "next/link";

function ResourceCard({ type, title, description, imageSrc, imageAlt }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="w-[400px] h-48 relative 2xl:h-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-2/3">
        <span className=" text-[#EA993F] text-sm mb-2 2xl:mb-4 block">
          {type}
        </span>
        <h3 className="text-xl font-medium text-gray-800 mb-2 2xl:mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 2xl:mb-8 text-sm">{description}</p>
        <Link href="#" className="text-[#EA993F] text-sm hover:underline">
          read more »
        </Link>
      </div>
    </div>
  );
}

export default function NewsInsightsSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-4">
        <span className="text-[#EA993F] font-medium">Resources</span>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
          Latest news and insights
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <ResourceCard
          type="article"
          title="How to Conduct a Self-Audit"
          description="If you've ever been lucky enough to experience a software compliance audit by a vendor or third-party, you'll know just how stressful and inconvenient they can be, especially"
          imageSrc="/newimage/Rectangleee.png?height=300&width=400"
          imageAlt="Person reviewing documents with sticky notes"
        />

        <ResourceCard
          type="book"
          title="Successful IT Asset Management"
          description="A perfect guide to create holistic IT asset management and software asset management programs that close the risk gaps, increases productivity and results in"
          imageSrc="/newimage/blog.png?height=300&width=400"
          imageAlt="IT Asset Management book cover"
        />
      </div>

      <div className="flex justify-center">
        <Link
          href="#"
          className="border border-[#EA993F] text-[#5A5A5A] px-8 py-2 inline-block hover:bg-gray-50 transition-colors"
        >
          View all
        </Link>
      </div>
    </section>
  );
}
