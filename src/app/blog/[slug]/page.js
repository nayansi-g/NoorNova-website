import Link from "next/link"
import { MoveLeft, MoveUpRight } from "lucide-react"
import blogData from "../../../../Blog.json"
import DOMPurify from 'isomorphic-dompurify';


const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString))

export function generateStaticParams() {
  return (blogData.blogs || []).map((blog) => ({ slug: blog.slug }))
}


export default async function BlogDetailsPage({ params }) {
  let {slug} = await params;
  const blog = await (blogData.blogs || []).find((item) => item.slug === slug)

  if (!blog) {
    return (
      <main className="min-h-[70vh] bg-white px-4 py-32 text-center sm:px-6">
        <h1 className="text-3xl font-semibold text-gray-900">Blog not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-700">
          The article you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/blog"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          <MoveLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </main>
    )
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Organization",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TubeHelper",
      logo: {
        "@type": "ImageObject",
        url: "https://tubehelper.in/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tubehelper.in/blog/${blog.slug}`,
    },
    image: [`https://tubehelper.in${blog.image}`],
  }

  return (
    <>
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative w-full overflow-hidden border-b border-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/3Dimg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[url('/hero-network.svg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 hero-image-overlay" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-28 md:px-10 lg:px-20">
         <div className="mx-auto max-w-4xl">
          <Link href="/#insights" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black">
            <MoveLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <p className="mt-2 text-sm font-medium text-gray-700">{blog.category}</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
            {blog.title}
          </h1>
          
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-gray-700">
            <span>{formatDate(blog.date)}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
            {/* <span>•</span> */}
            {/* <span>{blog.author}</span> */}
          </div>
        </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </section>
      <article className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-5 overflow-hidden rounded-2xl bg-gray-100">
            <div className="aspect-[16/9] w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">{blog.metaTitle}</h2>
          <p className="mt-4 text-gray-700">{blog.metaDescription}</p>
          <p className="mt-4 text-gray-700">{blog.excerpt}</p>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
         <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
      />    
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-semibold">Need Help Applying This Strategy?</h2>
          <p className="mt-4 text-gray-700">
            If you want expert support to implement this for your business, our team can build a structured plan around performance marketing, conversion optimization, analytics, and long-term growth systems.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book Your Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </main>
    </>
  )
}
