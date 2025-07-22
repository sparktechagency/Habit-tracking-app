import { IconsUser } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function RoleScreen() {
    return (
        <ImageBackground
            source={require('@/assets/images/Role-Selection.png')}
            style={tw`w-full h-full`}
            blurRadius={2}
        >
            <View style={tw`flex-1 justify-center items-center px-5`}>
                <Text style={tw`text-center text-yellowGreen text-3xl font-montserrat-700 mb-6`}>
                    Select Your Role
                </Text>

                <View style={tw`w-full`}>
                    {/* === USER CARD (YELLOW) === */}
                    <View style={tw`flex-row p-4 mb-4 rounded-xl bg-yellow-200 border-2 border-yellow-400`}>
                        <View style={tw`w-10 h-10 bg-black rounded-full justify-center items-center mr-4`}>
                            <SvgXml xml={IconsUser} width={24} height={24} />
                        </View>
                        <View style={tw`flex-1`}>
                            <Text style={tw`text-center text-yellowGreen text-3xl font-montserrat-700`}>User</Text>
                            <Text style={tw`mt-1 text-sm text-black`}>
                                I track my habits, join challenges, earn points, and redeem rewards to stay motivated.
                            </Text>
                        </View>
                    </View>

                    {/* === REWARD PARTNER CARD (GRAY) === */}
                    <View style={tw`flex-row p-4 rounded-xl bg-gray-800/60 border border-gray-600`}>
                        <View style={tw`w-10 h-10 bg-black rounded-full justify-center items-center mr-4`}>
                            <SvgXml xml={IconsUser} width={24} height={24} />
                        </View>
                        <View style={tw`flex-1`}>
                            <Text style={tw`text-lg font-bold text-yellow-300`}>Reward Partner</Text>
                            <Text style={tw`mt-1 text-sm text-white`}>
                                I register my business, offer rewards, and track user redemptions to attract and engage customers.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>

    )
}