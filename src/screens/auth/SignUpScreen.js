import { Input, Icon, FormControl, WarningOutlineIcon, Stack, Button } from 'native-base';
import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { color } from '../../colors/colorList';
import HeaderQ from '../../components/header/HeaderQ';
import { ImageConstant } from '../../components/ImageConstant';
import Loading from '../../components/Loading';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { isEmpty } from '../../components/Method';
//redux
import { setUser } from '../../redux/userReducer';
import { connect } from 'react-redux';
// firebase
import Auth from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';

import { TableNames } from '../../routes/TableNames';
import { RouteNames } from '../../routes/RouteNames';
import { ModelJongQ } from '../../components/Modal';
export class SignUpScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            laoding: false,
            Email: 'test@gmail.com',
            Password: '12345678',
            showPass: false,
            Position: {
                lat: 0,
                lng: 0
            },
            modal: null,
            errorStatus: {},
            error: {}
        }
    }
    onBackHandler = () => {
        this.setState({
            loading: false,
            Email: '',
            Password: '',
            Confirm_password: '',
        })
        this.props.navigation.goBack()
    }
    onRegister() {


        if (this.validation()) {
            const { Email, Password, } = this.state;

            Auth().createUserWithEmailAndPassword(Email, Password)
                .then((auth) => {

                    Firestore().collection(TableNames.Users).add({
                        Email, AuthId: auth.user.uid
                    }).then((user) => {
                        this.props.setUser({ UserId: user.id, Email, AuthId: auth.user.uid });
                        this.setState({
                            modal: <ModelJongQ title="สมัครสมาชิกเสร็จสิ้น" text="ยินดีต้อนรับ จัดการคิวของคุณกันเลย"></ModelJongQ>
                        })
                        this.props.navigation.navigate(RouteNames.Home);
                    }).catch((error) => {
                        // console.log(error)
                        this.setState({
                            modal: <ModelJongQ ModelJongQ title="การเพิ่มข้อมูลผิดพลาด" text={error} ></ModelJongQ >
                        })
                    })
                }).catch((error) => {
                    console.log(error)
                    this.setState({
                        modal: <ModelJongQ ModelJongQ title="การเพิ่มข้อมูลผิดพลาด" text={error + ""} ></ModelJongQ >
                    })
                })
        }
    }
    validation() {
        const { Email, Password, error, errorStatus } = this.state;
        var result = true;
        if (isEmpty(Email)) {
            result = false;
            errorStatus["Email"] = true;
            error["Email"] = "กรุณากรอก email";

        }
        //  else {
        //     const pattern = new RegExp(/^[0-9\b]+$/);
        //     if (pattern.test(Email)) {
        //         result = false;
        //         errorStatus["Email"] = true;
        //         error["Email"] = "กรุณากรอกรูปแบบเบอร์ให้ถูกต้อง";
        //     }
        // }
        if (isEmpty(Password)) {
            result = false;
            errorStatus["Password"] = true;
            error["Password"] = "กรุณากรอกรหัสผ่าน";

        } else if (Password.length < 8) {
            result = false;
            errorStatus["Password"] = true;
            error["Password"] = "กรุณากรอกรหัสผ่านให้ครบ8ตัว";
        }
        this.setState({
            errorStatus,
            error
        })
        return result;
    }

    render() {
        const { loading, showPass } = this.state;
        const { errorStatus, error, modal } = this.state;
        const { Email, Password } = this.state;

        return (
            <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: "center", }}>
                <Loading visible={loading}></Loading>
                <HeaderQ name="สมัครสมาชิก" backHandler={this.onBackHandler}></HeaderQ>
                {modal}
                <Image source={ImageConstant.logo} alt="logo"
                    style={{ width: 250, height: 250 }}></Image>

                <Stack space={3} w="100%" alignItems="center">
                    <FormControl
                        isInvalid={errorStatus.Email}
                        alignItems="center"
                    >
                        <Input size="md" placeholder="example@xxx.com" w="75%"
                            isRequired
                            InputLeftElement={
                                <IconAnt
                                    name="mail"
                                    color={color.softText}
                                    size={25}
                                    style={{ margin: 5 }}
                                />
                            }
                            value={Email}
                            onChangeText={(str) => this.setState({ Email: str })}
                        />
                        <FormControl.ErrorMessage>
                            {error.Email}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl
                        isInvalid={errorStatus.Password}
                        alignItems="center"
                    >
                        <Input size="md" placeholder="รหัสผ่าน" w="75%"
                            type={showPass ? "text" : "password"}
                            isRequired
                            value={Password}
                            onChangeText={(str) => this.setState({ Password: str })}
                            maxLength={8}
                            InputLeftElement={
                                <IconAnt
                                    name="key"
                                    color={color.softText}
                                    size={25}
                                    style={{ margin: 5 }}
                                />
                            }
                            InputRightElement={
                                showPass ? <IconEntypo
                                    name="eye"
                                    color={color.softText}
                                    size={25}
                                    style={{ margin: 5 }}
                                    onPress={() => this.setState({ showPass: !showPass })}
                                /> : <IconEntypo
                                    name="eye-with-line"
                                    color={color.softText}
                                    size={25}
                                    style={{ margin: 5 }}
                                    onPress={() => this.setState({ showPass: !showPass })}
                                />
                            }
                        />
                        <FormControl.ErrorMessage>
                            {error.Password}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <Button backgroundColor={color.mainColor} size="12" w="25%"
                        onPress={this.onRegister.bind(this)}
                    >
                        สมัคร
                    </Button>
                </Stack>




            </View>

        )
    }
}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
});

//used to action (dispatch) in to props
const mapDispatchToProps = {
    setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);