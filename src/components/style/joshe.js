import React, { Component } from 'react'
import './joshe.css';


export default class Joshe extends Component {

    state = {
        reveal: false
    }


    handleDisplay = (e) => {
        this.setState({
            reveal: !this.state.reveal
        })
    }

    render() {
        const { reveal, isOpen } = this.state
        return (
            <div className='App'>
                <header> theHouseOfUwe  </header>
                <div style={{ display: 'flex' }}>
                    <section>
                        <div className='card' onClick={this.handleDisplay}>
                            <div></div>
                            <p> Collars </p>
                        </div>
                        <div className='card' onClick={this.handleDisplay}>
                            <div></div>
                            <p> Sleeves </p>
                        </div>
                        <div className='card' onClick={this.handleDisplay}>
                            <div></div>
                            <p> Cuffs </p>
                        </div>

                    </section>
                    <main>

                        {
                            reveal &&
                            <div className='reveal' >
                            </div>
                        }

                    <div>
                    
                    </div>

                    </main>
                </div>
            </div>
        )
    }
}