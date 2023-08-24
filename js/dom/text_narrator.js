const d = document, 
w = window;

export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select"),
    $speechTextArea = d.getElementById('speech-text'),
    $speechBtn = d.getElementById('speech-btn'),
    speechMsg = new SpeechSynthesisUtterance();

    // console.log(speechMsg);

    let voices = [];

    // Eventos globales del narrador

    d.addEventListener("DOMContentLoaded",e=>{
        // console.log(w.speechSynthesis.getVoices());

        // Evento para la carga de las voces disponibles en el OS
        w.speechSynthesis.addEventListener("voiceschanged",e=>{
            // console.log(e);
            voices = w.speechSynthesis.getVoices();
            console.log(voices);

            // Carga dinámica de las voces al DOM
            voices.forEach(voice =>{
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name} - ${voice.lang}`;

                $speechSelect.appendChild($option);

            });

        });

    });

    // Selección de voces 
    d.addEventListener("change", e=>{
        if(e.target === $speechSelect){
            speechMsg.voice = voices.find(voice=>voice.name === e.target.value);
        }

        // console.log(speechMsg);
    });

    d.addEventListener("click", e=>{
        if(e.target === $speechBtn){
            speechMsg.text = $speechTextArea.value;
            w.speechSynthesis.speak(speechMsg);
        }
    });

}