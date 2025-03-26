
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute -z-10 top-0 right-0 h-[50vh] w-[50vh] rounded-full bg-primary/5 blur-[80px]"></div>
        <div className="absolute -z-10 bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-primary/5 blur-[60px]"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className={cn(
              "text-4xl md:text-5xl font-display font-bold mb-8 opacity-0",
              isVisible && "animate-fade-in"
            )}>
              About Me
            </h1>
            
            <div className={cn(
              "prose prose-lg max-w-none opacity-0",
              isVisible && "animate-fade-in delay-100"
            )}>
              <p className="text-xl leading-relaxed mb-6">
                I'm Kala Tirumala Venkata Sai Teja, a highly motivated and detail-oriented Computer Science Engineering student with a passion for technology and innovation.
              </p>
              
              <p className="mb-6">
                Currently pursuing my B.Tech in CSE at Pragati Engineering College, I'm expected to graduate in March 2026. My academic journey has equipped me with strong analytical, communication, and problem-solving skills that I'm eager to apply in a dynamic work environment.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-12 mb-4">My Approach</h2>
              <p className="mb-6">
                I believe in continuous learning and staying updated with the latest technological advancements. My approach combines theoretical knowledge with practical implementation, allowing me to create effective solutions for complex problems.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-12 mb-4">Technical Expertise</h2>
              <p className="mb-6">
                My technical skills span various programming languages including Python, Java, JavaScript, HTML, CSS, SQL, and C. I'm also proficient in tools like Git, Linux, Windows, Figma, and Adobe XD, along with AWS services.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-12 mb-4">Professional Goals</h2>
              <p className="mb-6">
                I'm seeking an entry-level position in the IT field where I can utilize my academic knowledge, adaptability, and enthusiasm for continuous learning to support organizational goals and grow professionally. I'm particularly interested in roles related to web development, cybersecurity, and data analytics.
              </p>
              
              <h2 className="text-2xl font-display font-bold mt-12 mb-4">Beyond Technology</h2>
              <p className="mb-6">
                Outside of my technical pursuits, I enjoy content creation, video editing, public speaking, and photography. I also have interests in trading, investing, and cryptocurrency, which have helped me develop analytical thinking and strategic planning skills.
              </p>
              
              <p className="mt-12 text-xl font-medium">
                I'm always open to new opportunities and collaborations, so feel free to reach out if you'd like to connect!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
