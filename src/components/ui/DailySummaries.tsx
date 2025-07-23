import { IconsGreenTick, IconsRounded } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const DailySummaries = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 10,
                paddingTop: 15,
                paddingBottom: 20,
            }}
        >
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <View
                    key={item} // ✅ Always add key in map loop
                    style={tw`bg-white rounded-xl px-3 py-3.5 mb-4 shadow-md shadow-blackish`}
                >
                    {/* Header */}
                    <View style={tw`flex-row justify-between items-center mb-2`}>
                        <View style={tw`flex-1`}>
                            <Text style={tw`text-blackish font-montserrat-600 text-base`}>
                                Thu, Mar 15
                            </Text>
                            <Text style={tw`text-gray text-xs font-montserrat-400`}>
                                Day 6
                            </Text>
                        </View>
                        <Text style={tw`text-gray text-sm font-montserrat-400`}>
                            Group Completion{' '}
                            <Text style={tw`font-montserrat-700 text-blackish`}>38%</Text>
                        </Text>
                    </View>
                    <View style={tw`flex-col gap-1 mb-2`}>

                        <View style={tw`flex-col gap-1 `}>
                            <Text style={tw`text-xs font-montserrat-400`}>(Sunshine Cafe)</Text>
                            <Text style={tw`text-xs font-montserrat-400`}>Enjoy a free coffee when you redeem your reward points.</Text>
                        </View>
                    </View>

                    {/* User: Lara Croft */}
                    <View style={tw` border-gray py-2`}>
                        <View style={tw`flex-row justify-between items-center mb-1`}>
                            <Text style={tw`text-blackish font-montserrat-500`}>
                                Lara Croft (You)
                            </Text>
                            <View style={tw`flex-row items-center`}>
                                {renderCheck(true)}
                                {renderCheck(true)}
                                {renderCheck(false)}
                                {renderCheck(false)}
                                <Text style={tw`ml-2 text-blackish font-montserrat-700`}>
                                    50%
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* User: AB James */}
                    <View style={tw`border-t border-gray py-2`}>
                        <View style={tw`flex-row justify-between items-center`}>
                            <Text style={tw`text-blackish font-montserrat-600`}>
                                AB James
                            </Text>
                            <View style={tw`flex-row items-center`}>
                                {renderCheck(false)}
                                {renderCheck(false)}
                                {renderCheck(true)}
                                {renderCheck(false)}
                                <Text style={tw`ml-2 text-blackish font-montserrat-700`}>
                                    25%
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* Save button */}
                    <TouchableOpacity
                        style={tw`bg-blackish px-3 py-1.5 rounded self-end mt-1`}
                        onPress={() => router.push('/group-completion')}
                    >
                        <Text style={tw`text-white  font-montserrat-400 text-sm`}>See more</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

const renderCheck = (completed: boolean) => (
    <View style={tw`mx-0.5`}>
        {completed ? (
            <SvgXml xml={IconsGreenTick} />
        ) : (
            <SvgXml xml={IconsRounded} />
        )}
    </View>
);

export default DailySummaries;
