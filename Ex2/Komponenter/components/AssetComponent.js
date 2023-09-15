import React from 'react'
import {Image, View} from 'react-native'

const AssetComponent = ({url}) => {
    return(
        <View>
            <Image source={url} style={{width:200, height:200}} />
        </View>
    )
}

export default AssetComponent;