import { Stack, Input, FormControl, Image, Avatar, Select, CheckIcon, Button } from 'native-base'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { color } from '../../colors/colorList'
import { ImageConstant } from '../../components/ImageConstant'

export class QScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", alignItems: "center", width: "100%", padding: 20 }}>
                <FormControl>
                    <View style={{ alignItems: 'center' }}>
                        <Avatar source={ImageConstant.con_user} size={20}></Avatar>

                    </View>
                    <FormControl.Label>เลือกช่าง</FormControl.Label>
                    <Select
                        minWidth="200"
                        accessibilityLabel="เลือกช่าง"
                        placeholder="เลือกช่าง"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                    >
                        <Select.Item label="ช่าง A" value="ux" />
                        <Select.Item label="ช่าง B" value="web" />
                    </Select>
                    <FormControl.Label>วันที่</FormControl.Label>
                    <Select
                        minWidth="200"
                        accessibilityLabel="เลือกวันที่"
                        placeholder="เลือกวันที่"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                    >
                        <Select.Item label="ช่าง A" value="ux" />
                        <Select.Item label="ช่าง B" value="web" />
                    </Select>
                    <FormControl.Label>เวลา</FormControl.Label>
                    <Select
                        minWidth="200"
                        accessibilityLabel="เลือกเวลา"
                        placeholder="เลือกเวลา"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                    >
                        <Select.Item label="ช่าง A" value="ux" />
                        <Select.Item label="ช่าง B" value="web" />
                    </Select>
                </FormControl>
                <Button backgroundColor={color.mainColor} style={{ marginTop: 10 }} size="12" w="25%"

                >
                    นัดหมาย
                </Button>
            </View>
        )
    }
}

export default QScreen
