function BracketMatcher(str) {
  let tracker = []


  str.split("").forEach(letter => {
    if (letter === "(") {
      tracker.push("(")
    } else if (letter === ")") {
        if (tracker[0] === "(") {
          tracker.pop()
        } else {
          tracker.push(")")
        }
    }
  })

  return tracker.length === 0 ? 1 : 0
}
