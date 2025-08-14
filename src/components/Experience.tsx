
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'internship';
};

const workExperience: ExperienceItem[] = [
  {
    title: "UI Developer",
    company: "Asan Innovators",
    period: "June 2024 - Present",
    description: "Currently working as a UI Developer, focusing on creating intuitive user interfaces and enhancing user experience through modern web technologies.",
    type: 'work'
  },
  {
    title: "UX Researcher",
    company: "Wilson Wings",
    period: "April 2024 - June 2024",
    description: "Conducted user research, analyzed user behavior patterns, and provided insights to improve product design and user experience.",
    type: 'work'
  }
];

const internships: ExperienceItem[] = [
  {
    title: "Cybersecurity",
    company: "PWC",
    period: "Virtual Internship",
    description: "Worked on cybersecurity solutions, vulnerability assessments, and security protocol implementations.",
    type: 'internship'
  },
  {
    title: "Data Analytics and Visualization",
    company: "ACCENTURE",
    period: "Virtual Internship",
    description: "Analyzed complex datasets and created visual representations to communicate insights effectively.",
    type: 'internship'
  },
  {
    title: "Artificial Intelligence",
    company: "COGNIZANT",
    period: "Virtual Internship",
    description: "Developed AI models and algorithms, focusing on machine learning applications for business solutions.",
    type: 'internship'
  }
];

const allExperience = [...workExperience, ...internships];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30" id="experience">
      <div className="container mx-auto px-6">
        <h2 className={cn(
          "heading text-3xl md:text-4xl mb-12 pb-4 opacity-0",
          isInView && "animate-fade-in"
        )}>
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 ml-[-1px] top-0 bottom-0 w-[2px] bg-primary/30 hidden md:block"></div>

          {allExperience.map((experience, index) => (
            <div 
              key={index}
              className={cn(
                "mb-12 opacity-0",
                isInView && `animate-fade-in delay-${index * 100}`,
                "relative"
              )}
            >
              <div className={cn(
                "md:flex items-start",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                {/* Timeline dot */}
                <div className={cn(
                  "hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white z-10",
                  experience.type === 'work' 
                    ? "bg-gradient-to-r from-green-400 to-green-600 shadow-lg" 
                    : "bg-gradient-to-r from-blue to-blue-dark shadow-lg"
                )}></div>
                
                <div className={cn(
                  "professional-card p-6 md:w-[45%] group",
                  "transition-all duration-300 hover:scale-105",
                  experience.type === 'work' && "border-l-4 border-green-500"
                )}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={cn(
                      "icon-wrapper w-10 h-10 flex items-center justify-center",
                      experience.type === 'work' ? "bg-gradient-to-r from-green-400 to-green-600" : ""
                    )}>
                      {experience.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-white" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold gradient-text">{experience.title}</h3>
                    {experience.type === 'work' && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                        Work
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-foreground/60" />
                      <p className="text-foreground/70 font-medium">{experience.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-blue" />
                    <span className={cn(
                      "text-sm px-3 py-1 rounded-full font-medium",
                      experience.type === 'work' 
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-blue-50 text-blue-dark border border-blue-200"
                    )}>
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{experience.description}</p>
                </div>
                
                {/* Empty div for the other side of the timeline */}
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
