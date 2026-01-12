import { useRef, useState } from "react";

export default function Player() {
  const player = useRef();
  const [enteredName, setEnteredName] = useState();

  function handleSubmit() {
    setEnteredName(player.current.value);
    player.current.value = "";
  }
  return (
    <div className="player-section">
      <h2>Welcome {enteredName ? enteredName : "Unknown entity"}</h2>
      <div className="player-input">
        <input ref={player} type="text" placeholder="Your name" />
        <button onClick={handleSubmit}>Set Name</button>
      </div>
    </div>
  );
}
