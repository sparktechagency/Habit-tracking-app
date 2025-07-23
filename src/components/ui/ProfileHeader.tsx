import { IconsHandler } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const ProfileHeader = () => {
    const [settingView, setSettingView] = useState<boolean>(false);

    return (
        <View style={tw`flex-1 bg-white px-4 pt-5 relative`}>
            {/* Top Header */}
            <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-black text-xl font-montserrat-700`}>My Profile</Text>

                <TouchableOpacity
                    onPress={() => setSettingView(prev => !prev)}
                    hitSlop={10}
                    accessibilityLabel="Open Settings"
                >
                    <SvgXml xml={IconsHandler} width={24} height={24} />
                </TouchableOpacity>
            </View>

            {/* Dropdown Menu */}
            {settingView && (
                <View style={tw`absolute top-16 right-4 bg-white px-4 py-3 rounded-xl shadow-lg z-50`}>
                    <TouchableOpacity
                        style={tw`py-2`}
                        onPress={() => {
                            // handle edit profile
                            setSettingView(false);
                            router.push('/(common)');
                        }}
                    >
                        <Text style={tw`text-blackish text-base font-montserrat-600`}>My Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={tw`py-2`}
                        onPress={() => {
                            // handle change password
                            setSettingView(false);
                            router.push('/(common)/change-password');

                        }}
                    >
                        <Text style={tw`text-blackish text-base font-montserrat-600`}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Profile Info */}
            <View style={tw`mt-6 flex-row items-center`}>
                <Image
                    source={require('@/assets/images/app-icons.png')}
                    style={tw`w-24 h-24 rounded-full bg-[#D9D9D9] mr-4`}
                />

                <View style={tw`flex-1`}>
                    <Text style={tw`text-blackish text-lg font-montserrat-800`}>Lara Croft</Text>
                    <Text style={tw`text-blackish text-xs font-montserrat-600 mt-1`}>Level 5 Habit Hero</Text>
                    <Text style={tw`text-orange-500 text-lg font-montserrat-700 mt-1`}>250 points</Text>
                </View>
            </View>
        </View>
    );
};

export default ProfileHeader;
