import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Cases } from "@/components/sections/Cases";
import { Differentials } from "@/components/sections/Differentials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Metrics } from "@/components/sections/Metrics";
import { Services } from "@/components/sections/Services";
import { SocialProof } from "@/components/sections/SocialProof";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-full bg-bg">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <SocialProof />
        <Metrics />
        <Services />
        <Differentials />
        <Method />
        <Cases />
        <Technologies />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
