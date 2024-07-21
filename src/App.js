import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = ()=> {
  return (
    <Steps/>
  )
}

const Steps = () => {
  const [step, setStep] = useState(1);
 const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if(step > 1)
     setStep((step) => step - 1)
  };

  const handleNext = () => {
    if(step < 3)
      setStep(step + 1)
  }

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen)
  };

  return(
  <>
<button className="close" style={{cursor: "pointer"}} onClick={handleToggle}>&times;</button>

   { isOpen && 
  (
   <div className="steps">
      <div className="numbers">
      <div className={step >= 1 ? "active" : ""}>1</div>
      <div className={step >= 2 ? "active" : ""}>2</div>
      <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
    <p className="message">
      Step: {step} {messages[step-1]}
    </p>
    <div className="buttons">
    <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={() => handlePrevious()}>Previous</button>
    <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={() => handleNext()}>Next</button>
    </div>
   </div> 
  ) 
  }
  </>
  )
};



// const App = () => {
// return(
//   <Counter/>
// )
// };
// export default App;

// const Counter = () => {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(1);

//   const handleStepIncrement = () => {
//     setStep((step) => step + 1)
//   }

//   const handleStepDecrement = () => {
//     setStep((step) => step - 1)
//   }

//   const handleCountIncrement = () => {
//     setCount((count) => count + step)
//   }

//   const handleCountDecrement = () => {
//     setCount((count) => count - step)
//   }

//   const date = new Date();
//   date.setDate(date.getDate() + count)

  
//   return(
//     <>
//     <button onClick={()=> handleStepDecrement()}>-</button>
//     <span>Step: {step}</span>
//     <button onClick={() => handleStepIncrement()}>+</button>


//     <button onClick={() => handleCountDecrement()}>-</button>
//     <span>Count: {count}</span>
//     <button onClick={() => handleCountIncrement()}>+</button>

//     <span>{count === 0 
//     ? "Today is" 
//     : count > 0 
//     ? `${count} days from today is ` 
//     : `${Math.abs(count)} days ago was`}</span>
//     <span> {date.toDateString()}</span>
//     </>
//   )
// };