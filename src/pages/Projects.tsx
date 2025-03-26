
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ProjectCard";

// Sample project data - this can be replaced with real data
const projects = [
  {
    title: "Cybersecurity Analysis Tool",
    description: "A comprehensive tool for analyzing security vulnerabilities in web applications.",
    tags: ["Python", "Cybersecurity", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with customizable filters.",
    tags: ["JavaScript", "Data Visualization", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    title: "AI-powered Content Recommender",
    description: "Machine learning algorithm that provides personalized content recommendations.",
    tags: ["Python", "Machine Learning", "AI"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80",
  },
  {
    title: "E-Commerce Mobile App",
    description: "Android application for an e-commerce platform with secure payment integration.",
    tags: ["Android", "Java", "UX/UI"],
    image: "https://images.unsplash.com/photo-1565492206137-0797b8f8ace5?auto=format&fit=crop&q=80",
  },
  {
    title: "Cloud-based File Management",
    description: "System for securely storing and managing files on the cloud with access controls.",
    tags: ["Cloud", "Security", "AWS"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
  },
  {
    title: "Portfolio Website Generator",
    description: "Tool that automatically generates professional portfolio websites from resume data.",
    tags: ["HTML/CSS", "JavaScript", "Web Development"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.tags.some(tag => 
            tag.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }
  }, [filter]);
  
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "data", label: "Data Analysis" },
    { id: "ai", label: "AI & ML" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "cloud", label: "Cloud" },
  ];

  return (
    <div className="min-h-screen py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -z-10 top-0 right-0 h-[50vh] w-[50vh] rounded-full bg-primary/5 blur-[80px]"></div>
      <div className="absolute -z-10 bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-primary/5 blur-[60px]"></div>
      
      <div className="container mx-auto px-6">
        <h1 className={cn(
          "text-4xl md:text-5xl font-display font-bold mb-8 opacity-0",
          isVisible && "animate-fade-in"
        )}>
          My Projects
        </h1>
        
        <div className={cn(
          "mb-12 opacity-0",
          isVisible && "animate-fade-in delay-100"
        )}>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Explore my portfolio of projects spanning various domains including web development, 
            cybersecurity, data analytics, and artificial intelligence.
          </p>
        </div>
        
        <div className={cn(
          "flex flex-wrap gap-3 mb-12 opacity-0",
          isVisible && "animate-fade-in delay-200"
        )}>
          {filters.map(filterItem => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                filter === filterItem.id
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground/70 hover:bg-primary/10"
              )}
            >
              {filterItem.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "opacity-0",
                isVisible && `animate-fade-in delay-${Math.min(index * 100 + 300, 800)}`
              )}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-foreground/60">No projects match your filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
