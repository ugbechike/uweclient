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
import Long from '../assets/Long.PNG';
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
import CollarW  from '../assets/whitecollar1.png';
import WhiteCollar from '../collar/whiteCollar';
import Shirt3 from '../assets/whiteshirt.png';
import WhiteShirt from '../shirt/whiteShirt';
import WhiteSleeves from '../sleeves/whiteSleeves';
import WhiteSleeve1 from '../assets/whitesleeve.png';


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
        collarImg: <img className="collar-display"  src={Collar1} alt='collar' />,
        shirtImg: <img className='shirt_image1' src={Shirt1} alt='shirt' />,
        sleevesImg: <img className='sleeves_image1' src={LongSleeve} alt='sleeves' />,
        backcollarImg: <img style={{ width: '55%' }} src={backCollar} alt='sleeves' />,
        backshirtImg: <img className='shirt_image1' src={backShirt1} alt='shirt' />,
        backsleevesImg: <img className='sleeves_image1' src={BackLongSleeve} alt='sleeves' />,
        activeTab: '1',
        frontView: true,
        bacView: false,
        btn: true,
        AnkaraCollar: false,
        witeCollar: false,
        resultCollar: false,
        AnkaraShirt: true,
        ShirtWhite: false,
        AnkaraSleeve: false,
        SleeveWhite: false
    }

    //HANDLE COLLAR CHANGE
    changeCollar = (collarImg) => {
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


    // REAVEL DIFFERENT FABRICS STARTS HERE
    handleRevealCollar = () => {
        this.setState({
            resultCollar: true,
            AnkaraCollar: true,
            witeCollar: false,
            collarImg: <img className='collar-display' src={Collar1} alt='' />
        });
    }

    handleWhiteCollar = () => {
        this.setState({
            resultCollar: true,
            AnkaraCollar: false,
            witeCollar: true,
            collarImg: <img className="collar-displayW" src={CollarW} alt='' />
        });
    }

    handleReavelShirt =() => {
        this.setState({
            resultCollar: true,
            AnkaraShirt: true,
            AnkaraCollar: false,
            witeCollar: false,
            shirtImg: <img className='shirt_image1' src={Shirt1} alt='shirt' />,
        })
    }

    handleReavelWhiteShirt = () => {
        this.setState({
            ShirtWhite: true,
            resultCollar: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            shirtImg: <img className='shirt_image1' src={Shirt3} alt='shirt' />,

        })
    }

    handlReavelSleeves=() => {
        this.setState({
            AnkaraSleeve: true,
            resultCollar: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            ShirtWhite: false,
            sleevesImg: <img className='sleeves_image1' src={LongSleeve} alt='sleeves' />,
            
        })
    }

    handlReavelWhiteSleeves = () => {
        this.setState({
            SleeveWhite: true,
            AnkaraSleeve: false,
            resultCollar: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            ShirtWhite: false,
            sleevesImg: <img className='white_sleeves_image' src={WhiteSleeve1} alt='sleeves' />,
        })
    }

    //ENDS HERE


    handleClose = () => {
        this.setState({
            revealCollar: false,
            revealSleeves: false,
            revealShirt: false,
            revealCuff: false,
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
    handleCollarClose = () => {
        this.setState({
            resultCollar: false
        })
    }

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

    toggleViewBack = () => {
        this.setState({
            bacView: true,

            frontView: false

        })
    }

    render() {
        const { 
            revealCollar, 
            revealShirt, 
            revealSleeves, 
            revealCuff, 
            fab, 
            sty, 
            bacView, 
            frontView, 
            btn, 
            resultCollar,
            AnkaraCollar, 
            witeCollar, 
            AnkaraShirt,
            ShirtWhite,
            AnkaraSleeve,
            SleeveWhite} = this.state
        return (
            <div className='App'>
                <header> Uwe  </header>
                {/* <div className='semi_header'>
                    <p>
                        <span style={{ cursor: 'pointer' }} onClick={this.clickFabrics}> Fabrics </span>
                        <span style={{ cursor: 'pointer' }} onClick={this.clickStyles}> Styles </span>
                    </p>
                </div> */}
                <div style={{ display: 'flex' }}>

                    {/* FRONT VIEW OF SECTION STARTS */}
                    {
                        frontView &&

                        <section>
                            {
                                fab &&
                                <div className='card'>
                                    <div>
                                        <img style={{ width: '100%', height: '70px' }} src={AnkaraFabrics} alt='' />
                                    </div>
                                    <p className='details'> Ankara </p>
                                </div>
                            }


                            {
                                sty &&
                                <div className='mobile-section'>

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
                                            <img className='shirtIcon' src='' alt="" />
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
                                        <img style={{ width: '100%', height: '70px' }} src={AnkaraFabrics} alt='' />
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
                                            <img className='shirtIcon' src='' alt="" />
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
                                (resultCollar) ?
                                    <div className='revealer'>
                                        < p style={{fontSize: '20px'}} > <strong>Styles </strong> <i className='fa fa-arrow-left arrow-close' onClick={this.handleCollarClose}></i> </p>
                                       
                                       {
                                            AnkaraCollar ?
                                        <Collar changeCollar={this.changeCollar} /> :

                                            witeCollar ?
                                        <WhiteCollar changeCollar={this.changeCollar} />: 

                                            AnkaraShirt ?
                                        <Shirt changeShirt={this.changeShirt} /> :

                                            ShirtWhite ? 
                                        <WhiteShirt changeShirt={this.changeShirt} /> : 
                                        
                                            AnkaraSleeve ? 
                                        <Sleeves changeSleeves={this.changeSleeves} /> : 

                                            SleeveWhite ? 
                                        <WhiteSleeves changeSleeves={this.changeSleeves} /> : null
                                       } 
                                    </div> :
                                    (revealCollar || revealCuff || revealShirt || revealSleeves) ?
                                        <div className='reveal' >
                                            <p style={{fontSize: '20px'}}><strong>Fabrics</strong>  <i style={{float: 'right', cursor: 'pointer', color: 'grey', fontSize: '25px' }} className='fa fa-arrow-left' onClick={this.handleClose}></i> </p>
                                            {
                                                revealCollar ?
                                                    <div className='revealAll'>
                                                        <div onClick={this.handleRevealCollar}>
                                                            <img className='collar_image_side' src={Collar1} alt='collar' />
                                                            <p className='tooltiptext'><strong>Ankara <br/>Collar</strong></p>
                                                        </div>
                                                        <div onClick={this.handleWhiteCollar}>
                                                            <img className='collar_image_side2' src={CollarW} alt='collar' />
                                                            <p className='tooltiptext'><strong>White <br/>Collar</strong></p>
                                                        </div>
                                                        {/* <div onClick={this.handleRevealCollar}>
                                                            <img className='collar_image_side' src={Collar1} alt='collar' />
                                                            <p className='tooltiptext'>Black</p>
                                                        </div> */}
                                                    </div> :
                                                    revealShirt ?
                                                     <div className='revealAll'>   
                                                        <div onClick={this.handleReavelShirt}>
                                                            <img className='shirt-side' src={Shirt1} alt='shirt' />
                                                            <p  className='tooltiptext'><strong>Ankara <br/>Plackets</strong></p>
                                                        </div>
                                                        <div onClick={this.handleReavelWhiteShirt}>
                                                            <img className='shirt-side' src={Shirt3} alt='shirt' />
                                                            <p  className='tooltiptext'><strong>White <br/>Plackets</strong></p>
                                                        </div>
                                                      </div>  :
                                                        
                                                        revealSleeves ?
                                                        <div className='revealSleeve'>
                                                        <div onClick={this.handlReavelSleeves}>
                                                            <img className='sleeves-side1' src={Long} alt='shirt' />
                                                            <p  className='tooltiptext'><strong>Ankara <br/>Sleeves</strong></p>
                                                        </div>
                                                        <div style={{marginLeft: '20px'}} onClick={this.handlReavelWhiteSleeves}>
                                                            <img className='sleeves-side1' src={Long} alt='shirt' />
                                                            <p  className='tooltiptext'><strong>White <br/>Sleeves</strong></p>
                                                        </div> 
                                                        
                                                        </div>: null
                                                           
                                            }
                                        </div> : null
                            }
                            <div>
                                <DesignArea WcollarImg={this.state.WcollarImg} collarImg={this.state.collarImg} shirtImg={this.state.shirtImg} sleevesImg={this.state.sleevesImg} cuffImg={this.state.cuffImg} />
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

                            {/* {
                                revealCuff &&
                                <div className='reveal' >
                                    <Cuff changeCuff={this.changeCuff} />
                                </div>
                            } */}

                            <div>
                                <BackDesignArea backcollarImg={this.state.backcollarImg} backshirtImg={this.state.backshirtImg} backsleevesImg={this.state.backsleevesImg} />
                            </div>

                        </main>

                    }
                    {/* BACK VIEW FOR MAIN ENDS HERE */}

                    {
                        btn &&

                        <div className='toggle-btn'>
                            <button className='toggle-btn-front' onClick={this.toggleViewFront}>Front view</button>
                            <button className='toggle-btn-back' onClick={this.toggleViewBack}>Back view</button>
                        </div>

                    }

                    {/*  */}


                </div>

            </div >
        )
    }
}