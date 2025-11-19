import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface QuizIntroProps {
  onStart: () => void;
}

export const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <Card className="p-8 md:p-12 shadow-warm border-2 text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-festive flex items-center justify-center shadow-glow animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Quiz: Seu Natal Perfeito! 🎄
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          Descubra qual é o seu perfil natalino e encontre a inspiração perfeita
          para tornar suas festas ainda mais especiais!
        </p>

        <div className="bg-muted/50 rounded-lg p-6 mb-8 text-left">
          <p className="font-semibold mb-3 text-center">O que você vai descobrir:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Seu perfil de celebração natalina</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Receitas ideais para seu estilo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Dicas de decoração personalizadas</span>
            </li>
          </ul>
        </div>

        <Button
          size="lg"
          onClick={onStart}
          className="w-full bg-gradient-festive hover:opacity-90 text-white font-bold text-lg py-6 shadow-warm transition-all duration-300 hover:scale-105"
        >
          Começar o Quiz 🎅
        </Button>

        <p className="text-sm text-muted-foreground mt-6">
          São apenas 7 perguntas rápidas e divertidas!
        </p>
      </Card>
    </div>
  );
};
