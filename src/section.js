
import React, {Component} from 'react'

import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime

let singleUser = {
  name: 'Erin',
  time: <DateTime />,
}

export default class Section extends Component {
  render() {
    return (
      <section className="welcomeSection">
        <h1>Welcome, {singleUser.name}</h1>
       <DateTime></DateTime>
      </section>
    )
  }
}