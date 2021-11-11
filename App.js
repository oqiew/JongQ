import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StackSignInActive, StackSignOut } from './src/navigations/NavigationStack'
import { NativeBaseProvider } from 'native-base';

//redux
import { setUser } from './src/redux/userReducer';
import { connect } from 'react-redux';

// firebase
import Auth from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';
import { TableNames } from './src/routes/TableNames';
import { isEmpty } from './src/components/Method';
import Loading from './src/components/Loading';

export class App extends Component {
  constructor(props) {
    super(props)
    this.tbUsers = Firestore().collection(TableNames.Users);
    this.state = {
      isSignIn: false,
      loading: true
    }

    Auth().onAuthStateChanged(user => {
      if (user) {
        // console.log('user login uid', user.uid)
        this.getUser(user.uid)
      } else {
        this.props.setUser({});
      }
    })
  }

  getUser = async (id) => {
    await this.tbUsers.where('AuthId', '==', id).onSnapshot((query) => {
      const user = [];
      query.forEach((doc) => {
        user.push({ UserId: doc.id, ...doc.data() })
      })
      if (!isEmpty(user[0].AuthId)) {
        this.props.setUser(user[0])
        this.setState({
          isSignIn: true,
          loading: false
        })
      }

    })
  }
  render() {
    const { loading, isSignIn } = this.state;

    return (
      <NativeBaseProvider>
        <Loading visible={loading}></Loading>
        {isSignIn ? <StackSignInActive></StackSignInActive> : <StackSignOut></StackSignOut>}
      </NativeBaseProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);