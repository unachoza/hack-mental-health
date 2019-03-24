import React, { Component } from 'react'
import JournalEntry from './JournalEntry'
import './NewEntry.css'

class NewEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entry: '',
            entries: []
                
        } 
        
    }

    handleJournalInput = (e) => {
        this.setState({ entry: e.target.value })
        console.log(this.state.entry)
    }

   
    handleJournalSubmit = (e) => {
        e.preventDefault()
        const currentEntry = {
            text: this.state.entry
        }
        const newEntries = Array.from(this.state.entries)
        newEntries.push(currentEntry)
        this.setState({ entries: newEntries, entry: "" })
        console.log(this.state)
       
    }
    
    render() {
        return (
            <div>
            
            <div>
                <h1>New Entry</h1>
                <form onSubmit={this.handleJournalSubmit}>
                    
                    <textarea onChange={this.handleJournalInput} name="text"  id="text" cols="47" rows="10" placeholder="wrie here" value={this.state.entry}></textarea>
                    <br />
                    <input className="submit-button" type="submit" value="Submit"></input>
                </form>
                </div>
                <section className="entries">
                {this.state.entries.map((entry ,i) => {
                    return(
                        <JournalEntry entry={entry} key={i}
                        index={i}/>
                    )
                }).reverse()}
            </section>
            </div>
        )
}
    }


export default NewEntry 
