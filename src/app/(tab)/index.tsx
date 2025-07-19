import SearchHabite from '@/src/components/ui/SearchHabite';
import { TABS } from '@/src/constants/tabs';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';




export default function HabitsScreen() {
    const [activeTab, setActiveTab] = useState<string>('all');


    return (
        <View style={tw`flex-1 bg-primaryBg`}>



            {/* --------------- top heading --------------- */}
            <SearchHabite />

            {/* -------------- tabs -------------------------- */}
            <View style={tw`flex-row mb-2`}>
                {TABS.map((tab) => {
                    const isActive = activeTab === tab?.key;
                    return (
                        <TouchableOpacity
                            key={tab.key}
                            onPress={() => setActiveTab(tab?.key)}
                            style={tw`flex-1 py-3 items-center border-b-2 ${isActive ? 'border-[#d6df22]' : 'border-transparent'
                                }`}
                        >
                            <Text
                                style={tw`text-sm font-montserrat-400 ${isActive
                                    ? 'text-[#d6df22] font-montserrat-600'
                                    : 'text-blackText'
                                    }`}
                            >
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* ✅ Placeholder for content */}
            <View style={tw` `}>

            </View>
        </View>
    );
}
