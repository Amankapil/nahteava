import Image from "next/image";

export default function BusinessServicesSection() {
  return (
    <section className="w-full relative h-[700px]">
      <Image
        src="/newimage/Rectangle (2).png"
        alt="Life preserver in ocean"
        fill
        className="object-cover -ml-10 w-[20%]"
        priority
      />
    </section>
  );
}
