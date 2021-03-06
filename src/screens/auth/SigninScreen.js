import React, { Component } from 'react'
import { Container, Text, View, Heading, NativeBaseProvider, Center, Box, Image, Input, Icon } from 'native-base';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { color } from '../../colors/colorList';
import { TouchableOpacity } from 'react-native';
import { RouteNames } from '../../routes/RouteNames';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from 'react-native-google-signin';
import { ImageConstant } from '../../components/ImageConstant';
export class SignInScreen extends Component {
    constructor(props) {
        super(props);

    }

    SignInNumberPhone() {
        console.log(this.props)
        this.props.navigation.navigate(RouteNames.Home);
    }
    google_signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            setloggedIn(true);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: "center", }}>
                <Image source={ImageConstant.logo} alt="logo"
                    style={{ width: 250, height: 250 }}></Image>

                <Text style={{ margin: 5, fontSize: 15, color: color.softText, top: -50 }}>จัดการคิวของคุณ ให้สะดวกและง่าย ตามใจคุณ </Text>

                {/* <View style={{ margin: 5, width: 250, }} >
                    <IconAnt.Button
                        name="facebook-square"
                        backgroundColor="#3b5998"
                        style={{ justifyContent: 'center' }}
                        onPress={() => console.log('test')}
                    >
                        log in with facebook
                    </IconAnt.Button>
                </View>
                <View style={{ margin: 5, width: 250, }} >
                    <IconAnt.Button
                        name="googleplus"
                        backgroundColor="#c94536"
                        style={{ justifyContent: 'center' }}
                        onPress={() => console.log('test')}
                    >
                        log in with google
                    </IconAnt.Button>
                </View> */}
                <View style={{ margin: 5, width: 250, }}>
                    <IconAnt.Button
                        name="phone"
                        backgroundColor="#75c7af"
                        style={{ justifyContent: 'center' }}
                        onPress={this.SignInNumberPhone.bind(this)}
                    >
                        log in with number phone
                    </IconAnt.Button>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                    <View style={{ flex: 1, height: 0.5, backgroundColor: color.softGrey }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center', color: color.softGrey }}>หรือ</Text>
                    </View>
                    <View style={{ flex: 1, height: 0.5, backgroundColor: color.softGrey }} />
                </View>
                <TouchableOpacity
                    style={{ height: 30 }}
                    onPress={() => this.props.navigation.navigate(RouteNames.SignUp)}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: '#0080ff' }} >สมัครสมาชิก</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ height: 30 }}
                    onPress={() => this.props.navigation.navigate(RouteNames.ServicePovider)}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: '#0080ff' }} >ร้าน</Text>

                </TouchableOpacity>

            </View>

        )
    }
}

export default SignInScreen
