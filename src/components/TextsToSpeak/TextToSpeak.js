import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const synth = window.speechSynthesis;

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <div>
      <h1>Convertir Texto a Voz</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Ingresa el texto que deseas convertir en voz"
      />
      <button onClick={speakText}>Hablar</button>
    </div>
  );
};

export default TextToSpeech;
