
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  proficiency: number; // 0-100
  category: "programming" | "tools" | "cloud" | "other";
};

const skills: Skill[] = [
  { name: "Python", proficiency: 85, category: "programming" },
  { name: "Java", proficiency: 75, category: "programming" },
  { name: "JavaScript", proficiency: 80, category: "programming" },
  { name: "HTML", proficiency: 95, category: "programming" },
  { name: "CSS", proficiency: 85, category: "programming" },
  { name: "SQL", proficiency: 80, category: "programming" },
  { name: "C", proficiency: 75, category: "programming" },
  { name: "Git", proficiency: 90, category: "tools" },
  { name: "Linux", proficiency: 85, category: "tools" },
  { name: "Windows", proficiency: 90, category: "tools" },
  { name: "Figma", proficiency: 75, category: "tools" },
  { name: "Adobe XD", proficiency: 70, category: "tools" },
  { name: "AWS Services", proficiency: 70, category: "cloud" },
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
          {visibleSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "glass-card rounded-xl p-6 opacity-0",
                isInView && `animate-fade-in delay-${Math.min(index * 100, 500)}`
              )}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-lg">{skill.name}</h3>
                <span className="text-sm text-foreground/70">{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isInView ? `${skill.proficiency}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
