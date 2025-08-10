import { IconsLeftSArrowBlack } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import { storage } from '@/src/utils/localStorage'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function RoleScreen() {
    const [selectedRole, setSelectedRole] = useState<'user' | 'partner' | null>(null);

    // local storage set role and navigate to auth screen
    useEffect(() => {
        if (selectedRole) {
            storage.set('role', selectedRole);
            router.push('/(auth)');
        }
    }, [selectedRole]);

    return (

        <View style={tw`flex-1 bg-yellowGreen justify-center items-center px-5`}>

            {/* ----------------- back botton------------------------- */}
            <View style={tw` absolute  top-14 left-8 `}>
                <TouchableOpacity style={tw` `} onPress={() => router.back()} >
                    <SvgXml xml={IconsLeftSArrowBlack} />
                </TouchableOpacity>
            </View>

            <Text style={tw`text-center text-yellowGreen text-3xl font-montserrat-700 mb-6`}>
                Select Your Role
            </Text>

            <View style={tw`w-full`}>
                {/* === USER CARD === */}
                <Pressable
                    onPress={() => setSelectedRole('user')}
                    style={tw`flex-row items-center p-4 mb-4 rounded-xl bg-[#AAAE52] border-2 ${selectedRole === 'user' ? 'border-black' : 'border-transparent'
                        }`}
                >
                    <View style={tw` rounded-full justify-center items-center mr-4`}>
                        <Image source={require('@/assets/images/user-1.png')} style={tw`w-17 h-17`} />
                    </View>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-blackish text-xl font-montserrat-700`}>User</Text>
                        <Text style={tw`font-montserrat-500 text-sm text-[#2C2C2C]`}>
                            I track my habits, join challenges, earn points, and redeem rewards to stay motivated.
                        </Text>
                    </View>
                </Pressable>

                {/* === REWARD PARTNER CARD === */}
                <Pressable
                    onPress={() => setSelectedRole('partner')}
                    style={tw`flex-row items-center p-4 mb-4 rounded-xl bg-[#AAAE52] border-2 ${selectedRole === 'partner' ? 'border-black' : 'border-transparent'
                        }`}
                >
                    <View style={tw`  justify-center items-center mr-4`}>
                        <Image source={require('@/assets/images/user-2.png')} style={tw`w-17 h-17`} />
                    </View>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-blackish text-xl font-montserrat-700`}>Reward Partner</Text>
                        <Text style={tw`font-montserrat-500 text-sm text-[#2C2C2C]`}>
                            I register my business, offer rewards, and track user redemptions to attract and engage customers.
                        </Text>
                    </View>
                </Pressable>
            </View>

        </View>
    )
}
