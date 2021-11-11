import { VStack, View, Input, Avatar } from 'native-base'
import React, { Component } from 'react'
import IconAnt from 'react-native-vector-icons/AntDesign';
import { color } from '../../colors/colorList';
import { ImageConstant } from '../../components/ImageConstant';
import mainStyle from '../../styles/main.style';
import { Text } from 'react-native';
export class FavoritesScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", padding: 20 }}>
                <View width="100%" alignItems="center"
                    style={{
                        backgroundColor: color.softGrey2, borderRadius: 10,
                        borderWidth: 0, height: 40, marginBottom: 10
                    }}>
                    <Input
                        placeholder="Search"
                        width="100%"
                        InputLeftElement={
                            <IconAnt
                                style={{ marginLeft: 10 }}
                                name="search1"
                            />
                        }
                    />
                    <View style={{ magin: 10, height: 20, width: "80%", borderBottomWidth: 1, borderColor: color.softGrey2 }}>
                    </View>
                </View>

                <View>
                    <View style={[mainStyle.dropshadow, { borderRadius: 10, height: 100, flexDirection: 'row', padding: 10, marginBottom: 10 }]}>
                        <Avatar source={ImageConstant.con_baber1} size={"20"} alt="service shop" ></Avatar>
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>ร้านนายสุข</Text>
                            <Text style={{ fontSize: 16 }}>ใช้บริการเมื่อวันที่</Text>
                            <Text style={{ fontSize: 16 }}>1/11/2564</Text>
                        </View>
                    </View>
                    <View style={[mainStyle.dropshadow, {
                        borderRadius: 10, height: 100, flexDirection: 'row', padding: 10, marginBottom: 10
                    }]}>

                        <Avatar source={ImageConstant.con_baber2} size={"20"} alt="service shop"></Avatar>

                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>baber shop</Text>
                            <Text style={{ fontSize: 16 }}>ใช้บริการเมื่อวันที่</Text>
                            <Text style={{ fontSize: 16 }}>1/11/2564</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default FavoritesScreen
