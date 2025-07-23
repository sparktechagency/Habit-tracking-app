import MiniTopBar from '@/src/components/ui/MiniTopBar'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function SayOnScreen() {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <View style={tw`flex-1 bg-primaryBg`}>
            <>
                <MiniTopBar Heading={'Say No Tracker'} pageName='say-on' visible={visible} setVisible={setVisible} />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 20
                }} >
                    {[1, 2, 3, 4, 5].map((item) => (
                        // TODO 
                        <View key={item} style={tw`bg-white border-l-4 border-[#BCBDC0] rounded-lg p-3 shadow-md  mb-4`} >
                            <View style={tw`flex-col`}>
                                <View style={tw`flex-col gap-3 `}>
                                    {/*  */}
                                    <View>
                                        <Text style={tw`text-blackish font-montserrat-700 text-base`}>06/01/2025</Text>
                                    </View>
                                    {/*  */}
                                    <View style={tw`flex-col  `}>
                                        <View style={tw` flex-row  items-center gap-1 `}>
                                            <Text style={tw`text-blackish font-montserrat-700 text-base`}>Morning Run :</Text>
                                            <Text style={tw`text-xs font-montserrat-300`}>Extra desert</Text>
                                        </View>
                                        {/*  */}
                                        <View style={tw` flex-row  items-center gap-1`}>
                                            <Text style={tw`text-blackish font-montserrat-700 text-base`}>Reason :</Text>
                                            <Text style={tw`text-xs font-montserrat-300`}>Sticking to my health goals</Text>
                                        </View>
                                    </View>
                                </View>


                                <View style={tw`flex-col items-end gap-2`}>
                                    <View style={tw`flex-row items-center justify-between`}>
                                        <TouchableOpacity style={tw` p-2 bg-neutral-700 rounded flex-row justify-center items-center gap-2.5`}>
                                            <Text style={tw`text-white text-xs font-semibold font-montserrat-400`}>Delete</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </>

        </View>
    )
}