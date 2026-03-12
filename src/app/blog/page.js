"use client"

import { useState } from "react"
import Link from "next/link"
import { MoveUpRight } from "lucide-react"
import blogData from "../../../Blog.json"


const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateString))

export default function BlogPage() {
  const [showAllArticles, setShowAllArticles] = useState(false)

  const blogs = blogData.blogs || []
  const featuredBlogs = blogs.filter((blog) => blog.featured)
  const latestBlogs = blogs.filter((blog) => !blog.featured)
  const visibleFeaturedBlogs = showAllArticles
    ? featuredBlogs
    : featuredBlogs.slice(0, 3)

  // Start by showing only the featured cards. When user clicks the button,
  // show the remaining (non-featured) articles.
  const visibleLatestBlogs = showAllArticles ? latestBlogs : []

  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px]  px-4 pb-12  text-center sm:px-6 md:rounded-b-[80px] md:pb-16">
        <div className="text-center">
          <h2 className="text-[24px] font-bold leading-[1.02]  text-slate-950 sm:text-[34px] md:text-[46px]">
            Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="mt-4 text-md text-slate-600 md:text-lg">
           Learn how AI automation can help your business grow
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        {/* <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Featured Insights</h2>
          
        </div> */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleFeaturedBlogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:shadow-md"
            >
              <div className="mb-4 overflow-hidden rounded-xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-xs font-medium text-gray-600">{blog.category}</p>
              <h3 className="mt-2 text-xl font-semibold leading-tight">{blog.title}</h3>
              <p className="mt-3 text-sm text-gray-700">{blog.excerpt}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                <span>{formatDate(blog.date)}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
                <span>•</span>
                <span>{blog.author}</span>
              </div>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read Article
                <MoveUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      {latestBlogs.length > 0 ? (
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => setShowAllArticles((prev) => !prev)}
            className="my-8 cursor-pointer rounded-xl border-2 border-gray-300 px-8 py-3 font-medium text-gray-800 transition hover:bg-gray-200"
          >
            {showAllArticles ? "Show Less" : "View All Articles"}
          </button>
        </div>
      ) : null}

      {showAllArticles ? (
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 md:pb-24">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Latest Insights</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleLatestBlogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:shadow-md"
            >
              <div className="mb-4 overflow-hidden rounded-xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-xs font-medium text-gray-600">{blog.category}</p>
              <h3 className="mt-2 text-lg font-semibold leading-tight">{blog.title}</h3>
              <p className="mt-3 text-sm text-gray-700">{blog.excerpt}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                <span>{formatDate(blog.date)}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
                <span>•</span>
                <span>{blog.author}</span>
              </div>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
              >
                Read Article
                <MoveUpRight className="h-4 w-4" />
              </Link>
            </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  )
}
