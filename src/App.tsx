import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle, Quotes } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getRandomQuote, CHARACTER_IMAGES, type Quote } from '@/lib/quotes';

function App() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(getRandomQuote());
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNewQuote = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setIsAnimating(false);
    }, 300);
  };

  const characterImageUrl = CHARACTER_IMAGES[currentQuote.character];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Dexter Quotes
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Random quotes from the series
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuote.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 md:p-12 bg-card border-border shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                  className="flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {characterImageUrl ? (
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-accent/50 shadow-lg shadow-accent/20 overflow-hidden">
                      <img 
                        src={characterImageUrl} 
                        alt={currentQuote.character}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 border-2 border-accent/50 flex items-center justify-center text-5xl md:text-6xl shadow-lg shadow-accent/20">
                      {currentQuote.characterImage}
                    </div>
                  )}
                </motion.div>

                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div className="relative">
                    <Quotes className="absolute -top-2 -left-2 text-accent/30" size={32} weight="fill" />
                    <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed pl-8">
                      {currentQuote.text}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 items-center md:items-start">
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {currentQuote.character}
                    </Badge>
                    {currentQuote.context && (
                      <p className="text-xs text-muted-foreground italic">
                        {currentQuote.context}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center">
          <Button
            onClick={handleNewQuote}
            disabled={isAnimating}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide shadow-lg shadow-accent/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Shuffle size={20} weight="bold" />
            New Quote
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
