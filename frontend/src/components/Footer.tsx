import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <>
        <footer className="border-t border-[#dddddd] bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Zakat Navigator Logo"
              width={50}
              height={50}
              className="h-[50px] w-[50px]"
            />
          </div>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="#" className="text-[#374151] hover:text-[#986d12] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#374151] hover:text-[#986d12] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#374151] hover:text-[#986d12] transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </nav>
          <button className="rounded bg-[#005316] px-6 py-2 text-white hover:bg-[#005316]/90 transition-colors">
            Give Zakat
          </button>
        </div>
      </footer>
      </>
    )}

export default Footer;