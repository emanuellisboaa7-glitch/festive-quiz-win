import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizQuestion = ({
  question,
  options,
  onAnswer,
  currentQuestion,
  totalQuestions,
}: QuizQuestionProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Pergunta {currentQuestion} de {totalQuestions}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round((currentQuestion / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-festive transition-all duration-500 ease-out"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <Card className="p-8 shadow-warm border-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
          {question}
        </h2>

        <div className="grid gap-4">
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => onAnswer(option)}
              variant="outline"
              size="lg"
              className="w-full h-auto py-4 px-6 text-left justify-start hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 text-base md:text-lg"
            >
              <span className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-semibold text-accent">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
              </span>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};
