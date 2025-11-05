
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Kala Teja</h3>
            <p className="text-white/80 mb-4">
              A passionate software engineer with expertise in web development, AI, and cybersecurity.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/tejaktv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
              <a 
                href="https://www.behance.net/Kalasaiteja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Behance"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.803 5.296c.589 0 1.119.051 1.605.155.49.103.911.273 1.271.507.364.235.646.547.864.933.222.387.329.863.329 1.427 0 .61-.138 1.121-.421 1.53-.278.41-.683.745-1.212 1.006.735.212 1.274.58 1.615 1.104.345.526.511 1.158.511 1.896 0 .599-.114 1.12-.347 1.566-.232.445-.553.813-.961 1.102-.407.29-.883.5-1.428.639-.544.138-1.122.205-1.741.205H1.403V5.296h6.4zm-.386 4.916c.486 0 .886-.099 1.203-.3.321-.199.475-.535.475-1.005 0-.256-.053-.466-.151-.633-.103-.165-.239-.297-.421-.392-.174-.09-.367-.155-.582-.196-.217-.034-.428-.056-.642-.056H3.786v2.581h3.631zm.193 5.171c.261 0 .501-.023.725-.077.223-.054.412-.14.578-.245.169-.104.297-.25.394-.432.092-.181.142-.414.142-.689 0-.551-.154-.948-.467-1.192-.309-.242-.73-.361-1.265-.361H3.786v2.996h3.824zM18.433 16.252c.394.433.921.752 1.583.966.664.211 1.369.319 2.119.319.753 0 1.44-.108 2.069-.319.633-.214 1.149-.549 1.562-1.022h2.46c-.396 1.225-1.1 2.118-2.101 2.678-1.003.556-2.207.837-3.612.837-.979 0-1.864-.158-2.657-.477-.792-.315-1.467-.759-2.028-1.32-.558-.566-.985-1.242-1.289-2.039-.303-.791-.455-1.654-.455-2.595 0-.91.151-1.751.455-2.522.3-.772.728-1.437 1.283-1.986.555-.548 1.226-.972 2.014-1.283.786-.311 1.652-.467 2.604-.467.997 0 1.876.189 2.639.583.764.389 1.394.92 1.896 1.585.498.669.854 1.428 1.072 2.295.217.869.277 1.786.191 2.761H16.778c.064.873.297 1.587.688 2.019l-.033-.013zm5.75-5.541c-.307-.347-.696-.625-1.183-.837-.484-.207-1.013-.314-1.583-.314-.566 0-1.08.101-1.544.302-.463.201-.87.475-1.202.827-.336.354-.594.747-.791 1.197-.191.453-.303.92-.335 1.41h7.608c-.102-.997-.36-1.733-.97-2.585zM16.52 6.786h7.159v1.786H16.52V6.786z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/resume" className="text-white/80 hover:text-white transition-colors">Resume</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-white/80">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:teja.ktv10@gmail.com" className="hover:text-white transition-colors">teja.ktv10@gmail.com</a>
              </li>
              <li className="flex items-center text-white/80">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+919618490260" className="hover:text-white transition-colors">+91 9618490260</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Kala Tirumala Venkata Sai Teja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
