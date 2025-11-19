import { useState } from "react";
import { QuizIntro } from "@/components/QuizIntro";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResult } from "@/components/QuizResult";
import { questions, calculateProfile, type Profile } from "@/data/quizData";

type QuizState = "intro" | "quiz" | "result";

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  const handleStart = () => {
    setQuizState("quiz");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const calculatedProfile = calculateProfile(newAnswers);
      setProfile(calculatedProfile);
      setQuizState("result");
    }
  };

  const handleRestart = () => {
    setQuizState("intro");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setProfile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-snow py-8 px-4">
      <div className="container mx-auto">
        {quizState === "intro" && <QuizIntro onStart={handleStart} />}

        {quizState === "quiz" && (
          <QuizQuestion
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        )}

        {quizState === "result" && profile && (
          <QuizResult profile={profile} onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
};

export default Index;
