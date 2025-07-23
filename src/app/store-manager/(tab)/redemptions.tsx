import RedemptionsView from '@/src/components/ui/RedemptionsView'
import Wrapper from '@/src/components/Wrapper'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, View } from 'react-native'

export default function RedemptionsScreen() {
    return (
        <View style={tw`flex-1 bg-primaryBg`}>
            <Wrapper>
                <View style={tw`py-4`}>
                    <Text style={tw`text-blackish font-montserrat-600 text-xl`}>
                        Redemptions
                    </Text>

                    <View style={tw`flex-col gap-2 py-5`}>
                        <View style={tw`flex-row justify-between items-center`}>
                            <Text style={tw`text-blackish font-montserrat-700 text-sm`}>
                                Free Coffee with Purchase
                            </Text>
                            <Text style={tw`text-blackish font-montserrat-600 text-xs bg-blackish/20 px-2 py-1 rounded`}>
                                24 this month
                            </Text>
                        </View>
                        <Text style={tw`text-blackish font-montserrat-600 text-xs`}>
                            Track and manage customer reward redemptions
                        </Text>
                    </View>
                </View>

                {/* Content / List */}
                <View style={tw` flex-1`}>
                    <RedemptionsView />
                </View>
            </Wrapper>
        </View>
    )
}
