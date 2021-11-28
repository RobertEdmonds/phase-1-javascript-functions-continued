function saturdayFun(activity="roller-skate") {
  if (activity === String){
  return `This Saturday, I want to ${activity}!`
  } else {
    return `This Saturday, I want to ${activity}!`
  }
}

let mondayWork = function(activity="go to the office") {
  switch (activity){
    case ("play with kids"):
      return `This Monday, I will ${activity}.`
    case ('sleep in'):
      return `This Monday, I will ${activity}.`
    case ('go see family'):
      return `This Monday, I will ${activity}.`
    default :
      return `This Monday, I will ${activity}.`
  }
}

let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    if (style === String && adjective === String){
      return`You are ${style}${adjective}${style}!`
    }else{
      return `You are ${style}${adjective}${style}!`}
    }
  }

