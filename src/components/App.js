import React, { Component } from 'react'
import JournalEntry from './JournalEntry'
import EntryList from './EntryList'
import '../App.css'


class App extends Component {

    handleSeeMoreClick(e) {
        e.preventDefault()
        console.log('link was clicked')
        
    }

    render() {
        
        return (
            <EntryList/>
        )
    }
}

export default App 