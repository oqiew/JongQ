import React, { Component } from 'react'
import { Container, Text, View, Heading, NativeBaseProvider, Center, Box, Image, Input, Icon, HStack } from 'native-base';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { color } from '../colors/colorList';
import { TouchableOpacity } from 'react-native';
import mainStyle from '../styles/main.style';
import { RouteNams } from '../routes/RouteNames';

export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queue: []
        }
    }
    book() {
        this.props.navigation.navigate(RouteNams.Book)
    }
    render() {
        const { queue } = this.state;
        return (
            <View style={{ flex: 1, flexDirection: "column", alignItems: "center", }}>
                <Image source={require('../assets/logo.png')} alt="logo"
                    style={{ width: 200, height: 200 }}></Image>
                {queue.length === 0 ?
                    <View>
                        <Text style={{ color: color.softText }}>คุณยังไม่มีรายการจองคิว</Text>
                    </View>
                    : <View>
                    </View>}
                {/* <TouchableOpacity
                    style={{backgroundColor:color.mainColor,width:200,height:100,borderRadius:10,margin:10}}>
                    <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor:color.mainColor,width:200,height:100,borderRadius:10,margin:10}}>
                    <Text>จอง</Text>
                </TouchableOpacity> */}
                <View style={[mainStyle.dropshadow, {
                    height: 65, width: '100%',
                    alignItems: "center",
                    position: "absolute", bottom: 0, padding: 10
                }]}>
                    <HStack space={3}>
                        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                            <Text>รายการโปรด</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderRadius: 50, width: 100, height: 100,
                                backgroundColor: color.mainColor, alignItems: "center", justifyContent: 'center', top: -50
                            }}
                            onPress={this.book.bind(this)}
                        >
                            <Text style={{ textAlign: "center", color: '#fff', fontSize: 36 }}>จอง</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                            <Text>โปรไฟล์</Text>
                        </TouchableOpacity>
                    </HStack>

                </View>
            </View >

        )
    }
}

export default HomeScreen
