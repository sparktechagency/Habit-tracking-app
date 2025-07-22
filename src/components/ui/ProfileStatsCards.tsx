import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, View } from 'react-native'

const ProfileStatsCards = () => {
    return (
        <View>
            <View style={tw`flex-row gap-4  justify-around flex-wrap  `}>
                <View style={tw`flex-col gap-5  justify-around flex-wrap `} >
                    <View style={tw`bg-[#FCFCFC] p-8 border-b-4 border-[#d9d9d9] shadow-md rounded-xl gap-2`}>
                        <Text style={tw` text-blackish text-xl font-montserrat-600 text-center`}>3</Text>
                        <Text style={tw` text-blackish text-base font-montserrat-500 text-center`}>Total Habits</Text>
                    </View>
                    <View style={tw` bg-[#FCFCFC] p-8 border-b-4 border-[#d9d9d9] shadow-md rounded-xl gap-2`}>
                        <Text style={tw` text-blackish text-xl font-montserrat-600 text-center`}>10</Text>
                        <Text style={tw` text-blackish text-base font-montserrat-500 text-center`}>Completed</Text>
                    </View>

                </View>
                <View style={tw`flex-col gap-5  justify-around flex-wrap `}>
                    <View style={tw`bg-[#FCFCFC] p-8 border-b-4 border-[#d9d9d9] shadow-md rounded-xl gap-2`}>
                        <Text style={tw` text-blackish text-xl font-montserrat-600 text-center`}>7</Text>
                        <Text style={tw` text-blackish text-base font-montserrat-500 text-center`}>Day Streak</Text>
                    </View>
                    <View style={tw` bg-[#FCFCFC] p-8 border-b-4 border-[#d9d9d9] shadow-md rounded-xl gap-2   `}>
                        <Text style={tw` text-blackish text-xl font-montserrat-600 text-center`}>71%</Text>
                        <Text style={tw` text-blackish text-base font-montserrat-500 text-center`}>Success Rate</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileStatsCards