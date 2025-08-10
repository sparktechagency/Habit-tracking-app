import { IconsInviteCancle } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import SharedHabits from './SharedHabits'

const Friendsuggestions = () => {
    return (<View style={tw`  flex-col gap-2 `}>


        <View style={tw` flex-row  items-center justify-between `}>
            <Text style={tw`text-base text-blackText font-montserrat-700`}>Friend suggestions</Text>
            <TouchableOpacity style={tw` px-3 py-1  bg-blackish  rounded-lg flex-row justify-center items-center gap-2.5`}>
                <Text style={tw`text-sm text-white font-montserrat-600`} >View All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 15
        }} >

            <View style={tw` flex-row gap-4 `}>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <View key={index} style={tw` flex-row gap-2 `}>
                        <View style={tw`  relative  border-2 flex-col gap-2 items-center px-8 py-5 rounded-2xl `}>
                            <View style={tw` absolute right-2 top-5 `}>
                                <SvgXml xml={IconsInviteCancle} width={15} height={15} />
                            </View>
                            <Image source={require('@/assets/images/user-1.png')} style={tw`w-13 h-13`} />
                            <Text style={tw`text-base text-blackText font-montserrat-600`}>Jacky</Text>
                            <SharedHabits />
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    </View>

    )
}

export default Friendsuggestions