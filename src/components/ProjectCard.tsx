
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  className?: string;
};

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
  link,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] group relative",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
      
      {image && (
        <div className="w-full h-56 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-8 relative z-20">
        <h3 className="text-2xl font-display font-bold mb-3 heading-accent">{title}</h3>
        <p className="text-foreground/70 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 glass-morphism text-primary text-xs font-semibold rounded-full border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 font-semibold transition-all duration-300 group/link"
          >
            <span>View Project</span>
            <svg
              className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
