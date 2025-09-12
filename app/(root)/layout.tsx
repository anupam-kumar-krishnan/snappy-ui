import Header from "@/components/landing/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Snappy UI",
    default: "Snappy UI",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-[rgb(9,9,11)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
