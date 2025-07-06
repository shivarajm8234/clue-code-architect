import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Initializing investigation protocols...',
    'Analyzing digital footprints...',
    'Connecting to database...',
    'Loading case files...',
    'Preparing deductive algorithms...',
    'Investigation ready.'
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let textIndex = 0;
    
    const startLoading = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1;
          
          // Update text based on progress
          const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
          if (textIndex < loadingTexts.length) {
            setCurrentText(loadingTexts[textIndex]);
          }
          
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            setTimeout(onComplete, 500);
            return 100;
          }
          
          return newProgress;
        });
      }, 30);
    };

    // Start loading after a brief delay
    const startDelay = setTimeout(startLoading, 300);

    return () => {
      clearTimeout(startDelay);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* L Logo with Animation */}
        <div className="mb-8 relative">
          <div className="text-6xl font-bold font-mono mb-4 relative">
            <span className="text-accent animate-pulse">L.</span>
            <div className="absolute -top-2 -right-2">
              <Eye className="w-8 h-8 text-accent animate-blink" />
            </div>
          </div>
          <div className="text-sm font-mono text-muted-foreground">
            Detective System v2.0
          </div>
        </div>

        {/* Loading Bar */}
        <div className="mb-6">
          <div className="w-full bg-muted rounded-full h-2 mb-3">
            <div 
              className="h-2 bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          <div className="text-accent font-mono text-sm">
            {progress}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="h-6 mb-8">
          <p className="text-muted-foreground font-mono text-sm typewriter">
            {currentText}
          </p>
        </div>

        {/* Scanning Animation */}
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="h-px bg-accent/30 w-full relative overflow-hidden"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-accent animate-scan"></div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-8 text-center">
          <blockquote className="text-muted-foreground text-sm italic font-mono">
            "The truth is always singular, never plural."
          </blockquote>
          <div className="text-accent text-xs font-mono mt-2">— L</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;