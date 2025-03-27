
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ProjectCard";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Updated project data with SkillConnect added
const projects = [
  {
    title: "SkillConnect - MERN Stack Hackathon",
    description: "A web platform where college students can showcase their skills, connect with people who share similar interests, and join open chat rooms based on preferred skills. I took on UI/UX design and frontend development responsibilities, creating an intuitive and engaging user experience.",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB", "UI/UX Design", "Figma", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80",
    link: "https://example.com/skillconnect",
  },
  {
    title: "E-Commerce Mobile App",
    description: "Developed a complete e-commerce solution with a responsive design, secure payment integration, and user-friendly interface. The app features product categorization, wishlists, and a streamlined checkout process.",
    tags: ["Android", "Java", "UX/UI", "Payment Gateway", "Firebase"],
    image: "https://images.unsplash.com/photo-1565492206137-0797b8f8ace5?auto=format&fit=crop&q=80",
    link: "https://example.com/ecommerce",
  },
  {
    title: "Cloud-based File Management",
    description: "Built a secure cloud storage system with role-based access controls, file versioning, and real-time collaboration features. The solution includes encryption at rest and in transit, comprehensive audit logs, and integrations with popular productivity tools.",
    tags: ["Cloud", "Security", "AWS", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    link: "https://example.com/cloud-storage",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
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
      {/* Decorative elements */}
      <div className="absolute -z-10 top-0 right-0 h-[50vh] w-[50vh] rounded-full bg-primary/5 blur-[80px]"></div>
      <div className="absolute -z-10 bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-primary/5 blur-[60px]"></div>
      <div className="absolute -z-10 top-1/3 left-1/4 h-[30vh] w-[30vh] rounded-full bg-indigo-500/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          {/* Profile section */}
          <div className={cn(
            "opacity-0 transition-all duration-700 transform translate-y-4",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="w-32 h-48 rounded-xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src="/lovable-uploads/fea1a9e7-da13-4f3e-8c3b-503ef36fe50b.png" 
                alt="Kala Tirumala"
                className="w-full h-full object-cover object-center" 
              />
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className={cn(
              "text-4xl md:text-5xl font-display font-bold mb-4 opacity-0 transition-all duration-700 delay-100",
              isVisible && "opacity-100"
            )}>
              My Projects
            </h1>
            
            <div className={cn(
              "opacity-0 transition-all duration-700 delay-200",
              isVisible && "opacity-100"
            )}>
              <p className="text-xl text-foreground/80 max-w-3xl">
                Showcasing my expertise in web and mobile development, UI/UX design, and cloud infrastructure. 
                These projects represent my passion for creating scalable, secure, and user-friendly solutions.
              </p>
              
              <Button 
                onClick={handleDownloadResume}
                className="mt-4 gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                size="lg"
              >
                <Download size={18} />
                Download My Resume
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "opacity-0 transition-all duration-700",
                isVisible && `opacity-100 delay-${300 + index * 200}`
              )}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard 
                {...project} 
                className="hover:scale-105 transition-all duration-500 h-full cursor-pointer"
              />
            </div>
          ))}
        </div>
        
        {/* Project details modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-background/95 backdrop-blur-md border border-primary/10 rounded-2xl p-6 max-w-3xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.image && (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
              )}
              <h2 className="text-3xl font-display font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-lg mb-6">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Project
                </a>
              )}
              
              <button
                className="absolute top-4 right-4 bg-primary/10 hover:bg-primary/20 rounded-full p-2 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
