"use strict";

// TODO - write your code here.
const randomDamage = () => Math.floor(Math.random() * 10) + 1
const chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random());
    return (randNum === 0 ? opt1 : opt2); 
}

const attackPlayer = function(health) {
    return health - randomDamage();
}

const logHealth = (player, health) => console.log(`${player} health: ${health}`);
const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);
const isDead = health => health <= 0 ? true : false;

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
           if (isDead(player2Health)) { 
           logDeath(player1, player2);
           break;
         }
            } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

fight("Adam", "Zee", 100, 100);

// EXTENDED CHALLENGES

//Print Sqaure Function
function printSquare(width) {
  let count = 1;
  while (count <= width) {
      count++;
      console.log("###");
  }
}
printSquare(3);

// Print Triangle Function
function printTriangle(width) {
    let count = 1
    let start = "";
    while (count <= width) {
        start += "#";
        count++;
        console.log(start)
    } 
  }
  printTriangle(10);


  /* GET GRADE FUNCTION */
  function getGrade(percentageGrade) {
    if (percentageGrade >= 90) {
        return "A";
    } else if (percentageGrade >= 80) {
        return "B";
    } else if (percentageGrade >= 70) {
        return "C";
    } else if (percentageGrade >= 60) {
        return "D";
    } else {
        return "F";
    }
  }
  console.log(getGrade(80));
  console.log(getGrade(77));
  console.log(getGrade(94));
  console.log(getGrade(66));

  // Prioritize Function

  const prioritize = (urgent, important) => {
      if (urgent && important) {
          return 1
      } else if (important && !urgent) {
          return 2
      } else if (urgent && !important) {
          return 3
      } else {
          return 4
      }
  }

  console.log(prioritize(true, true));
  console.log(prioritize(false, true));
  console.log(prioritize(true, false));
  console.log(prioritize(false, false));