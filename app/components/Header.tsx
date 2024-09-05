export const Header = (
  <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-[#504945] bg-gradient-to-b from-[#3c3836] pb-6 pt-12 sm:pt-16 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-[#3c3836] lg:p-4 text-2xl sm:text-3xl font-bold tracking-tight text-[#ebdbb2]">
      Rustinx
    </p>
    <div className="fixed max-lg:hidden bottom-0 left-0 flex h-24 sm:h-48 w-full items-end justify-center lg:bg-gradient-to-t from-[#282828] via-[#282828] lg:static lg:size-auto">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-4 sm:p-8 lg:pointer-events-auto lg:p-0 text-[#ebdbb2]"
        href="https://charlesinwald.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        By Charles Inwald
      </a>
    </div>
  </div>
);
