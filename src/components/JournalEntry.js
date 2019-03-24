import React, { Component } from 'react'
import JournalContent from './JournalContent'


    
    const JournalEntry = () => {
        return(
        <div>
                <h1>Passion Journal</h1>
                <div className="journal-entry">
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
           


export default JournalEntry