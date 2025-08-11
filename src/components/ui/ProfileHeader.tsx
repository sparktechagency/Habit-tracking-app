import { IconsAbout, IconsChangePassword, IconsDataPrivacy, IconsHandler, IconsNotification, IconsProfile, IconsTermsConditionsy } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { storage } from '@/src/utils/localStorage';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Logout from './Logout';

const ProfileHeader = () => {
    const [settingView, setSettingView] = useState<boolean>(false);


    const role = storage.getString('role')

    const [modalVisible, setModalVisible] = React.useState(false);
    const menuItems = [
        { icon: IconsProfile, label: "My Profile", route: "/(common)" },
        { icon: IconsChangePassword, label: "Change Password", route: "/(common)/change-password" },
        { icon: IconsNotification, label: "Notification", route: "/(common)/notification", badge: 40 },
        { icon: IconsAbout, label: "About Us", route: "/(common)/aboutus" },
        { icon: IconsDataPrivacy, label: "Data Privacy", route: "/(common)/dataprivacy" },
        { icon: IconsTermsConditionsy, label: "Terms & Conditions", route: "/(common)/termsandconditions" },
    ];




    return (
        <View style={tw`flex-1 bg-white  pt-5 relative`}>
            {/* Top Header */}
            <View style={tw`flex-row items-center justify-between relative`}>
                <Text style={tw`text-black text-xl font-montserrat-700`}>
                    My Profile
                </Text>

                {/* 3-dot button */}
                <TouchableOpacity
                    onPress={() => setSettingView((prev) => !prev)}
                    hitSlop={10}
                    accessibilityLabel="Open Settings"
                >
                    <SvgXml xml={IconsHandler} width={24} height={24} />
                </TouchableOpacity>

                {/* Dropdown Menu */}
                {settingView && (
                    <View style={tw`absolute top-10 right-0 z-50 bg-white rounded-lg shadow-lg`}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={tw`py-3 px-5`}
                                onPress={() => {
                                    setSettingView(false);
                                    router.push(item?.route)
                                }}
                            >
                                <View style={tw`flex-row items-cente gap-1r`}>
                                    <SvgXml xml={item.icon} width={24} height={24} style={tw`relative`} />
                                    {item?.badge && (
                                        <Text
                                            style={tw`absolute -top-2  -left-2
                                                 bg-yellowGreen w-6 h-6 rounded-full text-black text-sm text-center leading-6`}
                                        >
                                            {item.badge}
                                        </Text>
                                    )}
                                    <Text style={tw`text-black text-sm`}>{item.label}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                        <Logout setSettingView={() => setSettingView(true)} />
                    </View>
                )}

            </View>



            {/* Profile Info */}
            <View style={tw`mt-6 flex-row items-center`}>
                <Image
                    source={require('@/assets/images/app-icons.png')}
                    style={tw`w-24 h-24 rounded-full bg-[#D9D9D9] mr-4`}
                />

                <View style={tw`flex-1`}>
                    <Text style={tw`text-blackish text-lg font-montserrat-800`}>Lara Croft</Text>
                    {
                        role === 'user' && <View>
                            <Text style={tw`text-blackish text-xs font-montserrat-600 mt-1`}>Level 5 Habit Hero</Text>
                            <Text style={tw`text-orange-500 text-lg font-montserrat-700 mt-1`}>250 points</Text>
                        </View>

                    }
                    {
                        role === 'partner' && <View>
                            <Text style={tw`text-blackish text-xs font-montserrat-600 mt-1`}>Coffee Shop</Text>
                        </View>
                    }
                </View>

            </View>
            <View style={tw`flex-1`}>

                {
                    role === 'partner' && <View>
                        <View style={tw`flex-col gap-1 py-6`}>
                            <Text style={tw`text-blackish text-lg font-montserrat-800`}>Sunshine Cafe</Text>
                            <Text style={tw`text-blackish text-xs font-montserrat-600 mt-1`}>A cozy café serving specialty coffee and homemade pastries since 2010. We pride ourselves on using locally sourced ingredients.</Text>

                        </View>
                        <View>
                            <Text style={tw`text-blackish text-lg font-montserrat-800`}>About Us</Text>

                            <View style={tw`flex-col  `}>
                                <View style={tw` flex-row  items-center gap-1 `}>
                                    <Text style={tw`text-blackish font-montserrat-700 text-base`}>Phone : </Text>
                                    <Text style={tw`text-xs font-montserrat-300`}> (555) 123-4567</Text>
                                </View>
                                {/*  */}
                                <View style={tw` flex-row  items-center gap-1`}>
                                    <Text style={tw`text-blackish font-montserrat-700 text-base`}>Email :</Text>
                                    <Text style={tw`text-xs font-montserrat-300`}>contact@sunshinecafe.com</Text>
                                </View>
                                {/*  */}
                                <View style={tw` flex-row  items-center gap-1`}>
                                    <Text style={tw`text-blackish font-montserrat-700 text-base`}>Hours :</Text>
                                    <Text style={tw`text-xs font-montserrat-300`}> Mon-Fri: 7am-7pm, Sat-Sun: 8am-6pm</Text>
                                </View>
                                {/*  */}
                                <View style={tw` flex-row  items-center gap-1`}>
                                    <Text style={tw`text-blackish font-montserrat-700 text-base`}>Location :</Text>
                                    <Text style={tw`text-xs font-montserrat-300`}>123 Main St, Anytown</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                }
            </View>

        </View>
    );
};

export default ProfileHeader;
