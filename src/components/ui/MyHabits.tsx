import { IconFire, IconsTick } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import ProgressBar from './ProgressBar'

const MyHabits = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 12,
            paddingTop: 10
        }} >
            {[9, 8, 7, 6, 5, 4, 3].map((item) => (
                <View key={item} style={tw`bg-white rounded-lg p-3 shadow-md mb-4`} >

                    <View style={tw`flex-col gap-2`}>
                        {/* // TODO */}
                        {/* ------------- days streak ------------------------- */}
                        <View style={tw`flex-col gap-1`}>
                            <View style={tw`flex-row items-center justify-between`}>
                                <Text style={tw`text-blackish font-montserrat-700 text-base`}>Morning Run</Text>
                                <View style={tw`px-2.4 py-1 bg-[#716557] rounded flex-row justify-center items-center gap-2.5`}>
                                    <Text style={tw`text-white text-xs font-semibold font-montserrat-400`}>+15 pts</Text>
                                </View>
                            </View>
                            <View>
                                <View style={tw`flex-row items-center`}>
                                    <SvgXml xml={IconFire} />
                                    <Text style={tw`text-xs font-montserrat-300`}>7 days streak</Text>
                                </View>
                            </View>
                        </View>

                        <View style={tw`flex-col gap-2`}>
                            {/* --------------------- progress -------------------------- */}
                            <ProgressBar height={5} progress={item * 10} color={'#D6DF22'} />
                            {/* --------------- process ---------------------- */}
                            <View style={tw`flex-row items-center justify-between`}>
                                <View style={tw`w-[30%] px-2.4 py-1 bg-neutral-700 rounded flex-row justify-center items-center gap-2.5`}>
                                    <Text style={tw`text-white text-xs font-semibold font-montserrat-400`}>Processing</Text>
                                </View>
                                {/* --------------rating ----------------------------- */}
                                <View style={tw`flex-row items-center gap-1`}>
                                    <View style={tw`flex-row items-center gap-1`}>
                                        <SvgXml xml={IconsTick} />
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

const styles = StyleSheet.create({
    shadowBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 16,
    },

});

export default MyHabits