
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const internships: ExperienceItem[] = [
  {
    title: "Cybersecurity",
    company: "PWC",
    period: "Virtual Internship",
    description: "Worked on cybersecurity solutions, vulnerability assessments, and security protocol implementations."
  },
  {
    title: "Data Analytics and Visualization",
    company: "ACCENTURE",
    period: "Virtual Internship",
    description: "Analyzed complex datasets and created visual representations to communicate insights effectively."
  },
  {
    title: "Artificial Intelligence",
    company: "COGNIZANT",
    period: "Virtual Internship",
    description: "Developed AI models and algorithms, focusing on machine learning applications for business solutions."
  }
];

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
          Virtual Internships
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 ml-[-1px] top-0 bottom-0 w-[2px] bg-primary/30 hidden md:block"></div>

          {internships.map((internship, index) => (
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
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                
                <div className={cn(
                  "p-6 glass-card rounded-xl md:w-[45%]",
                  "transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]"
                )}>
                  <h3 className="text-xl font-bold text-primary mb-1">{internship.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-foreground/70 font-medium">{internship.company}</p>
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {internship.period}
                    </span>
                  </div>
                  <p className="text-foreground/80">{internship.description}</p>
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
