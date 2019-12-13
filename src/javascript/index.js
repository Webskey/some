import talk from "./utility/textToSpeech";
import listen from "./utility/speechRecognition";

function test() {
  talk("Powiedz cos do mikrofonu pało!").onend = listen;
}

document.querySelector("#btn").addEventListener("click", test);
