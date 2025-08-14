
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Database, Cloud, Wrench, Laptop, Globe, Shield, Zap } from "lucide-react";

type Skill = {
  name: string;
  proficiency: number; // 0-100
  category: "programming" | "tools" | "cloud" | "other";
  icon: any;
};

const skills: Skill[] = [
  { name: "Python", proficiency: 85, category: "programming", icon: Code2 },
  { name: "Java", proficiency: 75, category: "programming", icon: Code2 },
  { name: "JavaScript", proficiency: 80, category: "programming", icon: Globe },
  { name: "HTML", proficiency: 95, category: "programming", icon: Globe },
  { name: "CSS", proficiency: 85, category: "programming", icon: Globe },
  { name: "SQL", proficiency: 80, category: "programming", icon: Database },
  { name: "C", proficiency: 75, category: "programming", icon: Code2 },
  { name: "Git", proficiency: 90, category: "tools", icon: Wrench },
  { name: "Linux", proficiency: 85, category: "tools", icon: Laptop },
  { name: "Windows", proficiency: 90, category: "tools", icon: Laptop },
  { name: "Figma", proficiency: 75, category: "tools", icon: Wrench },
  { name: "Adobe XD", proficiency: 70, category: "tools", icon: Wrench },
  { name: "AWS Services", proficiency: 70, category: "cloud", icon: Cloud },
];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const filteredSkills = selectedCategory === "all"
      ? skills
      : skills.filter(skill => skill.category === selectedCategory);
    
    setVisibleSkills(filteredSkills);
  }, [selectedCategory]);

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

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "programming", name: "Programming" },
    { id: "tools", name: "Tools" },
    { id: "cloud", name: "Cloud" },
  ];

  return (
    <section ref={sectionRef} className="section-padding" id="skills">
      <div className="container mx-auto px-6">
        <h2 className={cn(
          "heading text-3xl md:text-4xl mb-12 pb-4 opacity-0",
          isInView && "animate-fade-in"
        )}>
          Skills & Expertise
        </h2>

        <div className={cn(
          "flex flex-wrap gap-3 mb-8 opacity-0",
          isInView && "animate-fade-in delay-100"
        )}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                selectedCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground/70 hover:bg-primary/10"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={cn(
                  "professional-card p-6 opacity-0 group hover:scale-105 transition-all duration-300",
                  isInView && `animate-fade-in delay-${Math.min(index * 100, 500)}`
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-wrapper w-10 h-10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                  <span className="ml-auto text-sm font-bold text-blue">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue to-blue-dark"
                    style={{ width: isInView ? `${skill.proficiency}%` : "0%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
