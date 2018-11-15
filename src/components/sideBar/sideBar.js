import React from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Material from '../materials/materials';
import DesignArea from '../designArea/designArea';
import Collar1 from '../assets/collarButton.png'
import Shirt1 from '../assets/shirtYesBtn.png';
import LongSleeve from '../assets/longSleeves.png';
import MaterialsTypes from '../materialTypes/materialTypes';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            collarImg:  <img style={{width: '45%'}} src={Collar1} alt='collar' />,
            shirtImg:   <img style={{width: '43%'}} src={Shirt1} alt='shirt' />,
            sleevesImg: <img style={{width: '43%'}} src={LongSleeve} alt='sleeves' />,
        };
    }

    //HANDLE ANKARA
    changeAnkara = (ankaraImg) => {

    }

    //HANDLE PLAIN SHIRT
    changePlainShirt = (plainImg) => {

    }

    //HANDLE COLLAR CHANGE
    changeCollar = (collarImg) => {
        this.setState({collarImg, 
            isVisible: this.state.visible
        })
    }
    //HANDLE SHIRTS CHANGING
    changeShirt = (shirtImg) =>{
        this.setState({shirtImg, 
            isVisible: true
        })
    }
    //HANDLE SLEEVES CHANGE
    changeSleeves = (sleevesImg) => {
        this.setState({sleevesImg,
            isVisible: true
        })
    }




    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
            <Container>
            <Row>
                <Col sm="4">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Styles
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Fabrics
            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} style={{ width: '30' }}>
                    {/* <div style={{ width: '30%' }}> */}

                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                            <Material changeCollar={this.changeCollar} changeShirt={this.changeShirt} changeSleeves={this.changeSleeves} />
                            </Col>
                        </Row>
                        
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <MaterialsTypes changeAnkara={this.changeAnkara} changePlainShirt={this.changeWhite} />
                            </Col>
                        </Row>
                    </TabPane>
                    {/* </div> */}
                </TabContent>
                </Col>

                
                <Col sm="8">
                <DesignArea collarImg={this.state.collarImg}  shirtImg={this.state.shirtImg} sleevesImg={this.state.sleevesImg}  />
                </Col>
            </Row>
            </Container>
            </div>
        );
    }
}