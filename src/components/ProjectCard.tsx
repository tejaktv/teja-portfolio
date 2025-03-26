
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
        "glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]",
        className
      )}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary/80 text-xs font-medium rounded-full"
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
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View Project{" "}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
