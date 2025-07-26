import { IconsAddedSay } from '@/assets/icons'
import NewModal from '@/src/components/ui/NewModal'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import {
    Alert,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function SayOnScreen() {
    const [visible, setVisible] = useState<boolean>(false)
    const [deleted, setDeleted] = useState<boolean>(false)
    const [duration, setDuration] = useState('All')


    // console.log(deleted);

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


    return (
        <View style={tw`flex-1 bg-primaryBg`}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={tw`pt-5 pb-10`}
            >
                <View style={tw`px-[4%] flex-col gap-8`}>
                    {/* Header */}
                    <View style={tw`flex-row items-center justify-between`}>
                        <Text style={tw`text-blackish font-montserrat-600 text-xl`}>
                            Say No Tracker
                        </Text>
                        <TouchableOpacity
                            style={tw`px-2 py-2 bg-neutral-700 rounded flex-row items-center gap-2.5`}
                            onPress={() => setDeleted(!deleted)}
                        >
                            <Text style={tw`text-white text-xs font-montserrat-400`}> {deleted ? 'Done' : 'Edit'} </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Quote */}
                    <View style={tw`bg-primaryBg border-l-4 border-yellowGreen rounded-xl shadow-lg p-[4%] gap-3`}>
                        <Text style={tw`text-base font-montserrat-600 text-blackText`}>
                            “The Difference between successful people and really successful people is that really successful people say no to almost everything.”
                        </Text>
                        <Text style={tw`text-base text-right font-montserrat-600 text-blackText`}>
                            - Warren Buffett
                        </Text>
                    </View>

                    {/* Input Row */}
                    <View style={tw`bg-blackish px-3 py-3 rounded-lg flex-row items-center gap-3`}>
                        <TouchableOpacity
                            onPress={() => setVisible(true)}
                            style={tw`h-8 w-8 items-center justify-center bg-primaryBg rounded-full`}
                        >
                            <SvgXml xml={IconsAddedSay} />
                        </TouchableOpacity>
                        <Text style={tw`text-base font-montserrat-600 text-primaryBg`}>
                            What did you say No to?
                        </Text>
                    </View>

                    {/* Duration Tabs */}
                    <View style={tw`flex-row flex-wrap justify-between gap-2`}>
                        {['All', 'Day', 'Week', 'Month', 'Year'].map((d) => (
                            <Pressable
                                key={d}
                                onPress={() => setDuration(d)}
                                style={tw`px-4 py-2 rounded-lg border ${duration === d ? 'bg-blackish' : 'bg-white'
                                    }`}
                                accessibilityLabel={`Select ${d} duration`}
                            >
                                <Text
                                    style={tw`text-center ${duration === d ? 'text-white' : 'text-blackText'
                                        }`}
                                >
                                    {d}
                                </Text>
                            </Pressable>
                        ))}
                    </View>

                    {/* Entry Section */}
                    <View>
                        <Text style={tw`text-lg font-montserrat-700 text-blackish mb-3`}>
                            All Entries
                        </Text>

                        {[1, 2, 3, 4, 5].map((item) => (
                            <View
                                key={item}
                                style={tw`bg-white border-l-4 border-[#BCBDC0] rounded-lg px-3 py-3 shadow-md mb-4`}
                            >
                                <View style={tw`gap-3`}>
                                    <Text style={tw`text-blackish font-montserrat-700 text-base`}>
                                        06/01/2025
                                    </Text>

                                    <View>
                                        <View style={tw`flex-row items-center gap-1`}>
                                            <Text style={tw`text-blackish font-montserrat-700 text-base`}>
                                                Morning Run:
                                            </Text>
                                            <Text style={tw`text-xs font-montserrat-300`}>
                                                Extra dessert
                                            </Text>
                                        </View>
                                        <View style={tw`flex-row items-center gap-1`}>
                                            <Text style={tw`text-blackish font-montserrat-700 text-base`}>
                                                Reason:
                                            </Text>
                                            <Text style={tw`text-xs font-montserrat-300`}>
                                                Sticking to my health goals
                                            </Text>
                                        </View>
                                    </View>

                                    {
                                        deleted && <View style={tw`flex-row justify-end`}>
                                            <TouchableOpacity
                                                style={tw`px-3 py-2 bg-neutral-700 rounded`}
                                                onPress={handleDeleted}
                                            >
                                                <Text style={tw`text-white text-xs font-montserrat-400`}>
                                                    Delete
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    }


                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Modal */}
            <NewModal visible={visible} onClose={() => setVisible(false)} />
        </View>
    )
}
