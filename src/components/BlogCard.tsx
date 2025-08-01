import Link from "next/link";

export default function BlogCard({
  title,
  excerpt,
  slug,
}: {
  title: string;
  excerpt: string;
  slug: string;
}) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-card flex flex-col">
      <h3 className="font-serif text-2xl text-primary-800">{title}</h3>
      <p className="mt-3 text-slate-600 text-sm flex-1">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="mt-6 text-primary-600 font-semibold text-sm hover:underline"
      >
        Ler mais →
      </Link>
    </article>
  );
}
