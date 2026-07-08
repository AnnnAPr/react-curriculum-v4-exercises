// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render

// Use useRef hook to avoid re-renders
import { useRef } from 'react';
export default function FindCorrectHook() {
  // Track the number of clicks in background
  const clickCount = useRef(0);

  // Hold direct reference to the HTML button element in the DOM
  const buttonRef = useRef(null);

  function handleClick() {
    // Increment the click count
    clickCount.current++;

    // Directly update browser DOM element
    if (buttonRef.current) {
      buttonRef.current.textContent = `${clickCount.current} Clicks`;
    }
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button
        ref={buttonRef} // react link DOM button element to buttonRef
        onClick={handleClick}
      >
        0 Clicks
      </button>
    </div>
  );
}
