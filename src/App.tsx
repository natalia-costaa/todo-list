// import { useState } from 'react'
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/index";
import { Input } from "./components/Input";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
// import { Button } from "../src/components/Button/Button";
export function App() {
//  const [count, setCount] = useState(0)

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
          <Header />
           <Input />
      </ThemeProvider>    
    </div>
  )
}
