import React, { Component } from 'react'
import JournalEntry from './JournalEntry'
import './EntryList.css'

class EntryList extends Component{
    constructor(props) {
    super(props)
    }
    render() {
        return (
            <section className="entries">
                {this.state.entries.map((entry ,i) => {
                    return(
                        <JournalEntry entry={entry} key={i}
                        index={i}/>
                    )
                }).reverse()}
            </section>)
    }



    
    // const renderedList = []
    // for (let i = 0; i < 10; i++){
    //     renderedList.push(<JournalEntry/>)
    // }
    // return (

    //     <div>
    //         {renderedList}
    //     </div>
    // )
}

export default EntryList