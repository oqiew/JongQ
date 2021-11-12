import { Avatar, Center, HStack } from 'native-base';
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { ImageConstant } from '../../components/ImageConstant';
import { RouteNames } from '../../routes/RouteNames';
import mainStyle from '../../styles/main.style';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
export class QueueScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: "",
            action: 'service',//service around
            services: [],
            position: { lat: 15.229399, lng: 104.857126 },
        }
    }
    get getgeolocation() {
        return {
            region: {
                latitude: this.state.position.lat,
                longitude: this.state.position.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }
    render() {
        const { service, action } = this.state;
        return (
            <View style={{ flex: 1, flexDirection: "column", alignItems: "center", width: "100%" }}>
                {action === 'service' &&
                    <View style={{ width: '100%', padding: 20, justifyContent: "space-around" }}>
                        <HStack space={4} justifyContent='space-around'>
                            <TouchableOpacity
                                onPress={() => this.setState({ service: 'baber', action: 'around' })}>
                                <Avatar bg="green.500" size={20}>
                                    <Text style={{ color: '#fff', fontSize: 20 }}>ตัดผม</Text>
                                </Avatar>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Avatar bg="yellow.500" size={20}>
                                    <Text style={{ color: '#fff', fontSize: 20 }}>ทำเล็บ</Text>
                                </Avatar>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Avatar bg="red.500" size={20}>
                                    <Text style={{ color: '#fff', fontSize: 20 }}>สปา</Text>
                                </Avatar>
                            </TouchableOpacity>
                        </HStack>
                    </View>}
                {action === 'around' && <View style={{ width: "100%", padding: 20 }}>
                    <View style={[mainStyle.dropshadow, { borderRadius: 10, height: 100, flexDirection: 'row', padding: 10, marginBottom: 10 }]}>
                        <Avatar source={ImageConstant.con_baber1} size={"20"} alt="service shop" ></Avatar>
                        <TouchableOpacity style={{ flexDirection: "column", marginLeft: 10 }}
                            onPress={() => this.props.navigation.navigate(RouteNames.Q)}
                        >
                            <Text style={{ fontSize: 20 }}>ร้านนายสุข</Text>
                            <Text style={{ fontSize: 16 }}>ตั้งอยูที่</Text>
                            <Text style={{ fontSize: 16 }}>ห่างจากคุณ 5 km</Text>

                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 16 }}>5 star</Text>
                        </View>
                    </View>
                    <View style={[mainStyle.dropshadow, {
                        borderRadius: 10, height: 100, flexDirection: 'row', padding: 10, marginBottom: 10
                    }]}>

                        <Avatar source={ImageConstant.con_baber2} size={"20"} alt="service shop"></Avatar>

                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>baber shop</Text>
                            <Text style={{ fontSize: 16 }}>ตั้งอยูที่</Text>
                            <Text style={{ fontSize: 16 }}>ห่างจากคุณ 10 km</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16 }}>5 star</Text>
                        </View>
                    </View>
                </View>}
                {action === 'map' &&
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        zoomEnabled={true}
                        toolbarEnabled={true}
                        showsUserLocation={true}
                        showsScale={true}
                        zoomTapEnabled={true}
                        zoomControlEnabled={true}
                        {...this.getgeolocation}
                    >
                        <Marker
                            coordinate={{
                                latitude: this.state.position.lat,
                                longitude: this.state.position.lng,
                            }}>


                        </Marker>
                    </MapView>
                }
                <View style={[mainStyle.dropshadow, {
                    height: 65, width: '100%',
                    alignItems: "center",
                    position: "absolute", bottom: 0, padding: 10
                }]}>
                    <HStack space={3}>
                        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}
                            onPress={() => this.setState({ action: 'service' })}
                        >
                            <Text>บริการ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}
                            onPress={() => this.setState({ action: 'around' })}
                        >
                            <Text>ร้านใกล้กับคุณ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}
                            onPress={() => this.setState({ action: 'map' })}
                        >
                            <Text>แผนที่</Text>
                        </TouchableOpacity>
                    </HStack>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default QueueScreen

