
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter, 
  CheckCircle, 
  Send,
  Map,
  Clock,
  Palette
} from "lucide-react";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in all the fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Instead of using EmailJS which requires API keys, we'll directly open the mail client
      const emailSubject = encodeURIComponent(`Portfolio Contact - Message from ${name}`);
      const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:teja.ktv10@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      
      setIsSubmitting(false);
      setFormSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      toast({
        title: "Email client opened",
        description: "An email draft has been prepared for you to send to Teja.",
        variant: "default"
      });
      
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to open email client:", error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: "There was a problem opening your email client. Please try again or send an email directly.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -z-10 top-0 right-0 h-[50vh] w-[50vh] rounded-full bg-primary/5 blur-[80px]"></div>
      <div className="absolute -z-10 bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-primary/5 blur-[60px]"></div>
      <div className="absolute -z-10 top-1/3 left-1/4 h-[30vh] w-[30vh] rounded-full bg-indigo-500/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-6">
        <h1 className={cn(
          "text-4xl md:text-5xl font-display font-bold mb-8 opacity-0",
          isVisible && "animate-fade-in"
        )}>
          Get In Touch
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className={cn(
            "opacity-0 order-2 md:order-1",
            isVisible && "animate-fade-in delay-100"
          )}>
            <div className="p-8 bg-gradient-to-br from-background to-secondary/30 rounded-2xl border border-primary/10 shadow-lg relative">
              <h2 className="text-2xl font-display font-bold mb-6">Send Me a Message</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                    disabled={isSubmitting || formSubmitted}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    disabled={isSubmitting || formSubmitted}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <Textarea 
                    id="message"
                    placeholder="What would you like to discuss?"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none"
                    disabled={isSubmitting || formSubmitted}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:shadow-lg hover:shadow-primary/20 transition-all"
                  disabled={isSubmitting || formSubmitted}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : formSubmitted ? (
                    <span className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          <div className={cn(
            "opacity-0 relative order-1 md:order-2",
            isVisible && "animate-fade-in delay-200"
          )}>
            <div className="p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 rounded-2xl border border-primary/10 backdrop-blur-sm relative overflow-hidden h-full">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
              
              <div className="flex flex-col items-center gap-8 relative z-10">
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Avatar className="w-24 h-24 border-2 border-primary/20 transition-all duration-300 group-hover:scale-110">
                    <AvatarImage 
                      src="/lovable-uploads/fea1a9e7-da13-4f3e-8c3b-503ef36fe50b.png" 
                      alt="Profile Picture" 
                      className="object-cover"
                    />
                    <AvatarFallback>KT</AvatarFallback>
                  </Avatar>
                  
                  <div className={cn(
                    "absolute -bottom-2 left-0 right-0 flex justify-center transition-all duration-300",
                    isHovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  )}>
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full shadow-lg">Say Hello!</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-display font-medium mb-2">Kala Tirumala Venkata Sai Teja</h3>
                  <p className="text-foreground/70 mb-6">UI/UX Designer & Developer</p>
                  
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <a href="mailto:teja.ktv10@gmail.com" className="text-primary hover:underline group relative">
                        teja.ktv10@gmail.com
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <a href="tel:+919618490260" className="text-primary hover:underline group relative">
                        +91 9618490260
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <a href="https://linkedin.com/in/kala-teja" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline group relative">
                        linkedin.com/in/kala-teja
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <a href="https://github.com/tejaktv" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline group relative">
                        github.com/tejaktv
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Palette className="w-5 h-5 text-primary" />
                      </div>
                      <a href="https://www.behance.net/Kalasaiteja" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline group relative">
                        behance.net/Kalasaiteja
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-primary/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">Available for freelance projects</span>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <Map className="text-primary/70 w-5 h-5" />
                  <span className="text-sm text-foreground/70">India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-primary/70 w-5 h-5" />
                  <span className="text-sm text-foreground/70">IST (UTC+5:30)</span>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center space-x-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
                <a href="https://github.com/tejaktv" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </a>
                <a href="https://linkedin.com/in/kala-teja" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a href="https://www.behance.net/Kalasaiteja" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Palette className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "mt-24 opacity-0",
          isVisible && "animate-fade-in delay-300"
        )}>
          <h2 className="text-3xl font-display font-bold mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-primary/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-medium mb-3">What services do you offer?</h3>
              <p className="text-foreground/70">I specialize in UI/UX design, web development, and creating digital experiences that are both visually appealing and highly functional.</p>
            </div>
            
            <div className="p-6 border border-primary/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-medium mb-3">What is your typical project timeline?</h3>
              <p className="text-foreground/70">Project timelines vary based on complexity. Simple projects may take 1-2 weeks, while more complex ones can range from 1-3 months.</p>
            </div>
            
            <div className="p-6 border border-primary/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-medium mb-3">How do we start working together?</h3>
              <p className="text-foreground/70">Send me a message through this contact form or email me directly. We'll schedule a call to discuss your needs and how I can help.</p>
            </div>
            
            <div className="p-6 border border-primary/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-medium mb-3">Do you offer revisions on your work?</h3>
              <p className="text-foreground/70">Yes, my process includes revision rounds to ensure you're completely satisfied with the final product.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
