
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-24">
      <div className="absolute -z-10 top-0 right-0 h-[50vh] w-[50vh] rounded-full bg-primary/5 blur-[80px]"></div>
      <div className="absolute -z-10 bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-primary/5 blur-[60px]"></div>
      
      <div className={cn(
        "text-center max-w-lg px-6 opacity-0",
        isVisible && "animate-fade-in"
      )}>
        <h1 className="text-9xl font-display font-bold text-primary mb-4">404</h1>
        <p className="text-2xl font-medium mb-8">Oops! Page not found</p>
        <p className="text-foreground/70 mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/" className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
