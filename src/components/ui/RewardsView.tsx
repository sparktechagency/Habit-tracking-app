import { IconRewards } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { ScrollView, Switch, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const RewardsView = () => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 12,
            paddingTop: 20
        }} >
            <View>
                {[1, 2, 3, 4].map((item) => (
                    <View key={item} style={tw`bg-primaryBg rounded-lg border-l-4 border-[#d9d9d9] p-4 shadow-md mb-4`}>
                        <View style={tw`flex-row items-center gap-5`}>

                            <View style={tw`bg-[#d9d9d9] h-14 w-14 items-center p-4 justify-center  rounded-lg`} >
                                <SvgXml xml={IconRewards} width={22} height={22} />
                            </View>

                            <View style={tw`flex-col   flex-1`}>
                                <View style={tw`flex-col   justify-between gap-2`}>
                                    <View style={tw`flex-col gap-1  flex-1`}>
                                        <Text style={tw`text-blackish font-montserrat-700 text-sm  `}>Free Coffee with Purchase </Text>
                                        <Text style={tw`text-blackish font-montserrat-600 text-xs  `}>Enjoy a free coffee when you redeem your reward points. Valid Monday-Friday.</Text>
                                    </View>
                                    <View style={tw`flex-row gap-3  flex-1`}>
                                        <Text style={tw`text-blackish font-montserrat-700 text-xs  `}>5 points</Text>
                                        <Text style={tw`text-blackish font-montserrat-600 text-xs  `}>Expires: 12/30/2025</Text>
                                    </View>

                                </View>
                                {/*  */}
                            </View>
                            <View>
                                <Switch
                                    trackColor={{ false: '#767577', true: '#1a8b03' }}
                                    thumbColor={isEnabled ? '#fff' : '#fff'}
                                    ios_backgroundColor="#c2c2c2"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                    </View>
                ))}
                {/* <RedeemModal viewModal={viewModal} setViewModal={setViewModal} /> */}
            </View>
        </ScrollView>
    )
}

export default RewardsView