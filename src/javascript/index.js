import speech from './utility/speechRecognition';
import talk from './utility/textToSpeech';
import game from './game';
import rundy from './rundy';

// speech().onaudioend = function(e) {
//   let res;
//   e.target.onresult = e => (res = e.results[0][0].transcript);
//   if (!res) {
//     console.log('zjebalo');
//     speech();
//   }
// };

//  talk('siemka');

document.querySelector('button').onclick = game;

//rundy(['nikola', 'stasiu', 'Mateusz', 'Karolina']);

// speech().onresult = e => {
//   const res = e.results[0][0].transcript;
//   console.log(res);
//   if (res.includes('tło')) {
//     const splited = res.split(' ');
//     document.body.style.backgroundColor = splited[splited.length - 1];
//   }
//   if (res.includes('obrazek')) {
//     console.log('obrazek');
//     document.body.innerHTML = `<img id='pies' src='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg'>`;
//   }
//   if (res.includes('napis')) {
//     console.log('napisac');
//     document.body.innerHTML = `<h1> SIEMKA </h1>`;
//   }
//   if (res.includes('zmniejsz psa')) {
//     document.getElementById('pies').style.width = '200px';
//   }
// };
