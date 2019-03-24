import React, { Component } from 'react'
import NewEntry from './NewEntry'


    
   class JournalEntry extends Component{
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            entry: { text: ""}
            
        }
        console.log("this is state:", this.state, "this is props", this.props)
    }
    render() {
        return(
        <div>
                <h1>Passion Journal</h1>
                <div className="journal-entry">
                    {/* <div className="day">
                        <h3>Date: March 24, 2019</h3>
                    </div> */}
                    <div className="text">
                        <p>{this.props.entry}</p>
                    </div>
                </div>
          </div>
           )
    }

}
           


export default JournalEntry