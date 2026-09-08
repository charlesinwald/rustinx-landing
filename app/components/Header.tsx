import Link from "next/link";

export const Header = (
  <div className="z-[100] w-full max-w-5xl items-center justify-between font-mono lg:flex">
    <div className="fixed left-0 top-0 flex w-full justify-center border-b border-[#504945] bg-gradient-to-b from-[#3c3836] pb-6 pt-12 sm:pt-16 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-[#3c3836] lg:p-4">
      <Link
        href="/"
        className="text-3xl sm:text-4xl font-bold tracking-tight text-[#fbf1c7] hover:text-[#fabd2f] transition-colors"
      >
        Rustinx
      </Link>
    </div>
    <nav className="fixed max-lg:hidden bottom-0 left-0 flex h-24 sm:h-48 w-full items-end justify-center lg:bg-gradient-to-t from-[#282828] via-[#282828] lg:static lg:size-auto lg:items-center lg:gap-6">
      <div className="flex items-center gap-6 lg:gap-8">
        <a
          href="/#features"
          className="text-base font-semibold text-[#fbf1c7] hover:text-[#fabd2f] transition-colors"
        >
          Features
        </a>
        <a
          href="/#demo"
          className="text-base font-semibold text-[#fbf1c7] hover:text-[#fabd2f] transition-colors"
        >
          Demo
        </a>
        <a
          className="flex place-items-center gap-2 p-4 sm:p-8 lg:p-0 text-base font-medium text-[#d5c4a1] hover:text-[#fabd2f] transition-colors"
          href="https://charlesinwald.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Charles Inwald
        </a>
      </div>
    </nav>
  </div>
);
