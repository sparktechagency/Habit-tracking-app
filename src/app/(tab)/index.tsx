import { IconsArchived, IconsDeleted, IconsFaqDownArrow, IconsFaqTopArrow, IconsSquer, IconsStaerActive, IconsStarBalck, IconsStart, IconsWhiteStar } from '@/assets/icons';
import HabitTracker from '@/src/components/ui/HabitTracker';
import NewAddedModal from '@/src/components/ui/NewAddedModal';
import { habits } from '@/src/constants/tabs';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, LayoutAnimation, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function HabitsScreen() {


    const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);
    const [favourite, setFavourite] = useState<boolean>(false)

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
    const handleArchived = () => {
        Alert.alert(
            "Archive Entry",
            "Are you sure you want to archive this entry?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Archive",
                    onPress: () => {
                        // Archive logic here
                        console.log("Entry archived");
                    },
                    style: "destructive",
                },
            ],
            { cancelable: true }
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
    const handleFavourite = () => {
        Alert.alert(
            "Favourite as Done",
            "Are you sure you want to mark this as done?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        setFavourite(!favourite)
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

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={tw`p-4`}>
                    {habits.map((item) => (
                        <View key={item.id} style={tw`mb-6`}>
                            {/* Accordion Header */}
                            <Pressable
                                onPress={() => toggleAccordion(item.id)}
                                style={tw`border-l-4 border-gray flex-row justify-between items-center bg-white shadow-md p-4 rounded-lg`}
                                accessibilityLabel={`${item.name} habit`}
                                accessibilityRole="button"
                            >
                                <View style={tw`flex-row gap-2 items-center`}>
                                    <View style={tw`bg-gray/50 p-1 rounded`}>
                                        <SvgXml xml={IconsSquer} width={20} height={20} />
                                    </View>
                                    <View style={tw`bg-yellowGreen p-2 rounded-full`}>
                                        <SvgXml xml={IconsWhiteStar} width={16} height={16} />
                                    </View>
                                    <Text style={tw`text-lg font-bold`}>{item.name}</Text>
                                </View>
                                <SvgXml
                                    xml={expandedAccordion === item.id ? IconsFaqTopArrow : IconsFaqDownArrow}
                                    width={16}
                                    height={16}
                                />
                            </Pressable>

                            {/* Accordion Content */}
                            {expandedAccordion === item.id && (
                                <View style={tw`bg-white border border-gray rounded-lg mt-2 overflow-hidden`}>
                                    {[1, 2, 3].map((subItem) => (
                                        <View key={`subitem-${item.id}-${subItem}`} style={tw`p-4 border-b border-gray/60`}>
                                            <View style={tw`flex-row justify-between items-center`}>
                                                <View style={tw`flex-row gap-3 items-center`}>
                                                    {/* <View style={tw`bg-gray/50 p-1 rounded`}>
                                                        <SvgXml xml={IconsSquer} width={20} height={20} />
                                                    </View> */}
                                                    <View style={tw`gap-1.5`}>
                                                        <Text style={tw`text-base`}>Complete todo list</Text>
                                                        <View style={tw`flex-row gap-1 items-center`}>
                                                            <SvgXml xml={IconsStart} width={14} height={14} />
                                                            <Text style={tw`text-gray-500 text-sm`}>1 item</Text>
                                                        </View>
                                                        {
                                                            item.name !== 'Favourite' && deleted && (
                                                                <Pressable
                                                                    onPress={handleArchived}
                                                                    style={tw`border-blackish border-[1px]  items-center px-2 py-1 rounded`}
                                                                    accessibilityLabel="Mark done"
                                                                >
                                                                    <Text style={tw`text-blackText text-sm font-montserrat-600`}>Archived</Text>
                                                                </Pressable>
                                                            )
                                                        }

                                                    </View>
                                                </View>

                                                {item.name !== 'Favourite' ? (
                                                    <View style={tw`flex-row items-center gap-3`}>
                                                        {
                                                            !deleted && <Pressable
                                                                onPress={handleFavourite}
                                                                accessibilityLabel={favourite ? "Remove favorite" : "Add favorite"}
                                                            >
                                                                <SvgXml
                                                                    xml={favourite ? IconsStaerActive : IconsStarBalck}
                                                                    width={20}
                                                                    height={20}
                                                                />
                                                            </Pressable>
                                                        }

                                                        {deleted ? (
                                                            <Pressable onPress={handleDeleted} accessibilityLabel="Delete">
                                                                <SvgXml xml={IconsDeleted} width={20} height={20} />
                                                            </Pressable>
                                                        ) : (
                                                            <Pressable
                                                                onPress={handleDone}
                                                                style={tw`bg-blackish px-3 py-1 rounded`}
                                                                accessibilityLabel="Mark done"
                                                            >
                                                                <Text style={tw`text-white text-sm font-montserrat-600`}>Done</Text>
                                                            </Pressable>
                                                        )}
                                                    </View>
                                                ) :

                                                    deleted && (
                                                        <Pressable onPress={handleDeleted} accessibilityLabel="Delete">
                                                            <SvgXml xml={IconsDeleted} width={20} height={20} />
                                                        </Pressable>
                                                    )

                                                }
                                            </View>
                                        </View>
                                    ))}

                                    {deleted && (
                                        <Pressable
                                            style={tw`flex-row items-center p-4`}
                                            onPress={() => setVisible(!visible)}
                                            accessibilityLabel="Add new habit"
                                        >
                                            <Text style={tw`text-yellow-400 text-lg font-montserrat-700 mr-1`}>+</Text>
                                            <Text style={tw`text-yellow-400 text-base font-montserrat-600`}>
                                                Add New Habit
                                            </Text>
                                        </Pressable>
                                    )}
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                {/* Habit Tracker Section */}
                <View style={tw`p-4`}>
                    <HabitTracker />
                </View>
            </ScrollView>
            <NewAddedModal visible={visible} onClose={() => setVisible(!visible)} />



        </View>
    );
}