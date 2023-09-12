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
      <h2
        style={{
          color: backColor,
        }}
      >
        Generated Color:{' '}
        <background color hex code>
          {' '}
        </background>{' '}
        {backColor}
      </h2>
      <div
        style={{
          backgroundColor: backColor,
          padding: '40px',
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <button className="button" onClick={generatedRandomColor}>
        Generate
      </button>
    </>
  );
}
