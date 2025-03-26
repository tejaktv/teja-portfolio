
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
      <Skills />
      <Experience />
      <Education />
      <Activities />
      <Contact />
    </div>
  );
};

export default Index;
