
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Edit3, Video, Mic, TrendingUp, Monitor, Camera, Coins, Palette } from "lucide-react";

type ActivityItem = {
  icon: any;
  title: string;
  description: string;
};

const activities: ActivityItem[] = [
  {
    icon: Edit3,
    title: "Content Creation",
    description: "Creating engaging digital content for various platforms."
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Producing and editing videos with professional quality."
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Delivering presentations and speaking at technical events."
  },
  {
    icon: TrendingUp,
    title: "Trading and Investing",
    description: "Analyzing market trends and making strategic investments."
  },
  {
    icon: Monitor,
    title: "Web Designing",
    description: "Creating intuitive and aesthetically pleasing websites."
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments through creative photography."
  },
  {
    icon: Coins,
    title: "Cryptocurrency Investment",
    description: "Researching and investing in blockchain technologies."
  },
  {
    icon: Palette,
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
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={index}
                className={cn(
                  "professional-card p-6 text-center transition-all duration-300 hover:scale-105 group opacity-0 floating-element",
                  isInView && `animate-fade-in delay-${Math.min(index * 100, 500)}`
                )}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="icon-wrapper w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2 gradient-text">{activity.title}</h3>
                <p className="text-foreground/70 text-sm">{activity.description}</p>
              </div>
            );
          })}
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
