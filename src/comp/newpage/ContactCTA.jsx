import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-[#EA993F] mb-10">
        How Can We Help You Today?
      </h2>

      <Link
        href="#"
        className="border border-[#FAB667] text-gray-700 px-8 py-2 inline-block hover:bg-gray-50 transition-colors"
      >
        Let's Connect
      </Link>
    </section>
  );
}
