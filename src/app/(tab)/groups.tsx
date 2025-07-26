import ActiveChallenges from '@/src/components/ui/ActiveChallenges';
import CompletedChallenges from '@/src/components/ui/CompletedChallenges';
import SearchHabite from '@/src/components/ui/SearchHabite';
import { GROUPTABS } from '@/src/constants/tabs';
import tw from '@/src/lib/tailwind';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


export default function GroupsScreen() {
    const [activeTab, setActiveTab] = useState<string>('all');

    return (
        <View style={tw`flex-1 bg-primaryBg`}>
            {/* --------------- top heading --------------- */}
            <SearchHabite title='Group Challenges' addHeading='Create New Group' />

            {/* -------------- tabs -------------------------- */}
            <View style={tw`flex-row mb-2`}>
                {GROUPTABS.map((tab) => {
                    const isActive = activeTab === tab?.key;
                    return (
                        <TouchableOpacity
                            key={tab.key}
                            onPress={() => setActiveTab(tab?.key)}
                            style={[
                                tw`flex-1 py-3 items-center border-b-2`,
                                isActive ? tw`border-[#d6df22]` : tw`border-transparent`,
                            ]}
                        >
                            <Text
                                style={[
                                    tw`text-sm font-montserrat-400`,
                                    isActive ? tw`text-[#d6df22] font-montserrat-600` : tw`text-blackText`,
                                ]}
                            >
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Content placeholder */}
            <View style={tw` flex-1`}>
                {
                    activeTab === 'all' ? <ActiveChallenges /> : <CompletedChallenges />
                }

            </View>
        </View>
    )
}