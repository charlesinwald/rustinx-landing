import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8 sm:px-8 sm:py-12 lg:p-24 bg-[#282828] w-full max-w-full">
      {Header}
      <div className="w-full max-w-3xl mt-28 lg:mt-12 flex-1">{children}</div>
      <Footer />
    </main>
  );
}
