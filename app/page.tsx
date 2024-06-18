import Contact from "@/components/contact";
import Intro from "@/components/intro";
import About from "@/components/about";
import Partnerships from "@/components/partnerships";
import Gallery from "@/components/gallery"
import { SparklesCore } from "@/components/ui/sparkles";
import SectionDivider from "@/components/section-divider";
import { cn } from "@/utils/cn";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Home() {
  return (
    
    <TracingBeam className="px-6">
    <main className="flex flex-col items-center antialiased px-4">
      <div className="w-full absolute">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Intro />
      <SectionDivider />
      <About/>
      <Partnerships/>
      <Gallery/>
      <Contact />
      </main>
      </TracingBeam>
  );
}
