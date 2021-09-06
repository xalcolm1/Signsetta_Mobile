import React from 'react';
import { Link } from 'react-router-dom'
import { View, Image, Text, StyleSheet } from 'react-native'
import '../../../index';
import logo from '../../images/mern-logo-1.png';

// import SearchContainer from '../search/search_bar_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <Row className="right menu" >

                    <View className="ui item category search" style={{ border:'none' }}>
                        {/* <View className="search-bar"><SearchContainer /> </View> */}
                    </View>
                        {/* <View class="ui Viewider"></View> */}

                    <View id="aboutus" className="ui item">
                        {/* <Link to={'/about'} className="" style={{ color: 'black' }}> */}
                            <View>
                                {/* <i className="icon users"></i> */}
                                <Text>About Signsetta</Text>
                                
                            </View>
                        {/* </Link> */}
                    </View>

                    <View className="item" >
                        {/* <Link to={'/fingerspelling-game'}> */}
                                
                            <View className="ui button pink"><Text>Fingerspelling Practice</Text></View>
                        {/* </Link> */}
                    </View>

                    <View className="item" >
                        {/* <Link to={'/translator'}><View className="ui button green">Translator</View></Link> */}
                    </View>

                    <View className="item" >
                        {/* <Link to={'/profile'}> */}
                            <View className=" ui button violet">
                                <Text>Profile</Text>                                
                            </View>
                        {/* </Link> */}
                    </View>

                    <View className="item" >
                        {/* <Link to={'/cards'}> */}
                            <View className=" ui button blue">
                                 
                                <Text>Cards</Text>

                            </View>
                        {/* </Link> */}
                    </View>

                    <View className="item" >
                        <View className=" ui button teal" onClick={this.logoutUser}>
                            <Text>Logout</Text>
                        </View>
                    </View>
                </Row>
            );
        } else {
            return (

                <View className="right menu" >

                    <View className="ui item category search" style={{ border: 'none' }}>
                        {/* <View className="search-bar"><SearchContainer /> </View> */}
                    </View>
                    {/* <View class="ui Viewider"></View> */}


                    <View id="aboutus" className="ui item" >{/*remove ui compact menu*/}
                        {/* <Link to={'/about'} style={{ color: 'black' }}> */}
                            <View>
                                <View className="icon users"></View>
                                <Text>About Us</Text>
                            </View>
                        {/* </Link> */}
                    </View>

                    <View className="item" >
                        {/* <Link to={'/translator'}><View className="ui button green">Translator</View></Link> */}
                    </View>

                    <View className="item" >
                        {/* <Link to={'/cards'}> */}
                            <View className=" ui button blue">
                                <Text>Cards</Text>
                                
                            </View>
                        {/* </Link> */}
                    </View>

                    <View className="item" >
                        {/* <Link to={'/login'}><View className=" ui button teal">Login</View></Link> */}
                    </View>
                    <View className="item" >
                        {/* <Link to={'/signup'}><View className="ui button pink">Get Started</View></Link> */}
                    </View>
                </View>
            );
        }
    }

    render() {

        return (
            <View className="ui stackable menu">
                {/* <Link to="/"> */}
                    <Image src={logo} className="image" alt="logo" />
                {/* </Link> */}
                { this.getLinks()}

            </View>

        )


    }
}

export default NavBar;