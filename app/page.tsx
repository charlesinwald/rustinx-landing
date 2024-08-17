import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Features } from "./components/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-6 sm:p-12 lg:p-24 bg-[#282828] w-full">
      {Header}

      {Hero}

      {Features()}
    </main>
  );
}
