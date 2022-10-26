// import { questionsType } from "./bll/data";

import { questionsType } from "./bll/context";

// export type questionsType = typeof questions

export const randomAnswers = (questions: questionsType) => {
    const  unshuffledAnswers = [
      questions.correct_answer,
      ...questions.incorrect_answers
    ]
    console.log(questions.incorrect_answers)
    return unshuffledAnswers.map(unshuffle => ({
        sort: Math.random(),
        value: unshuffle
    })).sort((a,b)=> a.sort - b.sort).map(a => a.value);
}

export const normalizeQuestions = (backEndQuestions: questionsType[] ) => {
    return  backEndQuestions.map((question)=>{
        const incorrectAnswers = question.incorrect_answers.map(
            (answer:string) => decodeURIComponent(answer)
        )
        console.log(incorrectAnswers)
        return {
            correctAnswer:decodeURIComponent(question.correct_answer),
            questions: decodeURIComponent(question.question),
            incorrectAnswers
        }
    })
}

