import { IconsUser, IconsUserGreen } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import { storage } from '@/src/utils/localStorage'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
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
                    {/* === USER CARD === */}
                    <Pressable
                        onPress={() => setSelectedRole('user')}
                        style={tw`${selectedRole === 'user' ? 'bg-yellowGreen/50 border-yellowGreen' : 'bg-blackish/40'} flex-row items-center p-4 mb-4 rounded-xl border-2`}
                    >
                        <View style={tw`w-14 h-14 ${selectedRole === 'user' ? 'bg-yellowGreen' : 'bg-blackish/40'} rounded-full justify-center items-center mr-4`}>
                            <SvgXml xml={selectedRole === 'user' ? IconsUser : IconsUserGreen} width={28} height={28} />
                        </View>
                        <View style={tw`flex-1`}>
                            <Text style={tw`${selectedRole === 'user' ? 'text-blackish' : 'text-yellowGreen'} text-xl font-montserrat-700`}>User</Text>
                            <Text style={tw`font-montserrat-500 text-sm ${selectedRole === 'user' ? 'text-blackish' : 'text-yellowGreen'}`}>
                                I track my habits, join challenges, earn points, and redeem rewards to stay motivated.
                            </Text>
                        </View>
                    </Pressable>

                    {/* === REWARD PARTNER CARD === */}
                    <Pressable
                        onPress={() => setSelectedRole('partner')}
                        style={tw`${selectedRole === 'partner' ? 'bg-yellowGreen/50 border-yellowGreen' : 'bg-blackish/40'} flex-row items-center p-4 mb-4 rounded-xl border-2`}
                    >
                        <View style={tw`w-14 h-14 ${selectedRole === 'partner' ? 'bg-yellowGreen' : 'bg-blackish/40'} rounded-full justify-center items-center mr-4`}>
                            <SvgXml xml={selectedRole === 'partner' ? IconsUser : IconsUserGreen} width={28} height={28} />
                        </View>
                        <View style={tw`flex-1`}>
                            <Text style={tw`${selectedRole === 'partner' ? 'text-blackish' : 'text-yellowGreen'} text-xl font-montserrat-700`}>Reward Partner</Text>
                            <Text style={tw`font-montserrat-500 text-sm ${selectedRole === 'partner' ? 'text-blackish' : 'text-yellowGreen'}`}>
                                I register my business, offer rewards, and track user redemptions to attract and engage customers.
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}
