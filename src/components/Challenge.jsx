import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Challenge({ title, time }) {
  return (
    <>
      <Modal />
      <div className="challenge-card">
        <h3>{title}</h3>
        <p className="time">
          {time} second{time > 1 ? "s" : ""}
        </p>
        <button>Start Challenge</button>
        <p className="status">Timer is inactive</p>
      </div>
    </>
  );
}
