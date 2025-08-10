import tw from "@/src/lib/tailwind";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const notifications = [
    {
        id: "1",
        appName: "DooGoo",
        time: "now",
        message: "Andrew is celebrating your success 🎉🥳",
        icon: "https://i.imgur.com/0X8VR2B.png",
    },
    {
        id: "2",
        appName: "DooGoo",
        time: "now",
        message: "Andrew is celebrating your success 🎉🥳",
        icon: "https://i.imgur.com/0X8VR2B.png",
    },
    {
        id: "3",
        appName: "DooGoo",
        time: "now",
        message: "Andrew is celebrating your success 🎉🥳",
        icon: "https://i.imgur.com/0X8VR2B.png",
    },
];

const NotificationCard = ({ item }) => (
    <View
        style={tw`bg-white border-l-4 border-[#BCBDC0] rounded-lg p-2 mx-1 shadow-md mb-4`}
    >

        <View style={tw`flex-1`}>
            <View style={tw`flex-row justify-between mb-1`}>
                <View style={tw`flex-row  gap-1 mb-1 items-center`}>
                    <Image style={tw`  h-8 w-8 rounded  `} source={require('@/assets/images/splash-icon.png')} />
                    <Text style={tw`font-montserrat-600 text-blackish text-base`}>
                        {item.appName}
                    </Text>
                </View>
                <Text style={tw` text-blackish text-xs`}>{item.time}</Text>
            </View>
            <Text style={tw`text-blackish text-sm`}>{item.message}</Text>
        </View>
    </View>
);

const NotificationsScreen = () => {
    return (
        <View style={tw`flex-1  bg-primaryBg p-[3%] `}>
            <Text style={tw`text-xl  font-montserrat-700 mb-4`}>Notification</Text>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <NotificationCard item={item} />}
            />
        </View>
    );
};

export default NotificationsScreen;
