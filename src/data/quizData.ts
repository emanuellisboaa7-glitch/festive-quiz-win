export interface Question {
  id: number;
  question: string;
  options: string[];
  category: "traditional" | "modern" | "creative";
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Como você imagina sua ceia de Natal ideal?",
    options: [
      "Clássica e tradicional, com receitas de família",
      "Moderna e sofisticada, com toques gourmet",
      "Criativa e única, experimentando novos sabores",
      "Simples e prática, mas cheia de sabor",
    ],
    category: "traditional",
  },
  {
    id: 2,
    question: "Qual dessas sobremesas natalinas mais te atrai?",
    options: [
      "Rabanada tradicional com canela",
      "Pavê decorado com frutas vermelhas",
      "Brownies natalinos com especiarias",
      "Mousse de chocolate com menta",
    ],
    category: "modern",
  },
  {
    id: 3,
    question: "Como você prefere decorar sua casa no Natal?",
    options: [
      "Decoração clássica: árvore, guirlanda e presépio",
      "Minimalista e elegante com detalhes dourados",
      "Colorida e divertida com temas criativos",
      "DIY e personalizada com artesanato feito à mão",
    ],
    category: "creative",
  },
  {
    id: 4,
    question: "Quanto tempo você tem para preparar suas receitas natalinas?",
    options: [
      "Tenho tempo de sobra, adoro cozinhar com calma",
      "Prefiro receitas que levam até 1 hora",
      "Preciso de opções rápidas e práticas",
      "Depende da ocasião e da receita",
    ],
    category: "traditional",
  },
  {
    id: 5,
    question: "Qual é o seu nível de experiência na cozinha?",
    options: [
      "Iniciante, mas quero aprender",
      "Intermediário, me viro bem",
      "Avançado, adoro desafios culinários",
      "Experiente, mas busco novas inspirações",
    ],
    category: "modern",
  },
  {
    id: 6,
    question: "O que mais te motiva a decorar para o Natal?",
    options: [
      "Criar memórias especiais em família",
      "Impressionar convidados e amigos",
      "Expressar minha criatividade",
      "Deixar a casa no clima festivo",
    ],
    category: "creative",
  },
  {
    id: 7,
    question: "Qual dessas entradas você serviria na sua ceia?",
    options: [
      "Salada caesar clássica",
      "Carpaccio com rúcula e parmesão",
      "Bruschettas variadas e coloridas",
      "Tábua de frios e queijos especiais",
    ],
    category: "traditional",
  },
];

export interface Profile {
  title: string;
  description: string;
  icon: "sparkles" | "gift" | "chef";
}

export const profiles: Record<string, Profile> = {
  traditional: {
    title: "Anfitrião(ã) Tradicional! 🎄",
    description:
      "Você valoriza as tradições e adora criar momentos nostálgicos. Nosso ebook tem receitas clássicas detalhadas e decorações atemporais perfeitas para você manter viva a magia do Natal tradicional!",
    icon: "gift",
  },
  modern: {
    title: "Chef Moderno(a)! ⭐",
    description:
      "Você busca inovação e sofisticação nas suas celebrações. Com nosso ebook, você terá acesso a receitas gourmet com twist natalino e decorações elegantes que vão impressionar todos os seus convidados!",
    icon: "chef",
  },
  creative: {
    title: "Criativo(a) Natalino(a)! ✨",
    description:
      "Você adora experimentar e criar experiências únicas! Nosso ebook oferece receitas versáteis e decorações DIY que vão liberar toda sua criatividade e tornar seu Natal inesquecível!",
    icon: "sparkles",
  },
};

export const calculateProfile = (answers: string[]): Profile => {
  const categoryCount: Record<string, number> = {
    traditional: 0,
    modern: 0,
    creative: 0,
  };

  // Análise simples baseada nas escolhas
  answers.forEach((answer, index) => {
    const question = questions[index];
    const optionIndex = question.options.indexOf(answer);

    if (optionIndex === 0) {
      categoryCount.traditional += 2;
    } else if (optionIndex === 1) {
      categoryCount.modern += 2;
    } else if (optionIndex === 2) {
      categoryCount.creative += 2;
    } else {
      // Última opção geralmente é mais equilibrada
      categoryCount.traditional += 1;
      categoryCount.modern += 1;
    }
  });

  const dominantCategory = Object.keys(categoryCount).reduce((a, b) =>
    categoryCount[a] > categoryCount[b] ? a : b
  );

  return profiles[dominantCategory];
};
