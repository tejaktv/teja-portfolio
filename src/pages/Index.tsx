
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Hero />
      <div className="section-padding relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -z-10 top-1/4 right-1/4 h-[50vh] w-[50vh] creative-blob bg-gradient-to-br from-primary/10 to-transparent blur-3xl"></div>
        <div className="absolute -z-10 bottom-1/4 left-1/4 h-[50vh] w-[50vh] creative-blob bg-gradient-to-tr from-accent/10 to-transparent blur-3xl" style={{ animationDelay: '3s' }}></div>
        
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
