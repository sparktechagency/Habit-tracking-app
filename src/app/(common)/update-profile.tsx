import GetImageGallary from '@/src/components/ui/GetImageGallary'
import ProfileBackButton from '@/src/components/ui/ProfileBackButton'
import Wrapper from '@/src/components/Wrapper'
import tw from '@/src/lib/tailwind'
import { storage } from '@/src/utils/localStorage'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function UpdateProfileScreen() {

    const [image, setImage] = useState<string | null>(null);


    const role = storage.getString('role')



    return (
        <View style={tw`bg-primaryBg flex-1`} >
            {/*  */}
            <ProfileBackButton title='Edit Profile' />
            <Wrapper>
                {/* <BackButton title="My profile" /> */}

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={tw`flex-1 justify-between py-2`}>
                        {/* Top Section: Image & Form */}
                        <View style={tw`flex-1 pb-4`}>
                            {/* Profile Image */}
                            <View style={tw`items-center mb-6`}>
                                <View
                                    style={tw`w-20 h-20 rounded-full items-center justify-center`}
                                >
                                    <Image
                                        source={
                                            image
                                                ? { uri: image }
                                                : require('@/assets/images/splash-icon.png')
                                        }
                                        style={tw`w-20 h-20 rounded-full`}
                                    />

                                    <TouchableOpacity>
                                        <View
                                            style={tw`absolute bottom-0 left-2 bg-[#edd500] p-1.5 rounded-full`}
                                        >
                                            <GetImageGallary setImage={setImage} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Form Section */}
                            {
                                role === 'user' ? (
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
                                    </View>
                                ) : (
                                    <View style={tw`flex-col gap-4`}>
                                        {/* Full Name Field */}
                                        <View>
                                            <Text style={tw`text-base text-[#000]  font-montserrat-500 mb-2`}>
                                                Business Name
                                            </Text>
                                            <View
                                                style={tw` border-[1px]  border-gray/60 px-2 py-1 flex-row items-center rounded`}
                                            >
                                                {/* <SvgXml xml={IconsUser} /> */}
                                                <TextInput
                                                    placeholder="Sunshine Cafe"
                                                    placeholderTextColor="#3e3e3f"
                                                    style={tw`flex-1 text-base ml-1`}
                                                />
                                            </View>
                                        </View>

                                        {/* Location Field */}
                                        <View>
                                            <Text style={tw`text-base text-[#000]  font-montserrat-500 mb-2`}>
                                                Category
                                            </Text>
                                            <View
                                                style={tw` border-[1px]  border-gray/60 px-2 py-1 flex-row items-center rounded`}
                                            >
                                                <TextInput
                                                    placeholder="Coffee Shop"
                                                    placeholderTextColor="#3e3e3f"
                                                    style={tw`flex-1 text-base mr-1`}
                                                />
                                                {/* <SvgXml xml={IconsLocation} /> */}
                                            </View>
                                        </View>
                                        {/* Location Field */}
                                        <View>
                                            <Text style={tw`text-base text-[#000]  font-montserrat-500 mb-2`}>
                                                Category
                                            </Text>
                                            <View
                                                style={tw` border-[1px]  border-gray/60 px-2 py-1 flex-row items-center rounded`}
                                            >
                                                <TextInput
                                                    placeholder="Coffee Shop"
                                                    placeholderTextColor="#3e3e3f"
                                                    style={tw`flex-1 text-base mr-1`}
                                                />
                                                {/* <SvgXml xml={IconsLocation} /> */}
                                            </View>
                                        </View>
                                        {/* Location Field */}
                                        <View>
                                            <Text style={tw`text-base text-[#000]  font-montserrat-500 mb-2`}>
                                                Description
                                            </Text>
                                            <View
                                                style={tw` border-[1px]  border-gray/60 px-2 py-1 flex-row items-center rounded`}
                                            >
                                                <TextInput
                                                    placeholder="A cozy café serving specialty coffee and homemade pastries since 2010. We pride ourselves on using locally sourced ingredients."
                                                    placeholderTextColor="#3e3e3f"
                                                    style={tw`flex-1 h-30 text-base mr-1`}
                                                    textAlign='left'
                                                    multiline
                                                    textAlignVertical='top'
                                                />
                                                {/* <SvgXml xml={IconsLocation} /> */}
                                            </View>
                                        </View>
                                        {/* Location Field */}
                                        <View>
                                            <Text style={tw`text-base text-[#000]  font-montserrat-500 mb-2`}>
                                                Address
                                            </Text>
                                            <View
                                                style={tw` border-[1px]  border-gray/60 px-2 py-1 flex-row items-center rounded`}
                                            >
                                                <TextInput
                                                    placeholder="123 Main St, Anyway"
                                                    placeholderTextColor="#3e3e3f"
                                                    style={tw`flex-1 text-base mr-1`}
                                                />
                                                {/* <SvgXml xml={IconsLocation} /> */}
                                            </View>
                                        </View>
                                        {/* Location Field */}
                                        <View>
                                            <Text style={tw`text-base text-[#000]  font-montserrat-500 mb-2`}>
                                                Phone Number
                                            </Text>
                                            <View
                                                style={tw` border-[1px]  border-gray/60 px-2 py-1 flex-row items-center rounded`}
                                            >
                                                <TextInput
                                                    placeholder="(555) 123-4567"
                                                    placeholderTextColor="#3e3e3f"
                                                    style={tw`flex-1 text-base mr-1`}

                                                />
                                                {/* <SvgXml xml={IconsLocation} /> */}
                                            </View>
                                        </View>
                                        {/* Location Field */}
                                        <View>
                                            <Text style={tw`text-base text-[#000]  font-montserrat-500 mb-2`}>
                                                Business Hours
                                            </Text>
                                            <View
                                                style={tw` border-[1px]  border-gray/60 px-2 py-1 flex-row items-center rounded`}
                                            >
                                                <TextInput
                                                    placeholder="Mon-Fri: 7am- 7pm, Sat- Sun: 8 am- 6 pm"
                                                    placeholderTextColor="#3e3e3f"
                                                    style={tw`flex-1 text-base mr-1`}
                                                />
                                                {/* <SvgXml xml={IconsLocation} /> */}
                                            </View>
                                        </View>
                                        {/* Location Field */}

                                    </View>
                                )
                            }
                        </View>

                        {/* Bottom Button */}
                        <View style={tw``}>
                            <TouchableOpacity
                                onPress={() =>
                                    router.push('/(tab)/profile')
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
                </ScrollView>
            </Wrapper>
        </View>
    )
}