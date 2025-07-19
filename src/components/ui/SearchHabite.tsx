import { IconsAdd } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const SearchHabite = () => {
    return (
        <View style={tw` flex-col gap-3 p-[4%]`}>
            {/* Header Section */}
            <View style={tw``}>
                <View style={tw`flex-row items-center justify-between `}>
                    <Text style={tw`text-blackish font-montserrat-600 text-xl`}>
                        My Habits
                    </Text>
                    <TouchableOpacity>
                        <SvgXml xml={IconsAdd} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Search Bar */}
            <View style={tw`p`}>
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

            {/* Content Section */}
            <View style={tw`px-4`}>
                {/* Your habit list/content will go here */}
            </View>
        </View>
    );
};

export default SearchHabite;