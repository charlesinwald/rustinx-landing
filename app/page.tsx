import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { DetailedFeatures } from "./components/DetailedFeatures";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-8 sm:px-8 sm:py-12 lg:p-24 bg-[#282828] w-full max-w-full">
      {Header}

      <section id="hero" className="w-full">
        <Hero />
      </section>

      <section id="features" className="w-full flex justify-center items-center mb-16">
        {Features()}
      </section>

      <section id="detailed-features" className="w-full sm:mb-16">
        <DetailedFeatures />
      </section>

      <section id="demo" className="w-full">
        <div className="w-full min-md:w-50 aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/1-iOp5BPs3I?si=WFkAKlXZuO5t3o_M&enablejsapi=1"
            title="Rustinx: Nginx Server Management Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ padding: "10%" }}
            className="w-full h-full rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
