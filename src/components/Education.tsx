
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Education = () => {
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
    <section ref={sectionRef} className="section-padding" id="education">
      <div className="container mx-auto px-6">
        <h2 className={cn(
          "heading text-3xl md:text-4xl mb-12 pb-4 opacity-0",
          isInView && "animate-fade-in"
        )}>
          Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={cn(
            "glass-card rounded-xl p-8 opacity-0",
            isInView && "animate-slide-in"
          )}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-primary">B.TECH in CSE</h3>
                <p className="text-foreground/70 mt-1">Pragati Engineering College</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                  Expected in 03/2026
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-foreground/80">
                Pursuing a Bachelor's degree in Computer Science Engineering with a focus on emerging technologies and practical applications.
              </p>
              <div>
                <h4 className="font-medium mb-2">Key Areas of Study:</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Algorithms and Data Structures</li>
                  <li>Software Engineering Principles</li>
                  <li>Database Management Systems</li>
                  <li>Web and Mobile Development</li>
                  <li>Artificial Intelligence & Machine Learning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={cn(
            "glass-card rounded-xl p-8 opacity-0",
            isInView && "animate-slide-in delay-100"
          )}>
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Certifications</h3>
            <ul className="space-y-6">
              <li className="border-l-2 border-primary pl-4 pb-4">
                <h4 className="font-medium text-lg">Artificial Intelligence-Machine learning</h4>
                <p className="text-foreground/70 mt-1">Specialized training in AI algorithms and implementation</p>
              </li>
              <li className="border-l-2 border-primary pl-4 pb-4">
                <h4 className="font-medium text-lg">Android Developer</h4>
                <p className="text-foreground/70 mt-1">Proficient in creating mobile applications for Android platform</p>
              </li>
              <li className="border-l-2 border-primary pl-4 pb-4">
                <h4 className="font-medium text-lg">Cybersecurity</h4>
                <p className="text-foreground/70 mt-1">Training in security protocols and threat mitigation</p>
              </li>
              <li className="border-l-2 border-primary pl-4 pb-4">
                <h4 className="font-medium text-lg">Data Analytics</h4>
                <p className="text-foreground/70 mt-1">Skills in analyzing and interpreting complex datasets</p>
              </li>
              <li className="border-l-2 border-primary pl-4 pb-4">
                <h4 className="font-medium text-lg">CLOUD</h4>
                <p className="text-foreground/70 mt-1">Cloud computing infrastructure and management</p>
              </li>
              <li className="border-l-2 border-primary pl-4 pb-4">
                <h4 className="font-medium text-lg">Product Management Fundamentals</h4>
                <p className="text-foreground/70 mt-1">Microsoft - Product strategy and lifecycle management</p>
              </li>
              <li className="border-l-2 border-primary pl-4">
                <h4 className="font-medium text-lg">Strategic & Experience Design</h4>
                <p className="text-foreground/70 mt-1">BCG X - Design thinking and strategic product design</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
