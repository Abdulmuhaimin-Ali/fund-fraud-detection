import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="bg-[#005316]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#dddddd] bg-[#005316]">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image 
              src={"/logo.png"}
              href = "/"
              alt="logo"
              width={50}
              height={50}
              className="h-[50px] w-[50px]" />
        
            <span className="text-xl font-bold text-[#FFFFFF]">
              <a href="/">Zakat Navigator</a>
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className="text-[#FFFFFF] hover:text-[#986d12] transition-colors"
                >
                  Discover Causes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#FFFFFF] hover:text-[#986d12] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#FFFFFF] hover:text-[#986d12] transition-colors"
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#FFFFFF] hover:text-[#986d12] transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/basket"
                  className="bg-[#986d12] hover:bg-[#986d12]/90 text-white p-2 rounded-md"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
