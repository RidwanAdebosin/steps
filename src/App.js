import { useState } from "react";

const messages = [
  "Learn React 👊",
  "Apply for jobs 💼",
  "Invest your new income 😭",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  // function openBox() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" onClick={handlePrevious} textColor="#fff">
              <span>👈</span>Previous
            </Button>

            <Button bgColor="#7950f2" onClick={handleNext} textColor="#fff">
              <span>👉</span>Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <>
      <p className="message">
        <h3>Step{step}</h3> {children}
      </p>
      ;
    </>
  );
}

function Button({ textColor, onClick, bgColor, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
