export default function textTospeech(msg) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = msg;
  speechSynthesis.speak(speech);

  // setTimeout(() => {
  //   console.log(speechSynthesis.getVoices());
  // }, 5000);

  return speech;
}

// export default class SpeechSynth {
//   constructor() {
//     this.speech = new SpeechSynthesisUtterance();
//   }

//   setMsg(msg) {
//     this.speech.text = msg;
//   }

//   speak() {
//     speechSynthesis.speak(this.speech);
//   }

//   afterSpooken(callback) {
//     this.speech.onend = callback;
//   }
// }
