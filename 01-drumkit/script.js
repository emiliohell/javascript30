const sound = [
  (clap = { sound: "clap", key: 65 }),
  (hihat = { sound: "hihat", key: 83 }),
  (kick = { sound: "kick", key: 68 }),
  (openhat = { sound: "openhat", key: 70 }),
  (boom = { sound: "boom", key: 71 }),
  (ride = { sound: "ride", key: 72 }),
  (snare = { sound: "snare", key: 74 }),
  (tom = { sound: "tom", key: 75 }),
  (tink = { sound: "tink", key: 76 })
];

function soundActive(soundName) {
  var audio = new Audio("./sounds/" + soundName + ".wav");
  audio.play();
  document.getElementById(soundName).setAttribute("class", "press");
  setTimeout(function() {
    document.getElementById(soundName).removeAttribute("class", "press");
  }, 100);
}

document.addEventListener("keydown", function(e) {
  for (i = 0; i < sound.length; i++)
    if (e.keyCode == sound[i].key) {
      soundActive(sound[i].sound);
    }
});
