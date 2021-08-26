let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let keys = Object.keys(scores)
  
  let grades = keys.map(studentKey => {
                          return getGrades(scores[studentKey])
                        })
  
  let examAverages = getExamAverages(keys, scores)
  
  let minimumGrades = getMinimumGrades(keys, scores)
  
  let results = formatResults(grades, examAverages, minimumGrades)
  
  return results
}

function computeExamScore(obj) {
  let array = obj.scores.exams
  
  const AVERAGE_DIVIDER = array.length 
 
  let addedScores = array.reduce((accum, score) => accum + score)
  return addedScores / AVERAGE_DIVIDER
}

function computeExerciseScore(obj) {
  let array = obj.scores.exercises
  let addedScores = array.reduce((accum, score) => accum + score)
  return addedScores
}

function applyWeights(examScore, exerciseScore) {
  let result = (examScore * .65) + (exerciseScore * .35)
  return Math.round(result)
}

function getGrades(score) {
  let averageExamScore = computeExamScore(score)
  let averageExerciseScore = computeExerciseScore(score)
  let finalPercent = applyWeights(averageExamScore, averageExerciseScore)
  let result = lookUpLetter(finalPercent)
  return result
}

function getExamAverages(studentKeys, studentScores) {
  const NUM_OF_EXAMS = 5
  let averages = []
  
  for(let index = 0; index < studentKeys.length - 1; index += 1) {
    let result = 0
    studentKeys.forEach(student => {
      result += studentScores[student].scores.exams[index] 
    })
    averages.push(result / NUM_OF_EXAMS)
  }
  
  return averages
}


function getMinimumGrades(studentKeys, studentScores) {
  let minimumGrades = []
  
  for(let index = 0; index < studentKeys.length - 1; index += 1) {
    let minGrade = 100
    studentKeys.forEach(student => {
      let grade = studentScores[student].scores.exams[index]
      if (grade < minGrade) {
        minGrade = grade
      }
    })
    minimumGrades.push(minGrade)
  }
  
  return minimumGrades
}

function lookUpLetter(num) {
  switch(true) {
    case num >= 93:
      return num + ' (A)'
      break
    case num >= 85 && num < 93:
      return num + ' (B)';
      break;
    case num >= 77 && num < 85:
      return num + ' (C)';
      break;
    case num >= 69 && num < 77:
      return num + ' (D)';
      break;
    case num >= 60 && num < 69:
      return num + ' (E)';
      break;
    default:
      return num + ' (F)';
  }
}


function formatExams (averages, minimums) {
  const MAXIMUM_GRADE = 100
  let result = averages.map((num, index) => {
         return { average: num,
                  minimum: minimums[index],
                  maximum: MAXIMUM_GRADE,
                }
               })
  return result
}

function formatResults(grades, averages, minimums) {
  let exams = formatExams(averages, minimums) 
  let result = {studentGrades: grades, 
                exams: exams 
                }
  
  return result
}
  



console.log(generateClassRecordSummary(studentScores));

// // returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }