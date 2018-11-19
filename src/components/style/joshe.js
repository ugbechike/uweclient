import React, { Component } from 'react'
import './joshe.css';
import Collar from '../collar/collar';
import Collar1 from '../assets/collarButton.png'
import DesignArea from '../designArea/designArea';
import Shirt from '../shirt/shirt';
import Shirt1 from '../assets/shirtYesBtn.png';
import Sleeves from '../sleeves/sleeves';
import LongSleeve from '../assets/longSleeves.png';
import CollarIcon from '../assets/collar-icon.png';
import Shirts from '../assets/Short.png';
import Long from '../assets/Long.png';
import Cuff from '../cuff/cuff';
// import Cuffs from '../assets/cuff.PNG';
import AnkaraFabrics from '../assets/ankara1.PNG';
import backCollar from '../assets/backcollar.png';
import BackDesignArea from '../designArea/backDesign';
import BackCollar from '../collar/backCollar';
import backShirt1 from '../assets/backinvertpleats.png';
import BackShirt from '../shirt/backShirt';
import BackLongSleeve from '../assets/backsleeve.png';
import BackSleeves from '../sleeves/backSleeves';


export default class Joshe extends Component {

    state = {
        revealCollar: false,
        revealShirt: false,
        revealSleeves: false,
        revealCuff: false,
        hideClothes: false,
        showAll: true,
        fab: false,
        sty: true,
        collarImg: <img style={{ width: '55%' }} src={Collar1} alt='collar' />,
        shirtImg: <img className='shirt_image1' src={Shirt1} alt='shirt' />,
        sleevesImg: <img className='sleeves_image1' src={LongSleeve} alt='sleeves' />,
        backcollarImg: <img style={{ width: '55%' }} src={backCollar} alt='sleeves' />,
        backshirtImg: <img className='shirt_image1' src={backShirt1} alt='shirt' />,
        backsleevesImg: <img className='sleeves_image1' src={BackLongSleeve} alt='sleeves' />,
        activeTab: '1',
        frontView: true,
        bacView: false,
        btn: true,
    }

    //HANDLE COLLAR CHANGE
    changeCollar = (collarImg, shirtImg) => {
        this.setState({
            collarImg,

            
            hideClothes: !this.state.hideClothes,
            cuffImg: this.state.hideClothes
        })
    }

    //HANDLE BACK VIEW COLLAR
    changeBackCollar = (backcollarImg) => {
        this.setState({
            backcollarImg
        })
    }

    // HANDLE BACK VIEW SLEEVES
    changeBackSleeves = (backsleevesImg) => {
        this.setState({
            backsleevesImg
        })
    }

    // HANDLE BACK VIEW SHIRT
    changeBackShirt = (backshirtImg) => {
        this.setState({
            backshirtImg
        })
    }

    //HANDLE CHANGE OF SHIRTS
    changeShirt = (shirtImg) => {
        this.setState({
            shirtImg,

        })
    }

    changeSleeves = (sleevesImg) => {
        this.setState({
            sleevesImg,


        })

    }

    // //HANDLE CUFFS
    // changeCuff = (cuffImg) => {
    //     this.setState({
    //         cuffImg,
    //         hideClothes: !this.state.hideClothes,
    //         shirtImg: this.state.hideClothes,
    //         sleevesImg: this.state.hideClothes,
    //         collarImg: this.state.hideClothes,
    //         revealCuff: false,
    //     })
    // }

    //HANDLE COLLAR TOGGLE SIDEBAR
    handleDisplayCollar = (e) => {
        this.setState({
            revealCollar: !this.state.revealCollar,
            revealSleeves: false,
            revealShirt: false,
            revealCuff: false,
        })
    }

    //HANDLE SHIRT TOGGLE
    handleDisplayShirt = (e) => {
        this.setState({
            revealShirt: !this.state.revealShirt,
            revealCollar: false,
            revealSleeves: false,
            revealCuff: false,

        })
    }

    //HANDLE SLEEVES
    handleDisplaySleeves = (e) => {
        this.setState({
            revealSleeves: !this.state.revealSleeves,
            revealShirt: false,
            revealCollar: false,
        })
    }

    //HANDLE CUFF
    handleDisplayCuff = (e) => {
        this.setState({
            revealCuff: !this.state.revealCuff,
            revealSleeves: false,
            revealShirt: false,
            revealCollar: false
        })
    }

    clickFabrics = () => {
        this.setState({
            fab: true,
            sty: false,
            btn: false,
            revealCollar: false,
            revealCuff: false,
            revealShirt: false,
            revealSleeves: false
        })
    }

    clickStyles = () => {
        this.setState({
            sty: true,
            fab: false,
            btn: true
        })
    }

    //TOGGLE VIEW
    toggleViewFront = () => {
        this.setState({
            frontView: true,
            bacView: false

        })
    }

    toggleViewBack = () =>{
        this.setState({
            bacView: true,

            frontView: false

        })
    }

    render() {
        const { revealCollar, revealShirt, revealSleeves, revealCuff, fab, sty, bacView, frontView, btn } = this.state
        return (
            <div className='App'>
                <header> Uwe  </header>
                <div className='semi_header'>
                    <p>
                        <span style={{ cursor: 'pointer' }} onClick={this.clickFabrics}> Fabrics </span>
                        <span style={{ cursor: 'pointer' }} onClick={this.clickStyles}> Styles </span>
                    </p>
                </div>
                <div style={{ display: 'flex' }}>

                    {/* FRONT VIEW OF SECTION STARTS */}
                    {
                        frontView &&

                    <section>
                        {
                            fab &&
                            <div className='card'>
                                <div>
                                    <img style={{width: '100%', height:'70px'}} src={AnkaraFabrics} alt = ''/>
                                </div>
                                <p className='details'> Ankara </p>
                            </div>

                        }
                       
                            
                        {
                            sty &&
                            <div>
                                <div className='card' onClick={this.handleDisplayCollar}>
                                    <div>
                                        <img className='collarIcon' src={CollarIcon} alt='' />
                                    </div>
                                    <p className='details'> Collars </p>
                                </div>
                                <div className='card' onClick={this.handleDisplayShirt}>
                                    <div>
                                        <img className='shirtIcon' src={Shirts} alt="" />
                                    </div>
                                    <p className='details'> Placket  </p>
                                </div>
                                <div className='card' onClick={this.handleDisplaySleeves}>
                                    <div>
                                        <img className='shirtIcon' src={Long} alt="" />
                                    </div>
                                    <p className='details'> Sleeves </p>
                                </div>
                                {/* <div className='card' onClick={this.handleDisplayCuff}>
                                    <div>
                                        <img className='shirtIcon' src={Cuffs} alt="" />
                                    </div>
                                    <p className='details'> Cuffs </p>
                                </div> */}

                            </div>
                        }

                    </section>
                    }
                    {/* FRONT VIEW OF SECTION ENDS HERE */}


                    {/* BACK VIEW FOR SECTION */}
                    {
                        bacView &&

                    <section>
                        {
                            fab &&
                            <div className='card'>
                                <div>
                                    <img style={{width: '100%', height:'70px'}} src={AnkaraFabrics} alt = ''/>
                                </div>
                                <p className='details'> Ankara </p>
                            </div>

                        }
                        
                       
                            
                        {
                            sty &&
                            <div>
                                <div className='card' onClick={this.handleDisplayCollar}>
                                    <div>
                                        <img className='collarIcon' src={CollarIcon} alt='' />
                                    </div>
                                    <p className='details'> Back Collars </p>
                                </div>
                                 <div className='card' onClick={this.handleDisplayShirt}>
                                    <div>
                                        <img className='shirtIcon' src={Shirts} alt="" />
                                    </div>
                                    <p className='details'>Back Placket  </p>
                                </div>
                                <div className='card' onClick={this.handleDisplaySleeves}>
                                    <div>
                                        <img className='shirtIcon' src={Long} alt="" />
                                    </div>
                                    <p className='details'>Black Sleeves </p>
                                </div>
                                {/* <div className='card' onClick={this.handleDisplayCuff}>
                                    <div>
                                        <img className='shirtIcon' src={Cuffs} alt="" />
                                    </div>
                                    <p className='details'> Cuffs </p>
                                </div> */}

                            </div>
                        }

                    </section>
                    }
                    {/* BACK VIEW SECTION ENDS HERE */}


                    {/* FRONT VIEW MAIN STARTS HERE */}

                    {
                        frontView &&
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
                                <Shirt changeShirt={this.changeShirt} />
                            </div>
                        }

                        {
                            revealSleeves &&
                            <div className='reveal' >
                                <Sleeves changeSleeves={this.changeSleeves} />
                            </div>
                        }

                        {
                            revealCuff &&
                            <div className='reveal' >
                                <Cuff changeCuff={this.changeCuff} />
                            </div>
                        }

                        <div>
                            <DesignArea collarImg={this.state.collarImg} shirtImg={this.state.shirtImg} sleevesImg={this.state.sleevesImg} cuffImg={this.state.cuffImg} />
                        </div>

                    </main>

                    }
                    {/* FRONT VIEW FOR MAIN ENDS HERE */}


                    {/* BACK VIEW FOR MAIN STARTS HERE */}

                    {
                        bacView &&
                        <main>

                        {
                            revealCollar &&
                            <div className='reveal' >
                                <BackCollar changeBackCollar={this.changeBackCollar} />
                            </div>
                        }

                        {
                            revealShirt &&
                            <div className='reveal' >
                                <BackShirt changeBackShirt={this.changeBackShirt} />
                            </div>
                        }

                        {
                            revealSleeves &&
                            <div className='reveal' >
                                <BackSleeves changeBackSleeves={this.changeBackSleeves} />
                            </div>
                        }

                        {
                            revealCuff &&
                            <div className='reveal' >
                                <Cuff changeCuff={this.changeCuff} />
                            </div>
                        }

                        <div>
                            <BackDesignArea backcollarImg={this.state.backcollarImg} backshirtImg={this.state.backshirtImg} backsleevesImg={this.state.backsleevesImg} />
                        </div>

                    </main>

                    }
                        {/* BACK VIEW FOR MAIN ENDS HERE */}

                    {
                        btn &&
                        
                        <div className='toggle-btn'>
                        <button onClick={this.toggleViewFront}>Front view</button>
                        <button onClick={this.toggleViewBack}>Back view</button>
                        </div>
                    
                    }

                    {/*  */}
                   

                </div>

            </div>
        )
    }
}