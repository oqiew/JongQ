import { Avatar, ScrollView, VStack, HStack, Text, Icon, Divider, Button } from 'native-base'
import React, { Component } from 'react'
import { View, } from 'react-native'
import { color } from '../../colors/colorList'
import { ImageConstant } from '../../components/ImageConstant'
import mainStyle from '../../styles/main.style'
import IconAnt from 'react-native-vector-icons/AntDesign';

export class ProfileNormalScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: color.mainColor, }}>
                <IconAnt name="arrowleft" color="#fff" size={22.2}
                    onPress={() => this.props.navigation.goBack()}
                    style={{ marginLeft: 15, marginTop: 13 }} ></IconAnt>
                <View style={[{
                    marginTop: 100, backgroundColor: '#fff',
                    display: 'flex',
                    minHeight: 600,
                    borderRadius: 20,
                }, mainStyle.dropshadow]}>

                    <View style={{ alignItems: 'center', top: -50 }}>
                        <Avatar source={ImageConstant.con_user} alt="user    "
                            s size={"32"}></Avatar>
                    </View>

                    <View style={{ top: -40, padding: 20, alignItems: "center" }}>
                        <HStack space={2} alignItems="center">
                            {/* title profile*/}
                            <View>
                                <Text style={{ textAlign: 'right' }}>ชื่อ : </Text>
                                <Text style={{ textAlign: 'right' }}>นามสกุล : </Text>
                                <Text style={{ textAlign: 'right' }}>เพศ : </Text>
                                <Text style={{ textAlign: 'right' }}>อายุ : </Text>
                                <Text style={{ textAlign: 'right' }}>เบอร์โทรศัพท์ : </Text>
                                <Text style={{ textAlign: 'right' }}>ที่อยู่ : </Text>
                                <Text style={{ textAlign: 'right' }}>ตำบล : </Text>
                                <Text style={{ textAlign: 'right' }}>อำเภอ : </Text>
                                <Text style={{ textAlign: 'right' }}>จังหวัด : </Text>
                                <Text style={{ textAlign: 'right' }}>รหัสไปรษณี : </Text>

                            </View>
                            {/* value profile */}
                            <View>
                                <Text style={{ textAlign: 'left' }}>สันติ</Text>
                                <Text style={{ textAlign: 'left' }}>บาเบอร์</Text>
                                <Text style={{ textAlign: 'left' }}>ชาย </Text>
                                <Text style={{ textAlign: 'left' }}>27</Text>
                                <Text style={{ textAlign: 'left' }}>999-9999-999</Text>
                                <Text style={{ textAlign: 'left' }}>111/1</Text>
                                <Text style={{ textAlign: 'left' }}>วารินชำราบ</Text>
                                <Text style={{ textAlign: 'left' }}>วารินชำราบ</Text>
                                <Text style={{ textAlign: 'left' }}>อุบลราชธาน</Text>
                                <Text style={{ textAlign: 'left' }}>49130</Text>
                            </View>
                        </HStack>

                        <Button colorScheme="danger" size="lg" style={{ marginTop: 10 }}>ออกจากระบบ</Button>
                    </View>

                </View>
            </ScrollView >
        )
    }
}

export default ProfileNormalScreen
