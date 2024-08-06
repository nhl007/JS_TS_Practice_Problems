const random = Math.floor(Math.random() * 3);

const choices = ['rock', 'paper', 'scissor'];

const comChoice = choices[random];

const game = (userChoice) => {
  switch (userChoice) {
    case comChoice:
      return 'draw';

    case 'paper':
      if (comChoice == 'rock') return 'user wins';

      if (comChoice == 'scissor') return 'com wins';
      break;

    case 'scissor':
      if (comChoice == 'rock') return 'com wins';

      if (comChoice == 'paper') return 'user wins';

      break;

    default:
      break;
  }
};

const userChoice = 'scissor';

console.log(comChoice);

console.log(game(userChoice));
