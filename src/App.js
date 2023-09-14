import './index.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [backColor, setBackColor] = useState('');
  const generatedRandomColor = () => {
    const color = randomColor();
    setBackColor(color);
  };
  return (
    <>
      <h1>
        React
        <br />
        Random
        <br />
        Color
        <br />
        Generator
      </h1>
      <div
        style={{
          backgroundColor: backColor,
          padding: '40px',
        }}
      >
        <h2
          style={{
            color: 'white',
            padding: 'black',
          }}
        >
          Generated Color:{backColor}
        </h2>
      </div>
      <br />
      <br />
      <button className="button" onClick={generatedRandomColor}>
        Generate
      </button>
    </>
  );
}
