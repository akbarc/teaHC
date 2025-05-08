import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface BlogSidebarProps {
  currentSlug?: string
}

export function BlogSidebar({ currentSlug }: BlogSidebarProps) {
  const categories = [
    { name: "Cannabinoid Science", slug: "cannabinoid-science" },
    { name: "Formulation Technology", slug: "formulation-technology" },
    { name: "Research Reviews", slug: "research-reviews" },
    { name: "Wellness", slug: "wellness" },
    { name: "Product Insights", slug: "product-insights" },
  ]

  const popularArticles = [
    { title: "Cannabinoid Receptors Explained", slug: "cannabinoid-receptors-explained" },
    { title: "Bioavailability: Why It Matters", slug: "bioavailability-explained" },
    { title: "The Science of Nano-Emulsification", slug: "nano-emulsification-technology" },
    { title: "Understanding Inflammation", slug: "understanding-inflammation" },
    { title: "The Entourage Effect Explained", slug: "entourage-effect-explained" },
  ]

  return (
    <aside className="w-full lg:w-72 space-y-8">
      {/* Search */}
      <div className="space-y-4">
        <h3 className="font-medium">Search</h3>
        <div className="flex gap-2">
          <Input type="search" placeholder="Search articles..." className="flex-1" />
          <Button type="submit" variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-medium">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/blog/category/${category.slug}`}
                className="text-gray-600 hover:text-amber-600 transition-colors"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Articles */}
      <div className="space-y-4">
        <h3 className="font-medium">Popular Articles</h3>
        <ul className="space-y-3">
          {popularArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/blog/${article.slug}`}
                className={`block text-sm hover:text-amber-600 transition-colors ${
                  currentSlug === article.slug ? "text-amber-600 font-medium" : "text-gray-600"
                }`}
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Subscribe */}
      <div className="bg-amber-50 p-4 rounded-lg space-y-4">
        <h3 className="font-medium">Subscribe to Updates</h3>
        <p className="text-sm text-gray-600">Get the latest research and articles delivered to your inbox</p>
        <form className="space-y-3">
          <Input type="email" placeholder="Your email" className="bg-white" />
          <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
            Subscribe
          </Button>
        </form>
      </div>

      {/* Tags */}
      <div className="space-y-4">
        <h3 className="font-medium">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog/tag/cannabinoids"
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-amber-100 transition-colors"
          >
            Cannabinoids
          </Link>
          <Link
            href="/blog/tag/cbd"
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-amber-100 transition-colors"
          >
            CBD
          </Link>
          <Link
            href="/blog/tag/thcv"
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-amber-100 transition-colors"
          >
            THCV
          </Link>
          <Link
            href="/blog/tag/cbg"
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-amber-100 transition-colors"
          >
            CBG
          </Link>
          <Link
            href="/blog/tag/inflammation"
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-amber-100 transition-colors"
          >
            Inflammation
          </Link>
          <Link
            href="/blog/tag/bioavailability"
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-amber-100 transition-colors"
          >
            Bioavailability
          </Link>
          <Link
            href="/blog/tag/research"
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-amber-100 transition-colors"
          >
            Research
          </Link>
          <Link
            href="/blog/tag/wellness"
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-amber-100 transition-colors"
          >
            Wellness
          </Link>
        </div>
      </div>
    </aside>
  )
}
