


import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ConModal from './ConModal'
import ProgressBar from './ProgressBar'
import SharedHabits from './SharedHabits'

const CompletedChallenges = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [onSave, setOnSave] = useState<string>("")

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 12,
            paddingTop: 10
        }} >
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <View key={item} style={tw`bg-white border-l-4 border-[#BCBDC0] rounded-lg p-3 shadow-md mb-4`} >
                    <View style={tw`flex-col gap-2`}>
                        <View style={tw`flex-col gap-1`}>
                            <View style={tw`flex-row items-center justify-between `}>
                                <Text style={tw`text-blackish font-montserrat-700 text-base  `}>30-Day Fitness Challenge </Text>
                                <View style={tw` px-2.4 py-1 bg-neutral-700 rounded flex-row justify-center items-center gap-2.5`}>
                                    <Text style={tw`text-white text-xs font-semibold font-montserrat-400`}>Active</Text>
                                </View>
                            </View>
                            <View style={tw`flex-col gap-1 border-b border-[#A5A5A5] pb-3`}>
                                <Text style={tw`text-xs font-montserrat-400`}>(Sunshine Cafe)</Text>
                                <Text style={tw`text-xs font-montserrat-400`}>Enjoy a free coffee when you redeem your reward points.</Text>
                            </View>
                        </View>

                        <View style={tw`flex-col gap-4`}>
                            <View style={tw`flex-col gap-4`}>
                                <View style={tw`flex-col gap-2`}>
                                    <View style={tw`flex-row  items-center justify-between`}>
                                        <Text style={tw`text-blackish font-montserrat-700 text-sm  `}>Your Progress</Text>
                                        <Text style={tw`text-blackish font-montserrat-600 text-sm  `}>70%</Text>
                                    </View>
                                    <ProgressBar height={6} progress={10 * 10} color={'#D6DF22'} />
                                </View>
                                <View style={tw`flex-col gap-2`}>
                                    <View style={tw`flex-row  items-center justify-between`}>
                                        <Text style={tw`text-blackish font-montserrat-700 text-sm  `}>Group Progress</Text>
                                        <Text style={tw`text-blackish font-montserrat-600 text-sm  `}>60%</Text>
                                    </View>
                                    <ProgressBar height={6} progress={item * 9} color={'#3E3E3F'} />
                                </View>
                            </View>
                            <View style={tw`  flex-row items-center  gap-2.5`}>
                                <Text style={tw`text-blackish text-xs font-semibold font-montserrat-600`}>Participants: </Text>
                                <TouchableOpacity onPress={() => setVisible(!visible)} style={tw`  flex-row items-center `}>
                                    <Image style={tw`  h-8 w-8 rounded-full border `} source={require('@/assets/images/splash-icon.png')} />
                                    <Image style={tw`  h-8 w-8 rounded-full -ml-2 border `} source={require('@/assets/images/splash-icon.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={tw`flex-row items-center justify-between`}>
                                <TouchableOpacity onPress={() => router?.push('/view-details/view-details-log-progress')} style={tw` px-2.4 py-2  border rounded-lg flex-row justify-center items-center gap-2.5`}>
                                    <Text style={tw`text-blackish text-xs font-semibold font-montserrat-700`}>Log Progress</Text>
                                </TouchableOpacity>

                                {/*  */}
                                <SharedHabits />
                            </View>
                        </View>
                    </View>
                </View>
            ))}
            <ConModal prors='ativeChallange' visible={visible} onClose={() => setVisible(!visible)} />


        </ScrollView>

    )
}


export default CompletedChallenges