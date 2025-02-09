import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onSearch: (query: string) => void;
  onCategories: (categories: { title: string; description: string; image: string }[]) => void;
}

const Hero = ({ onSearch, onCategories }: HeroProps) => {
  const [query, setQuery] = useState("");

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  const categories = [
    {

      title: "Helping Orphans",
      description: "Zakat helps provide essential support to orphans in need.",
      image: "/orphan.webp",
      id:1
    },
    {
      title: "Medical Aid",
      description: "Medical assistance to those who cannot afford it.",
      image: "/medical.jpg",
      id:2
    },
    {
      title: "Feeding Families",
      description: "Ensuring families have access to nutritious food.",
      image: "/feeding.jpg",
      id:3
    },
    {
      title: "Education Support",
      description: "Supporting education for underprivileged children.",
      image: "/education.webp",
      id:4
    },

    {
      title: "Emergency Support",
      description: "Supporting education for underprivileged children.",
      image: "/emergency.jpeg",
      id:5
    },
  ];

  // Use useEffect to send the categories array to the parent on mount (or when onCategories changes)
  useEffect(() => {
    onCategories(categories);
  }, [onCategories]);



  return (
    <section className="relative">
      <Image
        src="/banner.avif?height=400&width=600"
        alt="Hero Image"
        width={600}
        height={400}
        className="h-[400px] w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <div className="w-full max-w-xl px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Causes"
              className="w-full rounded-lg border border-[#dddddd] bg-white px-4 py-3 pl-12 text-[#374151] placeholder-[#374151] focus:border-[#005316] focus:outline-none focus:ring-1 focus:ring-[#005316]"
              value={query}
              onChange={search}
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#374151]" />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;