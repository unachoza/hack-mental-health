import React, { Component } from 'react'
import JournalEntry from './JournalEntry'
import './NewEntry.css'

class NewEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entry: {},
            entries: []
                
        } 
        
    }

    handleJournalInput = (e) => {
        this.setState({ entry: e.target.value })
    }

   
    handleJournalSubmit = (e) => {
        e.preventDefault()
        const currentEntry = {
            text: this.text
        }
        const newEntries = Array.from(this.state.entries)
        newEntries.push(currentEntry)
        this.setState({ entries: newEntries })
        console.log(this.state)
       
    }
    
    render() {
        return (
            <div>
            <section className="entries">
                {this.state.entries.map((entry ,i) => {
                    return(
                        <JournalEntry entry={this.state.entry} key={i}
                        index={i}/>
                    )
                }).reverse()}
            </section>
            <div>
                <h1>New Entry</h1>
                <form onSubmit={this.handleJournalSubmit}>
                    
                    <textarea onChange={this.handleJournalInput} name="text"  id="text" cols="47" rows="10" placeholder="wrie here"></textarea>
                    <br />
                    <input className="submit-button" type="submit" value="Submit"></input>
                </form>
                </div>
            </div>
        )
}
    }


export default NewEntry 
