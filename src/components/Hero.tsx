
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
    <section className="min-h-[95vh] flex items-center relative overflow-hidden">
      {/* Creative floating blobs */}
      <div className="absolute -z-10 top-0 right-0 h-[60vh] w-[60vh] creative-blob bg-gradient-to-br from-primary/20 via-purple/10 to-transparent blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-0 h-[50vh] w-[50vh] creative-blob bg-gradient-to-tr from-accent/20 via-pink/10 to-transparent blur-3xl" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -z-10 top-1/3 left-1/2 h-[40vh] w-[40vh] creative-blob bg-gradient-to-bl from-secondary/15 to-transparent blur-3xl" style={{ animationDelay: '4s' }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className={cn(
            "opacity-0 order-2 md:order-1 flex-1",
            isVisible && "animate-fade-in"
          )}>
            <div className="mb-6">
              <span className="inline-block px-6 py-3 glass-morphism rounded-full text-sm font-semibold text-primary shadow-lg">
                ✨ Designer & Developer
              </span>
            </div>
            
            <h1 className={cn(
              "text-4xl md:text-7xl font-display font-bold mb-6 opacity-0 leading-tight",
              isVisible && "animate-fade-in delay-100"
            )}>
              <span className="block text-foreground/90">Hello, I'm</span>
              <span className="text-5xl md:text-8xl mt-3 block heading-accent">Kala Teja</span>
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl text-foreground/70 max-w-2xl mb-10 leading-relaxed opacity-0",
              isVisible && "animate-fade-in delay-200"
            )}>
              Crafting beautiful digital experiences through innovative design and elegant code.
            </p>
            
            <div className={cn(
              "flex flex-wrap gap-5 opacity-0",
              isVisible && "animate-fade-in delay-300"
            )}>
              <Link to="/projects" className="btn-gradient px-10 py-4 text-white rounded-2xl font-semibold text-lg">
                View Projects
              </Link>
              <Link to="/contact" className="px-10 py-4 glass-morphism rounded-2xl font-semibold text-lg text-foreground hover:scale-105 transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className={cn(
            "order-1 md:order-2 opacity-0 transition-all duration-500 relative",
            isVisible && "animate-fade-in delay-400"
          )}>
            {/* Decorative ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-secondary to-accent rounded-full opacity-20 blur-2xl"></div>
            <div className="relative w-56 h-72 md:w-72 md:h-96 rounded-[2.5rem] overflow-hidden border-4 border-white/50 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/fea1a9e7-da13-4f3e-8c3b-503ef36fe50b.png" 
                alt="Kala Teja - Designer & Developer" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className={cn(
          "mt-24 flex items-center opacity-0",
          isVisible && "animate-fade-in delay-500"
        )}>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        <div className={cn(
          "flex justify-center mt-8 opacity-0",
          isVisible && "animate-fade-in delay-600"
        )}>
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <span className="text-sm font-medium text-foreground/50 tracking-wider">EXPLORE</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1.5 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
