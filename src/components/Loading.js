import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import { color } from '../colors/colorList';


const Loading = ({ visible }) => {
    return (
        <Spinner
            visible={visible}
            animation={'fade'}
            color={color.mainColor}
            overlayColor={'rgba(255, 255, 255, 0.5)'}
            cancelable={false}
            textContent={'loading'}
            textStyle={{
                color: Theme.Main_loading,
                fontSize: 32, fontWeight: 'normal'
            }} />
    )
}

export default Loading