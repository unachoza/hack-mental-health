import React, { Component } from 'react'
import JournalEntry from './JournalEntry'
import './EntryList.css'

const EntryList = () => {


    
    const renderedList = []
    for (let i = 0; i < 10; i++){
        renderedList.push(<JournalEntry/>)
    }
    return (

        <div>
            {renderedList}
        </div>
    )
}

export default EntryList