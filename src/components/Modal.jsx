import { useImperativeHandle, useRef } from "react";

export default function Modal({ ref, timeRemaining, time, onReset }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function handleClose() {
    dialog.current.close();
    onReset();
  }

  const score = Math.round((1 - timeRemaining / (time * 1000)) * 100);
  const result = timeRemaining <= 0 ? "You Lost" : `Score: ${score}`;
  return (
    <dialog ref={dialog} id="result-modal">
      <div className="modal-content">
        <h2>{result}</h2>
        <p>
          The target time was <span className="highlight">{time} seconds</span>.
        </p>
        <p>
          You stopped the timer with{" "}
          <span className="highlight">{timeRemaining / 1000} seconds left</span>
          .
        </p>
        <button onClick={handleClose}>Close</button>
      </div>
    </dialog>
  );
}
