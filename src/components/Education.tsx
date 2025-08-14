
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

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
            "professional-card p-8 opacity-0 group hover:scale-105 transition-all duration-300",
            isInView && "animate-slide-in"
          )}>
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-wrapper w-12 h-12 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold gradient-text">B.TECH in CSE</h3>
                <p className="text-foreground/70 mt-1 font-medium">Pragati Engineering College</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-4 h-4 text-blue" />
              <span className="bg-blue-50 text-blue-dark px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                Expected in 03/2026
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Pursuing a Bachelor's degree in Computer Science Engineering with a focus on emerging technologies and practical applications.
              </p>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-blue" />
                  <h4 className="font-medium">Key Areas of Study:</h4>
                </div>
                <ul className="list-disc list-inside space-y-1 text-foreground/80 ml-6">
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
            "professional-card p-8 opacity-0 group hover:scale-105 transition-all duration-300",
            isInView && "animate-slide-in delay-100"
          )}>
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-wrapper w-12 h-12 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold gradient-text">Certifications</h3>
            </div>
            <ul className="space-y-6">
              <li className="border-l-4 border-blue rounded-lg bg-blue-50/50 pl-4 py-3">
                <h4 className="font-medium text-lg text-blue-dark">Artificial Intelligence-Machine learning</h4>
                <p className="text-foreground/70 mt-1">Specialized training in AI algorithms and implementation</p>
              </li>
              <li className="border-l-4 border-blue rounded-lg bg-blue-50/50 pl-4 py-3">
                <h4 className="font-medium text-lg text-blue-dark">Android Developer</h4>
                <p className="text-foreground/70 mt-1">Proficient in creating mobile applications for Android platform</p>
              </li>
              <li className="border-l-4 border-blue rounded-lg bg-blue-50/50 pl-4 py-3">
                <h4 className="font-medium text-lg text-blue-dark">Cybersecurity</h4>
                <p className="text-foreground/70 mt-1">Training in security protocols and threat mitigation</p>
              </li>
              <li className="border-l-4 border-blue rounded-lg bg-blue-50/50 pl-4 py-3">
                <h4 className="font-medium text-lg text-blue-dark">Data Analytics</h4>
                <p className="text-foreground/70 mt-1">Skills in analyzing and interpreting complex datasets</p>
              </li>
              <li className="border-l-4 border-blue rounded-lg bg-blue-50/50 pl-4 py-3">
                <h4 className="font-medium text-lg text-blue-dark">CLOUD</h4>
                <p className="text-foreground/70 mt-1">Cloud computing infrastructure and management</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
