import React, { Component } from 'react'
import './NewEntry.css'

class NewEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entry: 'Today I feel',
            post: "",
            entries: []
                
        }
    }

    handleJournalInput = (e) => {
        this.setState({ entry: e.target.value })
    }

    handleJournalSubmit = (e) => {
        console.log('this is being submited')
        this.setState({ post: e.target.value })
          
        e.preventDefault()
        console.log(this)
        const entry = {
            title: this.entryTitle.value,
            text: this.entryText.value
        }
        const newEntry = Array.from(this.state.entries)
        newEntry.push(entry)
        this.setState({
            entries: newEntry
        })
        this.entryTitle.value = "",
            this.entryText.value = "",
    }
  
    render() {
        return (
            <div>
                <h1>New Entry</h1>
                <form onSubmit={this.handleJournalSubmit}>
                    
                    <textarea onChange={this.handleJournalInput} name="text"  id="text" cols="47" rows="10">{this.state.entry}</textarea>
                    <br />
                    <input className="submit-button" type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default NewEntry 
