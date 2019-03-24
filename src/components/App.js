import React, { Component } from 'react'
import JournalContent from './JournalContent'
import '../App.css'


class App extends Component {

    handleSeeMoreClick(e) {
        e.preventDefault()
        console.log('link was clicked')
        
    }

    render() {
        
        return (
            <div>
                
                <h1>Passion Journal</h1>
                <div className="journal-list">
                    <div className="day">
                        <h3>Date: March 24, 2019</h3>
                        <div className="title">
                            <div className="body">
                                <JournalContent />
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default App 