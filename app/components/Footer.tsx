import Link from "next/link";

const linkClass =
  "text-[#d5c4a1] hover:text-[#fabd2f] transition-colors underline-offset-4 hover:underline";

export function Footer() {
  return (
    <footer className="w-full max-w-5xl mt-16 border-t border-[#504945] pt-8 pb-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#a89984]">
        <p>© {new Date().getFullYear()} Charles Inwald. All rights reserved.</p>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="/privacy" className={linkClass}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={linkClass}>
            Terms &amp; Conditions
          </Link>
          <Link href="/copyright" className={linkClass}>
            Copyright
          </Link>
        </nav>
      </div>
    </footer>
  );
}
