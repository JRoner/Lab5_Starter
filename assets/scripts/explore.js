// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const img = document.querySelector('img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  let voices = [];

  const loadVoices = () => {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.setAttribute('value', voice.name);
        voiceSelect.appendChild(option);
    });
  };

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  button.addEventListener('click', () => {
    const textToSpeak = textArea.value;
    const selectedVoiceName = voiceSelect.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);

    utterance.voice = selectedVoice;
    utterance.onstart = () => {
        img.src = 'assets/images/smiling-open.png'; 
    };
    utterance.onend = () => {
        img.src = 'assets/images/smiling.png';
    };


    synth.speak(utterance);
  });


  
}