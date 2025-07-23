import ProfileBackButton from '@/src/components/ui/ProfileBackButton'
import Wrapper from '@/src/components/Wrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function MyProfile() {
    const image: boolean = true
    return (
        <View style={tw` flex-1 bg-primaryBg  `} >
            <ProfileBackButton title='My Profile' />
            <Wrapper>


                <View style={tw` flex-1 bg-primaryBg  flex-col justify-between pb-2 `}>
                    <View style={tw`  `}>
                        <View style={tw`items-center `}>
                            {/* Profile Image */}
                            {image ? (
                                <Image
                                    source={require("@/assets/images/splash-icon.png")}
                                    style={tw`w-20 h-20 rounded-full`}
                                />
                            ) : (
                                <View
                                    style={tw`w-20 h-20 rounded-full bg-gray-300 items-center justify-center`}
                                >
                                    <Image
                                        source={require("@/assets/images/splash-icon.png")}
                                        style={tw`w-20 h-20 rounded-full`}
                                    />
                                </View>
                            )}



                            {/* Custom Modal for options */}

                            <View style={tw` w-full flex-row  justify-between mt-6 `}>
                                {/* fd */}
                                <View style={tw` flex-col gap-2 `}>
                                    <Text
                                        style={tw` text-blackish  font-montserrat-600  text-base `}
                                    >
                                        Full Name :
                                    </Text>
                                    <Text
                                        style={tw` text-blackish  font-montserrat-600  text-base `}
                                    >
                                        Email:
                                    </Text>
                                    <Text
                                        style={tw` text-blackish   font-montserrat-600 text-base `}
                                    >
                                        Location:
                                    </Text>
                                </View>
                                {/* fd */}
                                <View style={tw` flex-col gap-2 `}>
                                    <Text style={tw` text-title_color  font-montserrat-700  text-base `}>
                                        Lara Croft
                                    </Text>
                                    <Text style={tw` text-title_color  font-montserrat-700  text-base `}>
                                        contact@sunshinecafe
                                    </Text>
                                    <Text style={tw` text-title_color  font-montserrat-700  text-base `}>
                                        contact@sunshinecafe
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={tw``}>
                        <TouchableOpacity
                            onPress={() =>
                                router.push('/(common)/update-profile')
                            }
                            style={tw`bg-blackish w-full p-2 rounded flex-row justify-center items-center gap-2`}
                        >
                            {/* <SvgXml xml={IconsEdit} /> */}
                            <Text style={tw`text-center text-white `}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Wrapper>
        </View>
    )
}