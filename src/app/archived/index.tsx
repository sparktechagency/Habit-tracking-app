import { IconsArchived, IconsFaqDownArrow, IconsFaqTopArrow, IconsSquer, IconsStart, IconsWhiteStar } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { Alert, LayoutAnimation, Pressable, ScrollView, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Archived() {
    const habits = [
        { id: 1, name: 'Practice', count: '1 times' },

    ];

    const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedAccordion(expandedAccordion === id ? null : id);
    };

    const handleArchived = () => {
        Alert.alert(
            "Archive Item",
            "Are you sure you want to archive this item?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Archive",
                    style: "destructive",
                    onPress: () => {
                        console.log("Item archived");

                    }
                }
            ]
        );
    };


    return (
        <View style={tw`flex-1 bg-primaryBg`}>
            <View style={tw` border-b py-5 border-gray/50 `}>
                <View style={tw`px-[4%] flex-row items-center gap-2 `}>
                    <SvgXml xml={IconsArchived} />
                    <Text style={tw`  text-sm font-montserrat-600`}>Archived</Text>
                </View>
            </View>

            <ScrollView>
                <View style={tw`p-4`}>
                    {habits.map((item) => (
                        <View key={item.id} style={tw`mb-6`}>
                            <Pressable
                                onPress={() => toggleAccordion(item.id)}
                                style={tw`border-l-4 border-gray flex-row justify-between items-center bg-white shadow-md p-4 rounded-lg`}
                            >
                                <View style={tw`flex-row gap-2 items-center`}>
                                    <View style={tw`bg-gray/50 p-1 rounded`}>
                                        <SvgXml xml={IconsSquer} />
                                    </View>
                                    <View style={tw`bg-yellowGreen p-2 rounded-full`}>
                                        <SvgXml xml={IconsWhiteStar} />
                                    </View>
                                    <Text style={tw`text-lg font-bold`}>{item.name}</Text>
                                </View>
                                <SvgXml xml={expandedAccordion === item.id ? IconsFaqTopArrow : IconsFaqDownArrow} />
                            </Pressable>

                            {expandedAccordion === item.id && (
                                <View style={tw`bg-white border-gray border-[1px] rounded-lg  mt-5 overflow-hidden`}>
                                    {[1, 2, 3].map((subItem) => (
                                        <View key={subItem} style={tw`p-4 border-gray/60 border-b-[1px]`}>
                                            <View style={tw`flex-row justify-between items-center`}>
                                                <View style={tw`flex-row gap-3 items-center mb-2`}>
                                                    <View style={tw`bg-gray/50 p-1 rounded`}>
                                                        <SvgXml xml={IconsSquer} />
                                                    </View>
                                                    <View style={tw`flex-col gap-1`}>
                                                        <Text style={tw`text-base`}>Complete todo list</Text>
                                                        <View style={tw`flex-row gap-1`}>
                                                            <SvgXml xml={IconsStart} />
                                                            <Text style={tw`text-gray-500`}>1 item</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={tw`justify-end items-end  `}>
                                                    <Pressable onPress={handleArchived}>
                                                        <Text style={tw`text-white text-sm bg-blackish p-1 rounded font-montserrat-600`}>Unarchive</Text>
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </View>
                                    ))}

                                </View>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}