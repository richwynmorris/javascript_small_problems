// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. 
// In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

function determineTime(durations){
  if (durations.length === 0) return true
  
  const TimeLimit = 1440
  let totalMins = 0, totalSecs = 0
  
  durations.forEach(duration => {
    let [ hrs, mins, secs ] = duration.split(":")
    totalMins += Number(hrs) * 60
    totalMins += Number(mins)
    totalSecs += Number(secs)
    if (totalMins > TimeLimit) { return false }
  })
    
  totalMins += (totalSecs / 60)
  return !(totalMins > TimeLimit)
}