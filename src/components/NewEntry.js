import React, { Component } from 'react'
import './NewEntry.css'

class NewEntry extends Component {
    render() {
        return (
            <form method="post" action="POST">
                
                <textarea name="text" placeholder="Today I feel ... " id="text" cols="47" rows="10"></textarea>
                 <br />
                <input type="text"></input>
            </form>
        )
    }
}

export default NewEntry 
