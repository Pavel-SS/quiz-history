export const questions = [
    {
        question: "It's the first question?",
        correctAnswer: "Yes, it's first qurstion",
        incorrectAnswers: [
            "Yes, it's second qurstion",
            "Yes, it's third qurstion",
            "Yes, it's fourth qurstion",
        ] 
    },
    {
        question: "It's the second question?",
        correctAnswer: "Yes, it's second qurstion",
        incorrectAnswers: [
            "Yes, it's first qurstion",
            "Yes, it's third qurstion",
            "Yes, it's fourth qurstion",
        ] 
    },
    {
        question: "It's the third question?",
        correctAnswer: "Yes, it's third qurstion",
        incorrectAnswers: [
            "Yes, it's first qurstion",
            "Yes, it's second qurstion",
            "Yes, it's fourth qurstion",
        ] 
    },
];

export type questionsType = typeof questions
