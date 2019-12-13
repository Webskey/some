import talk from './utility/textToSpeech';
import listen from './utility/speechRecognition';
import questions from './attributes/questions';

import creator from './utility/elementCreator';

function ask(players, index, round) {
  talk(`Odpowiada ${players[index]}`);
  const userEl = document.getElementById(players[index]);
  userEl.style.color = 'red';
  let question;
  if (players[index] === 'nikola' || players[index] === 'stasiu') {
    question = questions[players[index]];
  } else {
    question = questions[index];
  }

  function answering() {
    listen().onresult = e => {
      console.log(e.results[0][0].transcript.toLowerCase() === question[round - 1].A);
      if (!e.results[0][0].transcript.toLowerCase() === question[round - 1].A) {
        document.getElementById('correctAnswer').innerHTML = `Poprawna odpowiedz question${[round - 1].A}`;
      }
      document.getElementById('answer').innerHTML = `Twoja odpowiedz ${e.results[0][0].transcript}`;

      userEl.style.color = 'lightgrey';
      if (players.length > index + 1) ask(players, index + 1, round);
      else if (round < 4) {
        talk(`Runda numer ${round + 1}`);
        ask(players, 0, round + 1);
      }
    };
  }

  talk(question[round - 1].Q).onend = answering;
  if (question[round - 1].IMG)
    document.getElementById('images').innerHTML = `<img width='100px' src=${question[round - 1].IMG}>`;
  else document.getElementById('images').innerHTML = '';
}

export default function(players) {
  console.log(players);
  creator.createDivWithId('', 'answer');
  creator.createDivWithId('', 'correctAnswer');
  creator.createDivWithId('', 'images');
  talk(`Runda numer 1`);
  ask(players, 0, 1);
}
