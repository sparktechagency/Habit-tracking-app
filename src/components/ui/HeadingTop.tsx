import tw from '@/src/lib/tailwind'
import React from 'react'
import { Image, Text, View } from 'react-native'

const HeadingTop = () => {

    return (
        <View style={tw` items-center pb-3 pt-8 bg-yellowGreen `}>

            {/* Logo + App name */}
            <View style={tw`flex-row items-center justify-center`}>
                <Image
                    style={tw`w-10 h-10`}
                    source={require('@/assets/images/splash-icon.png')}
                />
                <Text style={tw`text-blackish font-montserrat-600 text-3xl`}>
                    DooGoo
                </Text>
            </View>

            {/* Points--------------- */}
            <Text style={tw`text-blackish font-montserrat-600 text-xs`}>
                50 points
            </Text>
        </View>
    )
}

export default HeadingTop