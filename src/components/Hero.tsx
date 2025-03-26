
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute -z-10 top-0 right-0 h-[50vh] w-[50vh] rounded-full bg-primary/5 blur-[80px]"></div>
      <div className="absolute -z-10 bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-primary/5 blur-[60px]"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 h-[30vh] w-[30vh] rounded-full bg-indigo-500/5 blur-[70px]"></div>
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className={cn(
            "opacity-0 order-2 md:order-1",
            isVisible && "animate-fade-in"
          )}>
            <div className="mb-3">
              <span className="inline-block px-4 py-2 border border-primary/20 rounded-full text-sm font-medium text-primary/80">
                Software Engineer & Developer
              </span>
            </div>
            
            <h1 className={cn(
              "text-4xl md:text-6xl font-display font-bold mb-6 opacity-0",
              isVisible && "animate-fade-in delay-100"
            )}>
              <span className="block">Hello, I'm</span>
              <span className="text-5xl md:text-7xl mt-2 block bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Kala Tirumala Venkata Sai Teja</span>
            </h1>
            
            <p className={cn(
              "text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 leading-relaxed opacity-0",
              isVisible && "animate-fade-in delay-200"
            )}>
              A highly motivated and detail-oriented graduate, eager to contribute strong analytical, communication, and
              problem-solving skills in a dynamic work environment.
            </p>
            
            <div className={cn(
              "flex flex-wrap gap-4 opacity-0",
              isVisible && "animate-fade-in delay-300"
            )}>
              <Link to="/about" className="px-8 py-3 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300">
                About Me
              </Link>
              <Link to="/resume" className="px-8 py-3 bg-transparent border border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300">
                My Resume
              </Link>
            </div>
          </div>
          
          <div className={cn(
            "order-1 md:order-2 opacity-0 transition-all duration-500",
            isVisible && "animate-fade-in delay-400"
          )}>
            <Avatar className="w-48 h-48 border-4 border-primary/20 shadow-2xl">
              <AvatarImage src="/lovable-uploads/fea1a9e7-da13-4f3e-8c3b-503ef36fe50b.png" alt="Kala Tirumala" />
              <AvatarFallback>KTV</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className={cn(
          "mt-16 flex items-center opacity-0",
          isVisible && "animate-fade-in delay-500"
        )}>
          <div className="flex-1 h-px bg-primary/10"></div>
          <span className="px-6 text-primary/40 font-medium">Scroll Down</span>
          <div className="flex-1 h-px bg-primary/10"></div>
        </div>
        
        <div className={cn(
          "flex justify-center mt-6 animate-bounce opacity-0",
          isVisible && "animate-fade-in delay-600"
        )}>
          <svg className="w-6 h-6 text-primary/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};
