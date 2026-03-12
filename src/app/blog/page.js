import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog",
  description:
    "Read NoorNova insights on AI automation, customer communication, lead follow-up, and growth strategies for local businesses.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogClient />;
}

