import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-6 sm:p-12 lg:p-24 bg-[#282828] w-full">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-[#504945] bg-gradient-to-b from-[#3c3836] pb-6 pt-12 sm:pt-16 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-[#3c3836] lg:p-4 text-2xl sm:text-3xl font-bold tracking-tight text-[#ebdbb2]">
          Rustinx
        </p>
        <div className="fixed bottom-0 left-0 flex h-24 sm:h-48 w-full items-end justify-center bg-gradient-to-t from-[#282828] via-[#282828] lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 sm:p-8 lg:pointer-events-auto lg:p-0 text-[#ebdbb2]"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Charles Inwald
          </a>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row m-12 place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full md:before:bg-gradient-radial before:from-[#ebdbb2] before:to-transparent before:blur-2xl after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-[#fabd2f] after:via-[#83a598] after:blur-2xl sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] w-full max-w-7xl md:mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#282828] w-full">
          <div className="max-w-md text-center lg:text-left lg:flex-auto lg:py-16 lg:pl-8 lg:pr-4 border-[#504945] bg-gradient-to-b from-[#3c3836] pt-16 sm:pt-20 lg:pt-16 backdrop-blur-2xl lg:rounded-xl lg:border lg:bg-[#3c3836] lg:p-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#ebdbb2]">
              Simplify managing your Nginx Server.
              <br />
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#a89984]">
              No more fiddling with the command line
            </p>
            <div className="mt-6 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-[#ebdbb2] px-3 py-2 sm:px-3.5 sm:py-2.5 text-sm font-semibold text-[#282828] shadow-sm hover:bg-[#d5c4a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ebdbb2]"
              >
                Download
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-[#ebdbb2]"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 lg:ml-8 lg:flex-auto w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-1/2">
            <Image
              className="rounded-md bg-[#282828]/5 ring-1 ring-[#3c3836]/10"
              src="/images/rustinx-screenshot.png"
              alt="App screenshot"
              layout="responsive"
              width="1824"
              height="1080"
            />
          </div>
        </div>
      </div>

      <div className="mb-16 sm:mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-4 sm:px-5 py-4 transition-colors hover:border-[#7c6f64] hover:bg-[#504945]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-semibold text-[#b8bb26]">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-[#ebdbb2] opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-4 sm:px-5 py-4 transition-colors hover:border-[#7c6f64] hover:bg-[#504945]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-semibold text-[#fe8019]">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-[#ebdbb2] opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-4 sm:px-5 py-4 transition-colors hover:border-[#7c6f64] hover:bg-[#504945]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-semibold text-[#d3869b]">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-[#ebdbb2] opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-4 sm:px-5 py-4 transition-colors hover:border-[#7c6f64] hover:bg-[#504945]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-semibold text-[#8ec07c]">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-[#ebdbb2] opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
