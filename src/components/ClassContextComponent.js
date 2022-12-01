import React, { Component } from 'react'
import { ThemeContext } from './UseContextComponent'

export default class ClassContextComponent extends Component {
 themeStyles(dark){
    return {
        backgroundColor:dark ? '#333' :'#CCC',
        color: dark ? '#CCC':'#333',
        padding: '2rem',
        margin: '2rem'
    }
 }
 
    render() {
    return (
        // consumer portion of the context 
      <ThemeContext.Consumer>
            {darkTheme =>{
                return <div style={this.themeStyles(darkTheme)}> Class Theme</div>
            }}

      </ThemeContext.Consumer>   
      
    )
  }
}
