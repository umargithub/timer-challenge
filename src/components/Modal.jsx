export default function Modal() {
  return (
    <dialog id="result-modal">
      <div className="modal-content">
        <h2>YOU LOST</h2>
        <p>
          The target time was <span className="highlight">5 seconds</span>.
        </p>
        <p>
          You stopped the timer with{" "}
          <span className="highlight">0.00 seconds left</span>.
        </p>
        <button>Close</button>
      </div>
    </dialog>
  );
}
