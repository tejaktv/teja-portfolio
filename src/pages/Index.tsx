
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="py-12 bg-gradient-to-b from-background to-background/90 relative">
        <div className="absolute -z-10 top-1/4 right-1/4 h-[40vh] w-[40vh] rounded-full bg-indigo-500/5 blur-[80px]"></div>
        <Skills />
        <Experience />
        <Education />
        <Activities />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
