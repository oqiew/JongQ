import React, { Component } from 'react'
import { Container, Text, View, Heading, NativeBaseProvider, Center, Box, Image, Input, Icon } from 'native-base';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { color } from '../../colors/colorList';
import { TouchableOpacity } from 'react-native';
import { RouteNams } from '../../routes/RouteNames';

export class SigninScreen extends Component {

    SignInGuest() {
        // console.log(this.props)
        this.props.navigation.navigate(RouteNams.Home);
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: "center", top: -100 }}>
                <Image source={require('../../assets/logo.png')} alt="logo"
                    style={{ width: 200, height: 200 }}></Image>

                <Text style={{ margin: 5, fontSize: 15, color: color.softText, top: -50 }}>จัดการคิวของคุณ ให้สะดวกและง่าย ตามใจคุณ </Text>

                <View style={{ margin: 5, width: 250, }} >
                    <IconAnt.Button
                        name="user"
                        backgroundColor="#353535"
                        style={{ justifyContent: 'center' }}
                        onPress={this.SignInGuest.bind(this)}
                    >
                        guest login
                    </IconAnt.Button>
                </View>

                <View style={{ margin: 5, width: 250, }} >
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
                </View>
                <View style={{ margin: 5, width: 250, }}>
                    <IconAnt.Button
                        name="phone"
                        backgroundColor="#75c7af"
                        style={{ justifyContent: 'center' }}
                        onPress={() => console.log('test')}
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
                <TouchableOpacity onPress={() => console.log('test')}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#0080ff' }} >สมัครสมาชิก</Text>

                </TouchableOpacity>

            </View>

        )
    }
}

export default SigninScreen