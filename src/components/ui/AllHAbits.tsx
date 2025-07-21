import { IconFire, IconsTick } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import ProgressBar from './ProgressBar'

const AllHAbits = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 12,
            paddingTop: 10
        }} >
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                // TODO 
                <View key={item} style={tw`bg-white rounded-lg p-3 shadow-md mb-4`} >
                    <View style={tw`flex-col gap-2`}>
                        <View style={tw`flex-col gap-1`}>
                            <View style={tw`flex-row items-center justify-between`}>
                                <Text style={tw`text-blackish font-montserrat-700 text-base`}>Morning Run</Text>
                                <View style={tw`px-2.4 py-1 bg-[#716557] rounded flex-row justify-center items-center gap-2.5`}>
                                    <Text style={tw`text-white text-xs font-semibold font-montserrat-400`}>+15 pts</Text>
                                </View>
                            </View>
                            <View>
                                <View style={tw`flex-row items-center`}>
                                    <Text> <SvgXml xml={IconFire} /></Text>
                                    <Text style={tw`text-xs font-montserrat-300`}>7 days streak</Text>
                                </View>
                            </View>
                        </View>

                        <View style={tw`flex-col gap-2`}>
                            <ProgressBar height={5} progress={item * 10} color={'#D6DF22'} />
                            <View style={tw`flex-row items-center justify-between`}>
                                <View style={tw`w-[30%] px-2.4 py-1 bg-neutral-700 rounded flex-row justify-center items-center gap-2.5`}>
                                    <Text style={tw`text-white text-xs font-semibold font-montserrat-400`}>Processing</Text>
                                </View>
                                <View style={tw`flex-row items-center gap-1`}>
                                    <View style={tw`flex-row items-center gap-1`}>
                                        <Text><SvgXml xml={IconsTick} /></Text>
                                        <Text style={tw`text-xs font-montserrat-300 text-neutral-700`}>9 / 9</Text>
                                    </View>
                                    <Text style={tw`text-xs font-montserrat-300 text-neutral-700`}>%</Text>
                                    <Text style={tw`text-xs font-montserrat-300 text-neutral-700`}>100%</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>

    )
}



export default AllHAbits