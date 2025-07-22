import tw from '@/src/lib/tailwind'
import React from 'react'
import { Image, Text, View } from 'react-native'

const ProfileHeader = () => {
    return (
        <View style={tw`flex-col gap-5  justify-around flex-wrap pt-3 `}>
            {/* Header */}
            <View style={tw` `}>
                <Text style={tw` text-blackish text-xl font-montserrat-700`}>My Profile</Text>
            </View>

            {/* Profile Section */}
            <View style={tw`flex-row items-center`}>
                <Image
                    source={require('@/assets/images/app-icons.png')}
                    style={tw`w-24 h-24 rounded-full bg-[#D9D9D9] mr-4`}
                />
                <View>
                    <Text style={tw` text-blackish text-lg font-montserrat-800`}>Lara Croft</Text>
                    <Text style={tw` text-blackish text-xs font-montserrat-600`}>Level 5 Habit Hero</Text>
                    <Text style={tw`text-[#FF8C00] text-lg font-montserrat-700`}>250 points</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileHeader