import RedemptionsView from '@/src/components/ui/RedemptionsView'
import Wrapper from '@/src/components/Wrapper'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, TextInput, View } from 'react-native'

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
                            <View style={tw`flex-row items-center gap-1 `}>
                                <Text style={tw`text-blackish font-montserrat-6 00 text-sm`}>
                                    Redemption completed
                                </Text>
                                <Text style={tw` text-green-500 rounded-full font-montserrat-700 text-xs `}>
                                    24
                                </Text>
                            </View>
                            <View style={tw`flex-row items-center justify-center gap-1 `}>
                                <Text style={tw`text-blackish font-montserrat-600 text-sm`}>
                                    Redemption pending
                                </Text>
                                <Text style={tw` text-orange-500 rounded-full font-montserrat-700 text-xs`}>
                                    13
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View style={tw``}>
                        <TextInput
                            style={tw`
                        py-3 px-4 font-montserrat-600 border-[1px] border-[rgba(165,165,165,0.5)]
                        rounded-full text-blackish
                    `}
                            placeholder="search by cupoon code"
                            placeholderTextColor="#3e3e3f80"
                            returnKeyType="search"
                            clearButtonMode="while-editing"
                        />
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
