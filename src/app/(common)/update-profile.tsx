import ProfileBackButton from '@/src/components/ui/ProfileBackButton'
import Wrapper from '@/src/components/Wrapper'
import tw from '@/src/lib/tailwind'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function UpdateProfileScreen() {
    return (
        <View style={tw`bg-primaryBg flex-1`} >
            {/*  */}
            <ProfileBackButton title='Update Profile' />
            <Wrapper>
                {/* <BackButton title="My profile" /> */}

                <View style={tw`flex-1 justify-between py-2`}>
                    {/* Top Section: Image & Form */}
                    <View style={tw`flex-1 pb-4`}>
                        {/* Profile Image */}
                        <View style={tw`items-center mb-6`}>
                            <View
                                style={tw`w-20 h-20 rounded-full bg-gray-300 items-center justify-center`}
                            >
                                <Image
                                    source={require("@/assets/images/splash-icon.png")}
                                    style={tw`w-20 h-20 rounded-full`}
                                />
                                <TouchableOpacity>
                                    <View
                                        style={tw`absolute bottom-0 left-2 bg-blue-500 p-2 rounded-full`}
                                    >
                                        <Feather name="camera" size={18} color="white" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Form Section */}
                        <View style={tw`flex-col gap-4`}>
                            {/* Full Name Field */}
                            <View>
                                <Text style={tw`text-base text-[#000]  font-montserrat-500 mb-2`}>
                                    Full Name
                                </Text>
                                <View
                                    style={tw` border-[1px]  border-gray/60 px-2 py-1 flex-row items-center rounded`}
                                >
                                    {/* <SvgXml xml={IconsUser} /> */}
                                    <TextInput
                                        placeholder="Enter your full name"
                                        placeholderTextColor="#3e3e3f"
                                        style={tw`flex-1 text-base ml-1`}
                                    />
                                </View>
                            </View>

                            {/* Location Field */}
                            <View>
                                <Text style={tw`text-base text-[#000]  font-montserrat-500 mb-2`}>
                                    Location
                                </Text>
                                <View
                                    style={tw` border-[1px]  border-gray/60 px-2 py-1 flex-row items-center rounded`}
                                >
                                    <TextInput
                                        placeholder="Enter your Address"
                                        placeholderTextColor="#3e3e3f"
                                        style={tw`flex-1 text-base mr-1`}
                                    />
                                    {/* <SvgXml xml={IconsLocation} /> */}
                                </View>
                            </View>

                            {/* Change Password */}
                            <TouchableOpacity
                            //   onPress={() =>
                            //     router.push({
                            //       pathname: "/change-password/[id]",
                            //       params: { id: "123" },
                            //     })
                            //   }
                            >
                                <Text
                                    style={tw`text-sm text-[#003B73] underline font-roboto-700 text-right`}
                                >
                                    Change password
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Bottom Button */}
                    <View style={tw``}>
                        <TouchableOpacity
                            onPress={() =>
                                router.push('/(common)/update-profile')
                            }
                            style={tw`bg-blackish w-full p-2 rounded flex-row justify-center items-center gap-2`}
                        >
                            {/* <SvgXml xml={IconsEdit} /> */}
                            <Text style={tw`text-center text-white `}>
                                Save Changes
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Wrapper>
        </View>
    )
}