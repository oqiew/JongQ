import React, { Component } from 'react'
import { Container, Heading, NativeBaseProvider, Center, Box, Image, Input, Icon, HStack, ScrollView } from 'native-base';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { color } from '../../colors/colorList';
import { TouchableOpacity, Text, View } from 'react-native';
import mainStyle from '../../styles/main.style';
import { RouteNames } from '../../routes/RouteNames';
import { ImageConstant } from '../../components/ImageConstant';

export class ServicePoviderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queue: [
                {
                    Q: 1,
                    Time: "13:00",
                    ServiceProvider: 'นายA',
                    color: '#ff8080'
                },
                {
                    Q: 2,
                    Time: "15:00",
                    ServiceProvider: 'นายB',
                    color: '#ffff80'
                },
                {
                    Q: 3,
                    Time: "17:00",
                    ServiceProvider: 'นายC',
                    color: '#80ff80'
                },

            ]
        }

    }
    Q() {
        this.props.navigation.navigate(RouteNames.Queue)
    }
    render() {
        const { queue } = this.state;
        return (
            <View style={{ flex: 1, flexDirection: "column", alignItems: "center", width: "100%" }}>
                {queue.length === 0 ?
                    <View style={{ flex: 1, alignItems: "center", height: "100%", justifyContent: "center" }}>
                        <Image source={ImageConstant.waiting} alt="wait" style={{ width: 150, height: 150, marginBottom: 10 }}></Image>
                        <Text style={{ color: color.softText, fontSize: 20 }}>คุณยังไม่มีรายการจองคิว</Text>
                    </View>
                    : <>
                        <View style={[{
                            height: 100, marginTop: 20,
                            padding: 10,
                            backgroundColor: '#fff',
                            flexDirection: 'column',
                        },
                        mainStyle.dropshadow2]}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{ fontSize: 26, color: color.softText }}>กำลังให้บริการนาย O</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{ fontSize: 40, color: color.softText }}>00:10</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 20, color: color.softText }}></Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 3, borderBottomColor: color.softGrey, width: "80%", margin: 10 }}>

                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            {queue.map((element, i) =>
                                <View key={i} style={[{
                                    height: 80, marginBottom: 10,
                                    padding: 10,
                                    flexDirection: 'row',
                                    backgroundColor: '#fff',
                                    borderRightColor: element.color, borderRightWidth: 40,
                                },
                                mainStyle.dropshadow2]}>
                                    <View style={{
                                        alignItems: 'center', borderRightColor: element.color, borderRightWidth: 5,
                                        marginRight: 10,
                                        justifyContent: 'center', width: 50
                                    }}>
                                        <Text style={{ fontSize: 50, color: color.softText }}>{element.Q}</Text>
                                    </View>
                                    <View style={{
                                        alignItems: 'center', borderRightColor: element.color, borderRightWidth: 5,
                                        marginRight: 10,
                                        justifyContent: 'center', width: 100
                                    }}>
                                        <Text style={{ fontSize: 30, color: color.softText }}>{element.Time}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ fontSize: 20, color: color.softText }}>{element.ServiceProvider}</Text>
                                    </View>
                                </View>
                            )}


                        </ScrollView>
                    </>


                }

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
                        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}
                            onPress={() => this.props.navigation.navigate(RouteNames.Favorites)}
                        >
                            <Text>รายการโปรด</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderRadius: 50, width: 100, height: 100, borderWidth: 5, borderColor: color.mainColor,
                                backgroundColor: "#fff",
                                alignItems: "center", justifyContent: 'center', top: -50
                            }}
                            onPress={this.Q.bind(this)}
                        >

                            {/* <Image source={ImageConstant.} alt="logo"
                                style={{ width: 100, height: 100 }}></Image> */}


                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}
                            onPress={() => this.props.navigation.navigate(RouteNames.ProfileNormal)}
                        >
                            <Text>โปรไฟล์</Text>
                        </TouchableOpacity>
                    </HStack>

                </View>
            </View >

        )
    }
}

export default ServicePoviderScreen