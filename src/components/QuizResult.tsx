import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Gift, ChefHat } from "lucide-react";

interface QuizResultProps {
  profile: {
    title: string;
    description: string;
    icon: "sparkles" | "gift" | "chef";
  };
  onRestart: () => void;
}

export const QuizResult = ({ profile, onRestart }: QuizResultProps) => {
  const icons = {
    sparkles: Sparkles,
    gift: Gift,
    chef: ChefHat,
  };

  const Icon = icons[profile.icon];

  return (
    <div className="w-full max-w-2xl mx-auto animate-scale-in">
      <Card className="p-8 md:p-12 shadow-warm border-2 text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-festive flex items-center justify-center shadow-glow">
            <Icon className="w-10 h-10 text-white" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {profile.title}
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          {profile.description}
        </p>

        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <p className="text-base md:text-lg font-medium mb-4">
            🎄 O ebook perfeito para você! 🎄
          </p>
          <p className="text-muted-foreground mb-4">
            <strong>15 receitas natalinas detalhadas</strong> + <strong>15 decorações fáceis</strong> para iniciantes.
            Tudo que você precisa para um Natal inesquecível!
          </p>
        </div>

        <div className="space-y-4">
          <Button
            size="lg"
            className="w-full bg-gradient-festive hover:opacity-90 text-white font-bold text-lg py-6 shadow-warm transition-all duration-300 hover:scale-105"
          >
            🎁 Quero o Ebook Agora!
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={onRestart}
          >
            Refazer o Quiz
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          ⭐ Transforme seu Natal com receitas e decorações profissionais
        </p>
      </Card>
    </div>
  );
};
