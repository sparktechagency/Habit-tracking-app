import { IconsBackArrow } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const HeadingTop = () => {

    return (
        <View style={tw`relative flex-row justify-center items-center pb-3 pt-8 bg-yellowGreen`}>
            {/* Back Icon - Left Side */}
            <Pressable
                style={tw`absolute bottom-1/2 left-4`}
                onPress={() => {
                    if (router.canGoBack()) {
                        router.back()
                    }
                }}
            >
                <SvgXml xml={IconsBackArrow} />
            </Pressable>

            {/* Centered Content */}
            <View style={tw`items-center`}>
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

                {/* Points */}
                <Text style={tw`text-blackish font-montserrat-600 text-xs`}>
                    50 points
                </Text>
            </View>
        </View>


    )
}

export default HeadingTop