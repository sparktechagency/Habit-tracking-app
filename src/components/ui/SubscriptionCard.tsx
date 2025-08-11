import { IconsCloseRed, IconsTickGreen } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const SubscriptionCard = () => {
    return (
        <View style={tw` flex-1 flex-col gap-6 mb-4 `}>
            <View style={tw` flex-1 flex-col gap-6  `}>
                <View>
                    <Text style={tw` text-blackish text-xl font-montserrat-500 `}>Subscription</Text>
                </View>

                <View style={tw`bg-primaryBg border-b-2 flex-col gap-4 border-[#d9d9d9] rounded-xl shadow-md px-4 py-5 `}>
                    <View style={tw`flex-row justify-between items-center `}>
                        <Text style={tw` text-blackish text-lg font-montserrat-700`}>DooGoo</Text>
                        <View style={tw`px-2 py-1 rounded-full bg-[#FFB74C]`}>
                            <Text style={tw`text-sm font-montserrat-500 text-blackish`}>Free Plan</Text>
                        </View>
                    </View>
                    <View style={tw` flex-col gap-2 `}>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Unlimited habits tracking</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Basic challenges</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsCloseRed} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Advanced analytics</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsCloseRed} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Premium rewards</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsCloseRed} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Priority customer support</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsCloseRed} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Customizable habit reminders</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsCloseRed} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Sync across multiple devices</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsCloseRed} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Detailed progress reports</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsCloseRed} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Goal setting with milestones</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsCloseRed} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Access to exclusive community</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsCloseRed} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Unlimited point access</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={tw`bg-blackish py-2 rounded items-center`}>
                        <Text style={tw`text-white  font-montserrat-600`}>Ongoing</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw` flex-1 flex-col gap-6  `}>
                <View style={tw`bg-primaryBg border-b-2 flex-col gap-4 border-[#d9d9d9] rounded-xl shadow-md px-4 py-5 `}>
                    <View style={tw`flex-row justify-between items-center `}>
                        <View style={tw`flex-row items-center `}>
                            <Text style={tw` text-blackish text-lg font-montserrat-700`}>DooGoo</Text>
                            <Text style={tw` text-blackish text-xs font-montserrat-600`}>($29.99)</Text>

                        </View>
                        <View style={tw`px-2 py-1 rounded-full bg-[#FFB74C]`}>
                            <Text style={tw`text-sm font-montserrat-500 text-blackish`}>Premium Member</Text>
                        </View>
                    </View>

                    <View style={tw` flex-col gap-2 `}>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Unlimited habits tracking</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Basic challenges</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Advanced analytics</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Premium rewards</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Priority customer support</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Customizable habit reminders</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Sync across multiple devices</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Detailed progress reports</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Goal setting with milestones</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Access to exclusive community</Text>
                        </View>
                        <View style={tw` flex-row gap-2 `}>
                            <SvgXml xml={IconsTickGreen} />
                            <Text style={tw` text-blackish text-sm font-montserrat-500 `}>Unlimited point access</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/payment-procedure')} style={tw`bg-blackish py-2 rounded items-center`}>
                        <Text style={tw`text-white  font-montserrat-600`}>Select Plan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default SubscriptionCard