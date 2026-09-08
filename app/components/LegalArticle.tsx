import Link from "next/link";

export function LegalArticle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article>
      <p className="mb-4 text-sm">
        <Link
          href="/"
          className="text-[#fabd2f] hover:text-[#fe8019] underline underline-offset-4"
        >
          ← Back to home
        </Link>
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#fbf1c7] mb-3">
        {title}
      </h1>
      <p className="text-sm text-[#a89984] mb-8">Last updated: September 7, 2026</p>
      <div className="space-y-4 text-base leading-relaxed text-[#d5c4a1] [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#fbf1c7] [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:pt-2 [&_a]:text-[#fabd2f] [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-[#fe8019] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:mb-3">
        {children}
      </div>
    </article>
  );
}
