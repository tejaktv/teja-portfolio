
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Download, Sparkles, Star } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-background via-blue-50/30 to-background">
      {/* Floating elements */}
      <div className="absolute -z-10 top-0 right-0 h-[50vh] w-[50vh] rounded-full bg-blue/10 blur-[80px] floating-element"></div>
      <div className="absolute -z-10 bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-primary/5 blur-[60px] floating-element" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -z-10 top-1/4 left-1/3 h-[30vh] w-[30vh] rounded-full bg-blue-light/10 blur-[70px] floating-element" style={{ animationDelay: '2s' }}></div>
      
      {/* Sparkle decorations */}
      <div className="absolute top-1/4 right-1/4">
        <Sparkles className="w-6 h-6 text-blue animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 left-1/4">
        <Star className="w-4 h-4 text-blue-light animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute top-1/3 right-1/3">
        <Star className="w-5 h-5 text-blue animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className={cn(
            "opacity-0 order-2 md:order-1",
            isVisible && "animate-fade-in"
          )}>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-blue/30 rounded-full text-sm font-medium text-blue bg-blue-50/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                UI/UX Designer & Developer
              </span>
            </div>
            
            <h1 className={cn(
              "text-4xl md:text-6xl font-display font-bold mb-6 opacity-0",
              isVisible && "animate-fade-in delay-100"
            )}>
              <span className="block">Hello, I'm</span>
              <span className="text-5xl md:text-7xl mt-2 block gradient-text">Kala Tirumala Venkata Sai Teja</span>
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
              <Link 
                to="/about" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue to-blue-dark text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                About Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/resume" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-blue text-blue rounded-xl hover:bg-blue hover:text-white transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                My Resume
              </Link>
            </div>
          </div>
          
          <div className={cn(
            "order-1 md:order-2 opacity-0 transition-all duration-500",
            isVisible && "animate-fade-in delay-400"
          )}>
            <div className="relative">
              <div className="w-48 h-64 md:w-56 md:h-80 rounded-2xl overflow-hidden border-4 border-blue/30 shadow-2xl professional-card">
                <img 
                  src="/lovable-uploads/fea1a9e7-da13-4f3e-8c3b-503ef36fe50b.png" 
                  alt="Kala Tirumala" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-blue/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cn(
          "mt-16 flex items-center opacity-0",
          isVisible && "animate-fade-in delay-500"
        )}>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent"></div>
          <span className="px-6 text-blue/60 font-medium">Scroll Down</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent"></div>
        </div>
        
        <div className={cn(
          "flex justify-center mt-6 animate-bounce opacity-0",
          isVisible && "animate-fade-in delay-600"
        )}>
          <svg className="w-6 h-6 text-blue/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};
