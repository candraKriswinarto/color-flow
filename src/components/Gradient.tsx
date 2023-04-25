import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoCopyOutline } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";
import randomcolor from "randomcolor";

const Gradient = () => {
  const [color1, setColor1] = useState(randomcolor());
  const [color2, setColor2] = useState(randomcolor());
  const [output, setOutput] = useState("");

  useEffect(() => {
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    setOutput(`background: ${gradient}`);
  }, [color1, color2]);

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "color1") {
      setColor1(value);
    } else if (name === "color2") {
      setColor2(value);
    }
  };

  const handleRandomClick = () => {
    setColor1(randomcolor());
    setColor2(randomcolor());
  };

  return (
    <div className='gradient'>
      <h1>Create you own gradient!</h1>
      <div className='colorPicker'>
        <input
          type='color'
          name='color1'
          value={color1}
          onChange={handleChangeColor}
        />
        <input
          type='color'
          name='color2'
          value={color2}
          onChange={handleChangeColor}
        />
      </div>
      <button className='btnRandom' onClick={handleRandomClick}>
        Generate Random gradient!
      </button>
      <div className='output'>
        <SyntaxHighlighter language='css' style={arduinoLight}>
          {output}
        </SyntaxHighlighter>
        <CopyToClipboard text={`background: ${output}`}>
          <IoCopyOutline style={{ cursor: "pointer", fontSize: "25px" }} />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Gradient;
