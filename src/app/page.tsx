import Comments from "@/components/comments";
import Dialog from "@/components/dialog";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Section1 from "@/components/section-1";
import Section2 from "@/components/section-2";
import Section3 from "@/components/section-3";
import Section4 from "@/components/section-4";
import Section5 from "@/components/section-5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Dialog />
      <HeroSection />
      <Section3 />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Comments />
      <Footer />
    </main>
  );
}
