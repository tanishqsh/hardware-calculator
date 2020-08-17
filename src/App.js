import React, { useState } from 'react';
import './App.css';
import useSound from 'use-sound';

import sound from './assets/sound2.mp3';
import soundwave from './assets/sound2.wav';

function App() {
  const [temp, changeTemp] = useState(0);
  const [postTemp, changePostTemp] = useState(0);
  const [postTempCount, changePostTempCount] = useState(0);
  const [operator, changeOperator] = useState('');
  const [dot, changeDot] = useState(false);
  const [tempCount, changeTempCount] = useState(0);
  const [play] = useSound(sound);
  const [playwave] = useSound(soundwave);

  const [showBack, changeShowBack] = useState(false);

  const performWithDigit = (digit) => {
    if (digit === 'equal') {
      switch (operator) {
        case '+':
          changeTemp(temp + postTemp);
          break;
        case '-':
          changeTemp(temp - postTemp);
          break;
        case '/':
          changeTemp(temp / postTemp);
          break;
        case '*':
          changeTemp(temp * postTemp);
          break;
        default:
          break;
      }
      changePostTemp(0);
      changePostTempCount(0);
    } else {
      if (operator === '') {
        changeTemp(10 * temp + digit);
        changeTempCount(tempCount + 1);
      } else {
        changePostTemp(10 * postTemp + digit);
        changePostTempCount(postTempCount + 1);
      }
    }
  };

  const ShowCalculator = () => {
    return (
      <div className="calculator">
        <div className="output-window">
          <div className="output-window-inner">
            <p>
              {postTemp === 0
                ? temp - Math.floor(temp) !== 0
                  ? temp.toFixed(2)
                  : Math.round(temp)
                : postTemp}
            </p>
          </div>
        </div>
        <div className="button-container">
          <button onClick={() => buttonPressed(0)} className="zero"></button>
          <button onClick={() => buttonPressed(1)} className="one"></button>
          <button onClick={() => buttonPressed(2)} className="two"></button>
          <button onClick={() => buttonPressed(3)} className="three"></button>
          <button onClick={() => buttonPressed(4)} className="four"></button>
          <button onClick={() => buttonPressed(5)} className="five"></button>
          <button onClick={() => buttonPressed(6)} className="six"></button>
          <button onClick={() => buttonPressed(8)} className="eight"></button>
          <button onClick={() => buttonPressed(9)} className="nine"></button>
          <button
            onClick={() => buttonPressed('plus')}
            className="plus"
          ></button>
          <button
            onClick={() => buttonPressed('minus')}
            className="minus"
          ></button>
          <button onClick={() => buttonPressed('dot')} className="dot"></button>
          <button
            onClick={() => buttonPressed('clear')}
            className="clear"
          ></button>
          <button
            onClick={() => buttonPressed('equal')}
            className="equal"
          ></button>
          <button
            onClick={() => buttonPressed('multiply')}
            className="multiply"
          ></button>
          <button
            onClick={() => buttonPressed('divide')}
            className="divide"
          ></button>
          <button onClick={() => buttonPressed(7)} className="seven"></button>
        </div>
      </div>
    );
  };

  const buttonPressed = (event) => {
    play();
    playwave();
    switch (event) {
      case 0:
        console.log(dot);
        performWithDigit(0);
        break;
      case 1:
        performWithDigit(1);
        break;
      case 2:
        performWithDigit(2);
        break;
      case 3:
        performWithDigit(3);
        break;
      case 4:
        performWithDigit(4);
        break;
      case 5:
        performWithDigit(5);
        break;
      case 6:
        performWithDigit(6);
        break;
      case 7:
        performWithDigit(7);
        break;
      case 8:
        performWithDigit(8);
        break;
      case 9:
        performWithDigit(9);
        break;
      case 'plus':
        performWithDigit('equal');
        changeOperator('+');
        break;
      case 'divide':
        performWithDigit('equal');
        changeOperator('/');
        break;
      case 'multiply':
        performWithDigit('equal');
        changeOperator('*');
        break;
      case 'minus':
        performWithDigit('equal');
        changeOperator('-');
        break;
      case 'dot':
        changeDot(true);
        break;
      case 'equal':
        performWithDigit('equal');

        break;
      case 'clear':
        changeTemp(0);
        changePostTemp(0);
        changeTempCount(0);
        changePostTempCount(0);
        changeOperator('');
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div style={{ textAlign: 'center' }} className="">
        <p>
          <a target="_new" href="https://lil.software/hardware/">
            inspired by lil hardware calculator.
          </a>{' '}
          <br />
          <span className="subtitle">
            created by{' '}
            <a href="https://twitter.com/tanishqxyz"> Tanishq (@tanishqxyz) </a>
            <span role="img" aria-label="emoji">
              &nbsp;
            </span>
          </span>
          <br />
          <br />
        </p>
        {showBack ? (
          <div data-aos="flip-left" className="back">
            <br />
          </div>
        ) : (
          <ShowCalculator />
        )}
        <button
          onClick={() => changeShowBack(!showBack)}
          className="toggleButton"
        >
          Switch
        </button>
        <br />
        <br />
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          class="twitter-share-button"
          data-show-count="false"
        >
          Tweet
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <br />
        <a
          href="https://twitter.com/tanishqxyz?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
        >
          Follow @tanishqxyz
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <br />
        <br />
        <a
          class="github-button"
          href="https://github.com/tanishqsh/hardware-calculator/"
          aria-label="Follow @tanishqsh on GitHub"
        >
          Star On Github
        </a>
      </div>
    </div>
  );
}

export default App;
