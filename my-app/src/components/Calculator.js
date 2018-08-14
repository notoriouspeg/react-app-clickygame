import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360

const Math = props => {
 let result = "unknown";
 if (props.operator==="+") {
   result = props.num1 + props.num2
 }
 else if (props.operator==="-"){
   result = props.num1 - props.num2
 }
  return (
    <span>{result}</span>
  )
}
const Calculator = () => (
  <div>
    <p>
      19 + 341 = <Math num1={19} operator={"+"} num2={341} />
    </p>
    <p>
      42 - 17 = <Math num1={19} operator={"-"} num2={341} />
    </p>
    <p>
      100 * 3 = <Math num1={19} operator={"*"} num2={341} />
    </p>
    <p>
      96 / 4 = <Math num1={19} operator={"/"} num2={341} />
    </p>
  </div>
);

export default Calculator;
