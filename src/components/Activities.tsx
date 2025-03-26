
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ActivityItem = {
  icon: string;
  title: string;
  description: string;
};

const activities: ActivityItem[] = [
  {
    icon: "📝",
    title: "Content Creation",
    description: "Creating engaging digital content for various platforms."
  },
  {
    icon: "🎬",
    title: "Video Editing",
    description: "Producing and editing videos with professional quality."
  },
  {
    icon: "🎤",
    title: "Public Speaking",
    description: "Delivering presentations and speaking at technical events."
  },
  {
    icon: "📊",
    title: "Trading and Investing",
    description: "Analyzing market trends and making strategic investments."
  },
  {
    icon: "🖥️",
    title: "Web Designing",
    description: "Creating intuitive and aesthetically pleasing websites."
  },
  {
    icon: "📸",
    title: "Photography",
    description: "Capturing moments through creative photography."
  },
  {
    icon: "💰",
    title: "Cryptocurrency Investment",
    description: "Researching and investing in blockchain technologies."
  },
  {
    icon: "🎨",
    title: "UI/UX Designing",
    description: "Creating user-centered digital experiences."
  },
];

export const Activities = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30" id="activities">
      <div className="container mx-auto px-6">
        <h2 className={cn(
          "heading text-3xl md:text-4xl mb-12 pb-4 opacity-0",
          isInView && "animate-fade-in"
        )}>
          Extra-Curricular Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={cn(
                "glass-card rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] opacity-0",
                isInView && `animate-fade-in delay-${Math.min(index * 100, 500)}`
              )}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl">{activity.icon}</span>
              </div>
              <h3 className="text-lg font-medium mb-2">{activity.title}</h3>
              <p className="text-foreground/70 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className={cn(
          "mt-12 text-center max-w-3xl mx-auto opacity-0",
          isInView && "animate-fade-in delay-300"
        )}>
          <h3 className="text-xl font-display font-bold mb-4">Interests</h3>
          <p className="text-foreground/80">
            I'm passionate about Web Development and UI/UX Designing, constantly exploring new technologies and design patterns to create engaging digital experiences. Additionally, I enjoy keeping up with emerging tech trends that shape our future.
          </p>
        </div>
      </div>
    </section>
  );
};
