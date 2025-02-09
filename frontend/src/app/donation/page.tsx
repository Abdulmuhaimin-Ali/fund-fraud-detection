import Image from "next/image";
import Link from "next/link";
import { DonationForm } from "../../components/DonationForm";
import Nav from "../../components/Nav";
import Rating from "../../components/Rating";

export default function Page() {
  const val = Math.floor(Math.random() * (100000000+ 1)) + 1;

  const product = {
    id: val,
    name: "Handmade Fresh Table",
    price: 687,
    image: "https://placeimg.com/640/480/any?r=0.9178516507833767",
    description:
      "Andy shoes are designed to keep in mind durability as well as trends, the most stylish range of shoes & sandals",
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src="/MSA.jpg?height=600&width=800"
            alt="Zakat-Picture"
            fill
            className="object-cover"
          />
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#986d12] to-[#005316]" />
        </div>

        {/* Right Column - Content */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-black">
            Zakat Description
          </h1>
          <div className="prose max-w-none mb-8">
            <p className="text-[#374151]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              cursus lorem. Donec ac eros vitae ipsum vehicula vestibut. Quisque
              faucibus ante eu risus porta, auctor varius est rhoncus. Sed ut
              lacinia libero, id viverra porta. Suspendisse imperdiet, venenatis
              mi. Integer pellentesque molestie dictum.
            </p>
            <p className="text-[#374151] mt-4">
              Maecenas at velit non elit tincidunt aliquet vitae vitae lectus.
              Sed elementum nec ipsum rhoncus hendrerit. Proin faucilibus metus
              vel sis blandit, id condimentum ipsum sodales. Nullam sit amet,
              volutpat in consectetur.
            </p>
            <Rating />
          </div>

          <DonationForm product={product} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#dddddd] rounded" />
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="#" className="text-[#374151] hover:text-[#005316]">
              FAQs
            </Link>
            <Link href="#" className="text-[#374151] hover:text-[#005316]">
              Contact
            </Link>
            <Link href="#" className="text-[#374151] hover:text-[#005316]">
              Resources
            </Link>
            <Link
              href="#"
              className="bg-[#005316] text-white px-4 py-2 rounded hover:bg-[#005316]/90"
            >
              Give Zakat
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
