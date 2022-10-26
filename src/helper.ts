// import { questionsType } from "./bll/data";

// export type questionsType = typeof questions

export const randomAnswers = (questions: any) => {
    const  unshuffledAnswers = [
      questions.correctAnswer,
      ...questions.incorrectAnswers
    ]
    console.log()
    return unshuffledAnswers.map(unshuffle => ({
        sort: Math.random(),
        value: unshuffle
    })).sort((a,b)=> a.sort - b.sort).map(a => a.value);
}

export const normalizeQuestions = (backEndQuestions: any ) => {
    // console.log(back)
    return  backEndQuestions.map((question:any)=>{
        const incorrectAnswers = question.incorrect_answer.map(
            (answer:string) => decodeURIComponent(answer)
        )
        return {
            correctAnswer:decodeURIComponent(backEndQuestions.correct_answer),
            question: decodeURIComponent(backEndQuestions.question),
            incorrectAnswers
        }
    })
}


// import { questions, QuestionsType } from "./bll/data";
// import { State } from "./bll/reducer"

// export const randomAnswers = (data: QuestionsType) => {
//     const correctAnswer = data.correct_answer,
//           uncorrectAnswers = data.incorrect_answers;
//     const listAnswers = [correctAnswer, ...uncorrectAnswers];
//     return listAnswers.map(answer=> ({
//         sort: Math.random(),
//         value: answer
//     })).sort((a,b)=> {
//         return a.sort - b.sort}).map(answer=> answer.value)
// }


// export const normalizeQuestions = (backEndQuestions:QuestionsType[]) => {
//     console.log(backEndQuestions)
//     return backEndQuestions?.map(backQuestion => {
//         const incorrectAnswers = backQuestion.incorrect_answers.map(answer=> decodeURIComponent(answer))
//         return {
//             answerCorrect: decodeURIComponent(backQuestion.correct_answer),
//             question: decodeURIComponent(backQuestion.question),
//             incorrectAnswers
//         }
//     })
// }

// normalizeQuestions(questions)