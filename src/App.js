import React, { useEffect, useState } from "react";
import Text from "./components/Text";
import Header from "./components/Header";
import style from "./css/style.css"


function App() {
  const [darkMode, setDarkMode] = useState(()=>{ 
    const defaultTheme = localStorage.getItem("theme");
    return defaultTheme ? defaultTheme : "light";
  });


  function handleToggle(){
    setDarkMode(prevMode => prevMode === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    localStorage.setItem("theme", darkMode)
  }, [darkMode])
  

  return (
    <div>
      <Header mode={darkMode} toggle={handleToggle}/>
      <Text mode={darkMode}/>
    </div>
  );
}

export default App;
