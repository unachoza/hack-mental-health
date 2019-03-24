import React, { Component } from 'react'
import { bold } from 'ansi-colors';

class JournalContent extends Component{
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden(e) {
        console.log(this.state)
        if (this.state.isHidden) {
              this.setState({
            isHidden: false
            })
        } else {
            this.setState({
            isHidden: true
            })
        }
        
        
    }
    render() {
     let show = ""
        if(this.state.isHidden) {
           show = <div>See More</div>
        }
        else {
        show = <div className="below-fold">
                <p>
                mmmmmm so going to catch the red dot today going to catch the red dot today, ask to go outside and ask to come inside and ask to go outside and ask to come inside yet stare out cat door then go back inside. Bite off human's toes run up and down stairs. Roll on the floor purring your whiskers off. Shake treat bag. Get video posted to internet for chasing red dot sun bathe, yet annoy the old grumpy cat, start a fight and then retreat to wash when i lose yet cat dog hate mouse eat string barf pillow no baths hate everything.<br />
                <div style={{ fontWeight: bold}}>See Less</div>
            </p>
            </div>
        }
        return (
            <div>
            <div className="above-fold">
                <p>Wack the mini furry mouse pee in the shoe, or claw drapes rub face on owner yet and sometimes switches in french and say "miaou" just because well why not or claw drapes, for i cry and cry and cry unless you pet me, and then maybe i cry just for fun. Scamper eat too much then proceed to regurgitate all over living room carpet while humans eat dinner for kick up litter make it to the carpet before i vomit.<br />
                </p>
            </div>
                <button className="centered-button" onClick={(e) => this.toggleHidden()}>
               {show}
                </button>
                
            </div>
        )
    }
}

export default JournalContent