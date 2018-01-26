// Code your solutions in this file
const badges = ["Joe", "Gabe"];

function printBadges(names){
  for (let i=0; i < names.length; i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function tailsNeverFails() {

  let tails = 0;
  while (Math.random() <= .5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}

// hello 
