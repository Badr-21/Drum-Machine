import "./App.css";
import { useState, useEffect } from "react";

function App() {
   const [display, setDisplay] = useState("");

   //play sound and display text
   const handleClick = (id) => {
      const drumPad = document.getElementById(id);
      setDisplay(drumPad.id);
      drumPad.firstElementChild.play();
      console.log(drumPad);
   };

   useEffect(() => {
      document.addEventListener("keypress", (e) => {
         const keys = Array.from(document.querySelectorAll(".drum-pad"));
         keys.forEach((key) => {
            if (key.innerText === e.key.toUpperCase()) {
               handleClick(key.id);
            }
         });
      });
   }, []);

   return (
      <div className="App">
         <div id="drum-machine">
            <div id="display">{display}</div>
            <div className="drum-pad-container">
               <div className="drum-pad" id="Heater1" onClick={() => handleClick("Heater1")}>
                  Q
                  <audio
                     className="clip"
                     id="Q"
                     src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                  ></audio>
               </div>
               <div className="drum-pad" id="Heater2" onClick={() => handleClick("Heater2")}>
                  W
                  <audio
                     className="clip"
                     id="W"
                     src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                  ></audio>
               </div>
               <div className="drum-pad" id="Heater3" onClick={() => handleClick("Heater3")}>
                  E
                  <audio
                     className="clip"
                     id="E"
                     src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                  ></audio>
               </div>
               <div className="drum-pad" id="Heater4" onClick={() => handleClick("Heater4")}>
                  A
                  <audio
                     className="clip"
                     id="A"
                     src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                  ></audio>
               </div>
               <div className="drum-pad" id="Clap" onClick={() => handleClick("Clap")}>
                  S
                  <audio
                     className="clip"
                     id="S"
                     src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                  ></audio>
               </div>
               <div className="drum-pad" id="Open-HH" onClick={() => handleClick("Open-HH")}>
                  D
                  <audio
                     className="clip"
                     id="D"
                     src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                  ></audio>
               </div>
               <div
                  className="drum-pad"
                  id="Kick-n'-Hat"
                  onClick={() => handleClick("Kick-n'-Hat")}
               >
                  Z
                  <audio
                     className="clip"
                     id="Z"
                     src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                  ></audio>
               </div>
               <div className="drum-pad" id="Kick" onClick={() => handleClick("Kick")}>
                  X
                  <audio
                     className="clip"
                     id="X"
                     src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                  ></audio>
               </div>
               <div className="drum-pad" id="Closed-HH" onClick={() => handleClick("Closed-HH")}>
                  C
                  <audio
                     className="clip"
                     id="C"
                     src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                  ></audio>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
