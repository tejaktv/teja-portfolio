import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { 
  SiPython, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiMysql,
  SiC,
  SiGit,
  SiLinux,
  SiFigma,
  SiAdobexd,
  SiOpenjdk,
  SiSketch,
  SiFramer
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";

type Skill = {
  name: string;
  proficiency: number; // 0-100
  category: "programming" | "tools" | "cloud" | "other";
  icon: IconType;
};

const skills: Skill[] = [
  { name: "Python", proficiency: 85, category: "programming", icon: SiPython },
  { name: "Java", proficiency: 75, category: "programming", icon: SiOpenjdk },
  { name: "JavaScript", proficiency: 80, category: "programming", icon: SiJavascript },
  { name: "HTML", proficiency: 95, category: "programming", icon: SiHtml5 },
  { name: "CSS", proficiency: 85, category: "programming", icon: SiCss3 },
  { name: "SQL", proficiency: 80, category: "programming", icon: SiMysql },
  { name: "C", proficiency: 75, category: "programming", icon: SiC },
  { name: "Git", proficiency: 90, category: "tools", icon: SiGit },
  { name: "Linux", proficiency: 85, category: "tools", icon: SiLinux },
  { name: "Windows", proficiency: 90, category: "tools", icon: FaWindows },
  { name: "Figma", proficiency: 75, category: "tools", icon: SiFigma },
  { name: "Adobe XD", proficiency: 70, category: "tools", icon: SiAdobexd },
  { name: "Sketch", proficiency: 75, category: "tools", icon: SiSketch },
  { name: "Framer", proficiency: 70, category: "tools", icon: SiFramer },
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
              <div className="flex items-center justify-center md:justify-start gap-4">
                <skill.icon className="w-12 h-12 text-primary" />
                <h3 className="font-medium text-lg hidden md:block">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
