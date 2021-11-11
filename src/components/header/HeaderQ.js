import React from "react";
import { HStack, Center } from 'native-base';
import { color } from "../../colors/colorList";
import { View, Text, TouchableOpacity } from "react-native";
import IconAnt from 'react-native-vector-icons/AntDesign';

const HeaderQ = ({ name, backHandler, menu }, props) => {

    return (
        <HStack space={3} alignItems="center" shadow={3} style={{
            backgroundColor: color.mainColor,
            height: 60,
            width: '100%',
            top: 0,
            position: "absolute",
            justifyContent: "space-around"
        }}>
            <Center w="10">
                {backHandler !== null &&
                    <TouchableOpacity
                        onPress={backHandler}>
                        <IconAnt name="arrowleft" size={24} color='#fff'></IconAnt>
                    </TouchableOpacity>}
            </Center>
            <Center>
                <Text style={{ textAlign: "center", fontSize: 30, color: '#fff' }}>{name}</Text>
            </Center>
            <Center w="10">
                {/* <Button transparent>
                    <Icon name='menu' />
                </Button> */}

            </Center>
        </HStack>
    )

}

export default HeaderQ