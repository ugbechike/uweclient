import React, { Component } from 'react'
import './joshe.css';
import Collar from '../collar/collar';
import Collar1 from '../assets/collarButton.png'
import DesignArea from '../designArea/designArea';
import Shirt from '../shirt/shirt';
import Shirt1 from '../assets/shirtYesBtn.png';
import Sleeves from '../sleeves/sleeves';
import LongSleeve from '../assets/longSleeves.png';


export default class Joshe extends Component {

    state = {
        revealCollar: false,
        revealShirt: false,
        revealSleeves: false,
        collarImg:  <img style={{width: '55%'}} src={Collar1} alt='collar' />,
        shirtImg: <img style={{width: '55%'}} src={Shirt1} alt='shirt'/>,
        sleevesImg: <img style={{width: '55%'}} src={LongSleeve} alt='sleeves' />,
    }

    //HANDLE COLLAR CHANGE
    changeCollar = (collarImg) => {
        this.setState({collarImg, 
        })
    }
    //HANDLE CHANGE OF SHIRTS
    changeShirt = (shirtImg) => {
        this.setState({shirtImg, 
        })
    }

    changeSleeves = (sleevesImg) => {
        this.setState({sleevesImg, 
        })
    }

    //HANDLE COLLAR TOGGLE SIDEBAR
    handleDisplayCollar = (e) => {
        this.setState({
            revealCollar: !this.state.revealCollar,
            revealSleeves: false,
            revealShirt: false
        })
    }

    //HANDLE SHIRT TOGGLE
    handleDisplayShirt = (e) => {
        this.setState({
            revealShirt: !this.state.revealShirt,
            revealCollar: false,
            revealSleeves: false

        })
    }

    //HANDLE SLEEVES
    handleDisplaySleeves = (e) => {
        this.setState({
            revealSleeves: !this.state.revealSleeves,
            revealShirt: false,
            revealCollar: false
        })
    }
    

    render() {
        const { revealCollar, revealShirt, revealSleeves } = this.state
        return (
            <div className='App'>
                <header> theHouseOfUwe  </header>
                <div style={{ display: 'flex' }}>
                    <section>
                        <div className='card' onClick={this.handleDisplayCollar}>
                            <div>
                                
                            </div>
                            <p> Collars </p>
                        </div>
                        <div className='card' onClick={this.handleDisplayShirt}>
                            <div></div>
                            <p> Shirts </p>
                        </div>
                        <div className='card' onClick={this.handleDisplaySleeves}>
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
                            revealCollar &&
                            <div className='reveal' >
                            <Collar changeCollar={this.changeCollar} />
                            </div>
                        }

                        {
                            revealShirt &&
                            <div className='reveal' >
                                <Shirt changeShirt = {this.changeShirt} />
                            </div>
                        }

                        {
                            revealSleeves &&
                            <div className='reveal' >
                                <Sleeves changeSleeves = {this.changeSleeves} />
                            </div>
                        }

                    <div>
                        <DesignArea  collarImg={this.state.collarImg} shirtImg={this.state.shirtImg} sleevesImg={this.state.sleevesImg} />
                    </div>

                    </main>

                    

                </div>
            </div>
        )
    }
}