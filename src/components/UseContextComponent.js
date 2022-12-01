        import React, {useState, useContext} from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

export const ThemeContext = React.createContext()


export default function UseContextComponent() {


    return (
    <div>
        {/* context provider to wrap all the information in the context , single prop value is your context */}
        <ThemeProvider >
            <FunctionContextComponent/>
        </ThemeProvider>
      
    </div>
  )
}
