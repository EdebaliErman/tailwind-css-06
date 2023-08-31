import { useEffect, useState } from "react";
import Article from "./Components/Article/Article";
import Section from "./Components/Section/Section";

function App() {
  const [hexColor, setHexColor] = useState('#000')
  const [dataColor, setDataColor] = useState()
  const [addPalette, setAddPalette] = useState([])

  useEffect(() => {
    setDataColor([hexColor])
  }, [hexColor])

  return (
    <div >
      <div className="App">
        <Section
          color={hexColor}
          setColor={setHexColor}
        />
        <Article colors={dataColor} 
          addPalette={addPalette}
          setAddPalette={setAddPalette}
        />
      </div>
    </div>
  );
}

export default App;
