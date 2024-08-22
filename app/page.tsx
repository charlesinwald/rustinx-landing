import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Features } from "./components/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-6 sm:p-12 lg:p-24 bg-[#282828] w-full">
      {Header}

      <Hero />

      {Features()}

      <div className="w-full min-md:w-50 aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/1-iOp5BPs3I?si=WFkAKlXZuO5t3o_M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ padding: "10%" }}
          className="w-full h-full"
        ></iframe>
      </div>
    </main>
  );
}
