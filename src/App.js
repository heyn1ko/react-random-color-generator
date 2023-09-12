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
        React<br></br>Random<br></br>Color<br></br>Generator
      </h1>
      <div
        style={{
          backgroundColor: backColor,
          padding: '40px',
        }}
      >
        <br></br>
        <br></br>
        <h2>Generated Color: {backColor}</h2>
        <button onClick={generatedRandomColor}>Generate</button>
      </div>
    </>
  );
}

// return (
//   <>
//     <div
//       style={{
//         backgroundColor: backColor,
//         width: '1000px',
//         height: '500px',
//       }}
//     >
//       <br></br>
//       <br></br>
//       <div>Generated Color: {backColor}</div>
//     </div>
//     <button onClick={generatedRandomColor}>Generate</button>
//   </>
// );
// }
// onClick={() => {
//   const newColor = randomColor{style};
//   setRndmmColor(newColor);
// }}
