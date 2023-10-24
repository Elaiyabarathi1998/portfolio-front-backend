
import React, { useState, useEffect } from 'react';

import './Calculator.css';



function Calculator() {

  const [input, setInput] = useState<string>('');

  const [currentColor, setCurrentColor] = useState<string>('#3498db');



  const colors: string[] = [

    "#FFCCCC", "#FFCC99", "#FFCC66", "#FFCC33", "#FFCC00", "#FF9933", "#FF9966", "#FF9999",

    "#FF99CC", "#FF99FF", "#CCFFFF", "#CCFFCC", "#CCFF99", "#CCFF66", "#CCFF33", "#CCFF00",

    "#99FF00", "#99FF33", "#99FF66", "#99FF99", "#99FFCC", "#99FFFF", "#66FFFF", "#66FFCC",

    "#66FF99", "#66FF66", "#66FF33", "#66FF00", "#33FF00", "#33FF33", "#33FF66", "#33FF99",

    "#33FFCC", "#33FFFF", "#00FFFF", "#00FFCC", "#00FF99", "#00FF66", "#00FF33", "#00FF00",

  ];



  useEffect(() => {

    const interval = setInterval(changeBackgroundColor, 1000);



    return () => clearInterval(interval);

  }, []);



  const changeBackgroundColor = () => {

    const randomColor: string =

      colors[Math.floor(Math.random() * colors.length)];

    setCurrentColor(randomColor);

  };



  const handleButtonClick = (value: string) => {

    setInput((prevInput) => prevInput + value);

  };



  const handleClearClick = () => {

    setInput('');

  };



  const handleEqualsClick = () => {

    try {

      setInput(eval(input).toString());

    } catch (error) {

      setInput('Error');

    }

  };



  const handleButtonMouseEnter = (button: HTMLElement) => {

    const randomColor: string =

      colors[Math.floor(Math.random() * colors.length)];

    button.style.backgroundColor = randomColor;

    button.style.transform = 'scale(1.1)';

  };



  const handleButtonMouseLeave = (button: HTMLElement) => {

    button.style.backgroundColor = currentColor;

    button.style.transform = 'scale(1)';

  };



  return (

    <div

      className="calculator-container"

      style={{ background: `linear-gradient(45deg, ${currentColor}, ${currentColor})` }}

    >

      <div className="display">

        <input type="text" id="result" value={input} readOnly />

      </div>



      <div className="container">

        <div className="buttons">

          <span

            onClick={() => {

              handleButtonClick('1');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn1"

          >

            1

          </span>

          <span

            onClick={() => {

              handleButtonClick('2');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn2"

          >

            2

          </span>

          <span

            onClick={() => {

              handleButtonClick('3');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn3"

          >

            3

          </span>

          <span

            onClick={() => {

              handleButtonClick('+');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btnPlus"

          >

            +

          </span>

          <span

            onClick={() => {

              handleButtonClick('4');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn4"

          >

            4

          </span>

          <span

            onClick={() => {

              handleButtonClick('5');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn5"

          >

            5

          </span>

          <span

            onClick={() => {

              handleButtonClick('6');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn6"

          >

            6

          </span>

          <span

            onClick={() => {

              handleButtonClick('-');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btnMinus"

          >

            -

          </span>

          <span

            onClick={() => {

              handleButtonClick('7');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn7"

          >

            7

          </span>

          <span

            onClick={() => {

              handleButtonClick('8');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn8"

          >

            8

          </span>

          <span

            onClick={() => {

              handleButtonClick('9');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn9"

          >

            9

          </span>

          <span

            onClick={() => {

              handleButtonClick('*');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btnMultiply"

          >

            *

          </span>

          <span

            onClick={() => {

              handleButtonClick('0');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btn0"

          >

            0

          </span>

          <span

            onClick={() => {

              handleButtonClick('/');

            }}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btnDivide"

          >

            /

          </span>

          <span

            onClick={handleClearClick}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="btnClear"

          >

            C

          </span>

          <span

            onClick={handleEqualsClick}

            onMouseEnter={(e) => handleButtonMouseEnter(e.target as HTMLElement)}

            onMouseLeave={(e) => handleButtonMouseLeave(e.target as HTMLElement)}

            id="equals"

          >

            =

          </span>

        </div>

      </div>

    </div>

  );

}



export default Calculator;

