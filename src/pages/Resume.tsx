import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // In a real app, this would trigger a download of the actual resume file
    toast.success("Resume download started", {
      description: "Your download will begin shortly."
    });
    
    // Simulate a file download - in production this would be a real file URL
    setTimeout(() => {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // This would be a real PDF in production
      link.download = 'Kala_Teja_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -z-10 top-0 right-0 h-[50vh] w-[50vh] rounded-full bg-primary/5 blur-[80px]"></div>
      <div className="absolute -z-10 bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-primary/5 blur-[60px]"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className={cn(
            "mb-12 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Resume
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-xl text-foreground/80">
                My professional background and qualifications
              </p>
              <Button
                onClick={handleDownloadResume}
                className="sm:ml-auto px-6 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                size="lg"
              >
                <Download size={18} />
                Download Resume PDF
              </Button>
            </div>
          </header>
          
          <div className="glass-card rounded-xl p-8 shadow-xl">
            <div className={cn(
              "border-b border-primary/10 pb-6 mb-8 opacity-0",
              isVisible && "animate-fade-in delay-100"
            )}>
              <h2 className="text-3xl font-display font-bold text-primary">Kala Tirumala Venkata Sai Teja</h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-3 text-foreground/70">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  teja.ktv10@gmail.com
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +91 9618490260
                </span>
                <span className="hidden sm:inline">•</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className={cn(
              "mb-10 opacity-0",
              isVisible && "animate-fade-in delay-200"
            )}>
              <h3 className="text-xl font-bold mb-3">Objective</h3>
              <p className="text-foreground/80">
                A highly motivated and detail-oriented graduate, eager to contribute strong analytical, communication, and
                problem-solving skills in a dynamic work environment. Seeking an entry-level position in IT field to utilize
                academic knowledge, adaptability, and enthusiasm for continuous learning to support organizational goals
                and grow professionally.
              </p>
            </div>
            
            <div className={cn(
              "mb-10 opacity-0",
              isVisible && "animate-fade-in delay-250"
            )}>
              <h3 className="text-xl font-bold mb-3">Work Experience</h3>
              <div className="space-y-4 ml-0 md:ml-6">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h4 className="font-bold">UI Developer</h4>
                    <span className="text-sm text-foreground/70">June 2024 - Present</span>
                  </div>
                  <p className="text-foreground/80 mb-1">Asan Innovators</p>
                  <p className="text-foreground/70">
                    Currently working as a UI Developer, focusing on creating intuitive user interfaces and enhancing user experience through modern web technologies.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary/60 pl-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h4 className="font-bold">UX Researcher</h4>
                    <span className="text-sm text-foreground/70">April 2024 - June 2024</span>
                  </div>
                  <p className="text-foreground/80 mb-1">Wilson Wings</p>
                  <p className="text-foreground/70">
                    Conducted user research, analyzed user behavior patterns, and provided insights to improve product design and user experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "mb-10 opacity-0",
              isVisible && "animate-fade-in delay-300"
            )}>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <div className="ml-0 md:ml-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="font-bold">B.TECH, CSE</h4>
                  <span className="text-sm text-foreground/70">Expected in 03/2026</span>
                </div>
                <p className="text-foreground/80 mb-1">Pragati Engineering College - Surampalem</p>
              </div>
            </div>
            
            <div className={cn(
              "mb-10 opacity-0",
              isVisible && "animate-fade-in delay-400"
            )}>
              <h3 className="text-xl font-bold mb-3">Virtual Internships</h3>
              <div className="space-y-4 ml-0 md:ml-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h4 className="font-bold">Cybersecurity</h4>
                    <span className="text-sm text-foreground/70">PWC</span>
                  </div>
                  <p className="text-foreground/80">
                    Worked on cybersecurity solutions, vulnerability assessments, and security protocol implementations.
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h4 className="font-bold">Data Analytics and Visualization</h4>
                    <span className="text-sm text-foreground/70">ACCENTURE</span>
                  </div>
                  <p className="text-foreground/80">
                    Analyzed complex datasets and created visual representations to communicate insights effectively.
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h4 className="font-bold">Artificial Intelligence</h4>
                    <span className="text-sm text-foreground/70">COGNIZANT</span>
                  </div>
                  <p className="text-foreground/80">
                    Developed AI models and algorithms, focusing on machine learning applications for business solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "mb-10 opacity-0",
              isVisible && "animate-fade-in delay-500"
            )}>
              <h3 className="text-xl font-bold mb-3">Skills and Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 ml-0 md:ml-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Java</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>C</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>HTML</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>SQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>AWS SERVICES</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>GIT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>LINUX</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>WINDOWS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Adobe XD</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Figma</span>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "mb-10 opacity-0",
              isVisible && "animate-fade-in delay-600"
            )}>
              <h3 className="text-xl font-bold mb-3">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 ml-0 md:ml-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span>Artificial Intelligence-Machine learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span>Android Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span>Cybersecurity</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span>Data Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span>CLOUD</span>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "opacity-0",
              isVisible && "animate-fade-in delay-700"
            )}>
              <h3 className="text-xl font-bold mb-3">Extra-Curricular Activities</h3>
              <p className="ml-0 md:ml-6 text-foreground/80">
                Content Creation, Video Editing, Public Speaking, Trading and Investing, Web designing, Photography, 
                Crypto currency Investment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
