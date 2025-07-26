import { IconsArchived, IconsDeleted, IconsFaqDownArrow, IconsFaqTopArrow, IconsSquer, IconsStart, IconsWhiteStar } from '@/assets/icons';
import NewAddedModal from '@/src/components/ui/NewAddedModal';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, LayoutAnimation, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function HabitsScreen() {
    const habits = [
        { id: 1, name: 'Practice', count: '1 times' },
        { id: 2, name: 'Relationships', count: '1 times' },
        { id: 3, name: 'Meditation', count: '2 times' },
        { id: 4, name: 'Learning', count: '3 times' }
    ];

    const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedAccordion(expandedAccordion === id ? null : id);
    };

    const [deleted, setDeleted] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)

    const handleDeleted = () => {
        Alert.alert(
            "Delete Entry",
            "Are you sure you want to delete this entry?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => {
                        // TODO: Perform delete action here
                        console.log("Entry deleted");
                    },
                    style: "destructive"
                }
            ]
        );
    };


    const handleDone = () => {
        Alert.alert(
            "Mark as Done",
            "Are you sure you want to mark this as done?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        console.log("Marked as done!")

                    }
                }
            ]
        )
    }


    return (
        <View style={tw`flex-1 bg-primaryBg`}>
            {/* <SearchHabite title="My Habits" addHeading="Add Habit" /> */}

            <View style={tw` p-[4%] flex-col gap-4`}>
                <View style={tw` `}>
                    <View style={tw`flex-row items-center justify-between `}>
                        <Text style={tw`text-blackish font-montserrat-600 text-xl`}>
                            My Habits
                        </Text>

                        <TouchableOpacity
                            style={tw`px-2 py-2 bg-neutral-700 rounded flex-row items-center gap-2.5`}
                            onPress={() => setDeleted(!deleted)}
                        >
                            <Text style={tw`text-white text-xs font-montserrat-400`}> {deleted ? 'Done' : 'Edit'} </Text>
                        </TouchableOpacity>
                    </View>
                </View>



                {/* Search Bar */}
                <View style={tw``}>
                    <TextInput
                        style={tw`
                        py-3 px-4 font-montserrat-600 border-[1px] border-[rgba(165,165,165,0.5)]
                        rounded-full text-blackish
                    `}
                        placeholder="Search"
                        placeholderTextColor="#3e3e3f80"
                        returnKeyType="search"
                        clearButtonMode="while-editing"
                    />
                </View>


                <TouchableOpacity onPress={() => router.push('/archived')} style={tw`flex-row items-center gap-2 `}>
                    <SvgXml xml={IconsArchived} />
                    <Text style={tw`  text-sm font-montserrat-600`}>Archived</Text>
                </TouchableOpacity>

            </View>

            <View style={tw` border-b border-gray/50`}>
                <Text style={tw` px-[4%]  text-sm font-montserrat-600 flex-col gap-4 mb-3`}>All Habits</Text>
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
                                                {
                                                    deleted ? <View style={tw`flex-col flex-1 items-end`}>
                                                        <Pressable onPress={handleDeleted}>
                                                            <SvgXml xml={IconsDeleted} />
                                                        </Pressable>
                                                    </View> :
                                                        <View style={tw`justify-end items-end  `}>
                                                            <Pressable onPress={handleDone}>
                                                                <Text style={tw`text-white text-sm bg-blackish p-1 rounded font-montserrat-600`}>Done</Text>
                                                            </Pressable>
                                                        </View>

                                                }
                                            </View>
                                        </View>
                                    ))}
                                    {deleted && <Pressable
                                        style={tw`flex-row items-center p-4`}
                                        onPress={() => setVisible(!visible)}
                                    >
                                        <Text style={tw`text-[#ffb74c] text-lg font-montserrat-700 mr-1`}>+</Text>
                                        <Text style={tw`text-[#ffb74c] text-base font-montserrat-600`}>
                                            Add New Habit
                                        </Text>
                                    </Pressable>}
                                </View>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
            <NewAddedModal visible={visible} onClose={() => setVisible(!visible)} />
        </View>
    );
}