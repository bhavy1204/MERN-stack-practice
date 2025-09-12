import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme.js'
import ThemeBtn from './componenets/Button.jsx';
import Card from './componenets/card.jsx';

function App() {

  const [theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light")
  }

  const darkTheme = () => {
    setTheme("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [theme])



  return (
    <>
      <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* {theme button} */}
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* {card} */}
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
