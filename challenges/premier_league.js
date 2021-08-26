// The 2019/20 season of the English Premier League (EPL) saw Liverpool FC win the title for the first time despite their bitter rivals, Manchester United, having won 13 titles!

// Create a function that receives an alphabetically sorted array of the results achieved by each team in that season and the name of one of the teams. The function should return a string giving the final position of the team, the number of points achieved and the goal difference (see examples for precise format).


function EPLResult(data, team) {
  let pointsData = data.map(teamData => {
    let winPoints = teamData[2] * 3
    let drawPoints = teamData[3] * 1
    let total = winPoints + drawPoints
    return [teamData[0], total, teamData[5]]
  }).sort((a,b) => {
    return b[1] - a[1] || b[2] - a[2]
  })
  
  let positions = pointsData.map(arr => arr[0])
  
  let position = positions.indexOf(team) + 1
  let points = pointsData[position - 1][1]
  let goalDifference = pointsData[position - 1][2]
  
  position = addSuffix(position)
  
  return `${team} came ${position} with ${points} points and a goal difference of ${goalDifference}!`
}

function addSuffix(pos) {
  let lastNum = String(pos).split('')[String(pos).length -1]
  if ([11,12,13,14,15,16,17,18,19].includes(pos)) {
    return String(pos) + 'th'
  } else if (lastNum === '1') {
    return String(pos) + 'st'
  } else if (lastNum === '2') {
    return String(pos) + 'nd'
  } else if (lastNum === '3') {
    return String(pos) + 'rd'
  } else {
    return String(pos) + 'th'
  }
}

var table = [
  ['Arsenal', 38, 14, 14, 10, 8], 
  ['Aston Villa', 38, 9, 8, 21, -26], 
  ['Bournemouth', 38, 9, 7, 22, -26], 
  ['Brighton', 38, 9, 14, 15, -15], 
  ['Burnley', 38, 15, 9, 14, -7], 
  ['Chelsea', 38, 20, 6, 12, 15], 
  ['Crystal Palace', 38, 11, 10, 17, -19], 
  ['Everton', 38, 13, 10, 15, -12], 
  ['Leicester City', 38, 18, 8, 12, 26], 
  ['Liverpool', 38, 32, 3, 3, 52], 
  ['Manchester City', 38, 26, 3, 9, 67], 
  ['Manchester Utd', 38, 18, 12, 8, 30], 
  ['Newcastle', 38, 11, 11, 16, -20],
  ['Norwich', 38, 5, 6, 27, -49], 
  ['Sheffield Utd', 38, 14, 12, 12, 0],
  ['Southampton', 38, 15, 7, 16, -9], 
  ['Tottenham', 38, 16, 11, 11, 14], 
  ['Watford', 38, 8, 10, 20, -28], 
  ['West Ham', 38, 10, 9, 19, -13], 
  ['Wolves', 38, 15, 14, 9, 11]
]

EPLResult(table, "Liverpool")
  // ➞ "Liverpool came 1st with 99 points and a goal difference of 52!"

EPLResult(table, "Manchester Utd")
  // ➞ "Manchester Utd came 3rd with 66 points and a goal difference of 30!"

EPLResult(table, "Norwich")
  // ➞ "Norwich came 20th with 21 points and a goal difference of -49!"