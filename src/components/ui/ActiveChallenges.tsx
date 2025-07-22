import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import JoinChallengeModal from './JoinChallengeModal'
import ProgressBar from './ProgressBar'

const ActiveChallenges = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 12,
            paddingTop: 10
        }} >
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <View key={item} style={tw`bg-white rounded-lg p-3 shadow-md mb-4`}>
                    <View style={tw`flex-col gap-2`}>
                        <View style={tw`flex-col gap-1`}>
                            <View style={tw`flex-row items-center justify-between border-b border-[#A5A5A5] pb-3`}>
                                <Text style={tw`text-blackish font-montserrat-700 text-base  `}>30-Day Fitness Challenge </Text>
                                <View style={tw` px-2.4 py-1 bg-neutral-700 rounded flex-row justify-center items-center gap-2.5`}>
                                    <Text style={tw`text-white text-xs font-semibold font-montserrat-400`}>Active</Text>
                                </View>
                            </View>
                            {/* <View>
                                <View style={tw`flex-row items-center`}>
                                    <Text> <SvgXml xml={IconFire} /></Text>
                                    <Text style={tw`text-xs font-montserrat-300`}>7 days streak</Text>
                                </View>
                            </View> */}
                        </View>

                        <View style={tw`flex-col gap-4`}>
                            <View style={tw`flex-col gap-4`}>
                                <View style={tw`flex-col gap-2`}>
                                    <View style={tw`flex-row  items-center justify-between`}>
                                        <Text style={tw`text-blackish font-montserrat-700 text-sm  `}>Your Progress</Text>
                                        <Text style={tw`text-blackish font-montserrat-600 text-sm  `}>70%</Text>
                                    </View>
                                    <ProgressBar height={6} progress={item * 10} color={'#D6DF22'} />
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
                                <View style={tw`  flex-row items-center`}>
                                    <Image style={tw`  h-8 w-8 rounded-full border `} source={require('@/assets/images/splash-icon.png')} />
                                    <Image style={tw`  h-8 w-8 rounded-full -ml-2 border `} source={require('@/assets/images/splash-icon.png')} />
                                </View>
                            </View>
                            <View style={tw`flex-row items-center justify-between`}>
                                <TouchableOpacity onPress={() => router.push('/view-details')} style={tw` px-2.4 py-2  border rounded-lg flex-row justify-center items-center gap-2.5`}>
                                    <Text style={tw`text-blackish text-xs font-semibold font-montserrat-700`}>View Details</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={tw` px-2.4 py-2  bg-blackish  rounded-lg flex-row justify-center items-center gap-2.5`}>
                                    <Text style={tw` text-xs text-white font-semibold font-montserrat-700`}>Join Challenge</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            ))}

            <JoinChallengeModal modalVisible={modalVisible} setModalVisible={() => setModalVisible(!modalVisible)} />

        </ScrollView>

    )
}


export default ActiveChallenges