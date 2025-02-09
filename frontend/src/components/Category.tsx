import Image from "next/image";
import Link from "next/link";

type Category = {
  title: string;
  description: string;
  image: string;
};

interface CategoriesProps {
  categories: Category[];
  searchQuery: string;
}

export default function Category({ categories, searchQuery }: CategoriesProps) {
  // Use Regex to filter categories (case-insensitive)
  const regex = new RegExp(searchQuery, "i");
  const filteredCategories = categories.filter((category) =>
    regex.test(category.title)
  );

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#374151]">
          Discover Zakat Categories
        </h2>

        {filteredCategories.length === 0 ? (
          <p className="text-center text-[#374151]">No results found</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filteredCategories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col items-start bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300}
                  height={200}
                  className="mb-4 w-full rounded-lg"
                />
                <h3 className="mb-2 text-xl font-semibold text-[#374151]">
                  {category.title}
                </h3>
                <p className="mb-4 text-[#374151]">{category.description}</p>
                <Link
                  href={{
                    pathname: "/donation",
                    query: {
                      title: category.title,
                      description: category.description,
                      image: category.image,
                    },
                  }}
                  className="rounded bg-[#005316] px-6 py-2 text-white hover:bg-[#005316]/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
