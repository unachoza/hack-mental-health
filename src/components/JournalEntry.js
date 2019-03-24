import React, { Component } from 'react'
import JournalContent from './JournalContent'


class JournalEntry extends Component{
    constructor() {
        super()
        this.state = {
            editing: false,
            entry: {}
            
        }
    }
    render() {
        return(
        <div>
                <h1>Passion Journal</h1>
                <div className="journal-entry">
                    <div className="day">
                        <h3>Date: March 24, 2019</h3>
                    </div>
                    <div className="text">
                        <p>{this.state.entry.text}</p>
                    </div>
                </div>
          </div>
           )
    }

}
    


export default JournalEntry