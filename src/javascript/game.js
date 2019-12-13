import talk from './utility/textToSpeech';
import listen from './utility/speechRecognition';
import creator from './utility/elementCreator';
import rundy from './rundy';

import introText from './static/gameintro';

function createListOfUsers(playersArr) {
  let html = `<ul>`;
  playersArr.forEach(player => {
    html += `<li id=${player}>${player.toUpperCase()}</li>`;
  });
  html += `</ul>`;
  return html;
}

function name(arr, callback) {
  const index = arr.findIndex(e => !e);
  //listen().onresult = e => {
  const arro = ['nikola', 'jarmuz', 'bobby'];
  const namex = arro[index]; // e.results[0][0].transcript;
  console.log(`Gracz ${index + 1} to: ${namex}`);
  const user = document.querySelector(`#user${index + 1}`);
  user.id = namex;
  user.innerHTML = namex;
  // eslint-disable-next-line no-param-reassign
  arr[index] = namex;
  callback(arr);
  // };
}

function names(arr) {
  console.log(arr);
  const index = arr.findIndex(e => !e);
  if (index > -1) talk(`podaj imie gracza numer ${index + 1}`).onend = () => name(arr, names);
  else {
    rundy(arr);
  }
}

function players() {
  //listen().onresult = e => {
  const arr = new Array(3); // Number(e.results[0][0].transcript));
  names(arr);

  const users = document.createElement('div');
  users.classList.add('users');
  let inner = '';
  for (let i = 0; i < arr.length; i++) {
    inner += `<div class='user' id='user${i + 1}'>${i}</div>`;
  }
  console.log(inner);
  users.innerHTML = inner;
  document.body.appendChild(users);
  //};
}

export default function() {
  creator.createDivWithId(`<p>Super Quiz 3000</p>`, 'logo');
  talk(introText.welcome).onend = () => {
    // const x = new Audio('song.mp3');
    // x.volume = 0.02;
    // x.play();
  };
  talk(introText.playerNumber).onend = players;
}
