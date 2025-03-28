
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:teja.ktv10@gmail.com';
    toast({
      title: "Email action",
      description: "Opening email client to send a message to teja.ktv10@gmail.com",
    });
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919618490260';
    toast({
      title: "Phone action",
      description: "Initiating call to +91 9618490260",
    });
  };

  return (
    <section ref={sectionRef} className="section-padding" id="contact">
      <div className="container mx-auto px-6">
        <h2 className={cn(
          "heading text-3xl md:text-4xl mb-12 pb-4 opacity-0",
          isInView && "animate-fade-in"
        )}>
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 gap-12">
          <div className={cn(
            "opacity-0 relative",
            isInView && "animate-fade-in delay-100"
          )}>
            <div className="p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 rounded-2xl border border-primary/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Avatar className="w-24 h-24 border-2 border-primary/20 transition-all duration-300 group-hover:scale-110">
                    <AvatarImage 
                      src="/lovable-uploads/fea1a9e7-da13-4f3e-8c3b-503ef36fe50b.png" 
                      alt="Profile Picture" 
                      className="object-cover"
                    />
                    <AvatarFallback>KT</AvatarFallback>
                  </Avatar>
                  
                  <div className={cn(
                    "absolute -bottom-2 left-0 right-0 flex justify-center transition-all duration-300",
                    isHovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  )}>
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full shadow-lg">Say Hello!</span>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-display font-medium mb-4">Contact Information</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <a href="mailto:teja.ktv10@gmail.com" className="text-primary hover:underline group relative">
                        teja.ktv10@gmail.com
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <a href="tel:+919618490260" className="text-primary hover:underline group relative">
                        +91 9618490260
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </div>
                      <a href="https://linkedin.com/in/kala-teja" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline group relative">
                        linkedin.com/in/kala-teja
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </div>
                      <a href="https://github.com/tejaktv" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline group relative">
                        github.com/tejaktv
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                <Button 
                  className="bg-gradient-to-r from-primary to-indigo-600 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  onClick={handleEmailClick}
                >
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/5"
                  onClick={handlePhoneClick}
                >
                  Call Me
                </Button>
              </div>
              
              <div className="mt-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-primary/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">Available for freelance projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
