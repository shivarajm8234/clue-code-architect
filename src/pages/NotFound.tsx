import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center detective-card p-12 rounded-lg max-w-md mx-4">
        <h1 className="text-6xl font-bold mb-4 text-accent font-mono glitch-text" data-text="404">404</h1>
        <h2 className="text-2xl font-mono mb-4">Case Not Found</h2>
        <p className="text-muted-foreground mb-6 font-mono">
          This investigation path leads nowhere. The evidence you're looking for doesn't exist in our case files.
        </p>
        <a 
          href="/" 
          className="glow-border px-6 py-3 rounded-lg font-mono hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-block"
        >
          Return to Headquarters
        </a>
      </div>
    </div>
  );
};

export default NotFound;
